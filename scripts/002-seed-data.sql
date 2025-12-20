-- Seed admin user (password: admin123)
INSERT INTO users (email, password_hash, full_name, role, points, level) VALUES
('admin@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'Admin User', 'admin', 1000, 10);

-- Seed teacher users
INSERT INTO users (email, password_hash, full_name, role, points, level) VALUES
('teacher@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'Teacher User', 'teacher', 500, 8);

-- Seed teacher users
INSERT INTO users (email, password_hash, full_name, role, points, level) VALUES
('teacher1@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'Dr. Sarah Johnson', 'teacher', 500, 8),
('teacher2@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'Prof. Michael Chen', 'teacher', 450, 7);

-- Seed student users
INSERT INTO users (email, password_hash, full_name, role, points, level) VALUES
('student1@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'Emma Wilson', 'student', 250, 5),
('student2@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'James Martinez', 'student', 180, 4),
('student3@reep.edu', '$2b$10$Z3c2zeNjpZGd4T9lCDjGsetdqycF3fKM4JOYk3I4u/aGZo2hfwfQa', 'Sophia Lee', 'student', 320, 6);

-- Seed badges
INSERT INTO badges (name, description, icon_url, criteria, points_value) VALUES
('First Steps', 'Complete your first lesson', '/placeholder.svg?height=80&width=80', '{"type": "lesson_completed", "count": 1}', 10),
('Quick Learner', 'Complete 5 lessons in one day', '/placeholder.svg?height=80&width=80', '{"type": "daily_lessons", "count": 5}', 25),
('Course Champion', 'Complete your first course', '/placeholder.svg?height=80&width=80', '{"type": "course_completed", "count": 1}', 50),
('Quiz Master', 'Score 100% on 3 quizzes', '/placeholder.svg?height=80&width=80', '{"type": "perfect_quizzes", "count": 3}', 30),
('Rising Star', 'Reach level 5', '/placeholder.svg?height=80&width=80', '{"type": "level_reached", "level": 5}', 40),
('Knowledge Seeker', 'Enroll in 3 different courses', '/placeholder.svg?height=80&width=80', '{"type": "enrollments", "count": 3}', 20),
('Dedicated Learner', 'Maintain a 7-day streak', '/placeholder.svg?height=80&width=80', '{"type": "streak_reached", "days": 7}', 35),
('Overachiever', 'Reach level 10', '/placeholder.svg?height=80&width=80', '{"type": "level_reached", "level": 10}', 75),
('Speed Demon', 'Complete 3 lessons in under 1 hour', '/placeholder.svg?height=80&width=80', '{"type": "fast_lessons", "count": 3}', 45),
('Night Owl', 'Complete a lesson after 10 PM', '/placeholder.svg?height=80&width=80', '{"type": "night_learning"}', 15),
('Early Bird', 'Complete a lesson before 6 AM', '/placeholder.svg?height=80&width=80', '{"type": "early_learning"}', 15),
('Perfectionist', 'Score 100% on 5 quizzes', '/placeholder.svg?height=80&width=80', '{"type": "perfect_quizzes", "count": 5}', 60),
-- Teacher badges
('Popular Teacher', 'Have 10 students enroll in your courses', '/placeholder.svg?height=80&width=80', '{"type": "teacher_enrollments", "count": 10}', 50),
('Effective Teacher', 'Have 5 students complete your courses', '/placeholder.svg?height=80&width=80', '{"type": "teacher_completions", "count": 5}', 75),
('Master Educator', 'Have 20 students complete your courses', '/placeholder.svg?height=80&width=80', '{"type": "teacher_completions", "count": 20}', 150);
