import Navbar          from '@/components/Navbar';
import Hero            from '@/components/Hero';
import ServicesStrip   from '@/components/ServicesStrip';
import About           from '@/components/About';
import Services        from '@/components/Services';
import WhyChoose       from '@/components/WhyChoose';
import Portfolio       from '@/components/Portfolio';
import Testimonials    from '@/components/Testimonials';
import Team            from '@/components/Team';
import CTA             from '@/components/CTA';
import Contact         from '@/components/Contact';
import Footer          from '@/components/Footer';
import WAFloat         from '@/components/WAFloat';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <ServicesStrip />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
