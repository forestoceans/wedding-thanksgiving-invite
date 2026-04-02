'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { weddingConfig } from '@/config/wedding';

export default function PhotoCarousel() {
  const photos = weddingConfig.photos;

  return (
    <section className="bg-cream py-16">
      <div className="max-w-sm mx-auto px-6 space-y-6">
        <p className="text-text-muted text-xs tracking-[0.4em] text-center">
          甜 蜜 瞬 间
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            effect="fade"
            loop
            className="aspect-[3/4]"
          >
            {photos.map((url, i) => (
              <SwiperSlide key={i}>
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
    </section>
  );
}
