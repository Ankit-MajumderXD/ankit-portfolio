import astrotrackImg from "../assets/projects/astrotrack.png";
import mirofishImg from "../assets/projects/mirofish.png";
import choraImg from "../assets/projects/chõra.png";
import fidusImg from "../assets/projects/fidus.png";

export const projects = [
  {
    id: "chora",
    title: "Chõra",
    image: choraImg,
    description:
      "AI-assisted predictive command platform for deep-space exploration, underwater operations, offshore infrastructure, and autonomous robotics.",
    status: "Concept",
    tech: ["AI", "Predictive Intelligence", "Telemetry", "Research"],
  },

  {
    id: "astro-rescue-ai",
    title: "Astro Rescue AI",
    image: astrotrackImg,
    description:
      "AI-powered satellite rescue platform that predicts safe landing and rescue zones using computer vision and machine learning.",
    status: "In Development",
    tech: ["React", "TypeScript", "Python", "AI"],
  },

  {
    id: "miro-fish",
    title: "Miro Fish Assistant",
    image: mirofishImg,
    description:
      "An AI assistant designed to help farmers and students with crop guidance, weather insights, finance, and career support.",
    status: "Research & Prototype",
    tech: ["React", "AI", "Weather API", "LLM"],
  },

  {
    id: "fidus",
    title: "Fidus : Health & Trust",
    image: fidusImg,
    description:
      "AI-powered healthcare platform connecting patients with verified doctors through intelligent recommendations, teleconsultation, appointment scheduling, and personalized healthcare guidance.",
    status: "In Development",
    tech: ["Healthcare", "AI", "Cloud", "Mobile"],
  },
];