import { UserDto } from "@/dto";
import prisma from "@/lib/prisma";
import { validateDto } from "@/lib/ValidateDto";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const body: UserDto = await request.json();
    const validationResult = await validateDto(body, UserDto);

    if (validationResult) {
      return validationResult;
    }

    const { email, password } = body;

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "El usuario no está registrado" },
        { status: 400 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { message: "La contraseña no es válida" },
        { status: 400 }
      );
    }

    await prisma.users.update({
      where: { id: user.id },
      data: {
        last_login: new Date(),
      },
    })

    return NextResponse.json({
      message: "Usuario logueado con éxito",
      user: {
        id: user?.id,
        email: user?.email,
      },
      status: 200,
    });
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
