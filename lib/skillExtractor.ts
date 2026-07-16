export const SKILLS = [
  // Programming Languages
  "Java",
  "Python",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "R",

  // Web Development
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",

  // Databases
  "SQL",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "SQLite",

  // AI / ML
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Neural Networks",
  "Computer Vision",
  "Natural Language Processing",
  "NLP",
  "Generative AI",
  "LLM",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "Pandas",
  "NumPy",
  "Matplotlib",

  // Data Science
  "Data Science",
  "Data Analysis",
  "Data Visualization",
  "Statistics",

  // Cloud
  "AWS",
  "Azure",
  "Google Cloud",
  "Oracle Cloud",
  "Docker",
  "Kubernetes",

  // Backend
  "Spring Boot",
  "REST API",
  "Microservices",

  // Version Control
  "Git",
  "GitHub",

  // Tools
  "VS Code",
  "Postman",
  "Jupyter Notebook",
  "Linux",

  // Concepts
  "OOP",
  "Operating Systems",
  "Computer Networks",
  "DBMS",
  "Data Structures",
  "Algorithms",

  // Soft Skills
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Leadership",
  "Time Management"
];
export function extractSkills(text: string): string[] {
  const lowerText = text.toLowerCase();

  return SKILLS.filter((skill) =>
    lowerText.includes(skill.toLowerCase())
  );
}
export function calculateScore(
  resumeSkills: string[],
  jobSkills: string[]
) {
  const matchedSkills = resumeSkills.filter((skill) =>
    jobSkills.includes(skill)
  );

  const missingSkills = jobSkills.filter(
    (skill) => !resumeSkills.includes(skill)
  );

  const score =
    jobSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / jobSkills.length) * 100);

  return {
    score,
    matchedSkills,
    missingSkills,
  };
}