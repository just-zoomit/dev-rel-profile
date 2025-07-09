import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkShowcase from "@/components/WorkShowcase";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WorkShowcase />
      <Contact />
    </div>
  );
};

export default Index;
