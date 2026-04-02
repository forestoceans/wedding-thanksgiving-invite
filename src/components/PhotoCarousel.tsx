'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/swiper.css';
import { weddingConfig } from '@/config/wedding';

export default function PhotoCarousel() {
  const photos = weddingConfig.photos;

  return (
    <section className="bg-parchment py-20">
      <div className="max-w-xs mx-auto px-6 space-y-8">

        <p className="ds-sub text-ink-ghost tracking-[0.55em] text-center">甜 蜜 瞬 间</p>

        {/* 相框 */}
        <div className="relative mx-auto">
          <div className="absolute -inset-3 border border-gold-muted/25 pointer-events-none z-10" aria-hidden />
          <div className="absolute -inset-1.5 border border-gold-muted/15 pointer-events-none z-10" aria-hidden />

          <div className="overflow-hidden aspect-[3/4]">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              effect="fade"
              loop
              className="w-full h-full"
            >
              {photos.map((url, i) => (
                <SwiperSlide key={i} className="w-full h-full">
                  <img
                    src={url}
                    alt={`照片 ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <p className="ds-en-sm text-ink-ghost/50 tracking-[0.25em] text-center italic">
          Love is the greatest adventure
        </p>
      </div>
    </section>
  );
}
