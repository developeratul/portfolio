import clsx from "clsx";
import React from "react";

import type { AppProps } from "@/types";

type HStackProps = AppProps & React.HTMLAttributes<HTMLDivElement>;

export function HStack({ children, className, ...props }: HStackProps) {
  return (
    <div className={clsx("flex", className)} {...props}>
      {children}
    </div>
  );
}
