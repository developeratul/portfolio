"use client";

import { Button, Container } from "@/components";

export function Hero() {
  return (
    <section className="py-32 sm:py-36 lg:py-48 xl:py-60">
      <Container>
        <div className="flex w-full max-w-xl flex-col">
          <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </p>
          <h1 className="mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-primary-500 dark:to-secondary-500 md:text-5xl">
            Developer Ratul
          </h1>
          <p className="mb-5 font-medium">
            I am a full-stack developer with over 2 years of experience building efficient web apps.
            I&apos;ve developed and launched many web projects with Next Js, ensuring complete
            client satisfaction.
          </p>
          <div className="flex gap-3">
            <Button color="primary">See my projects</Button>
            <Button color="secondary">Hire me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
