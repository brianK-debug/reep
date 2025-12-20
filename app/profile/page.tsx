import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProfileStats } from "@/components/profile-stats"
import { BadgeCollection } from "@/components/badge-collection"
import { AchievementsList } from "@/components/achievements-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default async function ProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Fetch user stats
  const stats = await sql`
    SELECT 
      COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.course_id END) as courses_completed,
      COUNT(DISTINCT CASE WHEN e.status = 'active' THEN e.course_id END) as courses_in_progress,
      COUNT(DISTINCT lp.lesson_id) as lessons_completed,
      COUNT(DISTINCT qa.quiz_id) as quizzes_passed
    FROM users u
    LEFT JOIN enrollments e ON u.id = e.user_id
    LEFT JOIN lesson_progress lp ON u.id = lp.user_id AND lp.completed = true
    LEFT JOIN quiz_attempts qa ON u.id = qa.user_id AND qa.passed = true
    WHERE u.id = ${user.id}
    GROUP BY u.id
  `

  const userStats = stats[0] || {
    courses_completed: 0,
    courses_in_progress: 0,
    lessons_completed: 0,
    quizzes_passed: 0,
  }

  // Fetch badges
  const badges = await sql`
    SELECT 
      b.id, b.name, b.description, b.icon_url, b.points_value,
      ub.earned_at
    FROM user_badges ub
    JOIN badges b ON ub.badge_id = b.id
    WHERE ub.user_id = ${user.id}
    ORDER BY ub.earned_at DESC
  `

  // Fetch all available badges
  const allBadges = await sql`
    SELECT id, name, description, icon_url, points_value
    FROM badges
    ORDER BY points_value DESC
  `

  const earnedBadgeIds = new Set(badges.map((b) => b.id))
  const lockedBadges = allBadges.filter((b) => !earnedBadgeIds.has(b.id))

  // Fetch achievements
  const achievements = await sql`
    SELECT type, title, description, points_earned, created_at
    FROM achievements
    WHERE user_id = ${user.id}
    ORDER BY created_at DESC
    LIMIT 20
  `

  // Calculate level progress
  const pointsForNextLevel = user.level * 100
  const pointsInCurrentLevel = user.points % 100
  const levelProgress = (pointsInCurrentLevel / pointsForNextLevel) * 100

  const initials = user.full_name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary text-white text-2xl">{initials}</AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2 text-foreground">{user.full_name}</h1>
                  <p className="text-muted-foreground mb-4">{user.email}</p>

                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Level {user.level}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={levelProgress} className="w-40 h-2" />
                        <span className="text-sm text-muted-foreground">{Math.round(levelProgress)}%</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {pointsInCurrentLevel} / {pointsForNextLevel} XP
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{user.points.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Total Points</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">{badges.length}</p>
                        <p className="text-sm text-muted-foreground">Badges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <ProfileStats stats={userStats} />

          {/* Badges */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Badge Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <BadgeCollection earnedBadges={badges} lockedBadges={lockedBadges} />
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          {achievements.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <AchievementsList achievements={achievements} />
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
