import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import PhotoCarousel from '@/components/PhotoCarousel';
import RsvpForm from '@/components/RsvpForm';
import Footer from '@/components/Footer';
import WechatShare from '@/components/WechatShare';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <WechatShare />

      {/* 封面 · 深 */}
      <HeroSection />

      {/* 吉时 · 地点 · 浅 */}
      <ScrollReveal>
        <EventDetails />
      </ScrollReveal>

      {/* 照片轮播 · 深 */}
      <ScrollReveal>
        <PhotoCarousel />
      </ScrollReveal>

      {/* 出席回执 · 浅 */}
      <ScrollReveal>
        <RsvpForm />
      </ScrollReveal>

      {/* 落款 · 深 */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
