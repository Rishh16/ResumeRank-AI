import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { name, email, password } = body;

    // ✅ Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // 👇 PASTE THE CODE HERE
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
   return NextResponse.json(
  {
    message: "Signup Successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    },
  },
  {
    status: 201,
  }
);

}catch (error) {
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