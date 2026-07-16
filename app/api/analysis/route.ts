import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
     
      role,
      score,
      matchedSkills,
      missingSkills,
      suggestions,
    } = body;

    const analysis = await prisma.resumeAnalysis.create({
  data: {
    
    role,
    score,
    matchedSkills: (matchedSkills ?? []).join(", "),
    missingSkills: (missingSkills ?? []).join(", "),
    suggestions: (suggestions ?? []).join(", "),
  },
});

    return NextResponse.json(
      {
        message: "Analysis Saved",
        analysis,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}