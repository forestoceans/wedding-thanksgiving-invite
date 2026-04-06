# 婚礼答谢宴邀请函

林洋洋 & 王文靖 · 2026年5月

基于 Next.js 16 构建的移动端婚礼电子请柬，支持多版本路由、照片轮播、地图导航、微信分享卡片、出席回执等功能。

## 请柬链接

| 版本 | 场次 | 敬邀方 | 链接 |
|------|------|--------|------|
| 男方父母版 | 招远 · 5月2日 | 林洪权 & 胡洪兰 | https://linyangyang.site/invite/groom-family |
| 女方父母版 | 潍坊 · 5月4日 | 王少伟 & 孙凤丽 | https://linyangyang.site/invite/bride-family |
| 新人版（招远） | 招远 · 5月2日 | 林洋洋 & 王文靖 | https://linyangyang.site/invite/groom |
| 新人版（潍坊） | 潍坊 · 5月4日 | 林洋洋 & 王文靖 | https://linyangyang.site/invite/bride |

## 宴会信息

### 男方宴（招远）

- 日期：2026年5月2日（农历丙午年三月十六 · 星期六）
- 时间：中午 11:38
- 地点：招远市生态园大酒店 · 水晶宴会厅（2号大厅）

### 女方宴（潍坊）

- 日期：2026年5月4日（农历丙午年三月十八 · 星期一）
- 时间：中午 11:38
- 地点：潍坊金庆国际酒店 · 5楼西子厅

## 技术栈

- **框架**：Next.js 16 (App Router)
- **UI**：Tailwind CSS v4
- **动画**：Framer Motion
- **轮播**：Swiper v12
- **邮件**：Nodemailer（QQ SMTP）
- **语言**：TypeScript

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 自定义内容

所有文案和宴会数据集中在一个文件管理：

```
src/config/wedding.ts
```

- `weddingConfig`：根路径 `/` 使用的默认配置（男方父母版数据）
- `variants`：4 个版本的差异数据（落款、时间、地点、微信分享文案）

修改 `variants` 对应的 key 即可更新各版本内容，无需改动组件代码。

### 替换照片

将婚纱照放入 `public/imgs/` 目录，命名为 `1.jpg`、`2.jpg` ...，并在 `wedding.ts` 的 `photos` 数组中更新路径。

## 项目结构

```
src/
├── app/
│   ├── page.tsx              # 根路径（男方父母版）
│   ├── layout.tsx            # 全局 layout + Open Graph 默认元数据
│   ├── invite/[variant]/
│   │   └── page.tsx          # 多版本路由（groom-family / bride-family / groom / bride）
│   └── api/rsvp/route.ts     # 出席回执接口（发邮件）
├── components/               # 页面组件
├── config/
│   └── wedding.ts            # 全局配置 + 多版本数据
public/
├── imgs/                     # 照片
```

## 环境变量

| 变量 | 说明 |
|------|------|
| `QQ_SMTP_PASS` | QQ 邮箱 SMTP 授权码，用于发送出席回执邮件 |

## 部署

```bash
pnpm build
pnpm start
```

线上地址：https://linyangyang.site

Vercel 项目：https://vercel.com/forestoceans-projects/wedding-thanksgiving-invite

## 微信分享卡片

各版本在微信中分享时显示各自的图文小卡片（Open Graph），配置在 `wedding.ts` 的 `variants[key].wechat` 中：

| 字段 | 说明 |
|------|------|
| `shareTitle` | 卡片标题 |
| `shareDesc` | 卡片摘要 |
| `shareImgUrl` | 封面图绝对 URL（建议正方形 ≥300×300px） |
