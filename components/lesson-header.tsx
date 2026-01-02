import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressRing } from "@/components/progress-ring"
import { ArrowLeft, CheckCircle2, Star, Trophy, Target, Clock, BookOpen, Award } from "lucide-react"
import Link from "next/link"

interface LessonHeaderProps {
  lesson: {
    title: string
    module_title: string
    points_reward: number
  }
  courseId: number
  completed: boolean
  courseProgress?: number
  userLevel?: number
  userPoints?: number
}

export function LessonHeader({
  lesson,
  courseId,
  completed,
  courseProgress = 0,
  userLevel = 1,
  userPoints = 0
}: LessonHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl animate-pulse delay-500" />

      <div className="relative container mx-auto px-4 py-4">
        {/* Top Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-xs">
          <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1 border border-border/30">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-muted-foreground">~2-3 hours to complete</span>
          </div>
          <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1 border border-border/30">
            <BookOpen className="w-3 h-3 text-accent" />
            <span className="text-muted-foreground">Self-paced</span>
          </div>
          <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1 border border-border/30">
            <Award className="w-3 h-3 text-secondary" />
            <span className="text-muted-foreground">Certificate</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          {/* Lesson Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <Target className="w-3 h-3 mr-1" />
                {lesson.module_title}
              </Badge>
              {completed && (
                <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white animate-in zoom-in-50 duration-500">
                  <CheckCircle2 className="w-3 h-3 mr-1 animate-pulse" />
                  Completed
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-in slide-in-from-left-4 duration-700">
              {lesson.title}
            </h1>

            {/* Gamification Stats */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-full px-3 py-1 border border-yellow-500/20">
                <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
                <span className="font-semibold text-yellow-700 dark:text-yellow-400">{lesson.points_reward} XP</span>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full px-3 py-1 border border-accent/20">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="font-semibold text-accent">Level {userLevel}</span>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-full px-3 py-1 border border-secondary/20">
                <Star className="w-4 h-4 text-secondary" />
                <span className="font-semibold text-secondary">{userPoints} Total Points</span>
              </div>
            </div>
          </div>

        </div>

        {/* Enhanced Progress Bar */}
        <div className="bg-background/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${completed ? 'bg-accent animate-pulse' : 'bg-primary animate-pulse'}`} />
              <span className="font-medium text-foreground">Lesson Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{completed ? "100%" : "In Progress"}</span>
              {completed && <Star className="w-4 h-4 text-accent animate-spin" />}
            </div>
          </div>

          <div className="relative">
            <div className="w-full bg-border/50 rounded-full h-4 overflow-hidden shadow-inner">
              <div
                className={`h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1500 ease-out rounded-full ${
                  completed ? 'shadow-lg shadow-accent/30' : 'shadow-md'
                }`}
                style={{ width: completed ? '100%' : '35%' }}
              />
            </div>

            {/* Progress milestones */}
            <div className="flex justify-between mt-2 px-1">
              {[25, 50, 75, 100].map((milestone) => (
                <div key={milestone} className="flex flex-col items-center">
                  <div className={`w-2 h-2 rounded-full ${
                    (completed || milestone <= 35) ? 'bg-accent' : 'bg-border'
                  } transition-colors duration-500`} />
                  <span className="text-xs text-muted-foreground mt-1">{milestone}%</span>
                </div>
              ))}
            </div>
          </div>

          {completed && (
            <div className="mt-4 text-center">
              <p className="text-sm text-accent font-medium animate-in fade-in-50 duration-500">
                🎉 Lesson completed! Great job! 🎉
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
