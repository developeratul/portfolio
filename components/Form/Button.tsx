import clsx from "clsx";
import React from "react";

import { Spinner } from "@/components";
import type { AppProps } from "@/types";

const colors = {
  default:
    "bg-gray-400/50 hover:bg-gray-400/70 active:bg-gray-400/50 text-gray-900 dark:bg-gray-600/50 dark:text-gray-50 dark:hover:bg-gray-600/70 dark:active:bg-gray-600/50",
  primary:
    "bg-primary-600 dark:bg-primary-500 text-gray-50 dark:text-gray-900 hover:bg-primary-500 dark:hover:bg-primary-400 active:bg-primary-600 dark:active:bg-primary-500 ring-primary-500/40",
  secondary:
    "bg-secondary-600 dark:bg-secondary-500 text-gray-900 hover:bg-secondary-500 dark:hover:bg-secondary-400 active:bg-secondary-600 dark:active:bg-secondary-500 ring-secondary-500/40",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

type IconProps = { startIcon?: React.ReactElement; endIcon?: React.ReactElement };

export interface ButtonProps
  extends IconProps,
    AppProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "default",
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
          "flex items-center justify-center rounded-md font-medium shadow-sm outline-none duration-100 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-70"
        )}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{children}</span>
        {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
