"use client";

import React, { useEffect } from "react";

import { Button, Link, NavLink } from "@/components";
import { ColorModeToggler } from "@/providers/ColorMode";

import { Container } from "../Layout";

export function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      nav?.classList.toggle("scrolled_nav", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className="sticky top-0 left-0 bg-background-50 py-3 duration-300 dark:bg-background-500"
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h6 className="text-lg font-light text-primary-600 dark:text-primary-500">
              <Link href="/" className="hover:no-underline">
                .devR()
              </Link>
            </h6>
            <ColorModeToggler />
          </div>
          <div className="absolute top-0 right-0 flex h-screen w-full max-w-md translate-x-full transform flex-col items-start justify-center gap-5 bg-white/70 p-5 backdrop-blur-lg dark:bg-background-600/70 lg:static lg:h-auto lg:w-auto lg:max-w-none lg:transform-none lg:flex-row lg:items-center lg:justify-between lg:!bg-transparent lg:!p-0 lg:backdrop-blur-none">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">Portfolio</NavLink>
            <NavLink href="/">Skills</NavLink>
            <NavLink href="/">Services</NavLink>
            <NavLink href="/">Contact</NavLink>
            <Button className="w-full lg:w-auto">Hire me</Button>
          </div>
          <div className="z-10 lg:hidden">
            <button>bars</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
