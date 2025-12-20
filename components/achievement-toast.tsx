"use client"

import { useEffect, useState } from "react"
import { Trophy, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AchievementToastProps {
  title: string
  description: string
  points: number
  show: boolean
  onClose: () => void
}

export function AchievementToast({ title, description, points, show, onClose }: AchievementToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show && !isVisible) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg p-4 max-w-sm border border-primary/20 animate-in slide-in-from-bottom-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-in zoom-in-50 duration-300">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-white/90 mb-2">{description}</p>
            <p className="text-xs text-white/80 font-medium">+{points} points earned!</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
