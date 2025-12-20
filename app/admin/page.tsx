import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { AdminStats } from "@/components/admin-stats"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, Users, BookOpen, TrendingUp } from "lucide-react"

export default async function AdminDashboardPage() {
  try {
    const user = await requireRole("admin")

    // Fetch admin statistics
    const [totalUsers] = await sql`
      SELECT COUNT(*) as count FROM users WHERE role = 'student'
    `

    const [totalCourses] = await sql`
      SELECT COUNT(*) as count FROM courses
    `

    const [totalEnrollments] = await sql`
      SELECT COUNT(*) as count FROM enrollments
    `

    const [activeUsers] = await sql`
      SELECT COUNT(DISTINCT user_id) as count 
      FROM lesson_progress 
      WHERE completed_at > NOW() - INTERVAL '7 days'
    `

    const stats = {
      totalUsers: totalUsers.count,
      totalCourses: totalCourses.count,
      totalEnrollments: totalEnrollments.count,
      activeUsers: activeUsers.count,
    }

    // Fetch recent enrollments
    const recentEnrollments = await sql`
      SELECT 
        u.full_name as student_name,
        c.title as course_title,
        e.enrolled_at,
        e.progress
      FROM enrollments e
      JOIN users u ON e.user_id = u.id
      JOIN courses c ON e.course_id = c.id
      ORDER BY e.enrolled_at DESC
      LIMIT 10
    `

    // Fetch course statistics
    const courseStats = await sql`
      SELECT 
        c.id,
        c.title,
        COUNT(DISTINCT e.user_id) as enrollment_count,
        AVG(e.progress) as avg_progress,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.user_id END) as completion_count
      FROM courses c
      LEFT JOIN enrollments e ON c.course_id = e.course_id
      WHERE c.is_published = true
      GROUP BY c.id, c.title
      ORDER BY enrollment_count DESC
      LIMIT 10
    `

    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-lg text-muted-foreground">Monitor platform performance and manage content</p>
            </div>
            <div className="flex gap-4">
              <Link href="/admin/users">
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
              </Link>
              <Link href="/admin/courses">
                <Button>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Manage Courses
                </Button>
              </Link>
            </div>
          </div>

          <AdminStats stats={stats} />

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Enrollments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Recent Enrollments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEnrollments.map((enrollment, index) => {
                    const date = new Date(enrollment.enrolled_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                    return (
                      <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{enrollment.student_name}</p>
                          <p className="text-sm text-muted-foreground truncate">{enrollment.course_title}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="text-sm font-medium text-foreground">{enrollment.progress}%</p>
                          <p className="text-xs text-muted-foreground">{date}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Course Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Top Courses by Enrollment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseStats.map((course, index) => (
                    <div key={course.id} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{course.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {course.enrollment_count} students • {Math.round(course.avg_progress || 0)}% avg progress
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-medium text-accent">{course.completion_count}</p>
                        <p className="text-xs text-muted-foreground">completed</p>
                      </div>
                    </div>
                  ))}
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
