export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        The Problem
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-4xl leading-tight">
        Current mission control systems react to problems.
        They rarely predict them.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
        Space agencies, offshore industries, autonomous underwater
        vehicles and robotics teams generate massive streams of telemetry.
        Engineers must manually monitor thousands of signals while making
        mission-critical decisions under severe time pressure.

        <br /><br />

        Human operators often detect anomalies only after they have already
        begun affecting mission performance.
      </p>

      <div className="mt-14 sm:mt-20 grid gap-5 sm:gap-8 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
          <h3 className="text-4xl sm:text-5xl font-black">80%</h3>

          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
            of engineering effort is spent analysing telemetry rather than
            making decisions.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
          <h3 className="text-4xl sm:text-5xl font-black">1000+</h3>

          <p className="mt-5 text-sm sm:text-base leading-7 text-gray-400">
            parameters are continuously monitored during a typical mission.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
          <h3 className="text-4xl sm:text-5xl font-black">Seconds</h3>

          <p className="mt-5 text-sm sm:text-base leading-7 text-gray-400">
            can decide whether a mission succeeds or fails after an anomaly.
          </p>
        </div>

      </div>

    </section>
  );
}