"use server"

import { redirect } from "next/navigation"
import sql from "@/lib/db"
import { revalidatePath } from "next/cache"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { randomUUID } from "crypto"

export async function createCourse(formData: {
  title: string
  description: string
  difficulty: string
  points_reward: number
  thumbnail_url?: string
  teacher_id: number | string
  is_published: boolean
}) {
  try {
    const result = await sql`
      INSERT INTO courses (title, description, difficulty, points_reward, thumbnail_url, teacher_id, is_published)
      VALUES (
        ${formData.title},
        ${formData.description},
        ${formData.difficulty},
        ${formData.points_reward},
        ${formData.thumbnail_url || null},
        ${parseInt(formData.teacher_id.toString())},
        ${formData.is_published}
      )
      RETURNING id
    `

    const courseId = result[0].id

    // Create modules
    const modules = [
      { title: 'Course Introduction', description: 'Get started with this course and understand what you will learn', order_index: 1 },
      { title: 'Core Concepts', description: 'Learn the fundamental concepts and principles', order_index: 2 },
      { title: 'Practical Application', description: 'Apply what you have learned through hands-on exercises', order_index: 3 },
      { title: 'Advanced Topics', description: 'Explore advanced concepts and best practices', order_index: 4 }
    ]

    const moduleIds = []
    for (const module of modules) {
      const moduleResult = await sql`
        INSERT INTO modules (course_id, title, description, order_index)
        VALUES (${courseId}, ${module.title}, ${module.description}, ${module.order_index})
        RETURNING id
      `
      moduleIds.push(moduleResult[0].id)
    }

    // Create lessons for each module
    const lessons = [
      // Module 1: Introduction
      [
        {
          title: 'Welcome to the Course',
          content: `Welcome to ${formData.title}!

This course will guide you through the essential concepts and skills you need to succeed. By the end of this course, you will have a solid understanding of the topic and be able to apply what you've learned.

What you will learn:
- Fundamental concepts and principles
- Practical applications and examples
- Best practices and common patterns
- Hands-on exercises and projects

Let's get started on this learning journey!`,
          points_reward: 5
        },
        {
          title: 'Course Overview and Objectives',
          content: `In this lesson, we will explore:

• The main topics covered in this course
• Learning objectives and outcomes
• Prerequisites and requirements
• Course structure and progression
• Assessment methods and grading criteria

Understanding these elements will help you make the most of your learning experience.`,
          points_reward: 5
        }
      ],
      // Module 2: Core Concepts
      [
        {
          title: 'Fundamental Principles',
          content: `Let's dive into the core principles that form the foundation of this subject.

Key concepts covered:
• Basic terminology and definitions
• Core principles and theories
• Fundamental relationships and dependencies
• Common patterns and structures

These foundational concepts will be referenced throughout the course.`,
          points_reward: 5
        },
        {
          title: 'Essential Concepts',
          content: `Building on the fundamentals, this lesson covers essential concepts that are critical to understanding the subject.

Topics include:
• Key frameworks and models
• Important relationships and interactions
• Critical thinking approaches
• Problem-solving methodologies

Mastering these concepts will give you a strong foundation for advanced topics.`,
          points_reward: 5
        }
      ],
      // Module 3: Practical Application
      [
        {
          title: 'Hands-on Practice',
          content: `Now it's time to apply what you've learned through practical exercises.

In this lesson, you will:
• Work through guided examples
• Complete interactive exercises
• Apply concepts to real-world scenarios
• Receive immediate feedback on your work

Practice is essential for reinforcing learning and building confidence.`,
          points_reward: 10
        },
        {
          title: 'Project Work',
          content: `This lesson focuses on applying your knowledge to a comprehensive project.

Project components:
• Planning and design phase
• Implementation and development
• Testing and validation
• Documentation and presentation

Completing this project will demonstrate your mastery of the course material.`,
          points_reward: 10
        }
      ],
      // Module 4: Advanced Topics
      [
        {
          title: 'Advanced Concepts',
          content: `Explore advanced topics and cutting-edge developments in the field.

Advanced topics covered:
• Emerging trends and technologies
• Complex problem-solving scenarios
• Integration with other systems
• Future directions and possibilities

These advanced concepts will prepare you for professional applications.`,
          points_reward: 5
        },
        {
          title: 'Best Practices and Next Steps',
          content: `This final lesson covers best practices and provides guidance for continued learning.

Topics include:
• Industry best practices and standards
• Common pitfalls and how to avoid them
• Resources for further learning
• Career applications and opportunities
• Staying current with developments

Congratulations on completing this course!`,
          points_reward: 5
        }
      ]
    ]

    for (let i = 0; i < lessons.length; i++) {
      const moduleLessons = lessons[i]
      for (let j = 0; j < moduleLessons.length; j++) {
        const lesson = moduleLessons[j]
        await sql`
          INSERT INTO lessons (module_id, title, content, video_url, order_index, points_reward)
          VALUES (
            ${moduleIds[i]},
            ${lesson.title},
            ${lesson.content},
            null,
            ${j + 1},
            ${lesson.points_reward}
          )
        `
      }
    }

    // Create quizzes for modules (one quiz per module)
    for (let i = 0; i < moduleIds.length; i++) {
      const moduleId = moduleIds[i]
      const quizResult = await sql`
        INSERT INTO quizzes (module_id, title, passing_score, points_reward)
        VALUES (
          ${moduleId},
          'Module ${i + 1} Assessment',
          70,
          10
        )
        RETURNING id
      `

      const quizId = quizResult[0].id

      // Add sample questions
      const questions = [
        {
          question: 'What is the main concept covered in this module?',
          options: '["Core principles", "Advanced topics", "Practical application", "Introduction"]',
          correct_answer: 'Core principles'
        },
        {
          question: 'Which of the following is a key learning objective?',
          options: '["Understanding fundamentals", "Memorizing facts", "Following instructions", "Completing assignments"]',
          correct_answer: 'Understanding fundamentals'
        },
        {
          question: 'What should you do to master the material?',
          options: '["Practice regularly", "Skip exercises", "Only read content", "Memorize answers"]',
          correct_answer: 'Practice regularly'
        }
      ]

      for (let q = 0; q < questions.length; q++) {
        await sql`
          INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index)
          VALUES (
            ${quizId},
            ${questions[q].question},
            ${questions[q].options},
            ${questions[q].correct_answer},
            ${q + 1}
          )
        `
      }
    }

    revalidatePath("/admin/courses")
    revalidatePath("/tutor")
    return { success: true, courseId }
  } catch (error) {
    console.error("[v0] Create course error:", error)
    return { success: false, error: "Failed to create course" }
  }
}

