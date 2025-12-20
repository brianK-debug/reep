import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, TrendingUp, Edit } from "lucide-react"

export default async function AdminCoursesPage() {
  try {
    const user = await requireRole("admin")

    // Fetch all courses with stats
    const courses = await sql`
      SELECT 
        c.id,
        c.title,
        c.description,
        c.difficulty,
        c.points_reward,
        c.is_published,
        c.created_at,
        u.full_name as teacher_name,
        COUNT(DISTINCT e.user_id) as enrollment_count,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.user_id END) as completion_count,
        AVG(e.progress) as avg_progress,
        COUNT(DISTINCT m.id) as module_count,
        COUNT(DISTINCT l.id) as lesson_count
      FROM courses c
      JOIN users u ON c.teacher_id = u.id
      LEFT JOIN enrollments e ON c.id = e.course_id
      LEFT JOIN modules m ON c.id = m.course_id
      LEFT JOIN lessons l ON m.id = l.module_id
      GROUP BY c.id, c.title, c.description, c.difficulty, c.points_reward, c.is_published, c.created_at, u.full_name
      ORDER BY c.created_at DESC
    `

    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Course Management</h1>
              <p className="text-lg text-muted-foreground">View and manage all platform courses</p>
            </div>
          </div>

          <div className="grid gap-6">
            {courses.map((course) => {
              const completionRate =
                course.enrollment_count > 0 ? Math.round((course.completion_count / course.enrollment_count) * 100) : 0

              return (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{course.title}</CardTitle>
                          <Badge variant={course.is_published ? "default" : "secondary"}>
                            {course.is_published ? "Published" : "Draft"}
                          </Badge>
                          <Badge variant="outline" className="capitalize">
                            {course.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">By {course.teacher_name}</p>
                        <p className="text-muted-foreground line-clamp-2">{course.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-lg font-bold text-foreground">{course.enrollment_count}</p>
                          <p className="text-xs text-muted-foreground">Enrollments</p>
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

                  </CardContent>
                </Card>
              )
            })}
          </div>
        </main>
      </div>
    )
  } catch (error) {
    redirect("/dashboard")
  }
}
