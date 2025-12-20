import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Circle, Play } from "lucide-react"
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
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-lg text-muted-foreground">Enroll in this course to access the content</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Course Content</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {modules.map((module, index) => (
            <AccordionItem key={module.id} value={`module-${module.id}`} className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.lessons.length} lessons</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <Link key={lesson.id} href={`/courses/${courseId}/lessons/${lesson.id}`}>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors cursor-pointer">
                        {lesson.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className="flex-1 text-foreground">{lesson.title}</span>
                        <Play className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
