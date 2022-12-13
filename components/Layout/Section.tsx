import type { AppProps } from "@/types";

import { Container } from "./Container";

type SectionProps = {
  title: string;
  description?: string;
} & AppProps;

export function Section(props: SectionProps) {
  const { title, description, children } = props;
  return (
    <section className="py-10">
      <Container>
        <div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
