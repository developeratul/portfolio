"use client";

import HeadShot from "@/assets/headshot.jpg";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { manrope } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandInstagram, IconBrandX, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const navLinkItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const socialLinkItems = [
  { label: "@developeratul", href: "http://twitter.com/developeratul", icon: IconBrandX },
  { label: "@developeratul", href: "http://github.com/developeratul", icon: IconBrandGithub },
  { label: "@developeratul", href: "http://instagram.com/developeratul", icon: IconBrandInstagram },
];

function NavLink(props: { children: ReactNode; href: string }) {
  const { children, href } = props;
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-white font-medium w-full px-4 py-1 rounded-full hover:bg-accent hover:text-accent-foreground duration-200",
        isActive &&
          "text-secondary-foreground bg-secondary hover:bg-secondary/90 hover:text-secondary-foreground"
      )}
    >
      {children}
    </Link>
  );
}

function NavLogo() {
  return (
    <Avatar className="border">
      <AvatarImage src={HeadShot.src} alt="My head shot image" />
    </Avatar>
  );
}

export default function TopBar() {
  return (
    <nav className="py-4 sticky top-0 left-0">
      <div className="container">
        <div className="flex w-full justify-between items-center">
          <NavLogo />

          <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <Button size="icon" variant="outline">
                <IconMenu2 />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col h-full gap-8">
              <SheetHeader>
                <div className="flex items-center gap-3">
                  <NavLogo />
                  <p
                    className={cn(
                      "text-white w-full text-lg font-semibold line-clamp-1",
                      manrope.className
                    )}
                  >
                    Minhazur Rahaman Ratul
                  </p>
                </div>
              </SheetHeader>
              <div className="flex flex-col flex-1 h-full overflow-x-hidden gap-2">
                {navLinkItems.map((navLink, index) => (
                  <NavLink href={navLink.href} key={index}>
                    {navLink.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center">
                {socialLinkItems.map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Link
                        target="_blank"
                        className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
                        href={link.href}
                      >
                        <link.icon />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{link.label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <ul className="md:flex hidden items-center justify-between p-2 bg-background border rounded-full">
            {navLinkItems.map((navLink, index) => (
              <NavLink key={index} href={navLink.href}>
                {navLink.label}
              </NavLink>
            ))}
          </ul>

          <ul className="md:flex hidden items-center gap-0">
            {socialLinkItems.map((link, index) => (
              <li key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
                      href={link.href}
                    >
                      <link.icon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{link.label}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
