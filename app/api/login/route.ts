import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";



export async function POST(request: Request) {
    

  try {

    const body = await request.json();

    const {email, password } = body;

    // ✅ Validation
    if (!email || !password) {
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
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }
   const isPasswordValid = await bcrypt.compare(
    password,
    user.password
);

if (!isPasswordValid) {
    return NextResponse.json(
        {
            message: "Invalid password",
        },
        {
            status: 401,
        }
    );
}
   return NextResponse.json(
  {
    message: "Login Successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      
    },
  },
  {
    status: 200,
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