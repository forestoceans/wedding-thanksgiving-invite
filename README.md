# 婚礼答谢宴邀请函

林洋洋 & 王文靖 · 2026年5月2日

基于 Next.js 16 构建的移动端婚礼邀请网页，支持照片轮播、地图导航、倒计时等功能。

## 技术栈

- **框架**：Next.js 16 (App Router)
- **UI**：Tailwind CSS v4
- **动画**：Framer Motion
- **轮播**：Swiper v12
- **语言**：TypeScript

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 自定义内容

所有页面内容集中在一个文件管理：

```
src/config/wedding.ts
```

修改该文件即可更新新人姓名、日期、地点、照片等所有信息，无需改动组件代码。

### 替换照片

将婚纱照放入 `public/imgs/` 目录，命名为 `1.jpg`、`2.jpg` ... 并在 `wedding.ts` 的 `photos` 数组中对应更新路径。

## 项目结构

```
src/
├── app/          # Next.js App Router 页面
├── components/   # 页面组件（轮播、地图、倒计时等）
├── config/       # wedding.ts 全局配置
│   └── imgs/     # 照片资源
├── lib/          # 工具函数
└── types/        # TypeScript 类型定义
```

## 部署

```bash
pnpm build
pnpm start
```

部署到 Vercel：https://vercel.com/forestoceans-projects/wedding-thanksgiving-invite/ELDhHHmhXCeBEkqbKBeBJUwsTUPQ

线上地址：https://linyangyang.site

## 微信分享卡片

分享到微信时会显示图文小卡片（Open Graph），配置项在 `src/config/wedding.ts` 的 `wechat` 对象中：

| 字段 | 说明 |
|------|------|
| `shareTitle` | 卡片标题 |
| `shareDesc` | 卡片摘要 |
| `shareImgUrl` | 封面图绝对 URL（建议正方形 ≥300×300px） |

当前封面图：`https://linyangyang.site/icons/weixin.jpg`（`public/icons/weixin.jpg`）
