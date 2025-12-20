import { Card, CardContent } from "@/components/ui/card"
import { Badge as BadgeUI } from "@/components/ui/badge"
import { Award, Lock } from "lucide-react"

interface Badge {
  id: number
  name: string
  description: string
  icon_url: string
  points_value: number
  earned_at?: string
}

interface BadgeCollectionProps {
  earnedBadges: Badge[]
  lockedBadges: Badge[]
}

export function BadgeCollection({ earnedBadges, lockedBadges }: BadgeCollectionProps) {
  return (
    <div className="space-y-8">
      {/* Earned Badges */}
      {earnedBadges.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            Earned Badges ({earnedBadges.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {earnedBadges.map((badge, index) => (
              <Card
                key={badge.id}
                className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent animate-in fade-in zoom-in-50 fill-mode-both hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center animate-in spin-in-180 duration-700"
                    style={{ animationDelay: `${index * 50 + 100}ms` }}
                  >
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                  <BadgeUI variant="secondary" className="text-xs">
                    +{badge.points_value} pts
                  </BadgeUI>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Locked Badges */}
      {lockedBadges.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5 text-muted-foreground" />
            Locked Badges ({lockedBadges.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {lockedBadges.map((badge, index) => (
              <Card
                key={badge.id}
                className="opacity-60 hover:opacity-80 transition-opacity duration-300 animate-in fade-in fill-mode-both"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted/20 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                  <BadgeUI variant="outline" className="text-xs">
                    +{badge.points_value} pts
                  </BadgeUI>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
