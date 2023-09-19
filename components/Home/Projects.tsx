"use client";

import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import ProjectDevRCommerceSrc from "@/assets/project-images/devr-commerce.png";
import Project4Src from "@/assets/project-images/file-converter.png";
import ProjectMemeSiteSrc from "@/assets/project-images/meme-site.png";
import Project5Src from "@/assets/project-images/snagem.png";
import ProjectZioLandingPageSrc from "@/assets/project-images/zion-landing-page.jpg";
import { Button, Section } from "@/components";

export type Project = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageURL: string | StaticImageData;
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
    imageURL: ProjectDevRCommerceSrc,
    stack: ["TypeScript", "Next Js", "React", "MUI", "Commerce Js", "Stripe"],
    preview: "https://devr-commerce.onrender.com",
    repo: "http://github.com/developeratul/devr-commerce",
  },
  {
    id: "3",
    category: "Launched",
    name: "Landing page",
    description: "A landing page with parallax scroll effects and animations",
    imageURL: ProjectZioLandingPageSrc,
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    preview: "http://zion-blue.vercel.app",
    repo: "http://github.com/developeratul/zion-landing-page",
  },
  {
    id: "5",
    category: "Launched",
    name: "Snagem Dashboard",
    description: "A beautifully designed and function dashboard (Done for a client)",
    imageURL: Project5Src,
    stack: ["React", "TypeScript", "Tailwind CSS", "Mantine UI", "Firebase"],
  },
  {
    id: "2",
    category: "Launched",
    name: "MEME Site",
    description: "A MEME sharing platform where you can browse and share memes.",
    imageURL: ProjectMemeSiteSrc,
    stack: ["TypeScript", "React Js", "Chakra UI", "Cloudinary", "Node Js", "Express Js"],
    preview: "http://meme-site.onrender.com",
    repo: "http://github.com/developeratul/meme-website",
  },
  {
    id: "4",
    category: "Launched",
    name: "File Converter",
    description: "A file conversion app utilizing the CloudConvert API",
    imageURL: Project4Src,
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "CloudConvert API"],
    preview: "https://file-converter-devr.vercel.app",
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
        height={300}
        className="h-[200px] w-full rounded-md bg-center object-cover duration-200"
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
              className="inline-flex flex-auto items-center justify-center rounded-md bg-primary-600 py-1 px-3 text-center align-middle text-xs text-primary-50 dark:bg-primary-400 dark:text-primary-800"
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
    <Section refKey="projects" no="02" title="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {projectData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Section>
  );
}
