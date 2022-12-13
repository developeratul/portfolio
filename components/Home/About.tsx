import Image from "next/image";

import { HStack, SectionBase, SectionTitle } from "@/components";

export function About() {
  return (
    <SectionBase>
      <HStack className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-16">
        <div className="grid max-w-xl flex-1">
          <SectionTitle no="01" title="About me" className="mb-4" />
          <div className="grid gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium,
              dolorum voluptate odio consectetur quaerat nam voluptatum commodi omnis ut numquam
              ducimus aspernatur reiciendis voluptatem. Hic laudantium provident placeat eaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium ab
              reprehenderit sed consectetur officia ratione soluta minima tenetur itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae itaque nam
              voluptate molestias. Quaerat minima omnis excepturi cumque pariatur at totam,
              voluptate sunt tempora aspernatur architecto repellat laborum nemo.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, animi!</p>
          </div>
        </div>
        <Image
          src="/ratul.jpg"
          alt="Developer Ratul"
          width={300}
          height={300}
          className="aspect-square rounded-xl object-cover shadow-md"
          loading="lazy"
        />
      </HStack>
    </SectionBase>
  );
}
