"use client";
import Image from "next/image";

import { HStack, SectionBase, SectionTitle } from "@/components";

export function About() {
  return (
    <SectionBase refKey="about" id="about">
      <HStack className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-16">
        <div className="grid max-w-xl flex-1">
          <SectionTitle no="01" title="About me" className="mb-[1.5rem]" />
          <div className="grid gap-5">
            <p>
              Hello! I am Ratul a professional freelance full-stack developer with over 2 years of
              experience building production level applications from scratch using modern
              technologies such as React, Next.js, TypeScript, Tailwind CSS, and many other.
            </p>
            <p>
              In those two years, I had the opportunity to work with a variety of clients as well as
              projects. While being a self-capable developer, I am also a good team player. I build
              projects from start to finish and put them in production ensuring complete client
              satisfaction. I like to build products instead of projects. I always keep myself up to
              date with the latest trends in the industry and update my knowledge base. Other that
              that, I am a writer. I write blogs to help my fellow developers and share my tiny
              knowledge.
            </p>
            <p>I am open to collaborating on projects.</p>
          </div>
        </div>
        <Image
          src="/ratul.jpg"
          alt="Developer Ratul"
          width={300}
          height={300}
          className="aspect-square border-4 border-primary-600 object-cover shadow-[10px_10px_0px_0px] shadow-primary-600 duration-500 hover:shadow-none dark:border-primary-500 dark:shadow-primary-500"
        />
      </HStack>
    </SectionBase>
  );
}
