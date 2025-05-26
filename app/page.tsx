import Break from "@/components/Break";
import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Header from "@/components/Header"; // Import the Header component
import Hero from "@/components/Hero";     // Import the Hero component
import Month from "@/components/Month";
import Products from "@/components/Products";
import Today from "@/components/Today";

// Home page component for the store
export default function Home() {
  return (
    <div>
      {/* Render the Header at the top of the page */}
      <Header />
      {/* Render the Hero section below the Header */}
      <Hero />
      <Break />
      <Today />
      <Break />
      <Category />
      <Break />
      <Month />
      <Break />
      <Products />
      <Break />
      <Featured />
    </div>
  );
}
