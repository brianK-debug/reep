import { SignInForm } from "@/components/sign-in-form"
import Link from "next/link"
import { Zap } from "lucide-react"
import Image from "next/image"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-foreground">REEP</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted">Sign in to continue learning</p>
        </div>

        <SignInForm />

        <p className="text-center mt-6 text-muted">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