export async function updateCourse(courseId: number, formData: {
  title: string
  description: string
  difficulty: string
  points_reward: number
  thumbnail_url?: string
  teacher_id: number | string
  is_published: boolean
}) {
  try {
    await sql`
      UPDATE courses
      SET title = ${formData.title},
          description = ${formData.description},
          difficulty = ${formData.difficulty},
          points_reward = ${formData.points_reward},
          thumbnail_url = ${formData.thumbnail_url || null},
          teacher_id = ${parseInt(formData.teacher_id.toString())},
          is_published = ${formData.is_published}
      WHERE id = ${courseId}
    `

    revalidatePath("/admin/courses")
    revalidatePath(`/admin/courses/${courseId}/edit`)
    return { success: true }
  } catch (error) {
    console.error("[v0] Update course error:", error)
    return { success: false, error: "Failed to update course" }
  }
}

export async function enrollInCourse(formData: FormData) {
  const courseId = Number.parseInt(formData.get("courseId") as string)
  const userId = Number.parseInt(formData.get("userId") as string)

  try {
    await sql`
      INSERT INTO enrollments (user_id, course_id)
      VALUES (${userId}, ${courseId})
    `

    // Award achievement to student
    await sql`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'course_enrolled',
        'New Course Enrolled',
        'Started a new learning journey',
        5
      )
    `

    // Update student points
    await sql`
      UPDATE users
      SET points = points + 5
      WHERE id = ${userId}
    `

    // Check for Knowledge Seeker badge for student
    const enrollmentCount = await sql`
      SELECT COUNT(DISTINCT course_id) as count FROM enrollments WHERE user_id = ${userId}
    `

    if (enrollmentCount[0].count >= 3) {
      const badge = await sql`
        SELECT id FROM badges WHERE name = 'Knowledge Seeker'
      `

      if (badge.length > 0) {
        await sql`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `
      }
    }

    // Check for Popular Teacher badge
    const teacherData = await sql`
      SELECT teacher_id FROM courses WHERE id = ${courseId}
    `

    if (teacherData.length > 0) {
      const teacherId = teacherData[0].teacher_id

      const totalEnrollments = await sql`
        SELECT COUNT(*) as count
        FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        WHERE c.teacher_id = ${teacherId}
      `

      if (totalEnrollments[0].count >= 10) {
        const badge = await sql`
          SELECT id FROM badges WHERE name = 'Popular Teacher'
        `

        if (badge.length > 0) {
          await sql`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${teacherId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `
        }
      }
    }

    revalidatePath(`/courses/${courseId}`)
    redirect(`/courses/${courseId}`)
  } catch (error) {
    console.error("[v0] Enrollment error:", error)
  }

  revalidatePath(`/courses/${courseId}`)
  redirect(`/courses/${courseId}`)
}

