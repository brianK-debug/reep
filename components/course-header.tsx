import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { enrollInCourse } from "@/app/actions/courses"
import { BookOpen, Users } from "lucide-react"

interface CourseHeaderProps {
  course: {
    id: number
    title: string
    description: string
    difficulty: string
    teacher_name: string
    points_reward: number
  }
  enrollment: any
  userId: number
}

export function CourseHeader({ course, enrollment, userId }: CourseHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <Badge variant="secondary" className="mb-4 capitalize">
            {course.difficulty}
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-foreground">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{course.description}</p>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span>By {course.teacher_name}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="w-5 h-5" />
              <span>{course.points_reward} points reward</span>
            </div>
          </div>

          {!enrollment && (
            <form action={enrollInCourse}>
              <input type="hidden" name="courseId" value={course.id} />
              <input type="hidden" name="userId" value={userId} />
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Enroll in Course
              </Button>
            </form>
          )}

          {enrollment && (
            <div className="flex items-center gap-4">
              <Badge className="bg-accent text-white">Enrolled</Badge>
              <span className="text-sm text-muted-foreground">Progress: {enrollment.progress}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
