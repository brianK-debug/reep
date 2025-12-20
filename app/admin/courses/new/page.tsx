import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { CourseForm } from "@/components/course-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function NewCoursePage() {
  try {
    const user = await requireRole("admin")

    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/admin/courses">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Create New Course</h1>
            <p className="text-lg text-muted-foreground">Add a new course to the platform</p>
          </div>

          <CourseForm currentUserId={user.id} />
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}