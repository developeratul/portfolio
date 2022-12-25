"use client";
import clsx from "clsx";
import Image from "next/image";

import { Section } from "@/components";

type Service = {
  id: string;
  name: string;
  description: string;
  imageURL: string;
};

const serviceData: Service[] = [
  {
    id: "1",
    name: "Front-end Development",
    description: "Build stunning front-ends with React which be fast and fully responsive.",
    imageURL: "/react-logo.svg",
  },
  {
    id: "2",
    name: "Back-end Development",
    description: "Build custom rest APIs with Node.js and Express.js and add features to it.",
    imageURL: "/node-logo.svg",
  },
  {
    id: "3",
    name: "Full-stack Development",
    description:
      "Build a full-stack web app with custom front-end and back-end from the ground up.",
    imageURL: "/next-logo.svg",
  },
];

type ServiceProps = Service;

function Service(props: ServiceProps) {
  const { name, description, imageURL } = props;
  return (
    <div
      className={clsx(
        "grid place-items-center gap-5 border-2 border-primary-600 bg-white px-5 py-7 shadow-[7px_7px_0px_0px] shadow-primary-600 duration-300 dark:border-primary-500 dark:bg-background-500 dark:shadow-primary-500 lg:py-10 lg:px-7",
        "hover:shadow-none"
      )}
    >
      <Image src={imageURL} alt={name} width={100} height={100} />
      <div className="grid gap-1 text-center">
        <h2 className="text-xl font-medium text-primary-600 dark:text-primary-500">{name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-100">{description}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <Section no="04" title="Services">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {serviceData.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}
