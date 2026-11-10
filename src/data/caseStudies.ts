import { projects } from "./projects";

export type Project = (typeof projects)[number];

// Project id -> data-project accent key (see the [data-project] tokens in
// index.css). Shared by the homepage cards and the case-study pages.
export const PROJECT_ACCENT: Record<string, string> = {
  chora: "chora",
  "astro-rescue-ai": "astro",
  "miro-fish": "mirofish",
  fidus: "fidus",
};

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// Reading order follows src/data/projects.ts, which matches the existing
// "Next case study" chain: Chõra → Astro Rescue AI → Miro Fish → Fidus.
export function getCaseStudyNeighbours(id: string): {
  previous?: Project;
  next?: Project;
} {
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) return {};
  return { previous: projects[index - 1], next: projects[index + 1] };
}
