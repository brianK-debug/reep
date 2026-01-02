"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Plus, Trash2, ChevronLeft, ChevronRight, Upload, X } from "lucide-react"
import { createCourseWithContent, updateCourse, uploadCourseThumbnail } from "@/app/actions/courses"
import { useToast } from "@/hooks/use-toast"

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  quiz?: Quiz
}

interface Lesson {
  id: string
  title: string
  content: string
  points_reward: number
}

interface Quiz {
  title: string
  passing_score: number
  points_reward: number
  questions: QuizQuestion[]
}

interface QuizQuestion {
  question: string
  answers: string[]
  correct_answer_index: number
}

interface CourseWizardProps {
  teachers: { id: number; full_name: string }[]
  course?: {
    id: number
    title: string
    description: string
    difficulty: string
    points_reward: number
    thumbnail_url?: string
    teacher_id: number
    is_published: boolean
  }
  modules?: Array<{
    id: string
    title: string
    description: string
    lessons: Array<{
      id: string
      title: string
      content: string
      points_reward: number
    }>
    quiz?: {
      title: string
      passing_score: number
      points_reward: number
      questions: Array<{
        question: string
        answers: string[]
        correct_answer_index: number
      }>
    }
  }>
}

export function CourseWizard({ teachers, course, modules: existingModules }: CourseWizardProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const [courseData, setCourseData] = useState({
    title: course?.title || "",
    description: course?.description || "",
    difficulty: course?.difficulty || "beginner",
    points_reward: course?.points_reward || 100,
    thumbnail_url: course?.thumbnail_url || "",
    teacher_id: course?.teacher_id.toString() || teachers[0]?.id.toString() || "",
    is_published: course?.is_published ?? true,
  })

  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string>(course?.thumbnail_url || "")

  const [modules, setModules] = useState<Module[]>(existingModules || [])

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnailFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeThumbnail = () => {
    setThumbnailFile(null)
    setThumbnailPreview("")
  }

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: "",
      description: "",
      lessons: []
    }
    setModules([...modules, newModule])
  }

  const updateModule = (moduleId: string, field: keyof Module, value: any) => {
    setModules(modules.map(module =>
      module.id === moduleId ? { ...module, [field]: value } : module
    ))
  }

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter(module => module.id !== moduleId))
  }

  const addLesson = (moduleId: string) => {
    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: "",
      content: "",
      points_reward: 5,
    }
    setModules(modules.map(module =>
      module.id === moduleId
        ? { ...module, lessons: [...module.lessons, newLesson] }
        : module
    ))
  }

  const updateLesson = (moduleId: string, lessonId: string, field: keyof Lesson, value: any) => {
    setModules(modules.map(module =>
      module.id === moduleId
        ? {
            ...module,
            lessons: module.lessons.map(lesson =>
              lesson.id === lessonId ? { ...lesson, [field]: value } : lesson
            )
          }
        : module
    ))
  }

  const deleteLesson = (moduleId: string, lessonId: string) => {
    setModules(modules.map(module =>
      module.id === moduleId
        ? { ...module, lessons: module.lessons.filter(lesson => lesson.id !== lessonId) }
        : module
    ))
  }

  const addQuiz = (moduleId: string) => {
    const newQuiz: Quiz = {
      title: "",
      passing_score: 70,
      points_reward: 10,
      questions: []
    }
    setModules(modules.map(module =>
      module.id === moduleId
        ? { ...module, quiz: newQuiz }
        : module
    ))
  }

  const updateQuiz = (moduleId: string, field: keyof Quiz, value: any) => {
    setModules(modules.map(module =>
      module.id === moduleId && module.quiz
        ? { ...module, quiz: { ...module.quiz, [field]: value } }
        : module
    ))
  }

  const deleteQuiz = (moduleId: string) => {
    setModules(modules.map(module =>
      module.id === moduleId ? { ...module, quiz: undefined } : module
    ))
  }

  const addQuestion = (moduleId: string) => {
    const newQuestion: QuizQuestion = {
      question: "",
      answers: ["", "", "", ""],
      correct_answer_index: 0
    }
    setModules(modules.map(module =>
      module.id === moduleId && module.quiz
        ? {
            ...module,
            quiz: {
              ...module.quiz,
              questions: [...module.quiz.questions, newQuestion]
            }
          }
        : module
    ))
  }

  const updateQuestion = (moduleId: string, questionIndex: number, field: keyof QuizQuestion, value: any) => {
    setModules(modules.map(module =>
      module.id === moduleId && module.quiz
        ? {
            ...module,
            quiz: {
              ...module.quiz,
              questions: module.quiz.questions.map((q, i) =>
                i === questionIndex ? { ...q, [field]: value } : q
              )
            }
          }
        : module
    ))
  }

  const deleteQuestion = (moduleId: string, questionIndex: number) => {
    setModules(modules.map(module =>
      module.id === moduleId && module.quiz
        ? {
            ...module,
            quiz: {
              ...module.quiz,
              questions: module.quiz.questions.filter((_, i) => i !== questionIndex)
            }
          }
        : module
    ))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      let thumbnailUrl = courseData.thumbnail_url

      // Upload thumbnail if file is selected
      if (thumbnailFile) {
        const formData = new FormData()
        formData.append("thumbnail", thumbnailFile)
        const uploadResult = await uploadCourseThumbnail(formData)
        if (uploadResult.success && uploadResult.url) {
          thumbnailUrl = uploadResult.url
        } else {
          toast({
            title: "Upload Failed",
            description: uploadResult.error || "Failed to upload thumbnail",
            variant: "destructive",
          })
          setIsLoading(false)
          return
        }
      }

      if (course) {
        // Update existing course
        const result = await updateCourse(course.id, {
          title: courseData.title,
          description: courseData.description,
          difficulty: courseData.difficulty,
          points_reward: courseData.points_reward,
          thumbnail_url: thumbnailUrl,
          teacher_id: courseData.teacher_id,
          is_published: courseData.is_published,
        })
        if (result.success) {
          toast({
            title: "Course Updated Successfully! 🎉",
            description: "Your course has been updated and is ready for students.",
          })
          setTimeout(() => router.push(`/tutor/courses/${course.id}`), 1500)
        } else {
          toast({
            title: "Update Failed",
            description: result.error || "Failed to update course",
            variant: "destructive",
          })
        }
      } else {
        // Create new course
        const result = await createCourseWithContent({
          ...courseData,
          thumbnail_url: thumbnailUrl,
          modules
        })
        if (result.success) {
          toast({
            title: "Course Created Successfully! 🎉",
            description: "Your new course has been created and is ready for students.",
          })
          setTimeout(() => router.push("/tutor"), 1500)
        } else {
          toast({
            title: "Creation Failed",
            description: result.error || "Failed to create course",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      toast({
        title: "Operation Failed",
        description: `Failed to ${course ? 'update' : 'create'} course. Please try again.`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const canProceedToNext = () => {
    if (currentStep === 1) {
      return courseData.title && courseData.description && courseData.teacher_id
    }
    return true
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Step {currentStep} of 2</span>
          <div className="flex space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>{course ? "Edit Course Basic Information" : "Course Basic Information"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                value={courseData.title}
                onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={courseData.description}
                onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select
                  value={courseData.difficulty}
                  onValueChange={(value) => setCourseData({ ...courseData, difficulty: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="points_reward">Points Reward</Label>
                <Input
                  id="points_reward"
                  type="number"
                  value={courseData.points_reward}
                  onChange={(e) => setCourseData({ ...courseData, points_reward: parseInt(e.target.value) || 0 })}
                  required
                />
              </div>
            </div>

            <div>
              <Label>Course Thumbnail</Label>
              <div className="space-y-4">
                {thumbnailPreview ? (
                  <div className="relative">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      className="w-full max-w-sm h-48 object-cover rounded-lg border"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={removeThumbnail}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <Label htmlFor="thumbnail" className="cursor-pointer">
                        <span className="text-primary hover:underline">Click to upload</span> or drag and drop
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                    <Input
                      id="thumbnail"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="teacher">Teacher</Label>
              <Select
                value={courseData.teacher_id}
                onValueChange={(value) => setCourseData({ ...courseData, teacher_id: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id.toString()}>
                      {teacher.full_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_published"
                checked={courseData.is_published}
                onChange={(e) => setCourseData({ ...courseData, is_published: e.target.checked })}
              />
              <Label htmlFor="is_published">Publish course immediately</Label>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Course Content
                <Button onClick={addModule} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Module
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {modules.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No modules added yet. Click "Add Module" to get started.
                </p>
              ) : (
                <div className="space-y-6">
                  {modules.map((module, moduleIndex) => (
                    <Card key={module.id} className="border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Module {moduleIndex + 1}</CardTitle>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteModule(module.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label>Module Title</Label>
                          <Input
                            value={module.title}
                            onChange={(e) => updateModule(module.id, 'title', e.target.value)}
                            placeholder="e.g., Introduction to Topic"
                          />
                        </div>
                        <div>
                          <Label>Module Description</Label>
                          <Textarea
                            value={module.description}
                            onChange={(e) => updateModule(module.id, 'description', e.target.value)}
                            rows={2}
                            placeholder="Brief description of this module"
                          />
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between mb-4">
                            <Label className="text-base font-medium">Lessons</Label>
                            <Button
                              onClick={() => addLesson(module.id)}
                              size="sm"
                              variant="outline"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              Add Lesson
                            </Button>
                          </div>

                          {module.lessons.length === 0 ? (
                            <p className="text-muted-foreground text-sm">
                              No lessons added yet.
                            </p>
                          ) : (
                            <div className="space-y-4">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <Card key={lesson.id} className="border-l-4 border-l-accent">
                                  <CardHeader>
                                    <div className="flex items-center justify-between">
                                      <CardTitle className="text-base">Lesson {lessonIndex + 1}</CardTitle>
                                      <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => deleteLesson(module.id, lesson.id)}
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <div>
                                      <Label>Lesson Title</Label>
                                      <Input
                                        value={lesson.title}
                                        onChange={(e) => updateLesson(module.id, lesson.id, 'title', e.target.value)}
                                        placeholder="e.g., Understanding the Basics"
                                      />
                                    </div>
                                    <div>
                                      <Label>Lesson Content</Label>
                                      <Textarea
                                        value={lesson.content}
                                        onChange={(e) => updateLesson(module.id, lesson.id, 'content', e.target.value)}
                                        rows={6}
                                        placeholder="Detailed lesson content..."
                                      />
                                    </div>
                                    <div>
                                      <Label>Points Reward</Label>
                                      <Input
                                        type="number"
                                        value={lesson.points_reward}
                                        onChange={(e) => updateLesson(module.id, lesson.id, 'points_reward', parseInt(e.target.value) || 0)}
                                      />
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Quiz Section for Module */}
                        <div className="border-t pt-4">
                          {module.quiz ? (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <Label className="text-base font-medium">Module Quiz</Label>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => deleteQuiz(module.id)}
                                >
                                  Remove Quiz
                                </Button>
                              </div>

                              <div>
                                <Label>Quiz Title</Label>
                                <Input
                                  value={module.quiz.title}
                                  onChange={(e) => updateQuiz(module.id, 'title', e.target.value)}
                                  placeholder="e.g., Module Assessment"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Passing Score (%)</Label>
                                  <Input
                                    type="number"
                                    value={module.quiz.passing_score}
                                    onChange={(e) => updateQuiz(module.id, 'passing_score', parseInt(e.target.value) || 70)}
                                  />
                                </div>
                                <div>
                                  <Label>Points Reward</Label>
                                  <Input
                                    type="number"
                                    value={module.quiz.points_reward}
                                    onChange={(e) => updateQuiz(module.id, 'points_reward', parseInt(e.target.value) || 10)}
                                  />
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center justify-between mb-4">
                                  <Label className="text-base font-medium">Questions</Label>
                                  <Button
                                    onClick={() => addQuestion(module.id)}
                                    size="sm"
                                    variant="outline"
                                  >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Question
                                  </Button>
                                </div>

                                {module.quiz.questions.map((question, qIndex) => (
                                  <Card key={qIndex} className="mb-4">
                                    <CardHeader>
                                      <div className="flex items-center justify-between">
                                        <CardTitle className="text-sm">Question {qIndex + 1}</CardTitle>
                                        <Button
                                          variant="destructive"
                                          size="sm"
                                          onClick={() => deleteQuestion(module.id, qIndex)}
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                      <div>
                                        <Label>Question</Label>
                                        <Input
                                          value={question.question}
                                          onChange={(e) => updateQuestion(module.id, qIndex, 'question', e.target.value)}
                                          placeholder="Enter your question"
                                        />
                                      </div>

                                      <div>
                                        <Label>Answers</Label>
                                        <div className="space-y-2">
                                          {question.answers.map((answer, aIndex) => (
                                            <div key={aIndex} className="flex items-center space-x-2">
                                              <span className="font-medium w-6">{String.fromCharCode(65 + aIndex)}.</span>
                                              <Input
                                                value={answer}
                                                onChange={(e) => {
                                                  const newAnswers = [...question.answers]
                                                  newAnswers[aIndex] = e.target.value
                                                  updateQuestion(module.id, qIndex, 'answers', newAnswers)
                                                }}
                                                placeholder={`Answer ${String.fromCharCode(65 + aIndex)}`}
                                              />
                                              <input
                                                type="radio"
                                                name={`correct-${module.id}-${qIndex}`}
                                                checked={question.correct_answer_index === aIndex}
                                                onChange={() => updateQuestion(module.id, qIndex, 'correct_answer_index', aIndex)}
                                              />
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Button
                              onClick={() => addQuiz(module.id)}
                              variant="outline"
                              size="sm"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              Add Quiz
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <Button
            onClick={() => setCurrentStep(currentStep - 1)}
            variant="outline"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
        )}

        <div className="flex-1" />

        {currentStep < 2 ? (
          <Button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={!canProceedToNext()}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (course ? "Updating..." : "Creating...") : (course ? "Update Course" : "Create Course")}
          </Button>
        )}
      </div>
    </div>
  )
}