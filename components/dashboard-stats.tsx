"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Award, TrendingUp, Flame, Crown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/animated-counter"

interface DashboardStatsProps {
  user: {
    points: number
    level: number
  }
  badges: Array<{
    name: string
    icon_url: string
  }>
  rank: number | null
  streak: number
}

export function DashboardStats({ user, badges, rank, streak }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Points</p>
              <p className="text-3xl font-bold text-foreground">
                <AnimatedCounter value={user.points} />
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in-50 duration-500">
              <Star className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform"
        style={{ animationDelay: "100ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Level</p>
              <p className="text-3xl font-bold text-foreground">
                <AnimatedCounter value={user.level} />
              </p>
            </div>
            <div
              className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-in zoom-in-50 duration-500"
              style={{ animationDelay: "100ms" }}
            >
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress to Level {user.level + 1}</span>
              <span>{user.points % 100}/100 XP</span>
            </div>
            <Progress value={(user.points % 100)} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card
        className="border-border animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform"
        style={{ animationDelay: "200ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Badges Earned</p>
              <p className="text-3xl font-bold text-foreground">
                <AnimatedCounter value={badges.length} />
              </p>
            </div>
            <div
              className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center animate-in zoom-in-50 duration-500"
              style={{ animationDelay: "200ms" }}
            >
              <Award className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className={`border-border animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform ${streak > 0 ? 'border-orange-200 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-950/20' : ''}`}
        style={{ animationDelay: "300ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{streak > 0 ? "Day Streak 🔥" : "Global Rank"}</p>
              {streak > 0 ? (
                <p className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Flame className={`w-6 h-6 text-orange-500 ${streak >= 7 ? 'animate-pulse' : ''}`} />
                  <AnimatedCounter value={streak} />
                </p>
              ) : rank ? (
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  <Crown className="w-4 h-4 mr-1" />#{rank}
                </Badge>
              ) : (
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  <Trophy className="w-4 h-4 mr-1" />
                  Unranked
                </Badge>
              )}
            </div>
            {streak > 0 && (
              <div
                className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center animate-in zoom-in-50 duration-500"
                style={{ animationDelay: "300ms" }}
              >
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">🔥</span>
              </div>
            )}
          </div>
          {streak > 0 && (
            <div className="mt-4">
              <p className="text-xs text-muted-foreground">
                {streak >= 7 ? "Amazing! Keep it up! 🎉" : "Keep the momentum going!"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
