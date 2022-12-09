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
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h6 className="text-lg font-light text-primary-600 dark:text-primary-500">
              <Link href="/" className="hover:no-underline">
                .devR()
              </Link>
            </h6>
            <ColorModeToggler />
          </div>
          <menu className="flex items-center justify-between gap-5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <Button>Hire me</Button>
            <Button color="secondary">Hire me</Button>
          </menu>
        </div>
      </Container>
    </nav>
  );
}
