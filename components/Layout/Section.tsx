import clsx from "clsx";
import type { HTMLAttributes } from "react";
import React from "react";

import { Container, HStack } from "@/components";
import type { AppProps } from "@/types";

interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: string;
  no: string;
}

export function SectionTitle({ title, no, className, ...props }: SectionTitleProps) {
  return (
    <HStack className={clsx("mb-12 items-center gap-3 text-xl", className)} {...props}>
      <h2 className="text-primary-600 dark:text-primary-500">{no}.</h2>
      <h2>{title}</h2>
      <div className="h-[1px] max-w-md flex-1 rounded-md bg-gray-400 dark:bg-gray-700" />
    </HStack>
  );
}

interface SectionBaseProps extends AppProps, HTMLAttributes<HTMLDivElement> {}

export function SectionBase({ children, className, ...props }: SectionBaseProps) {
  return (
    <section className={clsx("py-10", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

interface SectionProps extends SectionTitleProps, Omit<SectionBaseProps, "title"> {}

export function Section({ title, no, children, ...props }: SectionProps) {
  return (
    <SectionBase {...props}>
      <SectionTitle title={title} no={no} />
      {children}
    </SectionBase>
  );
}
