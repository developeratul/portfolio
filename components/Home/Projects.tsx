"use client";

import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
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
    stack: ["Next Js", "MUI", "Next Js"],
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
    <div
      id={id}
      className="flex transform flex-col gap-5 rounded-md bg-white p-5 shadow-md duration-300 hover:-translate-y-3 hover:scale-[1.01] hover:shadow-lg dark:bg-background-400"
    >
      <Image
        src={imageURL}
        alt={name}
        width={500}
        height={500}
        className="aspect-[2/1] w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-3">
        <div>
          <p className="mb-[2px] text-sm uppercase text-primary-600 dark:text-primary-500">
            {category}
          </p>
          <h2 className="text-2xl">{name}</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-4">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex flex-auto items-center justify-center rounded-md bg-primary-600 py-1 px-3 text-center align-middle text-xs text-primary-50 dark:bg-primary-500 dark:text-primary-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-100">{description}</p>
        <div className="flex gap-3">
          {preview && (
            <a href={preview} target="_blank" rel="noreferrer">
              <Button size="sm" startIcon={<ArrowTopRightOnSquareIcon width={18} height={18} />}>
                Preview
              </Button>
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              <Button size="sm" startIcon={<CodeBracketIcon width={18} height={18} />}>
                Github
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section no="02" title="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projectData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
