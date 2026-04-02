import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import VenueSection from '@/components/VenueSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import RsvpForm from '@/components/RsvpForm';
import Footer from '@/components/Footer';
import WechatShare from '@/components/WechatShare';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 微信分享配置（无 UI 渲染） */}
      <WechatShare />

      {/* 封面 */}
      <HeroSection />

      {/* 日期时间 */}
      <ScrollReveal>
        <EventDetails />
      </ScrollReveal>

      {/* 地点 */}
      <ScrollReveal>
        <VenueSection />
      </ScrollReveal>

      {/* 照片轮播 */}
      <ScrollReveal>
        <PhotoCarousel />
      </ScrollReveal>

      {/* 出席回执 */}
      <ScrollReveal>
        <RsvpForm />
      </ScrollReveal>

      {/* 落款 */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
