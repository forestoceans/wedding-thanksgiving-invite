import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { variants, weddingConfig } from '@/config/wedding';
import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import PhotoCarousel from '@/components/PhotoCarousel';
import RsvpForm from '@/components/RsvpForm';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

type Props = { params: Promise<{ variant: string }> };

export function generateStaticParams() {
  return Object.keys(variants).map((v) => ({ variant: v }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant } = await params;
  const v = variants[variant as keyof typeof variants];
  if (!v) return {};
  return {
    title: v.brideFirst
      ? `${weddingConfig.bride} & ${weddingConfig.groom} · 结婚答谢宴`
      : `${weddingConfig.groom} & ${weddingConfig.bride} · 结婚答谢宴`,
    description: v.wechat.shareDesc,
    openGraph: {
      title: v.wechat.shareTitle,
      description: v.wechat.shareDesc,
      images: [v.wechat.shareImgUrl],
    },
  };
}

export default async function InvitePage({ params }: Props) {
  const { variant } = await params;
  const v = variants[variant as keyof typeof variants];
  if (!v) notFound();

  return (
    <main className="min-h-screen">
      <HeroSection variant={v} />
      <ScrollReveal><EventDetails variant={v} /></ScrollReveal>
      <ScrollReveal><PhotoCarousel /></ScrollReveal>
      <ScrollReveal><RsvpForm /></ScrollReveal>
      <ScrollReveal><Footer variant={v} /></ScrollReveal>
    </main>
  );
}
