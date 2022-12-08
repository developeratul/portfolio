"use client";

import React, { useEffect } from "react";

import { Button, Link, NavLink } from "@/components";

import { Container } from "../Layout";

export function Nav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = navRef.current;
      nav?.classList.toggle("scrolled_nav", window.scrollY > 0);
    });
  }, []);
  return (
    <nav
      ref={navRef}
      className="sticky top-0 left-0 bg-white py-3 duration-300 dark:bg-background-500"
    >
      <Container>
        <div className="flex items-center justify-between">
          <h6 className="text-lg font-light text-primary-500">
            <Link href="/" className="hover:no-underline">
              .devR()
            </Link>
          </h6>
          <menu className="flex items-center justify-between gap-5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <Button>Hire me</Button>
          </menu>
        </div>
      </Container>
    </nav>
  );
}
