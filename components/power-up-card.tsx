"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Clock, Shield } from "lucide-react"
import { purchasePowerUp } from "@/app/actions/shop"
import { useRouter } from "next/navigation"

interface PowerUpCardProps {
  powerUp: {
    id: number
    name: string
    description: string
    effect_type: string
    effect_value: number
    cost_points: number
    duration_hours: number
  }
  userPoints: number
  userId: number
  index: number
}

const effectIcons = {
  point_multiplier: Zap,
  quiz_assist: Shield,
  streak_protection: Clock,
}

export function PowerUpCard({ powerUp, userPoints, userId, index }: PowerUpCardProps) {
  const [isPurchasing, setIsPurchasing] = useState(false)
  const router = useRouter()
  const canAfford = userPoints >= powerUp.cost_points

  const Icon = effectIcons[powerUp.effect_type as keyof typeof effectIcons] || Zap

  const handlePurchase = async () => {
    if (!canAfford || isPurchasing) return

    setIsPurchasing(true)
    const formData = new FormData()
    formData.append("powerUpId", powerUp.id.toString())
    formData.append("userId", userId.toString())

    const result = await purchasePowerUp(formData)

    if (result?.success) {
      router.refresh()
    } else {
      alert(result?.error || "Failed to purchase power-up")
    }
    setIsPurchasing(false)
  }

  return (
    <Card
      className={`flex flex-col hover:shadow-lg transition-all hover:scale-105 duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both ${!canAfford ? "opacity-60" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{powerUp.name}</CardTitle>
        <CardDescription>{powerUp.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-end space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Duration</span>
            <Badge variant="outline">{powerUp.duration_hours}h</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Effect</span>
            <span className="font-medium text-foreground">{powerUp.effect_value}x boost</span>
          </div>
        </div>

        <Button
          onClick={handlePurchase}
          disabled={!canAfford || isPurchasing}
          className="w-full transition-all hover:scale-105"
        >
          <Star className="w-4 h-4 mr-2" />
          {isPurchasing ? "Purchasing..." : `Buy for ${powerUp.cost_points} pts`}
        </Button>

        {!canAfford && <p className="text-xs text-destructive text-center">Not enough points</p>}
      </CardContent>
    </Card>
  )
}
