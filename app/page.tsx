import { About } from "@/components/Home/About";
import { Hero } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/Projects";

export default function RootPage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
