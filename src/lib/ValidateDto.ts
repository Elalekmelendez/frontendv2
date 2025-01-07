import { plainToInstance, ClassConstructor } from "class-transformer";
import { validate } from "class-validator";
import { NextResponse } from "next/server";

export async function validateDto<T>(body: any, dtoClass: ClassConstructor<T>) {
    const dtoInstance = plainToInstance(dtoClass, body);
    const errors = await validate(dtoInstance as object);

    if (errors.length > 0) {
        const errorMessages = errors.flatMap((error) =>
            Object.values(error.constraints || {})
        );
        return NextResponse.json(
            { message: "Validation failed", errors: errorMessages },
            { status: 400 }
        );
    }
    return null;
}
