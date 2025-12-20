import { getCurrentUser } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Clock, Star, Target } from "lucide-react"

export default async function ChallengesPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Fetch active daily challenges
  const challenges = await sql`
    SELECT 
      dc.*,
      COALESCE(udc.progress, 0) as user_progress,
      COALESCE(udc.completed, false) as user_completed
    FROM daily_challenges dc
    LEFT JOIN user_daily_challenges udc ON dc.id = udc.challenge_id AND udc.user_id = ${user.id}
    WHERE dc.start_date <= CURRENT_DATE AND dc.end_date >= CURRENT_DATE
    ORDER BY dc.created_at DESC
  `

  // Fetch user streak
  const streakData = await sql`
    SELECT * FROM user_streaks WHERE user_id = ${user.id}
  `
  const streak = streakData[0] || { current_streak: 0, longest_streak: 0 }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Daily Challenges</h1>
          <p className="text-muted-foreground">Complete challenges to earn bonus points and badges</p>
        </div>

        {/* Streak Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground mb-2">{streak.current_streak} days</p>
              <p className="text-sm text-muted-foreground">Keep learning daily to maintain your streak!</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Longest Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground mb-2">{streak.longest_streak} days</p>
              <p className="text-sm text-muted-foreground">Your personal best record</p>
            </CardContent>
          </Card>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => {
            const progressPercent = Math.min((challenge.user_progress / challenge.target_value) * 100, 100)

            return (
              <Card
                key={challenge.id}
                className={`${challenge.user_completed ? "border-accent/30 bg-gradient-to-br from-accent/10 to-transparent" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Target className="w-6 h-6 text-primary" />
                    {challenge.user_completed ? (
                      <Badge className="bg-accent">Completed</Badge>
                    ) : (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Today
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-foreground">
                          {challenge.user_progress} / {challenge.target_value}
                        </span>
                      </div>
                      <Progress value={progressPercent} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Reward</span>
                      <span className="font-semibold text-accent flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {challenge.points_reward} pts
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {challenges.length === 0 && (
          <Card className="p-12 text-center">
            <Target className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No active challenges at the moment</p>
          </Card>
        )}
      </main>
    </div>
  )
}
