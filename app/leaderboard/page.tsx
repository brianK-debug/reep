import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { LeaderboardTable } from "@/components/leaderboard-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default async function LeaderboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Fetch leaderboard data
  const leaderboard = await sql`
    SELECT 
      u.id,
      u.full_name,
      u.avatar_url,
      u.points,
      u.level,
      COUNT(DISTINCT CASE WHEN e.status = 'completed' THEN e.course_id END) as courses_completed,
      COUNT(DISTINCT ub.badge_id) as badges_earned,
      ROW_NUMBER() OVER (ORDER BY u.points DESC) as rank
    FROM users u
    LEFT JOIN enrollments e ON u.id = e.user_id
    LEFT JOIN user_badges ub ON u.id = ub.user_id
    WHERE u.role = 'student'
    GROUP BY u.id, u.full_name, u.avatar_url, u.points, u.level
    ORDER BY u.points DESC
    LIMIT 100
  `

  // Find current user's rank
  const currentUserRank = leaderboard.find((entry) => entry.id === user.id)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-foreground">Leaderboard</h1>
            <p className="text-lg text-muted-foreground">See how you rank among other learners</p>
          </div>

          {currentUserRank && (
            <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Your Rank</p>
                      <p className="text-3xl font-bold text-foreground">#{currentUserRank.rank}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Points</p>
                    <p className="text-2xl font-bold text-primary">{currentUserRank.points.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                Top Learners
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <LeaderboardTable leaderboard={leaderboard} currentUserId={user.id} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
