-- Update courses with thumbnail images
UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
WHERE title = 'Introduction to Web Development';

UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center'
WHERE title = 'Advanced React Patterns';

UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center'
WHERE title = 'Data Structures & Algorithms';

UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center'
WHERE title = 'Machine Learning Basics';