export async function uploadCourseThumbnail(formData: FormData) {
  try {
    const file = formData.get("thumbnail") as File

    if (!file || file.size === 0) {
      return { success: false, error: "No file provided" }
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return { success: false, error: "File must be an image" }
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return { success: false, error: "File size must be less than 5MB" }
    }

    // Generate unique filename
    const fileExtension = file.name.split(".").pop()
    const fileName = `${randomUUID()}.${fileExtension}`

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), "public", "uploads", "courses")
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
      // Directory might already exist
    }

    // Save file
    const filePath = join(uploadsDir, fileName)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filePath, buffer)

    // Return the public URL
    const publicUrl = `/uploads/courses/${fileName}`
    return { success: true, url: publicUrl }
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return { success: false, error: "Failed to upload file" }
  }
}

export async function createCourseWithContent(formData: {
  title: string
  description: string
  difficulty: string
  points_reward: number
  thumbnail_url?: string
  teacher_id: string
  is_published: boolean
  modules: Array<{
    title: string
    description: string
    lessons: Array<{
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
}) {
  try {
    const result = await sql`
      INSERT INTO courses (title, description, difficulty, points_reward, thumbnail_url, teacher_id, is_published)
      VALUES (
        ${formData.title},
        ${formData.description},
        ${formData.difficulty},
        ${formData.points_reward},
        ${formData.thumbnail_url || null},
        ${parseInt(formData.teacher_id)},
        ${formData.is_published}
      )
      RETURNING id
    `

    const courseId = result[0].id

    // Create modules and their content
    for (let i = 0; i < formData.modules.length; i++) {
      const module = formData.modules[i]

      const moduleResult = await sql`
        INSERT INTO modules (course_id, title, description, order_index)
        VALUES (${courseId}, ${module.title}, ${module.description}, ${i + 1})
        RETURNING id
      `

      const moduleId = moduleResult[0].id

      // Create lessons
      for (let j = 0; j < module.lessons.length; j++) {
        const lesson = module.lessons[j]

        await sql`
          INSERT INTO lessons (module_id, title, content, video_url, order_index, points_reward)
          VALUES (
            ${moduleId},
            ${lesson.title},
            ${lesson.content},
            null,
            ${j + 1},
            ${lesson.points_reward}
          )
        `
      }

      // Create quiz if provided at module level
      if (module.quiz) {
        const quizResult = await sql`
          INSERT INTO quizzes (module_id, title, passing_score, points_reward)
          VALUES (
            ${moduleId},
            ${module.quiz.title},
            ${module.quiz.passing_score},
            ${module.quiz.points_reward}
          )
          RETURNING id
        `

        const quizId = quizResult[0].id

        // Create questions
        for (let k = 0; k < module.quiz.questions.length; k++) {
          const question = module.quiz.questions[k]
          const optionsJson = JSON.stringify(question.answers)
          const correctAnswer = String.fromCharCode(65 + question.correct_answer_index) // A, B, C, D

          await sql`
            INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index)
            VALUES (
              ${quizId},
              ${question.question},
              ${optionsJson},
              ${correctAnswer},
              ${k + 1}
            )
          `
        }
      }
    }

    revalidatePath("/tutor")
    return { success: true, courseId }
  } catch (error) {
    console.error("[v0] Create course with content error:", error)
    return { success: false, error: "Failed to create course" }
  }
}

export async function completeLesson(formData: FormData) {
  const lessonId = Number.parseInt(formData.get("lessonId") as string)
  const userId = Number.parseInt(formData.get("userId") as string)
  const courseId = Number.parseInt(formData.get("courseId") as string)

  try {
    // Check if already completed
    const existing = await sql`
      SELECT * FROM lesson_progress
      WHERE user_id = ${userId} AND lesson_id = ${lessonId}
    `

    if (existing.length > 0) {
      return { success: false, error: "Already completed" }
    }

    // Mark lesson as complete
    await sql`
      INSERT INTO lesson_progress (user_id, lesson_id, completed, completed_at)
      VALUES (${userId}, ${lessonId}, true, NOW())
    `

    // Get lesson points
    const lessons = await sql`
      SELECT points_reward FROM lessons WHERE id = ${lessonId}
    `

    const pointsReward = lessons[0]?.points_reward || 5

    // Award points to student
    await sql`
      UPDATE users
      SET points = points + ${pointsReward}
      WHERE id = ${userId}
    `

    // Award points to teacher (1 point per lesson completion)
    const teacherData = await sql`
      SELECT c.teacher_id
      FROM courses c
      JOIN modules m ON c.id = m.course_id
      JOIN lessons l ON m.id = l.module_id
      WHERE l.id = ${lessonId}
    `

    if (teacherData.length > 0) {
      const teacherId = teacherData[0].teacher_id
      await sql`
        UPDATE users
        SET points = points + 1
        WHERE id = ${teacherId}
      `
      await updateUserLevel(teacherId)
    }

    await updateUserLevel(userId)

    await updateStreak(userId)

    await updateDailyChallengeProgress(userId, "lessons_completed", 1)

    // Create achievement for student
    await sql`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'lesson_completed',
        'Lesson Complete',
        'Completed a lesson',
        ${pointsReward}
      )
    `

    // Check if user should get "First Steps" badge
    const lessonCount = await sql`
      SELECT COUNT(*) as count FROM lesson_progress
      WHERE user_id = ${userId} AND completed = true
    `

    if (lessonCount[0].count === 1) {
      const badge = await sql`
        SELECT id FROM badges WHERE name = 'First Steps'
      `

      if (badge.length > 0) {
        await sql`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `
      }
    }

    // Check if module is completed
    const moduleCompletion = await checkModuleCompletion(userId, lessonId)

    // Update course progress
    await updateCourseProgress(userId, courseId)

    revalidatePath(`/courses/${courseId}/lessons/${lessonId}`)
    revalidatePath(`/courses/${courseId}`)
    revalidatePath("/dashboard")
    return {
      success: true,
      pointsEarned: pointsReward,
      moduleCompleted: moduleCompletion.completed,
      moduleTitle: moduleCompletion.title,
      modulePoints: moduleCompletion.points
    }
  } catch (error) {
    console.error("[v0] Complete lesson error:", error)
    return { success: false, error: "Failed to complete lesson" }
  }
}

export async function submitQuiz(formData: FormData) {
  const quizId = Number.parseInt(formData.get("quizId") as string)
  const userId = Number.parseInt(formData.get("userId") as string)
  const lessonId = Number.parseInt(formData.get("lessonId") as string)
  const courseId = Number.parseInt(formData.get("courseId") as string)
  const answersJson = formData.get("answers") as string
  const answers = JSON.parse(answersJson)

  try {
    // Get quiz details and questions
    const quizzes = await sql`
      SELECT * FROM quizzes WHERE id = ${quizId}
    `

    const quiz = quizzes[0]

    const questions = await sql`
      SELECT * FROM quiz_questions WHERE quiz_id = ${quizId}
    `

    // Calculate score
    let correctCount = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correct_answer) {
        correctCount++
      }
    })

    const score = Math.round((correctCount / questions.length) * 100)
    const passed = score >= quiz.passing_score

    // Record attempt
    await sql`
      INSERT INTO quiz_attempts (user_id, quiz_id, score, answers, passed)
      VALUES (${userId}, ${quizId}, ${score}, ${answersJson}, ${passed})
    `

    if (passed) {
      // Award points
      await sql`
        UPDATE users 
        SET points = points + ${quiz.points_reward}
        WHERE id = ${userId}
      `

      // Create achievement
      await sql`
        INSERT INTO achievements (user_id, type, title, description, points_earned)
        VALUES (
          ${userId}, 
          'quiz_passed', 
          'Quiz Passed',
          'Successfully passed a quiz',
          ${quiz.points_reward}
        )
      `

      // Check for Quiz Master badge
      const perfectQuizzes = await sql`
        SELECT COUNT(*) as count FROM quiz_attempts
        WHERE user_id = ${userId} AND score = 100
      `

      if (perfectQuizzes[0].count >= 3) {
        const badge = await sql`
          SELECT id FROM badges WHERE name = 'Quiz Master'
        `

        if (badge.length > 0) {
          await sql`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${userId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `
        }
      }
    }

    revalidatePath(`/courses/${courseId}/lessons/${lessonId}`)
    return { success: true, score, passed }
  } catch (error) {
    console.error("[v0] Submit quiz error:", error)
    return { success: false, error: "Failed to submit quiz" }
  }
}

