"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CelebrationAnimation } from "@/components/celebration-animation"
import { submitQuiz } from "@/app/actions/courses"
import { Trophy, XCircle, CheckCircle2, Star } from "lucide-react"

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
  courseCompleted?: boolean
  previousAnswers?: Record<number, string>
}

export function QuizComponent({ quiz, questions, userId, lessonId, courseId, courseCompleted = false, previousAnswers = {} }: QuizComponentProps) {
  const [answers, setAnswers] = useState<Record<number, string>>(courseCompleted ? previousAnswers : {})
  const [result, setResult] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

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

    if (response?.passed) {
      setShowCelebration(true)
    }
  }

  const allAnswered = questions.every((q) => answers[q.id])

  return (
    <>
      <CelebrationAnimation
        type="exam"
        title="Quiz Passed!"
        description="Excellent work! You've mastered this material."
        points={quiz.points_reward}
        show={showCelebration}
        onComplete={() => setShowCelebration(false)}
      />

      <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-accent animate-pulse" />
            {quiz.title}
          </CardTitle>
          <CardDescription className="text-base">{quiz.description}</CardDescription>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Passing score: {quiz.passing_score}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-accent" />
              <span>Reward: {quiz.points_reward} points</span>
            </div>
          </div>
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
                  onValueChange={courseCompleted ? undefined : (value) => setAnswers({ ...answers, [question.id]: value })}
                >
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option}
                        id={`q${question.id}-${optionIndex}`}
                        disabled={courseCompleted}
                      />
                      <Label
                        htmlFor={`q${question.id}-${optionIndex}`}
                        className={`cursor-pointer ${courseCompleted && answers[question.id] === option ? 'font-bold text-accent' : ''}`}
                      >
                        {option}
                        {courseCompleted && answers[question.id] === option && (
                          <span className="ml-2 text-accent">✓ Your answer</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            {!courseCompleted && (
              <Button
                onClick={handleSubmit}
                disabled={!allAnswered || isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark"
              >
                {isSubmitting ? "Submitting..." : "Submit Quiz"}
              </Button>
            )}

            {courseCompleted && (
              <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-accent font-semibold">Quiz Passed! 🎉</p>
                <p className="text-sm text-muted-foreground">Your answers are highlighted above</p>
              </div>
            )}
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
    </>
  )
}
