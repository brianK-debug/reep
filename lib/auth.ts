import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "reep-secret-key-change-in-production")

export interface User {
  id: number
  email: string
  full_name: string
  role: "student" | "teacher" | "admin"
  avatar_url?: string
  points: number
  level: number
}

export async function hashPassword(password: string): Promise<string> {
  const bcrypt = await import("bcryptjs")
  return bcrypt.default.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const bcrypt = await import("bcryptjs")
  return bcrypt.default.compare(password, hash)
}

export async function createToken(user: User): Promise<string> {
  return new SignJWT({ user }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(secret)
}

export async function verifyToken(token: string): Promise<User | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload.user as User
  } catch {
    return null
  }
}

export async function getSession(): Promise<User | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")

  if (!token) {
    return null
  }

  return verifyToken(token.value)
}

export async function setSession(user: User): Promise<void> {
  const token = await createToken(user)
  const cookieStore = await cookies()

  cookieStore.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  })
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
}

export async function requireAuth(): Promise<User> {
  const user = await getSession()

  if (!user) {
    throw new Error("Unauthorized")
  }

  return user
}

export async function requireRole(role: "student" | "teacher" | "admin"): Promise<User> {
  const user = await requireAuth()

  if (user.role !== role && user.role !== "admin") {
    throw new Error("Forbidden")
  }

  return user
}