async function updateCourseProgress(userId: number, courseId: number) {
  // Get total lessons in course
  const totalLessons = await sql`
    SELECT COUNT(*) as count
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE m.course_id = ${courseId}
  `

  // Get completed lessons
  const completedLessons = await sql`
    SELECT COUNT(*) as count
    FROM lesson_progress lp
    JOIN lessons l ON lp.lesson_id = l.id
    JOIN modules m ON l.module_id = m.id
    WHERE lp.user_id = ${userId} 
    AND m.course_id = ${courseId}
    AND lp.completed = true
  `

  const total = totalLessons[0].count
  const completed = completedLessons[0].count
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0

  // Update enrollment
  await sql`
    UPDATE enrollments 
    SET progress = ${progress},
        status = CASE WHEN ${progress} = 100 THEN 'completed' ELSE 'active' END,
        completed_at = CASE WHEN ${progress} = 100 THEN NOW() ELSE NULL END
    WHERE user_id = ${userId} AND course_id = ${courseId}
  `

  // If completed, award course completion points
  if (progress === 100) {
    const courses = await sql`
      SELECT points_reward, teacher_id FROM courses WHERE id = ${courseId}
    `

    const pointsReward = courses[0]?.points_reward || 100
    const teacherId = courses[0]?.teacher_id

    // Award points to student
    await sql`
      UPDATE users
      SET points = points + ${pointsReward}
      WHERE id = ${userId}
    `

    // Award points to teacher (10 points per course completion)
    if (teacherId) {
      await sql`
        UPDATE users
        SET points = points + 10
        WHERE id = ${teacherId}
      `
      await updateUserLevel(teacherId)
    }

    await sql`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'course_completed',
        'Course Complete',
        'Finished an entire course',
        ${pointsReward}
      )
    `

    // Check for Course Champion badge for student
    const badge = await sql`
      SELECT id FROM badges WHERE name = 'Course Champion'
    `

    if (badge.length > 0) {
      await sql`
        INSERT INTO user_badges (user_id, badge_id)
        VALUES (${userId}, ${badge[0].id})
        ON CONFLICT DO NOTHING
      `
    }

    // Check for teacher badges
    if (teacherId) {
      const totalCompletions = await sql`
        SELECT COUNT(*) as count
        FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        WHERE c.teacher_id = ${teacherId} AND e.status = 'completed'
      `

      const completionCount = totalCompletions[0].count

      // Effective Teacher (5 completions)
      if (completionCount >= 5) {
        const badge = await sql`
          SELECT id FROM badges WHERE name = 'Effective Teacher'
        `

        if (badge.length > 0) {
          await sql`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${teacherId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `
        }
      }

      // Master Educator (20 completions)
      if (completionCount >= 20) {
        const badge = await sql`
          SELECT id FROM badges WHERE name = 'Master Educator'
        `

        if (badge.length > 0) {
          await sql`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${teacherId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `
        }
      }
    }
  }
}

