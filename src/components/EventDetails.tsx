import { weddingConfig } from '@/config/wedding';
import Divider from './Divider';

const c = weddingConfig;

export default function EventDetails() {
  return (
    <section className="bg-lacquer px-6 py-20 text-center relative overflow-hidden">
      {/* 背景纹理层 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.5) 40px, rgba(201,168,76,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.5) 40px, rgba(201,168,76,0.5) 41px)',
        }}
      />
      <div className="relative z-10 max-w-xs mx-auto space-y-10">

        <p className="ds-sub text-gold-muted/90 tracking-[0.55em]">良 辰 吉 日</p>

        <div className="space-y-4">
          {/* whitespace-nowrap + 缩小字号防止9字换行 */}
          <p
            className="text-gold-pale leading-none font-display"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.45rem, 8vw, 3.2rem)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {c.date}
          </p>
          <p className="ds-cap text-gold/75 tracking-[0.18em] leading-loose">{c.dateLunar}</p>
        </div>

        <Divider />

        <div className="space-y-3">
          <p className="ds-head text-gold-bright tracking-[0.3em]">{c.time}</p>
          <p className="ds-cap text-gold-muted/80 tracking-[0.4em]">恭 候 光 临</p>
        </div>

        <div className="flex items-center justify-center gap-8 pt-2">
          {['五', '月', '二', '日'].map((ch, i) => (
            <span key={i} className="ds-cap text-gold-muted/70 tracking-widest">{ch}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
