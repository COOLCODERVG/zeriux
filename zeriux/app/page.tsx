import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import FAQ from "../components/sections/faq/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Items />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
