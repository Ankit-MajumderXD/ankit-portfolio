export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Healthcare Challenge
      </p>

      <div className="mt-10 grid items-center gap-16 md:grid-cols-2">

        {/* Left */}

        <div>

          <h2 className="text-6xl font-black leading-tight">
            Healthcare
            <br />
            Shouldn't Be
            <br />
            This Hard.
          </h2>

          <p className="mt-10 text-lg leading-9 text-gray-400">
            Accessing quality healthcare remains fragmented for millions of
            patients. Finding the right specialist often depends on location,
            availability and trust, while navigating appointments,
            follow-ups and ongoing care can become overwhelming.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Existing healthcare platforms focus on booking appointments.
            Patients need something more—an intelligent platform that guides
            every step of their healthcare journey.
          </p>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              Fragmented Care
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Patients struggle to discover trusted specialists within their
              region and often rely on scattered information.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              Long Waiting Times
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Specialist appointments can take weeks, delaying diagnosis
              and treatment, especially outside metropolitan cities.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              No Intelligent Guidance
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Most healthcare apps stop at appointment booking instead of
              helping patients understand the next best clinical step.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}