import clsx from "clsx";
import React from "react";

import { Spinner } from "@/components";
import type { AppProps } from "@/types";

const colors = {
  primary:
    "bg-primary-500 text-gray-900 hover:bg-primary-400 active:bg-primary-500 ring-primary-500/40",
  secondary:
    "bg-secondary-500 text-gray-900 hover:bg-secondary-400 active:bg-secondary-500  ring-secondary-500/40",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

type ButtonProps = {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & AppProps &
  React.HTMLAttributes<HTMLButtonElement> &
  IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "primary",
      size = "md",
      className,
      startIcon,
      endIcon,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={isLoading}
        className={clsx(
          className,
          colors[color],
          sizes[size],
          "flex items-center justify-center rounded-md font-medium shadow-sm duration-100 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-70"
        )}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
