import bcrypt from "bcrypt";
import { UserDto } from "@/dto";
import prisma from "@/lib/prisma";
import { validateDto } from "@/lib/ValidateDto";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const body: UserDto = await request.json();
    const validationResult = await validateDto(body, UserDto);

    if (validationResult) {
      return validationResult;
    }

    const { email, password } = body;
    const userExists = await checkUserExists(email);

    if (userExists) {
      return NextResponse.json(
        { message: "El usuario ya está registrado" },
        { status: 400 }
      );
    }

    const newUser = await createUser(email, password);

    const { password: _, ...rest } = newUser;

    return NextResponse.json(
      { message: "Usuario creado con éxito", user: rest },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error interno al procesar la solicitud",
        error: (error as any).message,
      },
      { status: 500 }
    );
  }
}

async function checkUserExists(email: string) {
  const user = await prisma.users.findUnique({
    where: { email },
  });
  return user !== null;
}

async function createUser(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.users.create({
    data: { id: uuidv4(), email, password: hashedPassword },
  });
}
