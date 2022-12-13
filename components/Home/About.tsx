import Image from "next/image";

import { HStack, Link, SectionBase, SectionTitle } from "@/components";

export function About() {
  return (
    <SectionBase id="about">
      <HStack className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-16">
        <div className="grid max-w-xl flex-1">
          <SectionTitle no="01" title="About me" className="mb-[1.5rem]" />
          <div className="grid gap-5">
            <p>
              Hello! My name is Ratul, also known as DevR. I have over two years of experience as a
              full-stack developer. I build web apps that are extremely scalable, responsive,
              user-friendly, and FAST from the ground up. I have created multiple successful web
              apps for European clients while ensuring complete client satisfaction. They&apos;re
              now profitable!
            </p>
            <p>
              I build custom web solutions. My primary tech stack is TypeScript, Next Js, Tailwind
              CSS, Prisma, and tRPC. This is known as the{" "}
              <Link color="primary" isExternal href="http://create.t3.gg">
                T3 stack
              </Link>
              . I have worked with MERN and PERN stack as well. I write clean code and follow the
              best practices. My code ensures security, browser compatibility, performance, and
              more!
            </p>
            <p>
              I am available for freelance and remote work. So, if that&apos;s what you&apos;re
              looking for, you may consider hiring me.
            </p>
          </div>
        </div>
        <Image
          src="/ratul.jpg"
          alt="Developer Ratul"
          width={300}
          height={300}
          className="aspect-square border-4 border-primary-600 object-cover shadow-[10px_10px_0px_0px] shadow-primary-600 duration-500 hover:shadow-none"
          loading="lazy"
        />
      </HStack>
    </SectionBase>
  );
}
