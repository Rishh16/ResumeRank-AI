import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("resume") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Send PDF to Python API
    const pythonFormData = new FormData();
    pythonFormData.append("resume", file);

    const response = await fetch("https://resumerank-ai-b0nk.onrender.com/extract", {
      method: "POST",
      body: pythonFormData,
    });

    const data = await response.json();

    return NextResponse.json({
      message: "Resume uploaded successfully",
      text: data.text,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Upload Failed",
      },
      {
        status: 500,
      }
    );
  }
}