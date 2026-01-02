"use client"

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  return (
    <span className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
