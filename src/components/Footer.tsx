import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

export default function Footer() {
  return (
    <section className="bg-red-dark px-6 py-16 text-center">
      <div className="max-w-sm mx-auto space-y-6">
        {/* 囍字 */}
        <div className="text-gold/40 text-3xl tracking-widest">囍</div>

        {/* 祝福语 */}
        <p className="text-cream/50 text-sm tracking-wider leading-loose">
          感谢您的祝福与见证
          <br />
          期待与您共度美好时光
        </p>

        {/* 分割线 */}
        <div className="flex items-center justify-center gap-3">
          <span className="block h-px w-12 bg-gold/20" />
          <span className="text-gold/30 text-xs">✦</span>
          <span className="block h-px w-12 bg-gold/20" />
        </div>

        {/* 落款 */}
        <div className="space-y-1">
          <p className="text-cream/40 text-xs tracking-[0.3em]">敬邀</p>
          <p className="text-cream/70 text-base tracking-[0.4em]">
            {c.parents}
          </p>
        </div>

        {/* 底部装饰 */}
        <div className="pt-8 text-gold/20 text-xs tracking-widest">
          · · ·
        </div>
      </div>
    </section>
  );
}
