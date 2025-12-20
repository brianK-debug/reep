import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Award } from "lucide-react"

interface Achievement {
  type: string
  title: string
  description: string
  points_earned: number
  created_at: string
}

interface RecentAchievementsProps {
  achievements: Achievement[]
}

export function RecentAchievements({ achievements }: RecentAchievementsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "course_completed":
        return Trophy
      case "quiz_passed":
        return Star
      default:
        return Award
    }
  }

  return (
    <div className="space-y-4">
      {achievements.map((achievement, index) => {
        const Icon = getIcon(achievement.type)
        return (
          <Card
            key={index}
            className="animate-in fade-in slide-in-from-left-4 fill-mode-both hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 animate-in zoom-in-50 duration-500"
                style={{ animationDelay: `${index * 50 + 100}ms` }}
              >
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-lg font-bold text-accent">+{achievement.points_earned}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
