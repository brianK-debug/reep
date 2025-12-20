# REEP - Remote Education Engagement Platform

A gamified learning management system built with Next.js, PostgreSQL (Neon), and modern web technologies.

## Features

### 🎓 Core Learning Features
- **Course Management**: Browse, enroll, and complete courses with structured modules and lessons
- **Interactive Lessons**: Rich content with video support and progress tracking
- **Quizzes**: Test knowledge with interactive quizzes and instant feedback
- **Progress Tracking**: Real-time course completion and lesson progress monitoring

### 🎮 Gamification System
- **Points & Levels**: Earn points for completing activities and level up automatically
- **Badges**: Unlock achievements by reaching milestones
- **Leaderboard**: Compete with other learners globally
- **Daily Challenges**: Complete daily tasks for bonus points
- **Streaks**: Build learning habits with consecutive day tracking
- **Power-Ups**: Purchase boosts with earned points (Double XP, Quiz Helper, Streak Protection)

### 👤 User Roles
- **Students**: Access courses, track progress, compete on leaderboards
- **Teachers**: Create and manage course content
- **Admins**: Full system access with analytics dashboard

### 📊 Analytics Dashboard
- User engagement metrics
- Course completion rates
- Daily active users tracking
- Enrollment trends visualization
- User management interface

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL
- **Authentication**: Custom JWT-based auth with bcrypt
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion principles with CSS

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Neon PostgreSQL database account

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Connect your Neon database through the v0 interface
- The system will automatically provide: `DATABASE_URL`, `JWT_SECRET`

4. Run database migrations:
The SQL scripts in the `/scripts` folder will create all necessary tables:
- `001-create-tables.sql`: Core database schema
- `002-seed-data.sql`: Initial users, courses, and badges
- `003-seed-modules-lessons.sql`: Sample course content
- `004-add-course-images.sql`: Course thumbnail placeholders
- `005-add-gamification-features.sql`: Gamification tables and features

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Default Accounts

After seeding the database, you can log in with these test accounts:

### Admin
- Email: `admin@reep.edu`
- Password: `admin123`

### Teachers
- Email: `teacher1@reep.edu` / `teacher2@reep.edu`
- Password: `admin123`

### Students
- Email: `student1@reep.edu` / `student2@reep.edu` / `student3@reep.edu`
- Password: `admin123`

## Key Features Explained

### Gamification Mechanics

#### Points System
- Enroll in course: +5 points
- Complete lesson: +5-10 points (varies by lesson)
- Pass quiz: +10-20 points (varies by quiz)
- Complete course: +100+ points (varies by course)
- Daily challenges: +20-30 points

#### Levels
- Auto-calculated based on points
- Formula: `Level = floor(points / 100) + 1`
- Level-up achievements unlock special badges

#### Badges
- **First Steps**: Complete your first lesson
- **Quick Learner**: Complete 5 lessons in one day
- **Course Champion**: Complete your first course
- **Quiz Master**: Score 100% on 3 quizzes
- **Rising Star**: Reach level 5
- **Knowledge Seeker**: Enroll in 3 different courses
- **Speed Demon**: Complete 3 lessons in under 1 hour
- **Night Owl**: Complete a lesson after 10 PM
- **Early Bird**: Complete a lesson before 6 AM
- **Perfectionist**: Score 100% on 5 quizzes
- **Dedicated Learner**: Maintain a 7-day streak
- **Overachiever**: Reach level 10

#### Daily Challenges
Reset daily and provide bonus points:
- Complete 2 lessons today
- Pass 1 quiz with 80%+ score
- Earn 50 points today

#### Streaks
- Track consecutive days of learning activity
- Maintain streaks for special badges
- Use "Time Freeze" power-up to protect streaks

#### Power-Ups
Purchasable with points:
- **Double XP** (100 pts): 2x points for 24 hours
- **Quiz Helper** (50 pts): Get hints on quizzes for 12 hours
- **Time Freeze** (75 pts): Pause streak timer for 48 hours

## Project Structure

```
├── app/
│   ├── actions/          # Server actions for data mutations
│   ├── admin/            # Admin dashboard pages
│   ├── challenges/       # Daily challenges page
│   ├── courses/          # Course and lesson pages
│   ├── dashboard/        # Student dashboard
│   ├── leaderboard/      # Global leaderboard
│   ├── profile/          # User profile page
│   ├── shop/             # Power-ups shop
│   ├── sign-in/          # Authentication pages
│   └── sign-up/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── ...              # Custom components
├── lib/                 # Utility functions
│   ├── auth.ts          # Authentication helpers
│   ├── db.ts            # Database connection
│   └── utils.ts         # Utility functions
├── scripts/             # SQL migration scripts
└── public/              # Static assets
```

## Database Schema

### Core Tables
- `users`: User accounts with points and levels
- `courses`: Course catalog
- `modules`: Course modules
- `lessons`: Individual lessons
- `quizzes`: Quiz definitions
- `quiz_questions`: Quiz question bank
- `enrollments`: User-course relationships
- `lesson_progress`: Lesson completion tracking
- `quiz_attempts`: Quiz submission history

### Gamification Tables
- `badges`: Badge definitions
- `user_badges`: User badge collection
- `achievements`: User achievement history
- `daily_challenges`: Challenge definitions
- `user_daily_challenges`: Challenge progress
- `user_streaks`: Streak tracking
- `power_ups`: Power-up definitions
- `user_power_ups`: Active power-ups inventory

## API Routes

All data mutations are handled through Next.js Server Actions:
- `app/actions/auth.ts`: Authentication (sign up, sign in, sign out)
- `app/actions/courses.ts`: Course operations (enroll, complete lessons, submit quizzes)
- `app/actions/shop.ts`: Power-up purchases

## Contributing

This is a demonstration project built with v0. Feel free to extend and customize!

## License

MIT
```

```tsx file="" isHidden
