import CaseStudySection from "../case-study/CaseStudySection";
import StatBand from "../case-study/StatBand";

export default function Problem() {
  return (
    <CaseStudySection
      index="01"
      eyebrow="The Problem"
      title={
        <>
          Current mission control systems react to problems.{" "}
          <em className="text-fg-muted">They rarely predict them.</em>
        </>
      }
      intro={
        <>
          <p>
            Space agencies, offshore industries, autonomous underwater vehicles
            and robotics teams generate massive streams of telemetry. Engineers
            must manually monitor thousands of signals while making
            mission-critical decisions under severe time pressure.
          </p>
          <p className="mt-4">
            Human operators often detect anomalies only after they have already
            begun affecting mission performance.
          </p>
        </>
      }
    >
      <StatBand
        stats={[
          {
            value: "80%",
            description: "of engineering effort is spent analysing telemetry rather than making decisions.",
          },
          {
            value: "1000+",
            description: "parameters are continuously monitored during a typical mission.",
          },
          {
            value: "Seconds",
            description: "can decide whether a mission succeeds or fails after an anomaly.",
          },
        ]}
      />
    </CaseStudySection>
  );
}
