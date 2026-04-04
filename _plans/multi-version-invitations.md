# Plan: Multi-Version Invitation Routing (`/invite/[variant]`)

## Context

The wedding invitation site currently has a single page at `/` using a single hardcoded `weddingConfig`. Three additional versions are needed — bride's parents, and the couple's own invitations for each side's event — because the groom and bride sides have different venues, dates, and signing parties. All 4 versions share the same page layout; only text and venue data differ. Routes live under a common `/invite/` prefix to keep the root domain free for other uses.

---

## Files to Change

| Action | File |
|--------|------|
| Modify | `src/config/wedding.ts` |
| Modify | `src/components/Footer.tsx` |
| Modify | `src/components/HeroSection.tsx` |
| Modify | `src/components/WechatShare.tsx` |
| Modify | `src/components/EventDetails.tsx` |
| Create | `src/app/invite/[variant]/page.tsx` |

Root `src/app/page.tsx`, `layout.tsx`, and all other components are **untouched**.

---

## Step 1 — Extend `src/config/wedding.ts`

Add after the existing `weddingConfig` export:

```ts
export interface VariantConfig {
  parents: string;          // footer host signature
  date: string;             // hanzi date (HeroSection)
  dateSolar: string;
  dateLunar: string;
  time: string;
  timeShort: string;
  venue: { name: string; hall: string; address: string; lat: number; lng: number; };
  wechat: { shareTitle: string; shareDesc: string; shareImgUrl: string; appId: string; };
}

export const variants = {
  'groom-family': {
    parents:   '林洪权 · 胡洪兰',
    date:      '二零二六年五月二日',
    dateSolar: '2026年5月2日',
    dateLunar: '农历丙午年三月十六日 · 星期六',
    time:      '中午十一时三十八分', timeShort: '11:38 午宴',
    venue: { name: '招远市生态园大酒店', hall: '水晶宴会厅（2号大厅）',
             address: '山东省烟台市招远市生态园大酒店', lat: 37.3556, lng: 120.4028 },
    wechat: { shareTitle: '林洋洋 & 王文靖 · 结婚答谢宴邀请',
              shareDesc:  '诚邀您于2026年5月2日莅临招远市生态园大酒店，共赴答谢宴',
              shareImgUrl: 'https://linyangyang.site/icons/weixin.jpg', appId: '' },
  },
  'bride-family': {
    parents:   '王少伟 · 孙凤丽',
    date:      '二零二六年五月四日',
    dateSolar: '2026年5月4日',
    dateLunar: '农历丙午年三月十八日 · 星期一',
    time:      '中午十一时三十八分', timeShort: '11:38 午宴',
    venue: { name: '潍坊金庆国际酒店', hall: '5楼西子厅',
             address: '山东省潍坊市潍坊金庆国际酒店', lat: 0, lng: 0 }, // ← coords TBD
    wechat: { shareTitle: '王文靖 & 林洋洋 · 结婚答谢宴邀请',
              shareDesc:  '诚邀您于2026年5月4日莅临潍坊金庆国际酒店，共赴答谢宴',
              shareImgUrl: 'https://linyangyang.site/icons/weixin.jpg', appId: '' },
  },
  'groom': {
    parents:   '林洋洋 · 王文靖',
    date:      '二零二六年五月二日',
    dateSolar: '2026年5月2日',
    dateLunar: '农历丙午年三月十六日 · 星期六',
    time:      '中午十一时三十八分', timeShort: '11:38 午宴',
    venue: { name: '招远市生态园大酒店', hall: '水晶宴会厅（2号大厅）',
             address: '山东省烟台市招远市生态园大酒店', lat: 37.3556, lng: 120.4028 },
    wechat: { shareTitle: '我们结婚啦！诚邀您莅临答谢宴',
              shareDesc:  '林洋洋 & 王文靖 诚挚邀请您参加我们的婚礼答谢宴',
              shareImgUrl: 'https://linyangyang.site/icons/weixin.jpg', appId: '' },
  },
  'bride': {
    parents:   '林洋洋 · 王文靖',
    date:      '二零二六年五月四日',
    dateSolar: '2026年5月4日',
    dateLunar: '农历丙午年三月十八日 · 星期一',
    time:      '中午十一时三十八分', timeShort: '11:38 午宴',
    venue: { name: '潍坊金庆国际酒店', hall: '5楼西子厅',
             address: '山东省潍坊市潍坊金庆国际酒店', lat: 0, lng: 0 }, // ← coords TBD
    wechat: { shareTitle: '我们结婚啦！诚邀您莅临答谢宴',
              shareDesc:  '林洋洋 & 王文靖 诚挚邀请您参加我们的婚礼答谢宴',
              shareImgUrl: 'https://linyangyang.site/icons/weixin.jpg', appId: '' },
  },
} satisfies Record<string, VariantConfig>;

export type VariantKey = keyof typeof variants;
```

