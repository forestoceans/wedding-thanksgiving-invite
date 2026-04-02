import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-8 py-16 bg-gradient-to-b from-red-deep via-red-dark to-red-primary overflow-hidden">
      {/* 装饰边框 */}
      <div className="absolute inset-4 sm:inset-8 gold-border-frame rounded-sm pointer-events-none" />

      {/* 角落装饰 */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-gold/40 text-xs tracking-[0.3em] writing-mode-vertical">
        佳偶
      </div>
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 text-gold/40 text-xs tracking-[0.3em] writing-mode-vertical">
        禧事
      </div>

      <div className="relative z-10 text-center space-y-6">
        {/* 囍 */}
        <div className="text-gold text-5xl sm:text-6xl tracking-[0.2em] text-shadow-gold font-semibold">
          囍
        </div>

        {/* 副标题 */}
        <p className="text-gold-light/70 text-xs tracking-[0.5em] uppercase">
          Love Story
        </p>

        {/* 敬请光临 */}
        <p className="text-cream/60 text-sm tracking-[0.4em]">
          敬 请 光 临
        </p>

        {/* 主标题 */}
        <h1 className="text-cream text-2xl sm:text-3xl font-light tracking-[0.5em] leading-relaxed">
          结婚答谢宴
        </h1>

        {/* 分割线 */}
        <div className="flex items-center justify-center gap-3">
          <span className="block h-px w-16 bg-gold/40" />
          <span className="text-gold text-sm">✦</span>
          <span className="block h-px w-16 bg-gold/40" />
        </div>

        {/* 新人姓名 */}
        <div className="space-y-3">
          <p className="text-cream/50 text-xs tracking-[0.3em]">新郎 & 新娘</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="text-cream text-2xl sm:text-3xl font-light tracking-[0.3em]">
              {c.groom}
            </span>
            <span className="text-gold text-xl">囍</span>
            <span className="text-cream text-2xl sm:text-3xl font-light tracking-[0.3em]">
              {c.bride}
            </span>
          </div>
        </div>

        {/* 日期预览 */}
        <div className="pt-4 space-y-1">
          <p className="text-gold-light/80 text-base tracking-[0.3em]">
            {c.dateSolar}
          </p>
          <p className="text-cream/40 text-xs tracking-wider">
            {c.dateLunar}
          </p>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/30 text-xs tracking-widest animate-bounce">
        ▾
      </div>
    </section>
  );
}