// Helper function to check if module is completed
async function checkModuleCompletion(userId: number, lessonId: number) {
  // Get the module for this lesson
  const lessonData = await sql`
    SELECT m.id, m.title
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE l.id = ${lessonId}
  `

  if (lessonData.length === 0) return { completed: false }

  const moduleId = lessonData[0].id
  const moduleTitle = lessonData[0].title

  // Get total lessons in module
  const totalLessons = await sql`
    SELECT COUNT(*) as count FROM lessons WHERE module_id = ${moduleId}
  `

  // Get completed lessons in module
  const completedLessons = await sql`
    SELECT COUNT(*) as count
    FROM lesson_progress lp
    JOIN lessons l ON lp.lesson_id = l.id
    WHERE lp.user_id = ${userId}
      AND l.module_id = ${moduleId}
      AND lp.completed = true
  `

  const total = totalLessons[0].count
  const completed = completedLessons[0].count

  if (completed === total) {
    // Module completed! Award points and create achievement
    const modulePoints = 15 // Fixed points for module completion

    await sql`
      UPDATE users SET points = points + ${modulePoints} WHERE id = ${userId}
    `

    await sql`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'module_completed',
        'Module Master',
        'Completed module: ${moduleTitle}',
        ${modulePoints}
      )
    `

    return { completed: true, title: moduleTitle, points: modulePoints }
  }

  return { completed: false }
}

