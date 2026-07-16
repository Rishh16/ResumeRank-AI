export default function HowItWorks() {
  return (
    <section className="bg-slate-900 text-white py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="flex justify-center gap-16 text-center flex-wrap">

        <div>
          <div className="text-5xl">📄</div>
          <h3 className="text-2xl mt-4 font-bold">
            Upload Resume
          </h3>
        </div>

        <div>
          <div className="text-5xl">🤖</div>
          <h3 className="text-2xl mt-4 font-bold">
            AI Analysis
          </h3>
        </div>

        <div>
          <div className="text-5xl">📊</div>
          <h3 className="text-2xl mt-4 font-bold">
            View Dashboard
          </h3>
        </div>

        <div>
          <div className="text-5xl">✅</div>
          <h3 className="text-2xl mt-4 font-bold">
            Hire Candidate
          </h3>
        </div>

      </div>

    </section>
  );
}