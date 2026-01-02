-- Add daily challenges table for more gamification
CREATE TABLE IF NOT EXISTS daily_challenges (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  challenge_type VARCHAR(50) NOT NULL,
  target_value INTEGER NOT NULL,
  points_reward INTEGER DEFAULT 20,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User daily challenge progress
CREATE TABLE IF NOT EXISTS user_daily_challenges (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  challenge_id INTEGER REFERENCES daily_challenges(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  UNIQUE(user_id, challenge_id)
);

-- Add streaks table for tracking consecutive days
CREATE TABLE IF NOT EXISTS user_streaks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add power-ups/boosters for gamification
CREATE TABLE IF NOT EXISTS power_ups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  effect_type VARCHAR(50) NOT NULL,
  effect_value INTEGER NOT NULL,
  cost_points INTEGER DEFAULT 50,
  duration_hours INTEGER DEFAULT 24,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User power-ups inventory
CREATE TABLE IF NOT EXISTS user_power_ups (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  power_up_id INTEGER REFERENCES power_ups(id) ON DELETE CASCADE,
  activated_at TIMESTAMP,
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add more badges
INSERT INTO badges (name, description, icon_url, criteria, points_value) VALUES
('Speed Demon', 'Complete 3 lessons in under 1 hour', '/placeholder.svg?height=80&width=80', '{"type": "speed_lessons", "count": 3, "time_limit": 3600}', 35),
('Night Owl', 'Complete a lesson after 10 PM', '/placeholder.svg?height=80&width=80', '{"type": "late_night_learning"}', 15),
('Early Bird', 'Complete a lesson before 6 AM', '/placeholder.svg?height=80&width=80', '{"type": "early_morning_learning"}', 15),
('Perfectionist', 'Score 100% on 5 quizzes', '/placeholder.svg?height=80&width=80', '{"type": "perfect_quizzes", "count": 5}', 50),
('Dedicated Learner', 'Maintain a 7-day streak', '/placeholder.svg?height=80&width=80', '{"type": "streak", "days": 7}', 60),
('Overachiever', 'Reach level 10', '/placeholder.svg?height=80&width=80', '{"type": "level_reached", "level": 10}', 100);

-- Add sample daily challenges
INSERT INTO daily_challenges (title, description, challenge_type, target_value, points_reward, start_date, end_date) VALUES
('Daily Learner', 'Complete 2 lessons today', 'lessons_completed', 2, 25, CURRENT_DATE, CURRENT_DATE + INTERVAL '1 day'),
('Quiz Champion', 'Pass 1 quiz with 80% or higher', 'quiz_passed', 1, 20, CURRENT_DATE, CURRENT_DATE + INTERVAL '1 day'),
('Point Collector', 'Earn 50 points today', 'points_earned', 50, 30, CURRENT_DATE, CURRENT_DATE + INTERVAL '1 day');

-- Add sample power-ups
INSERT INTO power_ups (name, description, effect_type, effect_value, cost_points, duration_hours) VALUES
('Double XP', 'Earn 2x points for all activities', 'point_multiplier', 2, 100, 24),
('Quiz Helper', 'Get hints on quiz questions', 'quiz_assist', 1, 50, 12),
('Time Freeze', 'Pause your streak timer for 48 hours', 'streak_protection', 2, 75, 48);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_daily_challenges_dates ON daily_challenges(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_user_daily_challenges_user ON user_daily_challenges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_streaks_user ON user_streaks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_power_ups_user ON user_power_ups(user_id);

-- Recalculate progress for all existing enrollments
DO $$
DECLARE
    enrollment_record RECORD;
    total_lessons INTEGER;
    completed_lessons INTEGER;
    calculated_progress INTEGER;
BEGIN
    FOR enrollment_record IN SELECT * FROM enrollments LOOP
        -- Get total lessons in course
        SELECT COUNT(*) INTO total_lessons
        FROM lessons l
        JOIN modules m ON l.module_id = m.id
        WHERE m.course_id = enrollment_record.course_id;

        -- Get completed lessons by user
        SELECT COUNT(*) INTO completed_lessons
        FROM lesson_progress lp
        JOIN lessons l ON lp.lesson_id = l.id
        JOIN modules m ON l.module_id = m.id
        WHERE lp.user_id = enrollment_record.user_id
          AND m.course_id = enrollment_record.course_id
          AND lp.completed = true;

        -- Calculate progress
        IF total_lessons > 0 THEN
            calculated_progress := ROUND((completed_lessons::DECIMAL / total_lessons::DECIMAL) * 100);
        ELSE
            calculated_progress := 0;
        END IF;

        -- Update enrollment progress
        UPDATE enrollments
        SET progress = calculated_progress,
            status = CASE WHEN calculated_progress = 100 THEN 'completed' ELSE 'active' END,
            completed_at = CASE WHEN calculated_progress = 100 THEN COALESCE(completed_at, NOW()) ELSE NULL END
        WHERE user_id = enrollment_record.user_id AND course_id = enrollment_record.course_id;

        RAISE NOTICE 'Updated progress for user % course %: %/% = %%%', enrollment_record.user_id, enrollment_record.course_id, completed_lessons, total_lessons, calculated_progress;
    END LOOP;
END $$;
