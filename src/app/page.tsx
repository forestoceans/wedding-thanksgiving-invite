import Link from 'next/link';
import { variants } from '@/config/wedding';

const groom = variants['groom'];
const bride  = variants['bride'];

export default function Home() {
  return (
    <main className="min-h-svh bg-lacquer flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">

      {/* 两侧竖金线 */}
      <div className="absolute top-0 bottom-0 left-10 sm:left-14 gold-rule-v opacity-15" />
      <div className="absolute top-0 bottom-0 right-10 sm:right-14 gold-rule-v opacity-15" />

      {/* 角落竖排小字 */}
      <div className="writing-vertical absolute top-16 left-12 sm:left-16 ds-cap text-gold-muted/45 tracking-[0.35em]" aria-hidden>
        天作之合
      </div>
      <div className="writing-vertical absolute top-16 right-12 sm:right-16 ds-cap text-gold-muted/45 tracking-[0.35em]" aria-hidden>
        百年好合
      </div>

      {/* ── 顶部标题区 ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-0 w-full max-w-sm">

        <p className="ds-en-sm text-gold-muted/65 tracking-[0.35em] uppercase anim-fade-in delay-100">
          Wedding Banquet
        </p>

        <div className="mt-4 mb-5 w-16 gold-rule anim-fade-in delay-200" />

        <div
          className="ds-xxl text-gradient-gold gold-text-glow my-2 anim-scale-in delay-300"
          style={{ lineHeight: 1 }}
        >
          囍
        </div>

        <h1 className="ds-lg text-gold-pale tracking-[0.5em] leading-loose anim-fade-up delay-400">
          结婚答谢宴
        </h1>

        {/* 新人姓名 */}
        <div className="flex items-center gap-5 mt-3 anim-fade-up delay-500">
          <span className="ds-head text-gold-pale/90 tracking-[0.2em]">林洋洋</span>
          <span className="text-gold/60 tracking-[0.1em]" aria-hidden>&amp;</span>
          <span className="ds-head text-gold-pale/90 tracking-[0.2em]">王文靖</span>
        </div>

        <div className="mt-6 mb-10 w-full max-w-[200px] gold-rule anim-fade-in delay-600" />

        {/* ── 场次选择提示 ── */}
        <p className="ds-cap text-gold-muted/60 tracking-[0.45em] anim-fade-up delay-600">
          请 选 择 场 次
        </p>

        {/* ── 两张场次卡片 ── */}
        <div className="mt-6 w-full flex flex-col gap-4 anim-fade-up delay-700">

          {/* 招远场 */}
          <Link
            href="/invite/groom"
            className="group double-border px-6 py-7 text-center transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            {/* 城市标签 */}
            <p className="ds-en-sm text-gold-muted/50 tracking-[0.3em] uppercase mb-3">Zhaoyuan · Shandong</p>
            {/* 酒店名 */}
            <p
              className="mb-1 transition-colors group-hover:text-gold-pale"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 4vw, 1.45rem)',
                letterSpacing: '0.08em',
                color: 'var(--color-gold-pale)',
                opacity: 0.92,
              }}
            >
              {groom.venue.name}
            </p>
            <p className="ds-cap text-gold-muted/65 tracking-[0.18em] mb-4">{groom.venue.hall}</p>
            {/* 分割线 */}
            <div className="rouge-rule mx-auto w-16 mb-4" />
            {/* 日期 */}
            <p className="ds-sub text-gold/85 tracking-[0.28em]">{groom.dateSolar}</p>
            <p className="ds-cap text-gold-muted/50 tracking-[0.15em] mt-1">{groom.dateLunar}</p>
            {/* 按钮提示 */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="ds-cap tracking-[0.3em]" style={{ color: 'var(--color-rouge-soft)', opacity: 0.8 }}>
                查 看 请 柬
              </span>
              <span className="text-rouge-soft/60 text-xs transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* 潍坊场 */}
          <Link
            href="/invite/bride"
            className="group double-border px-6 py-7 text-center transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <p className="ds-en-sm text-gold-muted/50 tracking-[0.3em] uppercase mb-3">Weifang · Shandong</p>
            <p
              className="mb-1 transition-colors group-hover:text-gold-pale"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 4vw, 1.45rem)',
                letterSpacing: '0.08em',
                color: 'var(--color-gold-pale)',
                opacity: 0.92,
              }}
            >
              {bride.venue.name}
            </p>
            <p className="ds-cap text-gold-muted/65 tracking-[0.18em] mb-4">{bride.venue.hall}</p>
            <div className="rouge-rule mx-auto w-16 mb-4" />
            <p className="ds-sub text-gold/85 tracking-[0.28em]">{bride.dateSolar}</p>
            <p className="ds-cap text-gold-muted/50 tracking-[0.15em] mt-1">{bride.dateLunar}</p>
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="ds-cap tracking-[0.3em]" style={{ color: 'var(--color-rouge-soft)', opacity: 0.8 }}>
                查 看 请 柬
              </span>
              <span className="text-rouge-soft/60 text-xs transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

        </div>

        {/* 底部装饰 */}
        <p className="mt-10 ds-en-sm text-gold-muted/30 tracking-[0.25em] italic anim-fade-in delay-800">
          2026 · 林洋洋 & 王文靖
        </p>

      </div>
    </main>
  );
}
