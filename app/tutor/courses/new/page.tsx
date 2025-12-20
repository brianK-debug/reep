import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { CourseWizard } from "@/components/course-wizard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function NewTutorCoursePage() {
  try {
    const user = await requireRole("teacher")

    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/tutor">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Create New Course</h1>
            <p className="text-lg text-muted-foreground">Build a complete course with modules, lessons, and quizzes</p>
          </div>

          <CourseWizard teachers={[{ id: user.id, full_name: user.full_name }]} />
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}