"use client";
import HeadShot from "@/assets/headshot.jpg";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight";
import { manrope } from "../ui/typography";

export default function Hero() {
  return (
    <header className="flex py-24 antialiased relative justify-center items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#b994ff" />
      <div className="container">
        <div className="sm:space-y-9 space-y-5 w-full max-w-[815px]">
          <Avatar className="border-4 border-primary w-[100px] h-[100px]">
            <AvatarImage src={HeadShot.src} alt="My head shot image" />
          </Avatar>
          <h1 className={cn("sm:text-5xl text-3xl font-extrabold", manrope.className)}>
            <span className="text-primary">Full Stack Developer.</span>{" "}
            <span className="text-white">Designer.</span> Calisthenics Athlete. Cycling Enthusiast.
          </h1>
          <p className="text-base sm:text-lg text-white font-medium">
            Hello there 👋 I&apos;m Minhazur Rahaman Ratul. Ratul is my nickname. I&apos;m a Full
            Stack Developer and Designer who loves building products from scratch. I enjoy designing
            and developing web interfaces that turn an idea into reality and solves a problem, which
            is my area of expertise. I enjoy working with clients to transform their ideas into
            reality and help them generate revenue through the product.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg">View Recent Work</Button>
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part of the page. Here, we
          are drawing the attention towards the text section of the page. I don&apos;t know why but
          I&apos;m running out of copy.
        </p>
      </div>
    </div>
  );
}
