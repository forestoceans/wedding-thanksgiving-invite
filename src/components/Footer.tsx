import { weddingConfig } from '@/config/wedding';
import type { VariantConfig } from '@/config/wedding';
import Divider from './Divider';

export default function Footer({ variant }: { variant?: VariantConfig }) {
  const c = variant ?? weddingConfig;
  return (
    <section className="bg-lacquer px-6 py-20 text-center">
      <div className="max-w-xs mx-auto space-y-10">

        <p className="ds-lg text-gold-muted/40 tracking-[0.2em]" aria-hidden>囍</p>

        <div className="space-y-3">
          <p className="ds-body text-gold-pale/80 tracking-[0.18em] leading-loose">感谢您的祝福与见证</p>
          <p className="ds-body text-gold-pale/80 tracking-[0.18em] leading-loose">期待与您共度美好时光</p>
        </div>

        <Divider />

        <div className="space-y-3">
          <p className="ds-head text-gold/90 tracking-[0.35em]">{c.host}</p>
          <p className="ds-cap text-gold-muted/70 tracking-[0.5em]">敬 邀</p>
        </div>

        <div className="pt-4">
          <p className="ds-en-sm text-gold-muted/45 tracking-[0.25em] italic">{c.dateSolar}</p>
        </div>
      </div>
    </section>
  );
}
