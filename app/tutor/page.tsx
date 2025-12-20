import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Users, TrendingUp, Award } from "lucide-react"

export default async function TutorDashboardPage() {
  try {
    const user = await requireRole("teacher")

    // Fetch tutor's courses with stats
    const courses = await sql`
      SELECT
        c.id,
        c.title,
        c.description,
        c.thumbnail_url,
        c.difficulty,
        c.points_reward,
        c.is_published,
        c.created_at,
        COUNT(DISTINCT e.user_id) as enrollment_count,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.user_id END) as completion_count,
        AVG(e.progress) as avg_progress,
        COUNT(DISTINCT m.id) as module_count,
        COUNT(DISTINCT l.id) as lesson_count
      FROM courses c
      LEFT JOIN enrollments e ON c.id = e.course_id
      LEFT JOIN modules m ON c.id = m.course_id
      LEFT JOIN lessons l ON m.id = l.module_id
      WHERE c.teacher_id = ${user.id}
      GROUP BY c.id, c.title, c.description, c.thumbnail_url, c.difficulty, c.points_reward, c.is_published, c.created_at
      ORDER BY c.created_at DESC
    `

    // Fetch total students across all tutor's courses
    const [totalStudents] = await sql`
      SELECT COUNT(DISTINCT e.user_id) as count
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      WHERE c.teacher_id = ${user.id}
    `

    // Fetch total completions
    const [totalCompletions] = await sql`
      SELECT COUNT(DISTINCT e.user_id) as count
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      WHERE c.teacher_id = ${user.id} AND e.status = 'completed'
    `

    // Fetch badges earned by students in tutor's courses
    const [totalBadges] = await sql`
      SELECT COUNT(*) as count
      FROM user_badges ub
      JOIN achievements a ON ub.badge_id = a.id
      JOIN users u ON a.user_id = u.id
      JOIN enrollments e ON u.id = e.user_id
      JOIN courses c ON e.course_id = c.id
      WHERE c.teacher_id = ${user.id}
    `

    const stats = {
      totalCourses: courses.length,
      totalStudents: totalStudents.count,
      totalCompletions: totalCompletions.count,
      totalBadges: totalBadges.count,
    }

    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Tutor Dashboard</h1>
              <p className="text-lg text-muted-foreground">Manage your courses and track student progress</p>
            </div>
            <Link href="/tutor/courses/new">
              <Button>
                <BookOpen className="w-4 h-4 mr-2" />
                Create Course
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalCourses}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalStudents}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completions</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalCompletions}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalBadges}</div>
              </CardContent>
            </Card>
          </div>

          {/* Courses List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">My Courses</h2>
            {courses.length === 0 ? (
              <Card className="p-12 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">You haven't created any courses yet</p>
                <Link href="/tutor/courses/new">
                  <Button>Create Your First Course</Button>
                </Link>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => {
                  const completionRate =
                    course.enrollment_count > 0 ? Math.round((course.completion_count / course.enrollment_count) * 100) : 0

                  return (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="h-40 relative overflow-hidden w-56 mx-auto">
                        {course.thumbnail_url ? (
                          <Image
                            src={course.thumbnail_url}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <BookOpen className="w-16 h-16 text-primary" />
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl">{course.title}</CardTitle>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                course.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {course.is_published ? "Published" : "Draft"}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{course.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-lg font-bold text-foreground">{course.enrollment_count}</p>
                              <p className="text-xs text-muted-foreground">Students</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-accent" />
                            <div>
                              <p className="text-lg font-bold text-foreground">{completionRate}%</p>
                              <p className="text-xs text-muted-foreground">Completion</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-lg font-bold text-foreground">{course.module_count}</p>
                              <p className="text-xs text-muted-foreground">Modules</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-accent" />
                            <div>
                              <p className="text-lg font-bold text-foreground">{course.lesson_count}</p>
                              <p className="text-xs text-muted-foreground">Lessons</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-lg font-bold text-foreground">{Math.round(course.avg_progress || 0)}%</p>
                            <p className="text-xs text-muted-foreground">Avg Progress</p>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Link href={`/tutor/courses/${course.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Link href={`/tutor/courses/${course.id}/edit`}>
                            <Button variant="outline" size="sm">
                              Edit Course
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}
