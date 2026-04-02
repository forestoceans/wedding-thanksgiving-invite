# Plan: Wedding Banquet Invitation Page (婚礼答谢宴邀请页)

## Context

林洋洋 & 王文靖 已举办婚礼，现回家宴请宾客（答谢宴）。需要一个移动端优先的精美邀请网页，通过微信分享给宾客，支持 RSVP 回执和照片轮播。当前项目已有基础 Next.js 16 + Tailwind CSS v4 框架和简单的邀请卡页面，需要全面升级。

**Event Details (confirmed)**:
- 2026年5月2日 11:38 午宴
- 金都绿洲生态园 · 水晶宴会厅（2号大厅）
- 农历丙午年三月十六日 · 星期六

---

## Architecture Decisions

### 1. 静态导出 + CloudBase JS SDK
- 保持 `output: "export"` 静态导出能力，部署到 CloudBase 静态托管
- RSVP 表单通过 CloudBase JS SDK 直接从客户端写入 NoSQL 数据库（无需 API routes）
- 这样避免了服务端函数的额外成本和复杂度

### 2. 客户端组件隔离
- 页面主体为 Server Component（静态渲染）
- 仅交互部分（轮播、表单、微信SDK、动画）用 `"use client"` 组件
- 配置数据集中在 `src/config/wedding.ts`

### 3. 依赖选择
- **Swiper** — 图片轮播（成熟、移动端触摸支持好、体积合理）
- **@cloudbase/js-sdk** — CloudBase 数据库读写
- **framer-motion** — 滚动入场动画（轻量、声明式）
- 不引入额外 UI 库，纯 Tailwind 手写样式保证"人类设计感"

---

## File Structure (new/modified)

```
src/
├── config/
│   └── wedding.ts              # [NEW] 所有可配置项（姓名、日期、图片URL、微信分享等）
├── app/
│   ├── layout.tsx              # [MODIFY] 更新 metadata、字体、全局样式
│   ├── page.tsx                # [MODIFY] 重写为完整邀请页（组合各 section 组件）
│   └── globals.css             # [MODIFY] 添加自定义 CSS 变量（深红/暗金色系）、字体
├── components/
│   ├── HeroSection.tsx         # [NEW] 封面：囍字、新人姓名、答谢宴标题
│   ├── EventDetails.tsx        # [NEW] 日期时间、农历
│   ├── VenueSection.tsx        # [NEW] 地点信息 + 腾讯地图链接
│   ├── PhotoCarousel.tsx       # [NEW] "use client" — Swiper 图片轮播
│   ├── RsvpForm.tsx            # [NEW] "use client" — 出席回执表单 + CloudBase 提交
│   ├── Footer.tsx              # [NEW] 祝福语、落款
│   ├── WechatShare.tsx         # [NEW] "use client" — 微信 JS-SDK 分享配置
│   ├── ScrollReveal.tsx        # [NEW] "use client" — framer-motion 滚动动画包装
│   └── Divider.tsx             # [NEW] 复用的装饰分割线
├── lib/
│   └── cloudbase.ts            # [NEW] CloudBase SDK 初始化
```

---

## Implementation Steps

### Step 1: 配置文件 + 依赖安装

**安装依赖**:
```
pnpm add swiper framer-motion @cloudbase/js-sdk
```

**创建 `src/config/wedding.ts`**:
- 新人姓名、父母姓名
- 日期时间（公历/农历）
- 地点信息（名称、地址、经纬度）
- 照片轮播 URL 数组（先用占位图）
- 微信分享配置（title、desc、imgUrl）
- CloudBase envId

### Step 2: 设计系统 — 色彩与字体

**`globals.css`** 添加 CSS 变量:
- `--color-red-primary`: #8B1A1A (深红)
- `--color-red-dark`: #5C0A0A (暗红)
- `--color-gold`: #C5A55A (暗金)
- `--color-gold-light`: #D4B96E (亮金)
- `--color-cream`: #FDF6F0 (米色背景)
- 字体：思源宋体 / Noto Serif SC（Google Fonts），衬线体营造传统感

**`layout.tsx`** 更新:
- 引入 Google Fonts（Noto Serif SC）
- 更新 metadata（title、description、og tags）

### Step 3: 页面各 Section 组件

按从上到下顺序：

1. **HeroSection** — 全屏封面
   - 深红背景 + 金色装饰边框
   - 大号囍字（金色）
   - "敬请光临 · 结婚答谢宴"
   - 新人姓名

2. **EventDetails** — 日期时间
   - 公历大字 + 农历小字
   - 金色装饰线

3. **VenueSection** — 地点
   - 卡片样式展示地点信息
   - "导航到这里" 按钮 → 打开腾讯地图（`https://apis.map.qq.com/uri/v1/marker?marker=coord:lat,lng;title:金都绿洲生态园&referer=wedding`）

4. **PhotoCarousel** — 图片轮播 (use client)
   - Swiper：自动播放、循环、触摸滑动
   - 底部分页指示器
   - 图片 URL 从 config 读取

5. **RsvpForm** — 出席回执 (use client)
   - 字段：姓名、出席人数（数字选择器）、祝福留言（可选）
   - 提交到 CloudBase NoSQL 集合 `rsvp`
   - 提交成功后显示"已收到您的回复"确认

6. **Footer** — 落款
   - 感谢语
   - 父母姓名（敬邀）

7. **WechatShare** — 微信分享 (use client)
   - 检测微信浏览器环境
   - 调用 `wx.config` + `wx.ready` 配置自定义分享卡片
   - 非微信环境静默跳过
   - 微信 JS-SDK 通过 `<script>` 标签加载

### Step 4: CloudBase 集成

**`lib/cloudbase.ts`**:
- 初始化 `@cloudbase/js-sdk`，envId 从 config 读取
- 匿名登录
- 导出 db 实例

**RsvpForm 提交逻辑**:
```
1. 匿名登录 CloudBase
2. db.collection('rsvp').add({ name, count, message, createdAt })
3. 显示成功状态
```

> 注意：需要用户在 CloudBase 控制台创建 `rsvp` 集合并设置安全规则（允许匿名写入）

### Step 5: 动画

**ScrollReveal 组件**（framer-motion）:
- 包装各 section，滚动进入视口时 fade-in + slight slide-up
- `whileInView` + `viewport={{ once: true }}`
- 动画时长 0.6s，ease-out，简洁高级

### Step 6: 微信 meta 标签

在 `layout.tsx` 中添加:
- `og:title`, `og:description`, `og:image` — 微信分享卡片的 fallback
- `viewport` meta 确保移动端适配

---

## 配色方案详细

| 用途 | 色值 | 说明 |
|------|------|------|
| 主背景 | #5C0A0A → #8B1A1A | 深红渐变 |
| 卡片/内容区 | #FDF6F0 | 米色 |
| 主装饰色 | #C5A55A | 暗金 |
| 文字标题 | #3D1C1C | 深棕红 |
| 正文文字 | #5A3A3A | 暗棕 |
| 次要文字 | #8A6060 | 灰棕 |
| 金色边框/线条 | #D4B96E | 亮金 |

---

## Verification

1. `pnpm dev` → 本地预览，手机模式检查各 section 布局和动画
2. 检查轮播触摸滑动、自动播放
3. 填写 RSVP 表单 → 检查 CloudBase 数据库是否收到数据
4. 在微信开发者工具中打开页面，验证分享卡片配置
5. `pnpm build:static` → 确认静态导出无报错
6. `pnpm deploy:tcb` → 部署到 CloudBase 静态托管验证线上效果
