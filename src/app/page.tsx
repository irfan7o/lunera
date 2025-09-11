import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ProductGrid from "@/components/ProductGrid";
import BrandSection from "@/components/BrandSection";
import BrandProducts from "@/components/BrandProducts";
import ProductExperience from "@/components/ProductExperience";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <JsonLd
        type="website"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
      <JsonLd
        type="organization"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}/logo.png`,
          description: siteConfig.description,
          social: Object.values(siteConfig.social),
          phone: "+62 21 1234 5678",
          address: {
            street: "Jl. Sudirman No. 123",
            city: "Jakarta",
            country: "Indonesia",
          },
        }}
      />

      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <BrandSection />
        <CategoryNav />
        <ProductGrid />
        <BrandProducts />
        <ProductExperience />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
}
