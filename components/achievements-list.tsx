import { Trophy, Star, Award, BookOpen, Target } from "lucide-react"

interface Achievement {
  type: string
  title: string
  description: string
  points_earned: number
  created_at: string
}

interface AchievementsListProps {
  achievements: Achievement[]
}

export function AchievementsList({ achievements }: AchievementsListProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "course_completed":
        return Trophy
      case "course_enrolled":
        return BookOpen
      case "lesson_completed":
        return Target
      case "quiz_passed":
        return Star
      default:
        return Award
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case "course_completed":
        return "text-accent"
      case "course_enrolled":
        return "text-primary"
      case "lesson_completed":
        return "text-primary"
      case "quiz_passed":
        return "text-accent"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-3">
      {achievements.map((achievement, index) => {
        const Icon = getIcon(achievement.type)
        const colorClass = getColor(achievement.type)
        const date = new Date(achievement.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })

        return (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface transition-colors">
            <div className={`w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-5 h-5 ${colorClass}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground">{achievement.title}</h4>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-accent">+{achievement.points_earned}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
