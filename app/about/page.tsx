export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          About Resume Rank
        </h1>

        <p className="text-lg text-slate-300 leading-8">
          Resume Rank is an AI-powered ATS Resume Screening platform that
          analyzes resumes, compares them with job roles, calculates an ATS
          score, identifies matched and missing skills, provides AI suggestions,
          and stores analysis history to help candidates improve their resumes.
        </p>
      </div>
    </main>
  );
}