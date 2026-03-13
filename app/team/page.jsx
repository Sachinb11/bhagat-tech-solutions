import Navbar        from '@/components/Navbar';
import Team          from '@/components/Team';
import CTA           from '@/components/CTA';
import Footer        from '@/components/Footer';
import WAFloat       from '@/components/WAFloat';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Our Team – Bhagat Tech Solutions',
  description:
    'Meet the talented developers, designers, and marketers behind Bhagat Tech Solutions.',
};

export default function TeamPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main style={{ paddingTop: '74px' }}>
        <Team />
        <CTA />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
