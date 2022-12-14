"use client";

import Image from "next/image";

import { Button, Section } from "@/components";

export type Project = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageURL: string;
  stack: string[];
  repo?: string;
  preview?: string;
};

type ProjectProps = Project;

const projectData: Project[] = [
  {
    id: "1",
    category: "Currently working on",
    name: "DevR Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore error quod ea consectetur esse, tenetur et laboriosam nisi numquam!",
    imageURL: "/devr_commerce.webp",
    stack: ["Next Js", "TypeScript", "MUI"],
    preview: "http://google.com",
    repo: "http://github.com",
  },
  {
    id: "2",
    category: "Currently working on",
    name: "DevR Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore error quod ea consectetur esse, tenetur et laboriosam nisi numquam!",
    imageURL: "/devr_commerce.webp",
    stack: ["Next Js", "TypeScript", "MUI"],
    preview: "http://google.com",
    repo: "http://github.com",
  },
  {
    id: "3",
    category: "Currently working on",
    name: "DevR Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore error quod ea consectetur esse, tenetur et laboriosam nisi numquam!",
    imageURL: "/devr_commerce.webp",
    stack: ["Next Js", "TypeScript", "MUI"],
    preview: "http://google.com",
    repo: "http://github.com",
  },
];

export function Project(props: ProjectProps) {
  const { name, description, id, imageURL, category, stack, preview, repo } = props;
  return (
    <div id={id} className="flex flex-col gap-5 rounded-md p-5 shadow-md dark:bg-background-400">
      <Image
        src={imageURL}
        alt={name}
        width={500}
        height={500}
        className="aspect-video w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-3">
        <div>
          <p className="mb-[2px] text-sm uppercase dark:text-primary-500">{category}</p>
          <h2 className="text-2xl ">{name}</h2>
        </div>
        <div className="flex gap-3">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex flex-auto items-center justify-center rounded-md py-1 px-3 align-middle text-xs dark:bg-primary-500 dark:text-primary-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm dark:text-gray-100">{description}</p>
        <div className="flex gap-3">
          {preview && <Button size="sm">Preview</Button>}
          {repo && <Button size="sm">Github</Button>}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  console.log({ projectData });
  return (
    <Section no="02" title="Projects">
      <div className="grid gap-5">
        {projectData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
