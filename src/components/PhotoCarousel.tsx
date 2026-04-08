'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { weddingConfig } from '@/config/wedding';


export default function PhotoCarousel() {
  const photos = weddingConfig.photos;

  return (
    <section id="photo-carousel" className="bg-lacquer py-24 overflow-hidden relative">

      {/* 背景装饰：极淡金色网格 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 56px, rgba(184,150,74,1) 56px, rgba(184,150,74,1) 57px), repeating-linear-gradient(90deg, transparent, transparent 56px, rgba(184,150,74,1) 56px, rgba(184,150,74,1) 57px)',
        }}
      />

      {/* 左侧竖排装饰文字 */}
      <div
        className="writing-vertical absolute left-5 top-1/2 -translate-y-1/2 ds-cap text-gold-muted/25 tracking-[0.4em] select-none pointer-events-none"
        aria-hidden
      >
        甜蜜瞬间
      </div>
      {/* 右侧竖排装饰文字 */}
      <div
        className="writing-vertical absolute right-5 top-1/2 -translate-y-1/2 ds-cap text-gold-muted/25 tracking-[0.4em] select-none pointer-events-none"
        aria-hidden
      >
        执子之手
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10">

        {/* 标题 */}
        <div className="text-center space-y-2 px-6">
          <p
            className="ds-en-sm tracking-[0.5em] uppercase"
            style={{ color: 'rgba(184,150,74,0.4)', fontFamily: 'var(--font-latin)' }}
          >
            Our Moments
          </p>
          <div className="flex items-center gap-4 justify-center">
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(184,150,74,0.45))' }} />
            <p className="ds-sub text-gold-muted/75 tracking-[0.55em]">甜 蜜 瞬 间</p>
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, rgba(184,150,74,0.45), transparent)' }} />
          </div>
        </div>

        {/* 卡片轮播 */}
        <div className="w-full px-8" style={{ maxWidth: '340px' }}>
          <Swiper
            modules={[Autoplay, Pagination, EffectCards]}
            effect="cards"
            cardsEffect={{ slideShadows: false, perSlideOffset: 8, perSlideRotate: 3 }}
            speed={700}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            grabCursor
            className="photo-cards-swiper"
            style={{ width: '100%', paddingBottom: '44px', overflow: 'visible' }}
          >
            {photos.map((url, i) => (
              <SwiperSlide key={i} className="photo-card-slide">
                {/* 宝丽来相纸框 */}
                <div
                  className="relative w-full"
                  style={{
                    background: '#fdfcfa',
                    padding: '10px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)',
                  }}
                >
                  {/* 照片 */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={url}
                      alt={`照片 ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 底部英文引语 */}
        <p
          className="ds-en-sm tracking-[0.22em] italic px-6 text-center"
          style={{ color: 'rgba(184,150,74,0.45)', fontFamily: 'var(--font-latin)' }}
        >
          With you, every moment becomes a memory
        </p>

      </div>
    </section>
  );
}
