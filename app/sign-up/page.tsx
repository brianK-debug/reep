import { SignUpForm } from "@/components/sign-up-form"
import Link from "next/link"
import { Zap } from "lucide-react"
import Image from "next/image"

export default function SignUpPage() {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
          <p className="text-muted">Start your learning journey today</p>
        </div>

        <SignUpForm />

        <p className="text-center mt-6 text-muted">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
