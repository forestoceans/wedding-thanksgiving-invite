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
    name: '招远市生态园大酒店',
    hall: '水晶宴会厅（2号大厅）',
    address: '山东省烟台市招远市生态园大酒店',
    // 腾讯地图坐标（招远市生态园大酒店）
    lat: 37.3556,
    lng: 120.4028,
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
    shareDesc: '诚邀您于2026年5月2日莅临招远市生态园大酒店，共赴答谢宴',
    shareImgUrl: 'https://linyangyang.site/icons/weixin.jpg', // 分享卡片图标 URL（300x300 jpg/png）
    // JS-SDK 配置（需要后端签名，暂留空）
    appId: '',
  },


} as const;

// ============================================================
// 多版本请柬配置
// ============================================================

export interface VariantConfig {
  parents: string;
  date: string;
  dateSolar: string;
  dateLunar: string;
  time: string;
  timeShort: string;
  venue: { name: string; hall: string; address: string; lat: number; lng: number };
  wechat: { shareTitle: string; shareDesc: string; shareImgUrl: string; appId: string };
}

const _img = 'https://linyangyang.site/icons/weixin.jpg';

export const variants = {
  'groom-family': {
    parents:   '林洪权 · 胡洪兰',
    date:      '二零二六年五月二日',
    dateSolar: '2026年5月2日',
    dateLunar: '农历丙午年三月十六日 · 星期六',
    time:      '中午十一时三十八分',
    timeShort: '11:38 午宴',
    venue: { name: '招远市生态园大酒店', hall: '水晶宴会厅（2号大厅）',
             address: '山东省烟台市招远市生态园大酒店', lat: 37.3556, lng: 120.4028 },
    wechat: { shareTitle: '林洋洋 & 王文靖 · 结婚答谢宴邀请',
              shareDesc:  '诚邀您于2026年5月2日莅临招远市生态园大酒店，共赴答谢宴',
              shareImgUrl: _img, appId: '' },
  },
  'bride-family': {
    parents:   '王少伟 · 孙凤丽',
    date:      '二零二六年五月四日',
    dateSolar: '2026年5月4日',
    dateLunar: '农历丙午年三月十八日 · 星期一',
    time:      '中午十一时三十八分',
    timeShort: '11:38 午宴',
    venue: { name: '潍坊金庆国际酒店', hall: '5楼西子厅',
             address: '山东省潍坊市潍坊金庆国际酒店', lat: 36.715, lng: 119.105 },
    wechat: { shareTitle: '王文靖 & 林洋洋 · 结婚答谢宴邀请',
              shareDesc:  '诚邀您于2026年5月4日莅临潍坊金庆国际酒店，共赴答谢宴',
              shareImgUrl: _img, appId: '' },
  },
  'groom': {
    parents:   '林洋洋 · 王文靖',
    date:      '二零二六年五月二日',
    dateSolar: '2026年5月2日',
    dateLunar: '农历丙午年三月十六日 · 星期六',
    time:      '中午十一时三十八分',
    timeShort: '11:38 午宴',
    venue: { name: '招远市生态园大酒店', hall: '水晶宴会厅（2号大厅）',
             address: '山东省烟台市招远市生态园大酒店', lat: 37.3556, lng: 120.4028 },
    wechat: { shareTitle: '我们结婚啦！诚邀您莅临答谢宴',
              shareDesc:  '林洋洋 & 王文靖 诚挚邀请您参加我们的婚礼答谢宴',
              shareImgUrl: _img, appId: '' },
  },
  'bride': {
    parents:   '林洋洋 · 王文靖',
    date:      '二零二六年五月四日',
    dateSolar: '2026年5月4日',
    dateLunar: '农历丙午年三月十八日 · 星期一',
    time:      '中午十一时三十八分',
    timeShort: '11:38 午宴',
    venue: { name: '潍坊金庆国际酒店', hall: '5楼西子厅',
             address: '山东省潍坊市潍坊金庆国际酒店', lat: 36.715, lng: 119.105 },
    wechat: { shareTitle: '我们结婚啦！诚邀您莅临答谢宴',
              shareDesc:  '林洋洋 & 王文靖 诚挚邀请您参加我们的婚礼答谢宴',
              shareImgUrl: _img, appId: '' },
  },
} satisfies Record<string, VariantConfig>;

export type VariantKey = keyof typeof variants;
