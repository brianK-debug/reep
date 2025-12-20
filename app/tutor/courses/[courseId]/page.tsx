import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, TrendingUp, Award, BookOpen, Clock } from "lucide-react"

export default async function TutorCourseDetailsPage({
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
        c.thumbnail_url, c.is_published, c.created_at
      FROM courses c
      WHERE c.id = ${courseIdNum} AND c.teacher_id = ${user.id}
    `

    if (courses.length === 0) {
      redirect("/tutor")
    }

    const course = courses[0]

    // Fetch enrolled students with their progress
    const enrolledStudents = await sql`
      SELECT
        u.id,
        u.full_name,
        u.email,
        u.points,
        u.level,
        e.progress,
        e.status,
        e.enrolled_at,
        COUNT(DISTINCT lp.lesson_id) as completed_lessons,
        COUNT(DISTINCT CASE WHEN lp.completed = true THEN lp.lesson_id END) as total_completed_lessons
      FROM enrollments e
      JOIN users u ON e.user_id = u.id
      LEFT JOIN lesson_progress lp ON u.id = lp.user_id
      LEFT JOIN lessons l ON lp.lesson_id = l.id
      LEFT JOIN modules m ON l.module_id = m.id
      WHERE e.course_id = ${courseIdNum} AND m.course_id = ${courseIdNum}
      GROUP BY u.id, u.full_name, u.email, u.points, u.level, e.progress, e.status, e.enrolled_at
      ORDER BY e.enrolled_at DESC
    `

    // Fetch badges earned by students in this course
    const studentBadges = await sql`
      SELECT
        u.full_name as student_name,
        b.name as badge_name,
        b.description as badge_description,
        ub.earned_at
      FROM user_badges ub
      JOIN users u ON ub.user_id = u.id
      JOIN badges b ON ub.badge_id = b.id
      JOIN enrollments e ON u.id = e.user_id
      WHERE e.course_id = ${courseIdNum}
      ORDER BY ub.earned_at DESC
    `

    // Fetch course statistics
    const [stats] = await sql`
      SELECT
        COUNT(DISTINCT e.user_id) as total_students,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.user_id END) as completed_students,
        AVG(e.progress) as avg_progress,
        COUNT(DISTINCT m.id) as total_modules,
        COUNT(DISTINCT l.id) as total_lessons
      FROM courses c
      LEFT JOIN enrollments e ON c.id = e.course_id
      LEFT JOIN modules m ON c.id = m.course_id
      LEFT JOIN lessons l ON m.id = l.module_id
      WHERE c.id = ${courseIdNum}
    `

    const completionRate = stats.total_students > 0 ? Math.round((stats.completed_students / stats.total_students) * 100) : 0

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{course.title}</h1>
                <p className="text-lg text-muted-foreground">{course.description}</p>
              </div>
              <Link href={`/tutor/courses/${courseIdNum}/edit`}>
                <Button variant="outline">
                  Edit Course
                </Button>
              </Link>
            </div>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total_students}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completionRate}%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Modules</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total_modules}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lessons</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total_lessons}</div>
              </CardContent>
            </Card>
          </div>

          {/* Course Content Management */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Module
                  </Button>
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Lesson
                  </Button>
                  <Button variant="outline">
                    <Award className="w-4 h-4 mr-2" />
                    Add Quiz
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use these buttons to add modules, lessons, and quizzes to your course content.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enrolled Students */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Enrolled Students ({enrolledStudents.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledStudents.length === 0 ? (
                    <p className="text-muted-foreground">No students enrolled yet</p>
                  ) : (
                    enrolledStudents.map((student) => (
                      <div key={student.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{student.full_name}</p>
                          <p className="text-sm text-muted-foreground truncate">{student.email}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="text-sm font-medium text-foreground">{student.progress}%</p>
                          <p className="text-xs text-muted-foreground">
                            {student.status === 'completed' ? 'Completed' : 'In Progress'}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Student Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Student Achievements ({studentBadges.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentBadges.length === 0 ? (
                    <p className="text-muted-foreground">No achievements earned yet</p>
                  ) : (
                    studentBadges.slice(0, 10).map((badge, index) => (
                      <div key={index} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{badge.student_name}</p>
                          <p className="text-sm text-muted-foreground truncate">{badge.badge_name}</p>
                        </div>
                        <div className="text-xs text-muted-foreground flex-shrink-0">
                          {new Date(badge.earned_at).toLocaleDateString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}