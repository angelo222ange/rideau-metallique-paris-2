import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import Services from "@/components/Services";
import SEOContent from "@/components/SEOContent";
import About from "@/components/About";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Brands from "@/components/Brands";
import Zones from "@/components/Zones";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import QuickService from "@/components/QuickService";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <SEOContent variant={1} />
      <About />
      <Process />
      <SEOContent variant={2} />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Brands />
      <Zones />
      <SEOContent variant={3} />
      <CTA />
      <Blog />
      <QuickService />
      <Footer />
    </>
  );
}
