import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { CourseWizard } from "@/components/course-wizard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function EditTutorCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>
}) {
  try {
    const user = await requireRole("teacher")
    const { courseId } = await params
    const courseIdNum = parseInt(courseId)

    // Fetch course details and ensure it belongs to this teacher
    const courses = await sql`
      SELECT
        c.id, c.title, c.description, c.difficulty, c.points_reward,
        c.thumbnail_url, c.teacher_id, c.is_published
      FROM courses c
      WHERE c.id = ${courseIdNum} AND c.teacher_id = ${user.id}
    `

    if (courses.length === 0) {
      redirect("/tutor")
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

    // Fetch existing modules, lessons, and quizzes
    const modulesData = await sql`
      SELECT
        m.id, m.title, m.description,
        l.id as lesson_id, l.title as lesson_title, l.content as lesson_content, l.points_reward as lesson_points,
        q.id as quiz_id, q.title as quiz_title, q.passing_score, q.points_reward as quiz_points,
        qq.id as question_id, qq.question, qq.options, qq.correct_answer
      FROM modules m
      LEFT JOIN lessons l ON m.id = l.module_id
      LEFT JOIN quizzes q ON m.id = q.module_id
      LEFT JOIN quiz_questions qq ON q.id = qq.quiz_id
      WHERE m.course_id = ${courseIdNum}
      ORDER BY m.order_index, l.order_index, qq.order_index
    `

    // Group the data into modules structure
    const modulesMap = new Map()
    modulesData.forEach((row: any) => {
      if (!modulesMap.has(row.id)) {
        modulesMap.set(row.id, {
          id: row.id.toString(),
          title: row.title,
          description: row.description,
          lessons: [],
          quiz: undefined
        })
      }

      const module = modulesMap.get(row.id)

      // Add lesson if not already added
      if (row.lesson_id && !module.lessons.find((l: any) => l.id === row.lesson_id.toString())) {
        module.lessons.push({
          id: row.lesson_id.toString(),
          title: row.lesson_title,
          content: row.lesson_content,
          points_reward: row.lesson_points
        })
      }

      // Add quiz if exists
      if (row.quiz_id && !module.quiz) {
        module.quiz = {
          title: row.quiz_title,
          passing_score: row.passing_score,
          points_reward: row.quiz_points,
          questions: []
        }
      }

      // Add question if exists
      if (row.question_id && module.quiz) {
        module.quiz.questions.push({
          question: row.question,
          answers: JSON.parse(row.options),
          correct_answer_index: row.correct_answer.charCodeAt(0) - 65 // Convert A,B,C to 0,1,2
        })
      }
    })

    const modules = Array.from(modulesMap.values())

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
            <h1 className="text-4xl font-bold text-foreground mb-2">Edit Course</h1>
            <p className="text-lg text-muted-foreground">Update course details, modules, lessons, and quizzes</p>
          </div>

          <CourseWizard teachers={[{ id: user.id, full_name: user.full_name }]} course={course} modules={modules} />
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}