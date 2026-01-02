import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, Trophy, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

interface LessonNavigationProps {
  courseId: number
  prevLesson: { id: number; title: string } | null
  nextLesson: { id: number; title: string } | null
}

export function LessonNavigation({ courseId, prevLesson, nextLesson }: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-16 pt-12 border-t border-border/30 bg-gradient-to-r from-background/50 to-primary/5 rounded-t-3xl px-8 py-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
      {prevLesson ? (
        <Link href={`/courses/${courseId}/lessons/${prevLesson.id}`}>
          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-2xl px-6 py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ChevronLeft className="w-5 h-5 mr-3 text-primary group-hover:animate-pulse relative z-10" />
            <div className="text-left relative z-10">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Previous</div>
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{prevLesson.title}</div>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="w-48" />
      )}

      {nextLesson ? (
        <Link href={`/courses/${courseId}/lessons/${nextLesson.id}`}>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl px-6 py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-right mr-3 relative z-10">
              <div className="text-xs text-white/90 font-medium uppercase tracking-wide">Next</div>
              <div className="font-semibold text-white group-hover:text-yellow-100 transition-colors">{nextLesson.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:animate-pulse relative z-10" />
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 animate-ping" />
          </Button>
        </Link>
      ) : (
        <Link href={`/courses/${courseId}`}>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-accent via-secondary to-primary hover:from-accent/90 hover:via-secondary/90 hover:to-primary/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl px-6 py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <BookOpen className="w-5 h-5 mr-3 group-hover:animate-pulse relative z-10" />
            <div className="text-right mr-3 relative z-10">
              <div className="text-xs text-white/90 font-medium uppercase tracking-wide">Course</div>
              <div className="font-semibold text-white group-hover:text-yellow-100 transition-colors">Complete</div>
            </div>
            <Trophy className="w-5 h-5 group-hover:animate-bounce relative z-10" />
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 animate-ping" />
            <ArrowRight className="absolute -bottom-1 -right-1 w-3 h-3 text-white/60 opacity-0 group-hover:opacity-100 animate-pulse" />
          </Button>
        </Link>
      )}
    </div>
  )
}
