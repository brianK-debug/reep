"use server"

import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { hashPassword, verifyPassword, setSession, clearSession, getSession, type User } from "@/lib/auth"

export async function signUp(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const fullName = formData.get("fullName") as string
  const role = formData.get("role") as string

  if (!email || !password || !fullName || !role) {
    return { error: "All fields are required" }
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters" }
  }

  if (!["student", "teacher"].includes(role)) {
    return { error: "Invalid role selected" }
  }

  try {
    // Check if user already exists
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email}
    `

    if (existingUser.length > 0) {
      return { error: "User with this email already exists" }
    }

    // Create new user
    const passwordHash = await hashPassword(password)
    const result = await sql`
      INSERT INTO users (email, password_hash, full_name, role)
      VALUES (${email}, ${passwordHash}, ${fullName}, ${role})
      RETURNING id, email, full_name, role, avatar_url, points, level
    `

    const user = result[0] as User

    await setSession(user)
    return { success: "Account created successfully! Welcome to REEP." }
  } catch (error) {
    console.error("[v0] Sign up error:", error)
    return { error: "Failed to create account. Please try again." }
  }
}

export async function signIn(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  let user: User & { password_hash: string } | null = null

  try {
    const result = await sql`
      SELECT id, email, password_hash, full_name, role, avatar_url, points, level
      FROM users
      WHERE email = ${email}
    `

    if (result.length === 0) {
      return { error: "Invalid email or password" }
    }

    user = result[0] as User & { password_hash: string }

    const isValid = await verifyPassword(password, user.password_hash)

    if (!isValid) {
      return { error: "Invalid email or password" }
    }

    const { password_hash, ...userWithoutPassword } = user

    await setSession(userWithoutPassword as User)
    return { success: "Signed in successfully! Redirecting...", role: user!.role }
  }
  catch (error) {
    console.error("[v0] Sign in error:", error)
    return { error: "Failed to sign in. Please try again." }
  }
}

export async function signOut() {
  await clearSession()
  redirect("/")
}

export async function getCurrentUser() {
  return await getSession()
}