// Helper function to update user level based on points
async function updateUserLevel(userId: number) {
  const userData = await sql`
    SELECT points, level FROM users WHERE id = ${userId}
  `

  if (userData.length === 0) return

  const { points, level } = userData[0]

  // Level calculation: level = floor(points / 100) + 1
  const newLevel = Math.floor(points / 100) + 1

  if (newLevel > level) {
    await sql`
      UPDATE users SET level = ${newLevel} WHERE id = ${userId}
    `

    // Award achievement for leveling up
    await sql`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId}, 
        'level_up', 
        'Level Up!',
        ${`Reached level ${newLevel}`},
        10
      )
    `

    // Check for level-based badges
    if (newLevel === 5) {
      const badge = await sql`SELECT id FROM badges WHERE name = 'Rising Star'`
      if (badge.length > 0) {
        await sql`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `
      }
    }

    if (newLevel === 10) {
      const badge = await sql`SELECT id FROM badges WHERE name = 'Overachiever'`
      if (badge.length > 0) {
        await sql`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `
      }
    }
  }
}

// Helper function to update streak
async function updateStreak(userId: number) {
  const today = new Date().toISOString().split("T")[0]

  const streakData = await sql`
    SELECT * FROM user_streaks WHERE user_id = ${userId}
  `

  if (streakData.length === 0) {
    // Create new streak
    await sql`
      INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_activity_date)
      VALUES (${userId}, 1, 1, ${today})
    `
  } else {
    const streak = streakData[0]
    const lastDate = streak.last_activity_date

    if (lastDate === today) {
      // Already updated today
      return
    }

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split("T")[0]

    if (lastDate === yesterdayStr) {
      // Continuing streak
      const newStreak = streak.current_streak + 1
      const longestStreak = Math.max(newStreak, streak.longest_streak)

      await sql`
        UPDATE user_streaks 
        SET current_streak = ${newStreak},
            longest_streak = ${longestStreak},
            last_activity_date = ${today},
            updated_at = NOW()
        WHERE user_id = ${userId}
      `

      // Check for streak badges
      if (newStreak === 7) {
        const badge = await sql`SELECT id FROM badges WHERE name = 'Dedicated Learner'`
        if (badge.length > 0) {
          await sql`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${userId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `
        }
      }
    } else {
      // Streak broken, reset to 1
      await sql`
        UPDATE user_streaks 
        SET current_streak = 1,
            last_activity_date = ${today},
            updated_at = NOW()
        WHERE user_id = ${userId}
      `
    }
  }
}

// Helper function to update daily challenge progress
async function updateDailyChallengeProgress(userId: number, challengeType: string, increment: number) {
  // Get active challenges of this type
  const challenges = await sql`
    SELECT id, target_value 
    FROM daily_challenges
    WHERE challenge_type = ${challengeType}
      AND start_date <= CURRENT_DATE 
      AND end_date >= CURRENT_DATE
  `

  for (const challenge of challenges) {
    // Check if user has progress entry
    const progress = await sql`
      SELECT * FROM user_daily_challenges
      WHERE user_id = ${userId} AND challenge_id = ${challenge.id}
    `

    if (progress.length === 0) {
      // Create new progress entry
      const newProgress = increment
      const completed = newProgress >= challenge.target_value

      await sql`
        INSERT INTO user_daily_challenges (user_id, challenge_id, progress, completed, completed_at)
        VALUES (${userId}, ${challenge.id}, ${newProgress}, ${completed}, ${completed ? "NOW()" : null})
      `

      if (completed) {
        // Award points
        const challengeData = await sql`
          SELECT points_reward FROM daily_challenges WHERE id = ${challenge.id}
        `
        const pointsReward = challengeData[0]?.points_reward || 0

        await sql`
          UPDATE users SET points = points + ${pointsReward} WHERE id = ${userId}
        `
      }
    } else if (!progress[0].completed) {
      // Update existing progress
      const newProgress = progress[0].progress + increment
      const completed = newProgress >= challenge.target_value

      await sql`
        UPDATE user_daily_challenges
        SET progress = ${newProgress},
            completed = ${completed},
            completed_at = ${completed ? "NOW()" : null}
        WHERE user_id = ${userId} AND challenge_id = ${challenge.id}
      `

      if (completed) {
        // Award points
        const challengeData = await sql`
          SELECT points_reward FROM daily_challenges WHERE id = ${challenge.id}
        `
        const pointsReward = challengeData[0]?.points_reward || 0

        await sql`
          UPDATE users SET points = points + ${pointsReward} WHERE id = ${userId}
        `
      }
    }
  }
}
