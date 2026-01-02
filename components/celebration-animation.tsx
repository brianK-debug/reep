"use client"

import { useEffect, useState } from "react"
import { Trophy, Star, Sparkles, CheckCircle2 } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

interface CelebrationAnimationProps {
  type: "lesson" | "module" | "exam" | "course"
  title: string
  description: string
  points: number
  show: boolean
  onComplete: () => void
}

export function CelebrationAnimation({
  type,
  title,
  description,
  points,
  show,
  onComplete
}: CelebrationAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      setShowConfetti(true)

      // Hide confetti after animation
      const confettiTimer = setTimeout(() => {
        setShowConfetti(false)
      }, 3000)

      // Hide modal after longer duration
      const modalTimer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onComplete, 500)
      }, 5000)

      return () => {
        clearTimeout(confettiTimer)
        clearTimeout(modalTimer)
      }
    }
  }, [show, onComplete])

  const getIcon = () => {
    switch (type) {
      case "lesson":
        return <CheckCircle2 className="w-16 h-16 text-accent animate-bounce" />
      case "module":
        return <Star className="w-16 h-16 text-yellow-500 animate-pulse" />
      case "exam":
        return <Trophy className="w-16 h-16 text-accent animate-bounce" />
      case "course":
        return <Sparkles className="w-16 h-16 text-purple-500 animate-spin" />
      default:
        return <CheckCircle2 className="w-16 h-16 text-accent" />
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case "lesson":
        return "from-accent/20 to-accent/5"
      case "module":
        return "from-yellow-500/20 to-yellow-500/5"
      case "exam":
        return "from-accent/20 to-accent/5"
      case "course":
        return "from-purple-500/20 to-purple-500/5"
      default:
        return "from-accent/20 to-accent/5"
    }
  }

  if (!show && !isVisible) return null

  return (
    <>
      {/* Confetti Background */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-ping ${
                ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"][
                  Math.floor(Math.random() * 6)
                ]
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Celebration Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div
          className={`relative bg-gradient-to-br ${getBackgroundColor()} border-2 border-white/20 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in-50 duration-500`}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: "3s",
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {getIcon()}

            <h2 className="text-3xl font-bold text-foreground mt-4 mb-2 animate-in slide-in-from-bottom-4 duration-700">
              {title}
            </h2>

            <p className="text-lg text-foreground mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-200">
              {description}
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-xl font-bold text-foreground">
                  <AnimatedCounter value={points} duration={1500} />
                </span>
                <span className="text-foreground">points earned!</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="px-6 py-2 bg-white/20 rounded-full text-sm text-foreground animate-in slide-in-from-bottom-4 duration-700 delay-500">
                Keep up the great work! 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}