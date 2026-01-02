"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { signUp } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUp, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      setTimeout(() => router.push("/dashboard"), 2000)
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
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" type="text" placeholder="John Doe" required disabled={isPending || !!state?.success} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required disabled={isPending || !!state?.success} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          minLength={8}
          disabled={isPending || !!state?.success}
        />
        <p className="text-sm text-muted">Must be at least 8 characters</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select name="role" defaultValue="student" disabled={isPending || !!state?.success}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="teacher">Tutor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary-dark" disabled={isPending || !!state?.success}>
        {isPending ? "Creating account..." : state?.success ? "Redirecting..." : "Create account"}
      </Button>
    </form>
  )
}
