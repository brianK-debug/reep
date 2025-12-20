import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BarChart3, TrendingUp, Users, BookOpen } from "lucide-react"

export default async function AdminAnalyticsPage() {
  try {
    const user = await requireRole("admin")

    // Fetch daily active users (last 7 days)
    const dailyActive = await sql`
      SELECT 
        DATE(completed_at) as date,
        COUNT(DISTINCT user_id) as active_users
      FROM lesson_progress
      WHERE completed_at > NOW() - INTERVAL '7 days'
      GROUP BY DATE(completed_at)
      ORDER BY date DESC
    `

    // Fetch enrollment trends
    const enrollmentTrends = await sql`
      SELECT 
        DATE(enrolled_at) as date,
        COUNT(*) as enrollments
      FROM enrollments
      WHERE enrolled_at > NOW() - INTERVAL '30 days'
      GROUP BY DATE(enrolled_at)
      ORDER BY date DESC
      LIMIT 10
    `

    // Fetch completion rates by course
    const completionRates = await sql`
      SELECT 
        c.title,
        COUNT(DISTINCT e.user_id) as total_enrollments,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.user_id END) as completions,
        ROUND(COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.user_id END)::numeric / 
              NULLIF(COUNT(DISTINCT e.user_id), 0) * 100, 1) as completion_rate
      FROM courses c
      LEFT JOIN enrollments e ON c.id = e.course_id
      WHERE c.is_published = true
      GROUP BY c.id, c.title
      HAVING COUNT(DISTINCT e.user_id) > 0
      ORDER BY completion_rate DESC
      LIMIT 10
    `

    // Fetch user growth
    const userGrowth = await sql`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as new_users
      FROM users
      WHERE created_at > NOW() - INTERVAL '30 days'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
      LIMIT 10
    `

    // Fetch engagement metrics
    const [engagementMetrics] = await sql`
      SELECT 
        COUNT(DISTINCT lp.user_id) as active_learners,
        COUNT(DISTINCT lp.lesson_id) as lessons_completed,
        COUNT(DISTINCT qa.user_id) as quiz_takers,
        AVG(qa.score) as avg_quiz_score
      FROM lesson_progress lp
      LEFT JOIN quiz_attempts qa ON lp.user_id = qa.user_id
      WHERE lp.completed_at > NOW() - INTERVAL '7 days'
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Platform Analytics</h1>
            <p className="text-lg text-muted-foreground">Detailed insights and performance metrics</p>
          </div>

          {/* Engagement Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{engagementMetrics.active_learners || 0}</p>
                    <p className="text-sm text-muted-foreground">Active Learners</p>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{engagementMetrics.lessons_completed || 0}</p>
                    <p className="text-sm text-muted-foreground">Lessons Completed</p>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{engagementMetrics.quiz_takers || 0}</p>
                    <p className="text-sm text-muted-foreground">Quiz Takers</p>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {Math.round(engagementMetrics.avg_quiz_score || 0)}%
                    </p>
                    <p className="text-sm text-muted-foreground">Avg Quiz Score</p>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Course Completion Rates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Course Completion Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completionRates.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground truncate">{course.title}</p>
                        <span className="text-sm font-bold text-accent">{course.completion_rate}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full transition-all"
                          style={{ width: `${course.completion_rate}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {course.completions} of {course.total_enrollments} completed
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Active Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Daily Active Users (Last 7 Days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dailyActive.map((day, index) => {
                    const date = new Date(day.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                    return (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-surface">
                        <span className="text-sm text-muted-foreground">{date}</span>
                        <span className="text-lg font-bold text-foreground">{day.active_users}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Recent Enrollments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {enrollmentTrends.map((day, index) => {
                    const date = new Date(day.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                    return (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-surface">
                        <span className="text-sm text-muted-foreground">{date}</span>
                        <span className="text-lg font-bold text-foreground">{day.enrollments}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* User Growth */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  User Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userGrowth.map((day, index) => {
                    const date = new Date(day.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                    return (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-surface">
                        <span className="text-sm text-muted-foreground">{date}</span>
                        <span className="text-lg font-bold text-foreground">{day.new_users}</span>
                      </div>
                    )
                  })}
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
