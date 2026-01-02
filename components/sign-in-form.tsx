"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export function SignInForm() {
  const [state, formAction, isPending] = useActionState(signIn, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success && state?.role) {
      const redirectPath = state.role === "admin" ? "/admin/analytics" : state.role === "teacher" ? "/tutor" : "/dashboard"
      setTimeout(() => router.push(redirectPath), 2000)
    }
  }, [state, router])

  return (
    <form action={formAction} className="space-y-6 bg-background p-8 rounded-xl border border-border shadow-lg">
      {state?.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state?.success && (
        <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{state.success}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required disabled={isPending || !!state?.success} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" placeholder="••••••••" required disabled={isPending || !!state?.success} />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary-dark" disabled={isPending || !!state?.success}>
        {isPending ? "Signing in..." : state?.success ? "Redirecting..." : "Sign in"}
      </Button>
    </form>
  )
}
