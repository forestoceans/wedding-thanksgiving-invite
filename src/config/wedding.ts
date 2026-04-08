// ============================================================
// 婚礼答谢宴 — 全局配置
// 修改此文件即可自定义所有页面内容
// ============================================================

export const weddingConfig = {
  // ─── 新人信息 ───
  groom: '林洋洋',
  bride: '王文靖',
  // 落款（默认男方家长）
  host: '林洪权 · 胡洪兰',

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
    address: '招远市初山路23号金都绿洲生态园',
    lat: 37.3556,
    lng: 120.4028,
  },

  // ─── 照片轮播 ───
  photos: [
    '/imgs/1.jpg',
    '/imgs/2.jpg',
    '/imgs/3.jpg',
    '/imgs/6.jpg',
  ],

  // ─── 微信分享 ───
  wechat: {
    shareTitle: '林洋洋 & 王文靖 · 结婚答谢宴邀请',
    shareDesc: '诚邀您于2026年5月2日莅临招远市生态园大酒店，共赴答谢宴',
    shareImgUrl: 'https://linyangyang.site/icons/shuangxi.png',
  },


} as const;

// ============================================================
// 多版本请柬配置
// ============================================================

export interface VariantConfig {
  host: string;
  date: string;
  dateSolar: string;
  dateLunar: string;
  time: string;
  timeShort: string;
  venue: { name: string; hall: string; address: string; lat: number; lng: number };
  wechat: { shareTitle: string; shareDesc: string; shareImgUrl: string };
  brideFirst?: boolean;
}

const _img = 'https://linyangyang.site/icons/shuangxi.png';

// ─── 招远（男方）基础配置 ───
const _groomBase = {
  date:      '二零二六年五月二日',
  dateSolar: '2026年5月2日',
  dateLunar: '农历丙午年三月十六日 · 星期六',
  time:      '中午十一时三十八分',
  timeShort: '11:38 午宴',
  venue: { name: '招远市生态园大酒店', hall: '水晶宴会厅（2号大厅）',
           address: '初山路23号金都绿洲生态园', lat: 37.3556, lng: 120.4028 },
};

// ─── 潍坊（女方）基础配置 ───
const _brideBase = {
  date:      '二零二六年五月四日',
  dateSolar: '2026年5月4日',
  dateLunar: '农历丙午年三月十八日 · 星期一',
  time:      '中午十一时三十八分',
  timeShort: '11:38 午宴',
  venue: { name: '潍坊金庆国际酒店', hall: '5楼西子厅',
           address: '奎文区北宫东街199号', lat: 36.715, lng: 119.105 },
  brideFirst: true as const,
};

export const variants = {
  // 男方家宴：落款为男方父母
  'groom-family': {
    ..._groomBase,
    host:  '林洪权 · 胡洪兰',
    wechat: { shareTitle: '林洋洋 & 王文靖 · 结婚答谢宴邀请',
              shareDesc:  '诚邀您于2026年5月2日莅临招远市生态园大酒店，共赴答谢宴',
              shareImgUrl: _img },
  },
  // 女方家宴：落款为女方父母
  'bride-family': {
    ..._brideBase,
    host:  '王少伟 · 孙凤丽',
    wechat: { shareTitle: '王文靖 & 林洋洋 · 结婚答谢宴邀请',
              shareDesc:  '诚邀您于2026年5月4日莅临潍坊金庆国际酒店，共赴答谢宴',
              shareImgUrl: _img },
  },
  // 新郎个人版：落款为新人自己
  'groom': {
    ..._groomBase,
    host:  '林洋洋 · 王文靖',
    wechat: { shareTitle: '我们结婚啦！诚邀您莅临答谢宴',
              shareDesc:  '林洋洋 & 王文靖 诚挚邀请您参加我们的婚礼答谢宴',
              shareImgUrl: _img },
  },
  // 新娘个人版：落款为新人自己（王文靖在前）
  'bride': {
    ..._brideBase,
    host:  '王文靖 · 林洋洋',
    wechat: { shareTitle: '王文靖 & 林洋洋 · 结婚答谢宴邀请',
              shareDesc:  '王文靖 & 林洋洋 诚挚邀请您参加我们的婚礼答谢宴',
              shareImgUrl: _img },
  },
} satisfies Record<string, VariantConfig>;

export type VariantKey = keyof typeof variants;
