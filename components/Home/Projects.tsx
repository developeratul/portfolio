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
    category: "Launched",
    name: "DevR Commerce",
    description: "Custom E-Commerce store having Cart and Checkout feature.",
    imageURL: "/devr-commerce.png",
    stack: ["TypeScript", "Next Js", "React", "MUI", "Commerce Js", "Stripe"],
    preview: "http://devr-commerce.vercel.app",
    repo: "http://github.com/developeratul/devr-commerce",
  },
  {
    id: "2",
    category: "Launched",
    name: "MEME Site",
    description: "A MEME sharing platform where you can browse and share memes.",
    imageURL: "/meme-site.png",
    stack: ["TypeScript", "React Js", "Chakra UI", "Cloudinary", "Node Js", "Express Js"],
    preview: "http://meme-site.onrender.com",
    repo: "http://github.com/developeratul/meme-site",
  },
  {
    id: "3",
    category: "In Progress",
    name: "MemSync",
    description: "A note taking app built for developers to be productive and organized.",
    imageURL: "/memsync.png",
    stack: ["TypeScript", "Next Js", "React Js", "tRPC", "Prisma", "Tailwind CSS", "NextAuth Js"],
    preview: "http://meme-site.onrender.com",
    repo: "http://github.com/developeratul/meme-site",
  },
];

export function Project(props: ProjectProps) {
  const { name, description, id, imageURL, category, stack, preview, repo } = props;
  return (
    <div
      id={id}
      className="flex transform flex-col gap-5 rounded-md bg-white p-5 shadow-md dark:bg-background-400"
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
        <div className="flex flex-wrap gap-2 p-2">
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
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {projectData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
