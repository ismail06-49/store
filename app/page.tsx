import Benfit from "@/components/Benfit";
import Break from "@/components/Break";
import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Month from "@/components/Month";
import Products from "@/components/Products";
import Today from "@/components/Today";

// Home page component for the store
export default function Home() {
  return (
    <div>
      {/* Header: Top navigation bar and announcement */}
      <Header />

      {/* Hero: Main promotional banner and category links */}
      <Hero />

      {/* Break: Visual divider */}
      <Break />

      {/* Today: Flash sales section with countdown */}
      <Today />

      {/* Break: Visual divider */}
      <Break />

      {/* Category: Product categories grid/list */}
      <Category />

      {/* Break: Visual divider */}
      <Break />

      {/* Month: Monthly featured deals or products */}
      <Month />

      {/* Break: Visual divider */}
      <Break />

      {/* Products: Product listing or recommendations */}
      <Products />

      {/* Break: Visual divider */}
      <Break />

      {/* Featured: Highlighted new arrivals or special products */}
      <Featured />

      {/* Benfit: Store/customer benefits section */}
      <Benfit />

      {/* Footer: Footer with links, info, and app downloads */}
      <Footer />
    </div>
  );
}