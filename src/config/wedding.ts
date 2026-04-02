// ============================================================
// 婚礼答谢宴 — 全局配置
// 修改此文件即可自定义所有页面内容
// ============================================================

export const weddingConfig = {
  // ─── 新人信息 ───
  groom: '林洋洋',
  bride: '王文靖',
  // 父母（落款用）
  parents: '林洪权 · 胡洪兰',

  // ─── 日期时间 ───
  date: '二零二六年五月二日',
  dateSolar: '2026年5月2日',
  dateLunar: '农历丙午年三月十六日 · 星期六',
  time: '中午十一时三十八分',
  timeShort: '11:38 午宴',

  // ─── 地点 ───
  venue: {
    name: '金都绿洲生态园',
    hall: '水晶宴会厅（2号大厅）',
    address: '山东省潍坊市金都绿洲生态园',
    // 腾讯地图坐标（金都绿洲生态园大致位置，请根据实际位置修正）
    lat: 36.7066,
    lng: 119.1619,
  },

  // ─── 照片轮播 ───
  photos: [
    '/imgs/1.jpg',
    '/imgs/2.jpg',
    '/imgs/3.jpg',
    '/imgs/4.jpg',
    '/imgs/5.jpg',
    '/imgs/6.jpg',
    '/imgs/7.jpg',
  ],

  // ─── 微信分享 ───
  wechat: {
    shareTitle: '林洋洋 & 王文靖 · 结婚答谢宴邀请',
    shareDesc: '诚邀您于2026年5月2日莅临金都绿洲生态园，共赴答谢宴',
    shareImgUrl: '', // 分享卡片图标 URL（300x300 jpg/png）
    // JS-SDK 配置（需要后端签名，暂留空）
    appId: '',
  },

  // ─── CloudBase ───
  cloudbase: {
    envId: '', // 腾讯云 CloudBase 环境 ID，例如 'wedding-xxx'
  },
} as const;
