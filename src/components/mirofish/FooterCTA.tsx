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
            Empowering people <em className="text-fg-muted">through AI.</em>
          </>
        }
        linkLabels={{ GitHub: "View GitHub" }}
      >
        <p>
          Miro Fish demonstrates how Artificial Intelligence can bridge
          information gaps for farmers and students by delivering accessible,
          reliable and practical guidance through one platform.
        </p>
      </CaseStudyCTA>

      <CaseStudyNavigation
        currentId="miro-fish"
        nextLabel="Continue Exploring"
        nextDescription="Discover an AI-powered healthcare platform focused on smarter appointments, personalized recommendations and accessible digital healthcare."
        nextCta="Next Case Study"
      />
    </>
  );
}
