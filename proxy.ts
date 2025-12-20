import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "./lib/auth"

const publicRoutes = ["/", "/sign-in", "/sign-up"]
const authRoutes = ["/sign-in", "/sign-up"]

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("auth-token")
  const { pathname } = request.nextUrl

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    if (token && authRoutes.includes(pathname)) {
      const user = await verifyToken(token.value)
      if (user) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    }
    return NextResponse.next()
  }

  // Protect all other routes
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url))
  }

  const user = await verifyToken(token.value)

  if (!user) {
    const response = NextResponse.redirect(new URL("/sign-in", request.url))
    response.cookies.delete("auth-token")
    return response
  }

  // Check admin routes
  if (pathname.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Check teacher routes
  if (pathname.startsWith("/teacher") && user.role !== "teacher" && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
