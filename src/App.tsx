import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { FreeConsultModal } from "./components/FreeConsultModal";

export default function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onOpenConsult={() => setIsConsultOpen(true)} />
        <Services />
        <Features />
        <About />
        <Contact onOpenConsult={() => setIsConsultOpen(true)} />
      </main>
      <Footer />
      <FreeConsultModal isOpen={isConsultOpen} onOpenChange={setIsConsultOpen} />
    </div>
  );
}