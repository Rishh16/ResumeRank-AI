"use client";
import DashboardNavbar from "@/components/DashboardNavbar";
import { JOB_ROLES } from "@/lib/jobRoles";
import { useState } from "react";
import { extractSkills, calculateScore } from "@/lib/skillExtractor";
export default function Dashboard() {
    const [resume, setResume] = useState<File | null>(null);
    const [selectedRole, setSelectedRole] = useState("Software Engineer");
    const [score, setScore] = useState<number | null>(null);
const [matchedSkills, setMatchedSkills] = useState<string[]>([]);
const [missingSkills, setMissingSkills] = useState<string[]>([]);
const [resumeText, setResumeText] = useState("");
 const handleUpload = async () => {
  if (!resume) {
    alert("Please select a resume first.");
    return;
  }

  const formData = new FormData();
  formData.append("resume", resume);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log("API Response:", data);
    console.log("Extracted Text:", data.text);

    if (!response.ok) {
      alert(data.message || "Upload failed");
      return;
    }

    // Save extracted resume text
    setResumeText(data.text ?? "");

    console.log("Resume text saved:", data.text);

    if (!data.text || data.text.trim() === "") {
      alert("No text could be extracted from the PDF.");
      return;
    }

    alert("Resume uploaded successfully");
  } catch (error) {
    console.error("Upload Error:", error);
    alert("Upload failed.");
  }
};
const handleAnalyze = () => {
   
  if (!resume) {
    alert("Please upload a resume.");
    return;
  }
   if (!resumeText) {
  alert("Please upload your resume first.");
  return;
}

 

  console.log("Resume:", resume.name);
 
 console.log("Selected Role:", selectedRole);



const resumeSkills = extractSkills(resumeText);

const jobSkills =
  JOB_ROLES[selectedRole as keyof typeof JOB_ROLES];

const result = calculateScore(resumeSkills, jobSkills);

setScore(result.score);
setMatchedSkills(result.matchedSkills);
setMissingSkills(result.missingSkills);

fetch("/api/analysis", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    
    role: selectedRole,
    score: result.score,
    matchedSkills: result.matchedSkills,
    missingSkills: result.missingSkills,
    suggestions,
  }),
});
};
const suggestions = [
  ...(missingSkills.includes("Spring Boot")
    ? ["Learn and add a Spring Boot project."]
    : []),

  ...(missingSkills.includes("REST API")
    ? ["Build and mention REST API projects."]
    : []),

  ...(missingSkills.includes("Docker")
    ? ["Learn Docker and include containerized projects."]
    : []),

  "Add measurable achievements in projects.",
  "Keep your GitHub repository updated.",
];
  return (
    <>
    <DashboardNavbar />
  
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
    Resume Rank ATS
  </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Resume Upload Card */}
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 hover:border-cyan-500 hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
  📄 Upload Resume
</h2>
<p className="text-slate-400 mb-5">
  Upload your PDF resume for ATS analysis.
</p>

          <input
            type="file"
             onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  }}
            className="w-full border border-slate-600 rounded-xl p-3 bg-slate-900"
          />

          <button
          onClick={handleUpload}
            className="mt-5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 p-3 rounded-xl font-semibold transition"
          >
            Upload Resume
          </button>
        </div>

        {/* Job Role Card */}

<div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 hover:border-green-500 hover:shadow-green-500/20 hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
  💼 Select Job Role
</h2>

<p className="text-slate-400 mb-5">
  Choose the role to compare your resume against.
</p>

  <select
  value={selectedRole}
  onChange={(e) => setSelectedRole(e.target.value)}
    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-600 text-white"
  >
    <option>Software Engineer</option>
    <option>AI Engineer</option>
    <option>Data Scientist</option>
    <option>Data Analyst</option>
    <option>Full Stack Developer</option>
    <option>Backend Developer</option>
    <option>Frontend Developer</option>
    <option>Cloud Engineer</option>
    <option>DevOps Engineer</option>
  </select>
  

  <button
    onClick={handleAnalyze}
    className="mt-5 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 p-3 rounded-xl font-semibold transition"
  >
    Analyze Resume
  </button>
