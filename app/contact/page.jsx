import Navbar        from '@/components/Navbar';
import Contact       from '@/components/Contact';
import Footer        from '@/components/Footer';
import WAFloat       from '@/components/WAFloat';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Contact Us – Bhagat Tech Solutions',
  description:
    'Get in touch with Bhagat Tech Solutions. Call, WhatsApp, or send us an email — we respond fast.',
};

export default function ContactPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main style={{ paddingTop: '74px' }}>
        <Contact />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
