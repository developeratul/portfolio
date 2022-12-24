"use client";

import React from "react";

import { Section } from "../Layout";

type Skill = {
  id: string;
  name: string;
  experienceLevel: "Beginner" | "Junior" | "Mid-level" | "Senior" | "Expert";
  icon: React.ReactNode;
};

type SkillProps = Skill;

function Skill(props: SkillProps) {
  const { id, name, icon, experienceLevel } = props;
  return (
    <div id={id} className="grid place-items-center gap-4">
      <div className="h-16 w-16 fill-gray-500 dark:fill-gray-400 sm:h-20 sm:w-20">{icon}</div>
      <div className="text-center">
        <h2 className="text-base font-medium text-primary-600 dark:text-primary-500">{name}</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">{experienceLevel}</p>
      </div>
    </div>
  );
}

const skillData: Skill[] = Array(15).fill({
  id: Date.now().toString() + Math.floor(Math.random() * 100),
  name: "HTML",
  experienceLevel: "Expert",
  icon: (
    <svg viewBox="0 0 128 128">
      <path d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
    </svg>
  ),
});

export function Skills() {
  return (
    <Section no="03" title="Skills">
      <div className="grid w-full grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-7">
        {skillData.map((skill) => (
          <Skill {...skill} key={skill.id} />
        ))}
      </div>
    </Section>
  );
}
