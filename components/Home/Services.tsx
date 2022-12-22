"use client";
import clsx from "clsx";
import Image from "next/image";

import { Section } from "@/components";
import { hoverAnimations } from "@/constants/styles";

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
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos, eligendi rem illum ex et fuga sint quo totam soluta!",
    imageURL: "/react-logo.svg",
  },
  {
    id: "2",
    name: "Back-end Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos, eligendi rem illum ex et fuga sint quo totam soluta!",
    imageURL: "/node-logo.svg",
  },
  {
    id: "3",
    name: "Full-stack Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos, eligendi rem illum ex et fuga sint quo totam soluta!",
    imageURL: "/next-logo.svg",
  },
];

type ServiceProps = Service;

function Service(props: ServiceProps) {
  const { name, description, imageURL } = props;
  return (
    <div
      className={clsx(
        "grid place-items-center gap-5 rounded-md bg-white px-5 py-7 shadow-md dark:bg-background-400 lg:py-10 lg:px-7",
        hoverAnimations.card
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
    <Section no="03" title="Services">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceData.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}
