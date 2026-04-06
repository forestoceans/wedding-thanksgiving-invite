import { weddingConfig } from '@/config/wedding';
import type { VariantConfig } from '@/config/wedding';

export default function HeroSection({ variant }: { variant?: VariantConfig }) {
  const c = variant ?? weddingConfig;
  const { groom, bride } = weddingConfig;
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-lacquer">

      {/* 背景径向暗晕 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(120,18,18,0.55) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 95%, rgba(60,8,8,0.4) 0%, transparent 55%)',
        }}
      />

      {/* 两侧竖金线 */}
      <div className="absolute top-0 bottom-0 left-10 sm:left-14 gold-rule-v opacity-20" />
      <div className="absolute top-0 bottom-0 right-10 sm:right-14 gold-rule-v opacity-20" />

      {/* 角落竖排小字 */}
      <div
        className="writing-vertical absolute top-16 left-12 sm:left-16 ds-cap text-gold-muted/50 tracking-[0.35em]"
        aria-hidden
      >
        天作之合
      </div>
      <div
        className="writing-vertical absolute top-16 right-12 sm:right-16 ds-cap text-gold-muted/50 tracking-[0.35em]"
        aria-hidden
      >
        百年好合
      </div>

      {/* 主内容 */}
      <div className="relative z-10 flex flex-col items-center text-center px-10 gap-0">

        {/* 顶部英文小标 */}
        <p className="ds-en-sm text-gold-muted/70 tracking-[0.35em] uppercase anim-fade-in delay-100">
          Wedding Banquet
        </p>

        {/* 横线 */}
        <div className="mt-4 mb-5 w-16 gold-rule anim-fade-in delay-200" />

        {/* 敬请光临 */}
        <p className="ds-sub text-gold-pale/60 tracking-[0.5em] anim-fade-up delay-200">
          敬 请 光 临
        </p>

        {/* 囍 主视觉 */}
        <div
          className="ds-xxl text-gradient-gold gold-text-glow my-4 anim-scale-in delay-300"
          style={{ lineHeight: 1 }}
        >
          囍
        </div>

        {/* 主标题 */}
        <h1 className="ds-lg text-gold-pale tracking-[0.55em] leading-loose anim-fade-up delay-400">
          结婚答谢宴
        </h1>

        {/* 分隔线 */}
        <div className="flex items-center gap-5 my-6 w-full max-w-[240px] anim-fade-in delay-500">
          <hr className="gold-rule flex-1" />
          <span className="text-gold text-xs" aria-hidden>✦</span>
          <hr className="gold-rule flex-1" />
        </div>

        {/* 新人姓名 */}
        <div className="flex items-center gap-5 sm:gap-7 anim-fade-up delay-500">
          <span className="ds-lg text-gold-pale/95 tracking-[0.15em]">{groom}</span>
          <span className="ds-head text-gold/70 tracking-[0.1em]" aria-hidden>&amp;</span>
          <span className="ds-lg text-gold-pale/95 tracking-[0.15em]">{bride}</span>
        </div>

        {/* 日期 */}
        <div className="mt-7 space-y-2 anim-fade-up delay-600">
          <p className="ds-head text-gold/85 tracking-[0.28em]">{c.dateSolar}</p>
          <p className="ds-cap text-gold-muted/55 tracking-[0.18em]">{c.dateLunar}</p>
        </div>
      </div>

      {/* 底部导引 — 可点击，平滑滚动至下一节 */}
      <a
        href="#event-details"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 anim-fade-in delay-800 px-6 py-3 group"
        aria-label="向下滚动查看详情"
      >
        <span
          className="text-gold-muted/45 text-lg transition-colors group-hover:text-gold-muted/70"
          style={{ animation: 'float 2s ease-in-out infinite' }}
          aria-hidden
        >↓</span>
      </a>
    </section>
  );
}
