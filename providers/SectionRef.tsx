"use client";

import React from "react";

import type { AppProps } from "@/types";

export type SectionRefContextValue = {
  refs: {
    home: React.MutableRefObject<HTMLElement | null>;
    about: React.MutableRefObject<HTMLElement | null>;
    projects: React.MutableRefObject<HTMLElement | null>;
    skills: React.MutableRefObject<HTMLElement | null>;
    services: React.MutableRefObject<HTMLElement | null>;
    contact: React.MutableRefObject<HTMLElement | null>;
  };
  scrollTo: (ref: React.MutableRefObject<HTMLElement | null>) => void;
};

export const SectionRefContext = React.createContext<SectionRefContextValue | undefined>(undefined);

type SectionRefProps = AppProps;

export function SectionRefProvider(props: SectionRefProps) {
  const { children } = props;
  const homeRef = React.useRef<HTMLElement | null>(null);
  const aboutRef = React.useRef<HTMLElement | null>(null);
  const projectsRef = React.useRef<HTMLElement | null>(null);
  const skillsRef = React.useRef<HTMLElement | null>(null);
  const servicesRef = React.useRef<HTMLElement | null>(null);
  const contactRef = React.useRef<HTMLElement | null>(null);

  const scrollTo: SectionRefContextValue["scrollTo"] = (ref) => {
    const element = ref?.current;

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const value: SectionRefContextValue = {
    refs: {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      services: servicesRef,
      contact: contactRef,
    },
    scrollTo,
  };

  return <SectionRefContext.Provider value={value}>{children}</SectionRefContext.Provider>;
}

export const useSectionRefContextValue = () => React.useContext(SectionRefContext);

type ScrollToProps = AppProps & {
  to: keyof SectionRefContextValue["refs"];
};

export function ScrollTo(props: ScrollToProps) {
  const { to, children } = props;
  const contextValue = useSectionRefContextValue();
  if (contextValue === undefined) return <></>;
  const { refs, scrollTo } = contextValue;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(refs[to]);
  };

  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
}
