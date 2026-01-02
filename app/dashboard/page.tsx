import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { CourseGrid } from "@/components/course-grid"
import { RecentAchievements } from "@/components/recent-achievements"

interface User {
  id: string
  email: string
  full_name: string
  role: string
  points: number
  level: number
  avatar_url: string | null
  created_at: Date
}

interface EnrolledCourse {
  id: number
  title: string
  description: string
  thumbnail_url: string | null
  difficulty: string
  progress: number
  status: string
  teacher_name: string
}

interface AvailableCourse {
  id: number
  title: string
  description: string
  thumbnail_url: string | null
  difficulty: string
  points_reward: number
  teacher_name: string
}

interface Achievement {
  type: string
  title: string
  description: string
  points_earned: number
}

interface Badge {
  name: string
  description: string
  icon_url: string
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Redirect teachers to tutor dashboard
  if (user.role === "teacher") {
    redirect("/tutor")
  }

  const userData = await sql`
    SELECT id, email, full_name, role, points, level, avatar_url, created_at
    FROM users
    WHERE id = ${user.id}
  `

  const currentUser = userData[0] as User

  // Calculate level based on points (100 points per level)
  const calculatedLevel = Math.floor(currentUser.points / 100) + 1

  // Update level in database if different
  if (currentUser.level !== calculatedLevel) {
    await sql`
      UPDATE users SET level = ${calculatedLevel} WHERE id = ${currentUser.id}
    `
  }

  currentUser.level = calculatedLevel

  if (!currentUser) {
    throw new Error("User data not found")
  }

  // Fetch enrolled courses
  const enrolledCourses = (await sql`
    SELECT 
      c.id, c.title, c.description, c.thumbnail_url, c.difficulty,
      e.progress, e.status,
      u.full_name as teacher_name
    FROM enrollments e
    JOIN courses c ON e.course_id = c.id
    JOIN users u ON c.teacher_id = u.id
    WHERE e.user_id = ${user.id}
    ORDER BY e.enrolled_at DESC
  `) as EnrolledCourse[]

  // Fetch available courses not enrolled
  const availableCourses = (await sql`
    SELECT 
      c.id, c.title, c.description, c.thumbnail_url, c.difficulty, c.points_reward,
      u.full_name as teacher_name
    FROM courses c
    JOIN users u ON c.teacher_id = u.id
    WHERE c.is_published = true
    AND c.id NOT IN (
      SELECT course_id FROM enrollments WHERE user_id = ${user.id}
    )
    ORDER BY c.created_at DESC
    LIMIT 6
  `) as AvailableCourse[]

  // Fetch recent achievements
  const recentAchievements = (await sql`
    SELECT
      a.type, a.title, a.description, a.points_earned
    FROM achievements a
    WHERE a.user_id = ${user.id}
    ORDER BY a.created_at DESC
    LIMIT 5
  `) as Achievement[]

  // Fetch user badges
  const badges = (await sql`
    SELECT 
      b.name, b.description, b.icon_url, ub.earned_at
    FROM user_badges ub
    JOIN badges b ON ub.badge_id = b.id
    WHERE ub.user_id = ${user.id}
    ORDER BY ub.earned_at DESC
  `) as Badge[]

  const rankData = (await sql`
    SELECT rank FROM leaderboard WHERE id = ${user.id}
  `) as { rank: number | null }[]
  const userRank = rankData[0]?.rank || null

  const streakData = (await sql`
    SELECT 
      COUNT(DISTINCT DATE(completed_at)) as streak
    FROM lesson_progress
    WHERE user_id = ${user.id}
      AND completed = true
      AND completed_at >= NOW() - INTERVAL '7 days'
  `) as { streak: number }[]
  const currentStreak = streakData[0]?.streak || 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <DashboardHeader user={currentUser} />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 mb-8 backdrop-blur-sm border border-border/50">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Welcome back, {currentUser.full_name.split(' ')[0]}! 👋
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to continue your learning journey? You've got this! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-background/50 rounded-full px-4 py-2 border border-border/50">
                <span className="font-semibold text-primary">{currentUser.points}</span> Points Earned
              </div>
              <div className="bg-background/50 rounded-full px-4 py-2 border border-border/50">
                <span className="font-semibold text-accent">Level {currentUser.level}</span>
              </div>
              {userRank && (
                <div className="bg-background/50 rounded-full px-4 py-2 border border-border/50">
                  <span className="font-semibold text-foreground">Rank #{userRank}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <DashboardStats user={currentUser} badges={badges} rank={userRank} streak={currentStreak} />

        {enrolledCourses.length > 0 && (
          <section className="mb-12 animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">📚</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Continue Learning</h2>
            </div>
            <CourseGrid courses={enrolledCourses} enrolled />
          </section>
        )}

        <section className="mb-12 animate-in fade-in slide-in-from-right-4 duration-1000 delay-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-bold">🔍</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Discover New Courses</h2>
          </div>
          <CourseGrid courses={availableCourses} />
        </section>

        {recentAchievements.length > 0 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-secondary font-bold">🏆</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Recent Achievements</h2>
            </div>
            <RecentAchievements achievements={recentAchievements} />
          </section>
        )}

        {/* Motivational Quote Section */}
        <section className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-border/30">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "The beautiful thing about learning is that no one can take it away from you."
            </blockquote>
            <cite className="text-sm font-semibold text-foreground">— B.B. King</cite>
          </div>
        </section>
      </main>
    </div>
  )
}
