import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { CourseHeader } from "@/components/course-header"
import { CourseContent } from "@/components/course-content"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Fetch course details
  const courses = await sql`
    SELECT 
      c.*, 
      u.full_name as teacher_name
    FROM courses c
    JOIN users u ON c.teacher_id = u.id
    WHERE c.id = ${Number.parseInt(courseId)}
  `

  if (courses.length === 0) {
    redirect("/dashboard")
  }

  const course = courses[0] as {
    id: number
    title: string
    description: string
    difficulty: string
    teacher_name: string
    points_reward: number
  }

  // Check enrollment
  const enrollments = await sql`
    SELECT * FROM enrollments 
    WHERE user_id = ${user.id} AND course_id = ${Number.parseInt(courseId)}
  `

  const enrollment = enrollments[0]

  // Fetch modules and lessons
  const modules = await sql`
    SELECT * FROM modules 
    WHERE course_id = ${Number.parseInt(courseId)}
    ORDER BY order_index
  `

  // Fetch lessons for each module
  const lessonsData = await sql`
    SELECT l.*, m.id as module_id
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE m.course_id = ${Number.parseInt(courseId)}
    ORDER BY m.order_index, l.order_index
  `

  // Fetch lesson progress
  const progressData = await sql`
    SELECT lesson_id FROM lesson_progress
    WHERE user_id = ${user.id} AND completed = true
  `

  const completedLessonIds = new Set(progressData.map((p) => p.lesson_id))

  // Group lessons by module
  const modulesWithLessons = modules.map((module) => ({
    id: module.id,
    title: module.title,
    description: module.description,
    lessons: lessonsData
      .filter((l) => l.module_id === module.id)
      .map((l) => ({
        id: l.id,
        title: l.title,
        completed: completedLessonIds.has(l.id),
      })),
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="border-b border-border/50 bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <CourseHeader course={course} enrollment={enrollment} userId={user.id} />
      <CourseContent
        course={course}
        modules={modulesWithLessons}
        enrollment={enrollment}
        userId={user.id}
        courseId={Number.parseInt(courseId)}
      />
    </div>
  )
}