</div>

      </div>
    {score !== null && (
  <>

    <div className="mt-10 grid lg:grid-cols-3 gap-6">

      {/* ATS Score */}
      <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 text-center">

        <h2 className="text-2xl font-bold mb-6">
          🎯 ATS Score
        </h2>

        <div className="mx-auto w-40 h-40 rounded-full border-[10px] border-cyan-500 flex items-center justify-center">

          <div>
            <h1 className="text-5xl font-bold">
              {score}%
            </h1>

            <p className="text-slate-400">
              Match
            </p>
          </div>

        </div>

        <div className="mt-8">

          <div className="w-full bg-slate-700 rounded-full h-3">

            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-600 h-3 rounded-full"
              style={{ width: `${score}%` }}
            />

          </div>

          <p className="mt-4 text-lg font-semibold text-cyan-400">
            {score >= 85
              ? "Excellent Resume"
              : score >= 70
              ? "Good Match"
              : "Needs Improvement"}
          </p>

        </div>

      </div>

      {/* Matched Skills */}

      <div className="bg-slate-800/80 backdrop-blur-xl border border-green-600 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-5 text-green-400">
          ✅ Matched Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {matchedSkills.map((skill) => (
            <span
              key={skill}
              className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full border border-green-500"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Missing Skills */}

      <div className="bg-slate-800/80 backdrop-blur-xl border border-red-600 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-5 text-red-400">
          ❌ Missing Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {missingSkills.map((skill) => (
            <span
              key={skill}
              className="bg-red-600/20 text-red-300 px-4 py-2 rounded-full border border-red-500"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>

    {/* AI Suggestions */}

    <div className="mt-8 bg-slate-800/80 backdrop-blur-xl border border-yellow-500 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-5">
        💡 AI Suggestions
      </h2>
      <div className="mt-8 bg-slate-800/80 backdrop-blur-xl border border-cyan-500 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    📄 Resume Summary
  </h2>

  <div className="grid md:grid-cols-4 gap-5">

    <div className="bg-slate-900 rounded-xl p-5 text-center">
      <h3 className="text-lg font-semibold">ATS Score</h3>
      <p className="text-3xl font-bold text-cyan-400 mt-2">
        {score}%
      </p>
    </div>

    <div className="bg-slate-900 rounded-xl p-5 text-center">
      <h3 className="text-lg font-semibold">Role</h3>
      <p className="text-cyan-300 mt-2">
        {selectedRole}
      </p>
    </div>

    <div className="bg-slate-900 rounded-xl p-5 text-center">
      <h3 className="text-lg font-semibold">Matched</h3>
      <p className="text-green-400 text-3xl font-bold mt-2">
        {matchedSkills.length}
      </p>
    </div>

    <div className="bg-slate-900 rounded-xl p-5 text-center">
      <h3 className="text-lg font-semibold">Missing</h3>
      <p className="text-red-400 text-3xl font-bold mt-2">
        {missingSkills.length}
      </p>
    </div>

  </div>

</div>
<div className="mt-8">

  <h2 className="text-3xl font-bold mb-6">
    📊 Skill Statistics
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl">

      <h3 className="text-xl font-semibold">
        Total Skills
      </h3>

      <p className="text-5xl font-bold mt-4">
        {matchedSkills.length + missingSkills.length}
      </p>

    </div>

    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl">

      <h3 className="text-xl font-semibold">
        Skills Matched
      </h3>

      <p className="text-5xl font-bold mt-4">
        {matchedSkills.length}
      </p>

    </div>

    <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 shadow-xl">

      <h3 className="text-xl font-semibold">
        Skills Missing
      </h3>

      <p className="text-5xl font-bold mt-4">
        {missingSkills.length}
      </p>

    </div>

  </div>

</div>
<div className="mt-8 bg-slate-800 rounded-2xl p-6">

  <h2 className="text-2xl font-bold mb-6">
    📈 Resume Status
  </h2>

  <div className="space-y-5">

    <div>
      <div className="flex justify-between mb-2">
        <span>ATS Compatibility</span>
        <span>{score}%</span>
      </div>

      <div className="w-full bg-slate-700 h-3 rounded-full">
        <div
          className="bg-cyan-500 h-3 rounded-full"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <span>Matched Skills</span>
        <span>{matchedSkills.length}</span>
      </div>

      <div className="w-full bg-slate-700 h-3 rounded-full">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{
            width: `${(matchedSkills.length / (matchedSkills.length + missingSkills.length)) * 100}%`,
          }}
        />
      </div>
    </div>

  </div>

</div>

      <ul className="space-y-3">

        {suggestions.map((item, index) => (
          <li
            key={index}
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3"
          >
            ✅ {item}
          </li>
        ))}

      </ul>

    </div>

  </>
)}
    </main>
  </>
  );
}