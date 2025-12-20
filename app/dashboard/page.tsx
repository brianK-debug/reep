import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { CourseGrid } from "@/components/course-grid"
import { RecentAchievements } from "@/components/recent-achievements"

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

  const currentUser = userData[0]

  // Fetch enrolled courses
  const enrolledCourses = await sql`
    SELECT 
      c.id, c.title, c.description, c.thumbnail_url, c.difficulty,
      e.progress, e.status,
      u.full_name as teacher_name
    FROM enrollments e
    JOIN courses c ON e.course_id = c.id
    JOIN users u ON c.teacher_id = u.id
    WHERE e.user_id = ${user.id}
    ORDER BY e.enrolled_at DESC
  `

  // Fetch available courses not enrolled
  const availableCourses = await sql`
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
  `

  // Fetch recent achievements
  const recentAchievements = await sql`
    SELECT 
      a.type, a.title, a.description, a.points_earned, a.created_at
    FROM achievements a
    WHERE a.user_id = ${user.id}
    ORDER BY a.created_at DESC
    LIMIT 5
  `

  // Fetch user badges
  const badges = await sql`
    SELECT 
      b.name, b.description, b.icon_url, ub.earned_at
    FROM user_badges ub
    JOIN badges b ON ub.badge_id = b.id
    WHERE ub.user_id = ${user.id}
    ORDER BY ub.earned_at DESC
  `

  const rankData = await sql`
    SELECT rank FROM leaderboard WHERE id = ${user.id}
  `
  const userRank = rankData[0]?.rank || null

  const streakData = await sql`
    SELECT 
      COUNT(DISTINCT DATE(completed_at)) as streak
    FROM lesson_progress
    WHERE user_id = ${user.id}
      AND completed = true
      AND completed_at >= NOW() - INTERVAL '7 days'
  `
  const currentStreak = streakData[0]?.streak || 0

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={currentUser} />

      <main className="container mx-auto px-4 py-8">
        <DashboardStats user={currentUser} badges={badges} rank={userRank} streak={currentStreak} />

        {enrolledCourses.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">My Courses</h2>
            <CourseGrid courses={enrolledCourses} enrolled />
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explore Courses</h2>
          <CourseGrid courses={availableCourses} />
        </section>

        {recentAchievements.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Recent Achievements</h2>
            <RecentAchievements achievements={recentAchievements} />
          </section>
        )}
      </main>
    </div>
  )
}
