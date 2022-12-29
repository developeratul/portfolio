import clsx from "clsx";
import React from "react";

import type { SectionRefContextValue } from "@/providers/SectionRef";
import { useSectionRefContextValue } from "@/providers/SectionRef";
import type { AppProps } from "@/types";

type NavLinkProps = React.HTMLAttributes<HTMLButtonElement> &
  AppProps & {
    to: keyof SectionRefContextValue["refs"];
  };

export const NavLink = React.forwardRef<HTMLButtonElement, NavLinkProps>(
  ({ to, className, children, ...props }, ref) => {
    const contextValue = useSectionRefContextValue();
    if (contextValue === undefined) return <></>;
    const { refs, scrollTo } = contextValue;

    const handleClick = () => {
      scrollTo(refs[to]);
    };

    return (
      <button
        onClick={handleClick}
        ref={ref}
        className={clsx(
          "relative inline-block w-full p-3 text-start text-gray-600 after:absolute after:bottom-0 after:left-0 after:content-[''] hover:no-underline dark:text-gray-400 md:w-auto",
          "overflow-hidden after:h-[2px] after:w-full after:-translate-x-[110%] after:transform after:rounded-md after:bg-primary-500",
          "duration-300 after:duration-300 hover:text-black hover:after:translate-x-0 dark:hover:text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NavLink.displayName = "NavLink";
