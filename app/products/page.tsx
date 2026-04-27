import { createMetadata } from "@/lib/metadata";
import ProductsGrid from "@/components/products/ProductsGrid";
import CTA from "@/components/home/CTA";
import GlobalHeroSection from "@/components/about/AboutHero";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore R-Core's full product suite — ERP & CRM, Real Estate, POS, Customer Portal, SMS & WhatsApp, and Email Solutions for every industry.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-[#060d1f] min-h-screen">
      <GlobalHeroSection
        badge="Our Product Suite"
        title1="Software Built for "
        title2="Real Business Growth."
        description="From ERP & CRM to Real Estate and Communication platforms RealCoreSolutions offers everything your business needs to scale, automate, and succeed."
      />

      <ProductsGrid />
      <CTA />
    </div>
  );
}
