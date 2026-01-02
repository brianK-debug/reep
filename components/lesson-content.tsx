"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressRing } from "@/components/progress-ring"
import { QuizComponent } from "@/components/quiz-component"
import { CelebrationAnimation } from "@/components/celebration-animation"
import { completeLesson } from "@/app/actions/courses"
import { CheckCircle2, BookOpen, Clock, Star, Trophy, Zap } from "lucide-react"

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
  const [showLessonCelebration, setShowLessonCelebration] = useState(false)
  const [showModuleCelebration, setShowModuleCelebration] = useState(false)
  const [moduleData, setModuleData] = useState<{title: string, points: number} | null>(null)
  const [lessonPointsEarned, setLessonPointsEarned] = useState(0)
  const [readingProgress, setReadingProgress] = useState(0)
  const [estimatedTime] = useState(Math.ceil(lesson.content.split(" ").length / 200)) // ~200 words per minute

  useEffect(() => {
    // Simulate reading progress as user scrolls
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleComplete = async () => {
    const formData = new FormData()
    formData.append("lessonId", lesson.id.toString())
    formData.append("userId", userId.toString())
    formData.append("courseId", courseId.toString())

    const result = await completeLesson(formData)
    if (result?.success) {
      setIsCompleted(true)
      setLessonPointsEarned(result.pointsEarned || 0)
      setShowLessonCelebration(true)

      if (result.moduleCompleted) {
        setModuleData({ title: result.moduleTitle || '', points: result.modulePoints || 0 })
        // Delay module celebration to show after lesson celebration
        setTimeout(() => {
          setShowModuleCelebration(true)
        }, 6000)
      }
    }
  }

  return (
    <>
      <CelebrationAnimation
        type="lesson"
        title="Lesson Completed!"
        description={`Great job finishing "${lesson.title}"`}
        points={lessonPointsEarned || lesson.points_reward}
        show={showLessonCelebration}
        onComplete={() => setShowLessonCelebration(false)}
      />

      {moduleData && (
        <CelebrationAnimation
          type="module"
          title="Module Completed!"
          description={`Congratulations! You've mastered "${moduleData.title}"`}
          points={moduleData.points}
          show={showModuleCelebration}
          onComplete={() => setShowModuleCelebration(false)}
        />
      )}

      <div className="space-y-8">
        {/* Progress and Stats Card */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Estimated time: {estimatedTime} min</p>
                    <p className="text-xs text-muted-foreground">Complete to earn {lesson.points_reward} points</p>
                  </div>
                </div>
              </div>

              {isCompleted && (
                <div className="flex items-center gap-2 text-accent animate-in slide-in-from-right-4 duration-500">
                  <CheckCircle2 className="w-5 h-5 animate-bounce" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>

            {/* Reading Progress */}
            {!isCompleted && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Reading Progress</span>
                  <span className="font-medium">{Math.round(readingProgress)}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
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


      {quiz && questions.length > 0 && (
        <QuizComponent quiz={quiz} questions={questions} userId={userId} lessonId={lesson.id} courseId={courseId} />
      )}

       {!isCompleted && (
         <Card className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
           <CardContent className="p-6">
             <div className="flex items-center justify-between">
               <div className="space-y-2">
                 <h3 className="font-semibold text-foreground flex items-center gap-2">
                   <Zap className="w-5 h-5 text-accent animate-pulse" />
                   Ready to Complete?
                 </h3>
                 <p className="text-sm text-muted-foreground">Earn {lesson.points_reward} points and unlock achievements</p>
                 <div className="flex items-center gap-4 text-xs text-muted-foreground">
                   <div className="flex items-center gap-1">
                     <Star className="w-3 h-3 text-yellow-500" />
                     <span>+{lesson.points_reward} XP</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <Trophy className="w-3 h-3 text-accent" />
                     <span>Achievement Unlocked</span>
                   </div>
                 </div>
               </div>
               <Button
                 onClick={handleComplete}
                 className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                 size="lg"
               >
                 <CheckCircle2 className="w-5 h-5 mr-2 animate-pulse" />
                 Complete Lesson
               </Button>
             </div>
           </CardContent>
         </Card>
       )}
     </div>
   </>
 )
}
