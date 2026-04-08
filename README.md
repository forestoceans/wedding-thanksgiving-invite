# 婚礼答谢宴邀请函

林洋洋 & 王文靖 · 2026年5月

## 请柬链接

| 版本 | 场次 | 链接 |
|------|------|------|
| 男方父母版 | 招远 · 5月2日 | https://linyangyang.site/invite/groom-family |
| 女方父母版 | 潍坊 · 5月4日 | https://linyangyang.site/invite/bride-family |
| 新人版（招远） | 招远 · 5月2日 | https://linyangyang.site/invite/groom |
| 新人版（潍坊） | 潍坊 · 5月4日 | https://linyangyang.site/invite/bride |

## 宴会信息

**招远** · 2026年5月2日 11:38 · 招远市生态园大酒店 水晶宴会厅（2号大厅）

**潍坊** · 2026年5月4日 11:38 · 潍坊金庆国际酒店 5楼西子厅

## 开发

```bash
pnpm install && pnpm dev
```

所有内容配置集中在 `src/config/wedding.ts`，修改 `variants` 对应 key 即可更新各版本文案，无需改动组件。

照片放入 `public/imgs/`，命名 `1.jpg`、`2.jpg` ...，并同步更新 `wedding.ts` 的 `photos` 数组。

## 环境变量

`QQ_SMTP_PASS` — QQ 邮箱 SMTP 授权码（出席回执邮件）

## 部署

线上：https://linyangyang.site

Vercel：https://vercel.com/forestoceans-projects/wedding-thanksgiving-invite
