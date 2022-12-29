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
        block: "center",
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
