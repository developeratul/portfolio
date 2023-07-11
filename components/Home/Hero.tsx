"use client";
import { Button, Container } from "@/components";
import { links } from "@/data/links";
import { ScrollTo, useSectionRefContextValue } from "@/providers/SectionRef";

export function Hero() {
  const contextValue = useSectionRefContextValue();
  if (contextValue === undefined) return null;
  const { refs } = contextValue;

  return (
    <section ref={refs.home} className="py-32 sm:py-36 lg:py-48 xl:py-60">
      <Container>
        <div className="mx-auto flex w-full max-w-3xl flex-col">
          <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </p>
          <h1 className="mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500 md:text-5xl">
            Minhazur Rahaman Ratul
          </h1>
          <p className="mb-5 max-w-lg font-medium md:text-lg">
            Hi, I am Ratul a full-stack developer, freelancer, writer, and aspiring indie hacker.
          </p>
          <div className="flex gap-3">
            <ScrollTo to="projects">
              <Button color="primary">See my projects</Button>
            </ScrollTo>
            <a href={links.fiverr} target="_blank" rel="noopener noreferrer">
              <Button color="secondary">Hire me</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
