"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Award, TrendingUp, Flame, Crown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
          <div className="flex items-center justify-between">
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
        className="border-border animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform"
        style={{ animationDelay: "300ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{streak > 0 ? "Day Streak" : "Global Rank"}</p>
              {streak > 0 ? (
                <p className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Flame className="w-6 h-6 text-orange-500" />
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
