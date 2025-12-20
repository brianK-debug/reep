"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle2, Trophy, Target } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

interface ProfileStatsProps {
  stats: {
    courses_completed: number
    courses_in_progress: number
    lessons_completed: number
    quizzes_passed: number
  }
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in-50 duration-500">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                <AnimatedCounter value={stats.courses_completed} />
              </p>
              <p className="text-sm text-muted-foreground">Courses Completed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className="animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform"
        style={{ animationDelay: "100ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-in zoom-in-50 duration-500"
              style={{ animationDelay: "100ms" }}
            >
              <Target className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                <AnimatedCounter value={stats.courses_in_progress} />
              </p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className="animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform"
        style={{ animationDelay: "200ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in-50 duration-500"
              style={{ animationDelay: "200ms" }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                <AnimatedCounter value={stats.lessons_completed} />
              </p>
              <p className="text-sm text-muted-foreground">Lessons Done</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className="animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform"
        style={{ animationDelay: "300ms" }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-in zoom-in-50 duration-500"
              style={{ animationDelay: "300ms" }}
            >
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                <AnimatedCounter value={stats.quizzes_passed} />
              </p>
              <p className="text-sm text-muted-foreground">Quizzes Passed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
