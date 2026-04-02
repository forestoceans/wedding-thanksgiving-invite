import { weddingConfig } from '@/config/wedding';
import Divider from './Divider';

const c = weddingConfig;

export default function EventDetails() {
  return (
    <section className="bg-parchment px-6 py-20 text-center">
      <div className="max-w-xs mx-auto space-y-10">

        <p className="ds-sub text-ink-ghost tracking-[0.55em]">良 辰 吉 日</p>

        <div className="space-y-4">
          <p className="ds-xl text-ink leading-none tracking-[0.1em]">{c.date}</p>
          <p className="ds-cap text-ink-ghost tracking-[0.2em] leading-loose">{c.dateLunar}</p>
        </div>

        <Divider />

        <div className="space-y-3">
          <p className="ds-head text-crimson tracking-[0.3em]">{c.time}</p>
          <p className="ds-cap text-ink-ghost tracking-[0.4em]">恭 候 光 临</p>
        </div>

        <div className="flex items-center justify-center gap-8 pt-2">
          {['五', '月', '二', '日'].map((ch, i) => (
            <span key={i} className="ds-cap text-gold-muted/60 tracking-widest">{ch}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
