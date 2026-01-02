import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Award, Sparkles } from "lucide-react"

interface Achievement {
  type: string
  title: string
  description: string
  points_earned: number
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
    <div className="grid gap-4">
      {achievements.map((achievement, index) => {
        const Icon = getIcon(achievement.type)
        return (
          <Card
            key={index}
            className="group animate-in fade-in slide-in-from-left-4 fill-mode-both hover:scale-[1.02] hover:shadow-lg transition-all duration-300 border-accent/20 bg-gradient-to-r from-accent/5 to-transparent"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6 flex items-center gap-4">
              <div
                className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 animate-in zoom-in-50 duration-500 group-hover:scale-110 transition-transform"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <Icon className="w-7 h-7 text-accent" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="bg-accent/10 rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="font-bold text-accent">+{achievement.points_earned}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">points earned</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
