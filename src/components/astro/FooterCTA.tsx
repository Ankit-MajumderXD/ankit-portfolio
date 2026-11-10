import CaseStudyCTA from "../case-study/CaseStudyCTA";
import CaseStudyNavigation from "../case-study/CaseStudyNavigation";

export default function FooterCTA() {
  return (
    <>
      {/* id="footer": target of the hero's "Connect" button. */}
      <CaseStudyCTA
        id="footer"
        eyebrow="What's Next?"
        title={
          <>
            Building AI for <em className="text-fg-muted">critical missions.</em>
          </>
        }
        linkLabels={{ GitHub: "View GitHub" }}
      >
        <p>
          Astro Rescue AI explores how Artificial Intelligence, Computer
          Vision and Satellite Intelligence can transform emergency response
          for future aerospace missions.
        </p>
      </CaseStudyCTA>

      <CaseStudyNavigation
        currentId="astro-rescue-ai"
        nextLabel="Continue Exploring"
        nextDescription="Explore an AI-powered assistant designed to help farmers and students with crop guidance, weather insights, finance and career support."
        nextCta="Next Case Study"
      />
    </>
  );
}
