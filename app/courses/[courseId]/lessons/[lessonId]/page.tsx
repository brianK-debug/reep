import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { LessonHeader } from "@/components/lesson-header"
import { LessonContent } from "@/components/lesson-content"
import { LessonNavigation } from "@/components/lesson-navigation"

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>
}) {
  const { courseId, lessonId } = await params
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Fetch lesson
  const lessons = await sql`
    SELECT l.*, m.title as module_title, m.course_id
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE l.id = ${Number.parseInt(lessonId)}
  `

  if (lessons.length === 0) {
    redirect("/dashboard")
  }

  const lesson = lessons[0] as {
    id: number
    title: string
    content: string
    video_url?: string
    points_reward: number
    module_title: string
    course_id: number
  }

  // Verify lesson belongs to course
  if (lesson.course_id !== Number.parseInt(courseId)) {
    redirect("/dashboard")
  }

  // Check enrollment
  const enrollments = await sql`
    SELECT * FROM enrollments
    WHERE user_id = ${user.id} AND course_id = ${Number.parseInt(courseId)}
  `

  if (enrollments.length === 0) {
    redirect(`/courses/${courseId}`)
  }

  // Fetch progress
  const progress = await sql`
    SELECT * FROM lesson_progress
    WHERE user_id = ${user.id} AND lesson_id = ${Number.parseInt(lessonId)}
  `

  const completed = progress.length > 0 && progress[0].completed

  // Quizzes are now at module level, not lesson level
  const quiz = null
  const questions: any[] = []

  // Get all lessons in course for navigation
  const allLessons = await sql`
    SELECT l.id, l.title, m.order_index as module_order, l.order_index
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE m.course_id = ${Number.parseInt(courseId)}
    ORDER BY m.order_index, l.order_index
  `

  const currentIndex = allLessons.findIndex((l) => l.id === Number.parseInt(lessonId))
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] as { id: number; title: string } : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] as { id: number; title: string } : null

  return (
    <div className="min-h-screen bg-background">
      <LessonHeader lesson={lesson} courseId={Number.parseInt(courseId)} completed={completed} />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <LessonContent
          lesson={lesson}
          quiz={quiz}
          questions={questions}
          completed={completed}
          userId={user.id}
          courseId={Number.parseInt(courseId)}
        />

        <LessonNavigation courseId={Number.parseInt(courseId)} prevLesson={prevLesson} nextLesson={nextLesson} />
      </main>
    </div>
  )
}
