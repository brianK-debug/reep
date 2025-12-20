import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { BookOpen, Star } from "lucide-react"
import Image from "next/image"

interface Course {
  id: number
  title: string
  description: string
  thumbnail_url?: string
  difficulty: string
  teacher_name: string
  progress?: number
  status?: string
  points_reward?: number
}

interface CourseGridProps {
  courses: Course[]
  enrolled?: boolean
}

export function CourseGrid({ courses, enrolled = false }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <Card className="p-12 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">No courses available</p>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <Card
          key={course.id}
          className="flex flex-col hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-1 duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="h-48 relative overflow-hidden group">
            {course.thumbnail_url ? (
              <Image
                src={course.thumbnail_url || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-300"
              />
            ) : (
              <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BookOpen className="w-16 h-16 text-primary relative z-10 transition-transform group-hover:scale-110 duration-300" />
              </div>
            )}
          </div>

          <CardHeader className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="capitalize">
                {course.difficulty}
              </Badge>
              {course.points_reward && (
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent" />
                  {course.points_reward} pts
                </span>
              )}
            </div>
            <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
            <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            <p className="text-sm text-muted-foreground mt-2">By {course.teacher_name}</p>
          </CardHeader>

          <CardContent className="pt-0">
            {enrolled && typeof course.progress === "number" && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            )}

            <Link href={`/courses/${course.id}`}>
              <Button className="w-full transition-all hover:scale-105">
                {enrolled ? "Continue Learning" : "View Course"}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
