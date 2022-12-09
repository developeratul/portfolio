import clsx from "clsx";

import type { AppProps } from "@/types";

const sizes = {
  md: "px-2 sm:px-10 md:ppx-20 lg:px-24 xl:px-32",
  lg: "",
};

interface ContainerProps extends AppProps {
  size?: "md" | "lg";
}

export function Container(props: ContainerProps) {
  const { children, size = "md" } = props;
  return <div className={clsx("container mx-auto", sizes[size])}>{children}</div>;
}
