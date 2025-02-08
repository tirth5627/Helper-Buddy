import db from "@/src/db";
import { NextResponse } from "next/server";
import {hash} from "bcrypt";
import * as z from "zod";


const UserSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  first_name: z
    .string()
    .min(3, 'First name is required')
    .max(25, 'First name is too long')
    .regex(/^[A-Za-z]+$/, 'First name should not contain numbers or special characters'),
  last_name: z
    .string()
    .min(3, 'Last name is required')
    .max(25, 'Last name is too long')
    .regex(/^[A-Za-z]+$/, 'Last name should not contain numbers or special characters'),
  password: z
    .string()
    .min(8, 'Password must have at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string().min(1, 'Password confirmation is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export async function POST(req :Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, password,confirmPassword } = UserSchema.parse(body);

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Store user in DB
    const newUser = await db.user.create({
      data: { first_name,last_name, email, password: hashedPassword },
    });
    const {password :newUserPassword,...rest}=newUser;
    return NextResponse.json({ message: "User created", user: rest});
  } catch (error) {
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
