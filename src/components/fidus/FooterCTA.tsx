import CaseStudyCTA from "../case-study/CaseStudyCTA";
import CaseStudyNavigation from "../case-study/CaseStudyNavigation";

export default function FooterCTA() {
  return (
    <>
      {/* id="footer": target of the hero's "Connect" button. */}
      <CaseStudyCTA
        id="footer"
        eyebrow="Thank You"
        title={
          <>
            Building the future of healthcare <em className="text-fg-muted">with AI.</em>
          </>
        }
        linkLabels={{ GitHub: "View GitHub" }}
      >
        <p>
          Fidus explores how Artificial Intelligence can simplify healthcare
          journeys by connecting patients, healthcare professionals and
          intelligent digital services into one modern ecosystem.
        </p>
      </CaseStudyCTA>

      {/* Last case study: previous project, then the original "back to portfolio" card. */}
      <CaseStudyNavigation
        currentId="fidus"
        endLabel="Back to Portfolio"
        endTitle="Explore More Projects"
        endDescription="Continue exploring AI-powered products, intelligent systems and modern digital experiences built to solve meaningful real-world problems."
        endCta="Back to Portfolio"
      />
    </>
  );
}