---

## Step 2 — Modify 4 Components (optional `variant` prop pattern)

Each component adds `{ variant }: { variant?: VariantConfig }` to its signature and uses:
```ts
const c = variant ?? weddingConfig;
```
Root `/` never passes `variant`, so all fallbacks hit `weddingConfig` — **zero regression risk**.

### `Footer.tsx`
- Add import: `import type { VariantConfig } from '@/config/wedding';`
- Signature: `function Footer({ variant }: { variant?: VariantConfig })`
- Replace module-level `const c = weddingConfig;` → inside component: `const c = variant ?? weddingConfig;`
- `c.parents` (line 22) and `c.dateSolar` (line 26) resolve automatically.

### `HeroSection.tsx`
- Same import + signature pattern.
- Inside component: `const c = variant ?? weddingConfig;`
- `c.groom` / `c.bride` don't exist on `VariantConfig` — keep them reading `weddingConfig` directly:
  ```ts
  const { groom, bride } = weddingConfig;
  ```
- `c.dateSolar` and `c.dateLunar` read from `c` (variant-aware).

### `WechatShare.tsx`
- Same import + signature.
- Replace `const { wechat } = weddingConfig;` with destructured primitives before the effect:
  ```ts
  const { shareTitle, shareDesc, shareImgUrl, appId } =
    variant?.wechat ?? weddingConfig.wechat;
  ```
- Update `useEffect` deps array: `[shareTitle, shareDesc, shareImgUrl, appId]`
- Use the four variables instead of `wechat.*` inside the effect body.

### `EventDetails.tsx`
- Same import + signature.
- The two top-level helper functions `openBaidu()` and `openGaode()` currently close over a module-level `c`. Move them **inside** the component body so they close over the local `const c = variant ?? weddingConfig;` instead. No other logic changes.

---

## Step 3 — Create `src/app/invite/[variant]/page.tsx`

```tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { variants, weddingConfig } from '@/config/wedding';
import HeroSection    from '@/components/HeroSection';
import EventDetails   from '@/components/EventDetails';
import PhotoCarousel  from '@/components/PhotoCarousel';
import RsvpForm       from '@/components/RsvpForm';
import Footer         from '@/components/Footer';
import WechatShare    from '@/components/WechatShare';
import ScrollReveal   from '@/components/ScrollReveal';

type Props = { params: Promise<{ variant: string }> };

export function generateStaticParams() {
  return Object.keys(variants).map((v) => ({ variant: v }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant } = await params;
  const v = variants[variant as keyof typeof variants];
  if (!v) return {};
  return {
    title: `${weddingConfig.groom} & ${weddingConfig.bride} · 结婚答谢宴`,
    description: v.wechat.shareDesc,
    openGraph: {
      title: v.wechat.shareTitle,
      description: v.wechat.shareDesc,
      images: [v.wechat.shareImgUrl],
    },
  };
}

export default async function InvitePage({ params }: Props) {
  const { variant } = await params;
  const v = variants[variant as keyof typeof variants];
  if (!v) notFound();
  return (
    <main className="min-h-screen">
      <WechatShare variant={v} />
      <HeroSection variant={v} />
      <ScrollReveal><EventDetails variant={v} /></ScrollReveal>
      <ScrollReveal><PhotoCarousel /></ScrollReveal>
      <ScrollReveal><RsvpForm /></ScrollReveal>
      <ScrollReveal><Footer variant={v} /></ScrollReveal>
    </main>
  );
}
```

---

## Execution Order

1. `wedding.ts` — define types and data first (no TypeScript errors in other files yet)
2. `Footer.tsx` — simplest component
3. `HeroSection.tsx`
4. `WechatShare.tsx`
5. `EventDetails.tsx` — move helpers inside component body
6. `src/app/invite/[variant]/page.tsx` — create last

---

## Verification

```bash
# Dev server
pnpm dev

# Check all 5 routes:
# / → 林洪权·胡洪兰, 招远, 5月2日 (unchanged)
# /invite/groom-family → same as /
# /invite/bride-family → 王少伟·孙凤丽, 潍坊, 5月4日
# /invite/groom → 林洋洋·王文靖, 招远, 5月2日
# /invite/bride → 林洋洋·王文靖, 潍坊, 5月4日
# /invite/anything-else → 404

# View page source on each /invite/* and confirm <title> and og:title match spec.

# Static export test:
NEXT_EXPORT=true pnpm build
ls out/invite/   # should list: groom-family  bride-family  groom  bride
```

---

## Known Placeholder

`bride-family` and `bride` variants have `lat: 0, lng: 0` for 潍坊金庆国际酒店 — map navigation buttons will not work until real GCJ-02 coordinates are filled in. The page itself renders correctly.
