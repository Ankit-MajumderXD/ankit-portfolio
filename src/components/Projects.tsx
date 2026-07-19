import fidusImg from "../assets/projects/fidus.png";
import astrotrackImg from "../assets/projects/astrotrack.png";
import chõraImg from "../assets/projects/chõra.png";
import mirofishImg from "../assets/projects/mirofish.png";
export default function Projects() {
  const projects = [
    {
      title: "Astro Rescue AI",
      image: astrotrackImg,
      description:
        "AI-powered satellite rescue platform that predicts safe landing and rescue zones using computer vision and machine learning.",
      status: "In Development",
      tech: ["React", "TypeScript", "Python", "AI"],
    },
    {
      title: "Miro Fish Assistant",
      image: mirofishImg,
      description:
        "An AI assistant designed to help farmers and students with crop guidance, weather insights, finance, and career support.",
      status: "Research & Prototype",
      tech: ["React", "AI", "Weather API", "LLM"],
    },
    {
      title: "Chõra",
      image: chõraImg,
      description:
        "An AI-driven concept exploring innovative solutions for space and ocean technology with a focus on future exploration.",
      status: "Concept",
      tech: ["AI", "Research", "Innovation"],
    },
    {
        title: "Fidus : Health & Trust",
        image: fidusImg,
        description:
            "An Healthcare AI platform that helps you to book appointments, track your health, and get personalized recommendations of doctors that are available near you.",
        status: "In Development",
        tech: ["Mobile & SDK", "AI", "Cloud & Infralayer", "Healthcare"],
    }
  ];

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-10 py-32"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Featured Products
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Building products with purpose.
      </h2>

      <p className="mt-6 max-w-2xl text-gray-400 leading-8">
        Every project starts with a real-world problem. My focus is on
        combining AI, modern web technologies, and thoughtful product
        design to build solutions that create meaningful impact.
      </p>

      <div className="mt-20 grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative z-10 overflow-hidden group rounded-3xl min-h-112.5 border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
          >
            <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover -z-10"
             />
             <div className="absolute inset-0 bg-black/60 -z-10"></div>

             <div className="flex flex-col gap-2">
             <h3 className="text-3xl font-black leading-tight">
              {project.title}
             </h3>
             <span className="w-fit rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-300">
              {project.status}
             </span>
            </div>

             <p className="mt-8 max-w-3xl leading-8 text-gray-400">
              {project.description}
             </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((item) => (
           <span
           key={item}
           className="rounded-full bg-white/10 px-4 py-2 text-sm"
           >
           {item}
           </span>
          ))}
          </div>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105">
            Case Study →
           </button>
          </div>
         </div>
        </div>
        ))}
      </div>
    </section>
  );
}