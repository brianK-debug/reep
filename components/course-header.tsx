import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { enrollInCourse } from "@/app/actions/courses"
import { BookOpen, Users, Target, Trophy, Star, Sparkles, Clock, Award, Zap } from "lucide-react"

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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4 mb-4">
            <Badge variant="secondary" className="capitalize">
              {course.difficulty}
            </Badge>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.teacher_name}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>{course.points_reward} points reward</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">{course.title}</h1>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">{course.description}</p>

          {!enrollment && (
            <div className="bg-gradient-to-r from-background/80 to-primary/5 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Ready to Start Learning? 🚀</h2>
                <p className="text-muted-foreground">Join thousands of learners on this exciting journey!</p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 text-center border border-primary/10">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Earn Points</h3>
                  <p className="text-sm text-muted-foreground">Get {course.points_reward} points for completing this course</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 text-center border border-accent/10">
                  <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Get Certified</h3>
                  <p className="text-sm text-muted-foreground">Earn a completion certificate</p>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-4 text-center border border-secondary/10">
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Learn at Your Pace</h3>
                  <p className="text-sm text-muted-foreground">Access content anytime, anywhere</p>
                </div>
              </div>


              {/* Enroll Button */}
              <div className="text-center">
                <form action={enrollInCourse} className="inline-block">
                  <input type="hidden" name="courseId" value={course.id} />
                  <input type="hidden" name="userId" value={userId} />
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Enroll Now - Start Learning! 🎓
                    <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-3">Free to enroll • No commitment required</p>
              </div>
            </div>
          )}

          {enrollment && (
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-accent text-white px-3 py-1">Enrolled</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    <span>Your Progress</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="text-lg font-bold text-accent">{enrollment.progress}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <Progress value={enrollment.progress} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>{enrollment.progress}% Complete</span>
                  <span>100%</span>
                </div>
              </div>
              {enrollment.progress === 100 && (
                <div className="mt-4 text-center">
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 animate-pulse">
                    🎉 Course Completed!
                  </Badge>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
