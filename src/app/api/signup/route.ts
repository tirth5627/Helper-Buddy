import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { db } from "../../../lib/db";


const UserSchema =  z
.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export async function POST(req :Request) {
    console.log(db)
  try {
    const body = await req.json();
    const { firstName, lastName, email, password,confirmPassword } = UserSchema.parse(body);

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in DB
    const newUser = await db.user.create({
      data: { firstName,lastName, email, password: hashedPassword },
    });
    const {password :newUserPassword,...rest}=newUser;
    return NextResponse.json({success:true, user: rest});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}