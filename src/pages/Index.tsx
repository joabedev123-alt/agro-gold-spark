import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AreasSection />
        <PlansSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
