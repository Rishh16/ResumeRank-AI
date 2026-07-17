# 📄 ResumeRank AI – AI Powered Resume Screening System

ResumeRank AI is a full-stack AI-powered Resume Screening platform that analyzes resumes, calculates ATS compatibility scores, identifies matched and missing skills, and provides personalized improvement suggestions for different job roles.

The platform helps students and job seekers optimize their resumes before applying for internships and full-time positions.

> **Note:** This project was developed for educational and portfolio purposes to demonstrate AI-powered resume analysis and ATS (Applicant Tracking System) concepts.

---

# 🚀 Live Demo

Frontend (Vercel)

https://resume-rank-ai-vayw.vercel.app

Backend (Render)

https://resumerank-ai-b0nk.onrender.com

---

# 📸 Preview
Landing Page:
<img width="1871" height="720" alt="image" src="https://github.com/user-attachments/assets/754e2b9a-475b-4c7c-89c0-be3baa47d1ac" />
Dashboard:
<img width="1850" height="770" alt="image" src="https://github.com/user-attachments/assets/6e9bc615-fc08-41eb-9ebf-b010f9d9fed5" />
Resume Analysis:
<img width="1867" height="754" alt="image" src="https://github.com/user-attachments/assets/74fc2fa7-3649-4cb9-a095-98ad21731073" />
History Page:
<img width="1681" height="410" alt="image" src="https://github.com/user-attachments/assets/29053292-a73b-4e4c-848d-b5ff5cba77b5" />

---

# ✨ Features

## 👤 User Module

- User Registration
- User Login
- Secure Password Authentication
- Profile Management
- Logout

---

## 📄 Resume Analysis

- PDF Resume Upload
- AI-based Resume Parsing
- ATS Score Calculation
- Resume Skill Extraction
- Resume Text Extraction
- Resume Analysis Report

---

## 🎯 Job Role Matching

- Select Preferred Job Role
- Skill Matching
- Missing Skills Detection
- Resume Compatibility Score
- Personalized Recommendations

---

## 📊 ATS Features

- ATS Score Generation
- Matched Skills
- Missing Skills
- Improvement Suggestions
- Resume Evaluation

---

## 📚 Analysis History

- View Previous Resume Analyses
- ATS Scores History
- Resume Analysis Timeline

---

## 👤 Profile Module

- View User Details
- Manage Profile
- Easy Navigation

---

# 🛠️ Tech Stack

## Frontend

- Next.js
- React.js
- TypeScript
- Tailwind CSS

## Backend

- Next.js API Routes
- Flask (Python)

## AI / Resume Parser

- PyMuPDF (fitz)

## Database

- PostgreSQL
- Prisma ORM
- Supabase

## Authentication

- bcrypt Password Hashing

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```
ResumeRank-AI/

│
├── app/
│   ├── api/
│   │   ├── signup/
│   │   ├── login/
│   │   ├── upload/
│   │   └── analyze/
│   │
│   ├── dashboard/
│   ├── history/
│   ├── login/
│   ├── profile/
│   ├── signup/
│   └── page.tsx
│
├── components/
│
├── lib/
│   ├── jobRoles.ts
│   ├── skillExtractor.ts
│   └── prisma.ts
│
├── prisma/
│   └── schema.prisma
│
├── python-parser/
│   ├── app.py
│   └── requirements.txt
│
├── public/
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Rishh16/ResumeRank-AI.git
```

## Navigate to Project

```bash
cd ResumeRank-AI
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file

```env
DATABASE_URL=your_database_url

DIRECT_URL=your_direct_database_url
```

---

## Run Next.js Application

```bash
npm run dev
```

---

## Run Flask Resume Parser

Navigate to the Python folder

```bash
cd python-parser
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run Flask

```bash
python app.py
```

---

Open

```
http://localhost:3000
```

---

# 🎯 Learning Outcomes

This project helped me learn:

- Full Stack Web Development
- Next.js App Router
- TypeScript
- Tailwind CSS
- Flask API Development
- PDF Parsing using PyMuPDF
- Resume Text Extraction
- ATS Score Calculation
- Skill Extraction Logic
- Prisma ORM
- PostgreSQL Database Design
- Supabase Integration
- REST API Development
- Password Hashing using bcrypt
- Deployment using Vercel
- Deployment using Render
- Git & GitHub Version Control

---

# 🌐 Deployment

Frontend deployed using **Vercel**

Backend deployed using **Render**

Database hosted on **Supabase PostgreSQL**

---

# 📌 Future Enhancements

- AI Resume Suggestions using LLMs
- Job Description Upload
- Resume Keyword Optimization
- AI Cover Letter Generator
- Multiple Resume Templates
- Resume Download (PDF)
- Email Notifications
- Resume Ranking Dashboard
- Admin Panel
- Recruiter Dashboard
- Resume Comparison
- Dark Mode
- Multi-language Support

---

# 👩‍💻 Author

**Rishika Nakirtha**

GitHub

https://github.com/Rishh16

LinkedIn

(Add your LinkedIn profile link)

---

# 📄 License

This project is developed for educational, portfolio, and learning purposes only.

Licensed under the **MIT License**.
