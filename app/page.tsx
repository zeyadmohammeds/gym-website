import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Programs from '@/components/Programs';
import TransformationIntro from '@/components/TransformationIntro';
import TransformationSection from '@/components/TransformationSection';
import Journey from '@/components/Journey';
import WhyVolt from '@/components/WhyVolt';
import Coaches from '@/components/Coaches';
import Testimonials from '@/components/Testimonials';
import Membership from '@/components/Membership';
import CommunityGallery from '@/components/CommunityGallery';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <TransformationIntro />
      <TransformationSection />
      <Journey />
      <WhyVolt />
      <Coaches />
      <Testimonials />
      <Membership />
      <CommunityGallery />
      <FinalCTA />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
