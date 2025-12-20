import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

interface LeaderboardEntry {
  id: number
  full_name: string
  avatar_url?: string
  points: number
  level: number
  courses_completed: number
  badges_earned: number
  rank: number
}

interface LeaderboardTableProps {
  leaderboard: LeaderboardEntry[]
  currentUserId: number
}

export function LeaderboardTable({ leaderboard, currentUserId }: LeaderboardTableProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
    }
  }

  return (
    <div className="divide-y divide-border">
      {leaderboard.map((entry) => {
        const initials = entry.full_name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
        const isCurrentUser = entry.id === currentUserId

        return (
          <div
            key={entry.id}
            className={`flex items-center gap-4 p-4 hover:bg-surface transition-colors ${
              isCurrentUser ? "bg-primary/5" : ""
            }`}
          >
            <div className="w-12 flex items-center justify-center flex-shrink-0">{getRankIcon(entry.rank)}</div>

            <Avatar className="w-12 h-12 flex-shrink-0">
              <AvatarImage src={entry.avatar_url || "/placeholder.svg"} />
              <AvatarFallback className="bg-primary text-white">{initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-foreground truncate">{entry.full_name}</p>
                {isCurrentUser && <Badge variant="secondary">You</Badge>}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Level {entry.level}</span>
                <span>{entry.courses_completed} courses</span>
                <span>{entry.badges_earned} badges</span>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-xl font-bold text-primary">{entry.points.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
