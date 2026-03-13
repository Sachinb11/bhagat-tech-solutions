import Navbar        from '@/components/Navbar';
import Services      from '@/components/Services';
import WhyChoose     from '@/components/WhyChoose';
import CTA           from '@/components/CTA';
import Footer        from '@/components/Footer';
import WAFloat       from '@/components/WAFloat';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Our Services – Bhagat Tech Solutions',
  description:
    'Explore our full range of IT services: Web Development, Flutter & Android App Development, iOS Apps, Digital Marketing, WhatsApp Marketing, and SEO.',
};

export default function ServicesPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main style={{ paddingTop: '74px' }}>
        <Services />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
