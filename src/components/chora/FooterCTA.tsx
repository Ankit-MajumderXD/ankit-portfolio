import CaseStudyCTA from "../case-study/CaseStudyCTA";
import CaseStudyNavigation from "../case-study/CaseStudyNavigation";

export default function FooterCTA() {
  return (
    <>
      {/* id="contact": target of the hero's "Connect" button. */}
      <CaseStudyCTA
        id="contact"
        eyebrow="What's Next?"
        title={
          <>
            Let's build the <em className="text-fg-muted">future together.</em>
          </>
        }
      >
        <p>
          CHÕRA represents my vision of combining Artificial Intelligence,
          Human Decision Making and Predictive Analytics into one intelligent
          mission platform. This is only the beginning.
        </p>
      </CaseStudyCTA>

      <CaseStudyNavigation
        currentId="chora"
        nextLabel="Continue Exploring"
        nextDescription="Discover how AI can predict safe satellite landing zones, optimise rescue operations and support space missions."
        nextCta="Next Case Study"
      />
    </>
  );
}
