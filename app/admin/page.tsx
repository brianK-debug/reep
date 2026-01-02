import { requireRole } from "@/lib/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, BookOpen, Trophy, GraduationCap, Award } from "lucide-react"

export default async function AdminDashboardPage() {
  try {
    const user = await requireRole("admin")

    // Fetch admin statistics
    const [totalLearners] = await sql`
      SELECT COUNT(*) as count FROM users WHERE role = 'student'
    `

    const [totalTutors] = await sql`
      SELECT COUNT(*) as count FROM users WHERE role = 'teacher'
    `

    const [totalCourses] = await sql`
      SELECT COUNT(*) as count FROM courses
    `

    const [totalEnrollments] = await sql`
      SELECT COUNT(*) as count FROM enrollments
    `

    const [activeLearners] = await sql`
      SELECT COUNT(DISTINCT user_id) as count
      FROM lesson_progress
      WHERE completed_at > NOW() - INTERVAL '7 days'
    `

    const stats = {
      totalLearners: totalLearners.count,
      totalTutors: totalTutors.count,
      totalCourses: totalCourses.count,
      totalEnrollments: totalEnrollments.count,
      activeLearners: activeLearners.count,
    }

    // Fetch learners with detailed stats
    const learners = await sql`
      SELECT
        u.id,
        u.full_name,
        u.email,
        u.points,
        u.level,
        u.created_at,
        COUNT(DISTINCT e.course_id) as enrolled_courses,
        COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.course_id END) as completed_courses,
        COUNT(DISTINCT lp.lesson_id) as lessons_completed,
        COUNT(DISTINCT ub.badge_id) as badges_earned,
        ROW_NUMBER() OVER (ORDER BY u.points DESC) as rank
      FROM users u
      LEFT JOIN enrollments e ON u.id = e.user_id
      LEFT JOIN lesson_progress lp ON u.id = lp.user_id AND lp.completed = true
      LEFT JOIN user_badges ub ON u.id = ub.user_id
      WHERE u.role = 'student'
      GROUP BY u.id, u.full_name, u.email, u.points, u.level, u.created_at
      ORDER BY u.points DESC
      LIMIT 50
    `

    // Fetch tutors and their courses
    const tutors = await sql`
      SELECT
        u.id,
        u.full_name,
        u.email,
        u.created_at,
        COUNT(DISTINCT c.id) as courses_created,
        COUNT(DISTINCT e.user_id) as total_students,
        AVG(e.progress) as avg_student_progress
      FROM users u
      LEFT JOIN courses c ON u.id = c.teacher_id
      LEFT JOIN enrollments e ON c.id = e.course_id
      WHERE u.role = 'teacher'
      GROUP BY u.id, u.full_name, u.email, u.created_at
      ORDER BY courses_created DESC
    `

    // Fetch leaderboard
    const leaderboard = await sql`
      SELECT * FROM leaderboard LIMIT 20
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

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalLearners}</p>
                    <p className="text-sm text-muted-foreground">Total Learners</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalTutors}</p>
                    <p className="text-sm text-muted-foreground">Total Tutors</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalCourses}</p>
                    <p className="text-sm text-muted-foreground">Total Courses</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalEnrollments}</p>
                    <p className="text-sm text-muted-foreground">Total Enrollments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.activeLearners}</p>
                    <p className="text-sm text-muted-foreground">Active This Week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learners Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Learners Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Rank</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Level</th>
                      <th className="text-left p-2">Points</th>
                      <th className="text-left p-2">Enrolled</th>
                      <th className="text-left p-2">Completed</th>
                      <th className="text-left p-2">Lessons</th>
                      <th className="text-left p-2">Badges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {learners.map((learner) => (
                      <tr key={learner.id} className="border-b hover:bg-muted/50">
                        <td className="p-2">
                          <Badge variant={learner.rank <= 3 ? "default" : "secondary"}>
                            #{learner.rank}
                          </Badge>
                        </td>
                        <td className="p-2 font-medium">{learner.full_name}</td>
                        <td className="p-2">{learner.level}</td>
                        <td className="p-2">{learner.points}</td>
                        <td className="p-2">{learner.enrolled_courses}</td>
                        <td className="p-2">{learner.completed_courses}</td>
                        <td className="p-2">{learner.lessons_completed}</td>
                        <td className="p-2">{learner.badges_earned}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Tutors Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  Tutors & Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tutors.map((tutor) => (
                    <div key={tutor.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{tutor.full_name}</p>
                        <p className="text-sm text-muted-foreground">{tutor.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{tutor.courses_created} courses</p>
                        <p className="text-xs text-muted-foreground">{tutor.total_students} students</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Top Learners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => (
                    <div key={entry.id} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{entry.full_name}</p>
                        <p className="text-sm text-muted-foreground">Level {entry.level} • {entry.points} points</p>
                      </div>
                      <Badge variant="outline">#{entry.rank}</Badge>
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
