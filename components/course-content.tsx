import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Circle, Play, BookOpen, Trophy, Star, Sparkles } from "lucide-react"
import Link from "next/link"

interface Lesson {
  id: number
  title: string
  completed: boolean
}

interface Module {
  id: number
  title: string
  description: string
  lessons: Lesson[]
}

interface CourseContentProps {
  course: any
  modules: Module[]
  enrollment: any
  userId: number
  courseId: number
}

export function CourseContent({ course, modules, enrollment, userId, courseId }: CourseContentProps) {
  if (!enrollment) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-2">Course Content Preview</h3>
            <p className="text-muted-foreground mb-4">Enroll to unlock the full learning experience</p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>📚 {modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</span>
              <span>⏱️ Self-paced</span>
              <span>🏆 Certificate</span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = modules.reduce((acc, m) => acc + m.lessons.filter(l => l.completed).length, 0)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl">
        {/* Course Progress Summary */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-8 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Course Content
            </h2>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="font-semibold">{completedLessons}/{totalLessons} Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-secondary" />
                <span className="font-semibold">{Math.round((completedLessons / totalLessons) * 100)}% Complete</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-background/50 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {modules.map((module, index) => {
            const moduleCompletedLessons = module.lessons.filter(l => l.completed).length
            const moduleProgress = module.lessons.length > 0 ? (moduleCompletedLessons / module.lessons.length) * 100 : 0

            return (
              <AccordionItem key={module.id} value={`module-${module.id}`} className="border-2 border-border/50 rounded-2xl overflow-hidden bg-gradient-to-r from-background to-primary/5 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-primary text-lg">{index + 1}</span>
                      {moduleProgress === 100 && (
                        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent animate-pulse" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{module.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{module.lessons.length} lessons</span>
                        <span>•</span>
                        <span>{moduleCompletedLessons} completed</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {Math.round(moduleProgress)}%
                        </span>
                      </div>
                    </div>
                    {moduleProgress === 100 && (
                      <Trophy className="w-6 h-6 text-accent animate-bounce" />
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{module.description}</p>
                  <div className="space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <Link key={lesson.id} href={`/courses/${courseId}/lessons/${lesson.id}`}>
                        <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-200 cursor-pointer">
                          <div className="relative">
                            {lesson.completed ? (
                              <CheckCircle2 className="w-6 h-6 text-accent" />
                            ) : (
                              <Circle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            )}
                            {lesson.completed && (
                              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-accent animate-pulse" />
                            )}
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {lessonIndex + 1}. {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                            <Play className="w-4 h-4" />
                            <span className="text-sm">Start</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Completion Celebration */}
        {completedLessons === totalLessons && totalLessons > 0 && (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-8 border border-accent/30">
              <Trophy className="w-16 h-16 text-accent mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-foreground mb-2">🎉 Congratulations!</h3>
              <p className="text-muted-foreground mb-4">You've completed all lessons in this course!</p>
              <Badge className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 text-lg animate-pulse">
                Course Master
              </Badge>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
