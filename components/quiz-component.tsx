"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { submitQuiz } from "@/app/actions/courses"
import { Trophy, XCircle, CheckCircle2 } from "lucide-react"

interface Quiz {
  id: number
  title: string
  description: string
  passing_score: number
  points_reward: number
}

interface Question {
  id: number
  question: string
  options: string[]
  order_index: number
}

interface QuizComponentProps {
  quiz: Quiz
  questions: Question[]
  userId: number
  lessonId: number
  courseId: number
}

export function QuizComponent({ quiz, questions, userId, lessonId, courseId }: QuizComponentProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [result, setResult] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("quizId", quiz.id.toString())
    formData.append("userId", userId.toString())
    formData.append("lessonId", lessonId.toString())
    formData.append("courseId", courseId.toString())
    formData.append("answers", JSON.stringify(answers))

    const response = await submitQuiz(formData)
    setResult(response)
    setIsSubmitting(false)
  }

  const allAnswered = questions.every((q) => answers[q.id])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          {quiz.title}
        </CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
        <p className="text-sm text-muted-foreground">
          Passing score: {quiz.passing_score}% | Reward: {quiz.points_reward} points
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {!result ? (
          <>
            {questions.map((question, index) => (
              <div key={question.id} className="space-y-3">
                <Label className="text-base font-semibold text-foreground">
                  {index + 1}. {question.question}
                </Label>
                <RadioGroup
                  value={answers[question.id]}
                  onValueChange={(value) => setAnswers({ ...answers, [question.id]: value })}
                >
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q${question.id}-${optionIndex}`} />
                      <Label htmlFor={`q${question.id}-${optionIndex}`} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <Button
              onClick={handleSubmit}
              disabled={!allAnswered || isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark"
            >
              {isSubmitting ? "Submitting..." : "Submit Quiz"}
            </Button>
          </>
        ) : (
          <div className="text-center py-8">
            {result.passed ? (
              <>
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Congratulations!</h3>
                <p className="text-lg text-muted-foreground mb-4">You scored {result.score}% and passed the quiz!</p>
                <p className="text-accent font-semibold">+{quiz.points_reward} points earned</p>
              </>
            ) : (
              <>
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Keep Trying!</h3>
                <p className="text-lg text-muted-foreground mb-4">You scored {result.score}%. Try again!</p>
                <Button
                  onClick={() => {
                    setResult(null)
                    setAnswers({})
                  }}
                >
                  Retake Quiz
                </Button>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
