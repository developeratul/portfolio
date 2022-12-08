import clsx from "clsx";
import React from "react";

import type { LinkProps } from "./Link";
import { Link } from "./Link";

type NavLinkProps = Omit<LinkProps, "color">;

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={clsx(
          "relative p-3 text-gray-400 after:absolute after:bottom-0 after:left-0 after:content-[''] hover:no-underline",
          "overflow-hidden after:h-[2px] after:w-full after:-translate-x-[110%] after:transform after:rounded-md after:bg-primary-500",
          "duration-300 after:duration-300 hover:text-white hover:after:translate-x-0",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";
