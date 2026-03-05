import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";

const App = () => (
  <Layout>
    <HeroSection />
    <SectionDivider />
    <WhyUsSection />
    <SectionDivider />
    <ServicesSection />
    <SectionDivider />
    <GallerySection />
    <SectionDivider />
    <TestimonialsSection />
    <SectionDivider />
    <AboutSection />
    <SectionDivider />
    <ContactSection />
  </Layout>
);

export default App;
