import Header from "@/components/Header"; // Import the Header component
import Hero from "@/components/Hero";     // Import the Hero component
import Today from "@/components/Today";

// Home page component for the store
export default function Home() {
  return (
    <div>
      {/* Render the Header at the top of the page */}
      <Header />
      {/* Render the Hero section below the Header */}
      <Hero />
      <Today />
    </div>
  );
}
