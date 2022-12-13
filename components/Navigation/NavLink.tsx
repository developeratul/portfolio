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
          "relative inline-block w-full p-3 text-gray-600 after:absolute after:bottom-0 after:left-0 after:content-[''] hover:no-underline dark:text-gray-400 md:w-auto",
          "overflow-hidden after:h-[2px] after:w-full after:-translate-x-[110%] after:transform after:rounded-md after:bg-primary-500",
          "duration-300 after:duration-300 hover:text-black hover:after:translate-x-0 dark:hover:text-white",
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
