import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

export default function VenueSection() {
  const mapUrl = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${c.venue.lat},${c.venue.lng};title:${encodeURIComponent(c.venue.name)};addr:${encodeURIComponent(c.venue.address)}&referer=wedding`;

  return (
    <section className="bg-red-dark px-6 py-16 text-center">
      <div className="max-w-sm mx-auto space-y-6">
        {/* 小标题 */}
        <p className="text-gold/60 text-xs tracking-[0.4em]">
          宴 会 地 点
        </p>

        {/* 地点信息卡片 */}
        <div className="bg-red-primary/40 border border-gold/20 rounded-xl px-6 py-8 space-y-3">
          <p className="text-cream text-xl tracking-[0.3em] font-light">
            {c.venue.name}
          </p>
          <p className="text-cream/60 text-sm tracking-wider">
            {c.venue.hall}
          </p>
          <p className="text-cream/40 text-xs tracking-wider pt-2">
            {c.venue.address}
          </p>
        </div>

        {/* 导航按钮 */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold/90 text-red-deep text-sm tracking-wider rounded-full transition-all hover:bg-gold active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          导航到这里
        </a>
      </div>
    </section>
  );
}
