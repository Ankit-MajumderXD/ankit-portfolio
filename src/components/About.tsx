import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const EXPLORING = [
  "Artificial Intelligence",
  "Product Development",
  "Modern Web Development",
  "Startup Innovation",
  "Hackathons & Competitions",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line">
      <div className="container-page py-section">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            titleId="about-title"
            title={
              <>
                Building with curiosity,{" "}
                <em className="block text-fg-muted">driven by purpose.</em>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-fg md:text-2xl md:leading-relaxed">
              I'm Ankit Majumder, a B.Tech Computer Science &amp; Engineering
              (AI&nbsp;&amp;&nbsp;ML) student based in Bangalore, India. I enjoy
              building <span className="text-accent">AI-powered products</span>{" "}
              that solve meaningful real-world problems through technology,
              design, and innovation.
            </p>
            <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-fg-muted">
              My interests span Artificial Intelligence, Product Development,
              Modern Web Technologies, and Startup Innovation.
            </p>

            <blockquote className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-display text-display-md text-fg">
                “Every project I build is an opportunity to learn, experiment,
                and create something that can make a{" "}
                <em className="text-fg-muted">positive impact.</em>”
              </p>
            </blockquote>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <Eyebrow>Currently exploring</Eyebrow>
            <ol className="mt-5 border-t border-line">
              {EXPLORING.map((item, index) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-b border-line py-4"
                >
                  <span className="font-mono text-xs text-fg-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-fg">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
