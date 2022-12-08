import type { AppProps } from "@/types";

export function Container(props: AppProps) {
  const { children } = props;
  return <div className="container mx-auto">{children}</div>;
}
