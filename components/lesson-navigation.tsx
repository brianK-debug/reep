import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface LessonNavigationProps {
  courseId: number
  prevLesson: { id: number; title: string } | null
  nextLesson: { id: number; title: string } | null
}

export function LessonNavigation({ courseId, prevLesson, nextLesson }: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
      {prevLesson ? (
        <Link href={`/courses/${courseId}/lessons/${prevLesson.id}`}>
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous Lesson
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <Link href={`/courses/${courseId}/lessons/${nextLesson.id}`}>
          <Button>
            Next Lesson
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      ) : (
        <Link href={`/courses/${courseId}`}>
          <Button>Back to Course</Button>
        </Link>
      )}
    </div>
  )
}
