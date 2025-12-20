import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { CourseForm } from "@/components/course-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>
}) {
  try {
    const user = await requireRole("admin")
    const { courseId } = await params
    const courseIdNum = parseInt(courseId)

    // Fetch course details
    const courses = await sql`
      SELECT
        c.id, c.title, c.description, c.difficulty, c.points_reward,
        c.thumbnail_url, c.teacher_id, c.is_published
      FROM courses c
      WHERE c.id = ${courseIdNum}
    `

    if (courses.length === 0) {
      redirect("/admin/courses")
    }

    const course = courses[0] as {
      id: number
      title: string
      description: string
      difficulty: string
      points_reward: number
      thumbnail_url?: string
      teacher_id: number
      is_published: boolean
    }

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
            <h1 className="text-4xl font-bold text-foreground mb-2">Edit Course</h1>
            <p className="text-lg text-muted-foreground">Update course details and manage content</p>
          </div>

          <CourseForm currentUserId={user.id} course={course} />
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}