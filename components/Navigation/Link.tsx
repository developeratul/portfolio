import clsx from "clsx";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React from "react";

import type { AppProps } from "@/types";

const colors = {
  default: "",
  primary: "text-primary-500",
  secondary: "text-secondary-500",
};

export type LinkProps = {
  href: string;
  color?: keyof typeof colors;
  isExternal?: boolean;
} & AppProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  NextLinkProps;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, href, color = "default", className, isExternal = false, ...props }, ref) => {
    return (
      <NextLink
        target={isExternal ? "_blank" : "_self"}
        className={clsx("inline-block hover:underline", colors[color], className)}
        {...props}
        ref={ref}
        href={href}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
