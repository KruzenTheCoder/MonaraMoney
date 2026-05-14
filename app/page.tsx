import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Impact } from "./components/Impact";
import { Story } from "./components/Story";
import { VisionBoard } from "./components/VisionBoard";
import { Features } from "./components/Features";
import { Rewards } from "./components/Rewards";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Waitlist } from "./components/Waitlist";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-sky-canvas relative">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Story />
        <VisionBoard />
        <Features />
        <Rewards />
        <HowItWorks />
        <Testimonials />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
