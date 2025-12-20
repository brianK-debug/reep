"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuizComponent } from "@/components/quiz-component"
import { completeLesson } from "@/app/actions/courses"
import { CheckCircle2, BookOpen, Clock } from "lucide-react"

interface LessonContentProps {
  lesson: {
    id: number
    title: string
    content: string
    video_url?: string
    points_reward: number
  }
  quiz: any
  questions: any[]
  completed: boolean
  userId: number
  courseId: number
}

export function LessonContent({ lesson, quiz, questions, completed, userId, courseId }: LessonContentProps) {
  const [isCompleted, setIsCompleted] = useState(completed)
  const [estimatedTime] = useState(Math.ceil(lesson.content.split(" ").length / 200)) // ~200 words per minute

  const handleComplete = async () => {
    const formData = new FormData()
    formData.append("lessonId", lesson.id.toString())
    formData.append("userId", userId.toString())
    formData.append("courseId", courseId.toString())

    const result = await completeLesson(formData)
    if (result?.success) {
      setIsCompleted(true)
    }
  }

  return (
    <div className="space-y-8">
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-4 flex items-center gap-4">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Estimated time: {estimatedTime} min</p>
            <p className="text-xs text-muted-foreground">Complete to earn {lesson.points_reward} points</p>
          </div>
          {isCompleted && (
            <div className="ml-auto flex items-center gap-2 text-accent">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Completed</span>
            </div>
          )}
        </CardContent>
      </Card>

      {lesson.video_url && (
        <Card>
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-primary" />
              <p className="text-muted-foreground ml-4">Video: {lesson.video_url}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Lesson Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-gray max-w-none">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">{lesson.content}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-accent/30 bg-gradient-to-r from-accent/5 to-transparent">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center gap-2 text-accent mb-2">
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-sm font-medium">End of Lesson</span>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <p className="text-sm text-muted-foreground">
            {quiz ? "Complete the quiz below to test your knowledge" : "Mark as complete to continue"}
          </p>
        </CardContent>
      </Card>

      {quiz && questions.length > 0 && (
        <QuizComponent quiz={quiz} questions={questions} userId={userId} lessonId={lesson.id} courseId={courseId} />
      )}

      {!isCompleted && (
        <Card className="bg-surface border-primary/30">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Mark as Complete</h3>
              <p className="text-sm text-muted-foreground">Earn {lesson.points_reward} points</p>
            </div>
            <Button onClick={handleComplete} className="bg-accent hover:bg-accent/90">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Complete Lesson
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
