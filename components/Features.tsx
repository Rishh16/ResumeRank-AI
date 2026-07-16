import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-black text-white py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Why Choose Resume Rank?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-20">

        <FeatureCard
          icon="🤖"
          title="AI Analysis"
          description="Analyze resumes intelligently using AI."
        />

        <FeatureCard
          icon="⚡"
          title="Fast Hiring"
          description="Shortlist candidates within seconds."
        />

        <FeatureCard
          icon="📊"
          title="Recruiter Dashboard"
          description="Manage applicants with analytics."
        />

      </div>

    </section>
  );
}