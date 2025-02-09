"use server"

// import { PrismaClient } from "@prisma/client"
import { db } from "@/src/lib/db"
import bcrypt from "bcryptjs"
import { signUpSchema, loginSchema } from "../../lib/validations"


export async function signUp(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())

  try {
    const validatedData = signUpSchema.parse(rawFormData)

    const existingUser = await db.user.findUnique({
      where: { email: validatedData.email },
    })

    if (existingUser) {
      return { error: "Email already in use" }
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10)

    const user = await db.user.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        password: hashedPassword,
        phoneNumber: validatedData.phoneNumber,
      },
    })

    return { success: true, user }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }
    }
    return { error: "An unexpected error occurred" }
  }
}

export async function login(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())

  try {
    const validatedData = loginSchema.parse(rawFormData)
    // The actual login is handled by NextAuth, this is just for validation
    return { success: true }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }
    }
    return { error: "An unexpected error occurred" }
  }
}

