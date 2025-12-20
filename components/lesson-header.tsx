import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface LessonHeaderProps {
  lesson: {
    title: string
    module_title: string
  }
  courseId: number
  completed: boolean
}

export function LessonHeader({ lesson, courseId, completed }: LessonHeaderProps) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/courses/${courseId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Course
              </Button>
            </Link>
            <div>
              <p className="text-sm text-muted-foreground">{lesson.module_title}</p>
              <h1 className="text-xl font-bold text-foreground">{lesson.title}</h1>
            </div>
          </div>
          {completed && (
            <Badge className="bg-accent text-white">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Completed
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
