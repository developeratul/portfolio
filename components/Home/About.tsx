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
              Hello! I am Ratul a professional freelance full-stack developer building production
              level from scratch using modern technologies such as React, Next.js, TypeScript, tRPC,
              Next-auth, Tailwind CSS, and many more.
            </p>
            <p>
              I have experience in building SaaS applications. I have built multiple SaaS products
              and have expertise in integrating payment processors such as Stripe and Lemon Squeezy.
              I love building products rather than projects.
            </p>
            <p>
              Other that that, I am a writer. I write blogs to help my fellow developers and share
              my tiny knowledge.
            </p>
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
