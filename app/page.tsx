import { About } from "@/components/Home/About";
import { Hero } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/Projects";
import { Services } from "@/components/Home/Services";

export default function RootPage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Services />
    </div>
  );
}
