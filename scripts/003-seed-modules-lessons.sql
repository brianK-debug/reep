-- Seed modules and lessons for "Introduction to Web Development"
INSERT INTO modules (course_id, title, description, order_index) VALUES
(1, 'HTML Fundamentals', 'Learn the building blocks of the web', 1),
(1, 'CSS Styling', 'Make your websites beautiful with CSS', 2),
(1, 'JavaScript Basics', 'Add interactivity to your web pages', 3);

-- Lessons for HTML Fundamentals module
INSERT INTO lessons (module_id, title, content, order_index, points_reward) VALUES
(1, 'Introduction to HTML', 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web content using elements and tags.

In this lesson, you will learn:
- What HTML is and why it matters
- The basic structure of an HTML document
- Common HTML elements and their purposes
- How to create your first web page

HTML elements are represented by tags, written using angle brackets. Most elements have an opening tag and a closing tag, with content in between.', 1, 5),

(1, 'HTML Elements and Tags', 'HTML elements are the building blocks of web pages. Each element has a specific purpose and semantic meaning.

Key concepts:
- Headings (h1-h6) for document structure
- Paragraphs (p) for text content
- Links (a) for navigation
- Images (img) for visual content
- Lists (ul, ol, li) for organizing items

Understanding semantic HTML helps create accessible and well-structured web pages that are easier to maintain and better for SEO.', 2, 5),

(1, 'Forms and Input Elements', 'HTML forms allow users to interact with web pages by submitting data. Forms are essential for login pages, contact forms, search bars, and more.

Topics covered:
- The <form> element and its attributes
- Input types (text, email, password, checkbox, radio)
- Textarea for multi-line input
- Select dropdowns
- Form validation and best practices

Properly structured forms improve user experience and data collection.', 3, 5);

-- Lessons for CSS Styling module  
INSERT INTO lessons (module_id, title, content, order_index, points_reward) VALUES
(2, 'CSS Basics', 'CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and much more.

In this lesson:
- CSS syntax and selectors
- How to link CSS to HTML
- Basic properties (color, font-size, margin, padding)
- The box model concept
- Inline vs internal vs external CSS

CSS separates presentation from content, making websites easier to maintain and more flexible.', 1, 5),

(2, 'CSS Layout with Flexbox', 'Flexbox is a powerful CSS layout module that makes it easy to design flexible and responsive layouts without using floats or positioning.

Key concepts:
- Flex containers and flex items
- Main axis vs cross axis
- justify-content and align-items
- flex-direction and flex-wrap
- Common flexbox patterns

Flexbox is essential for modern web development and is widely supported across browsers.', 2, 5);

-- Lessons for JavaScript Basics module
INSERT INTO lessons (module_id, title, content, order_index, points_reward) VALUES
(3, 'JavaScript Introduction', 'JavaScript is the programming language of the web. It enables interactive and dynamic web pages that respond to user actions.

What you will learn:
- Variables and data types
- Basic operators
- How to add JavaScript to HTML
- Console.log for debugging
- Your first JavaScript program

JavaScript runs in the browser and can manipulate HTML and CSS in real-time.', 1, 5),

(3, 'Functions and Events', 'Functions are reusable blocks of code that perform specific tasks. Events allow you to respond to user interactions like clicks, hovers, and form submissions.

Topics:
- Defining and calling functions
- Function parameters and return values
- Event listeners (click, submit, etc.)
- DOM manipulation basics
- Connecting JavaScript to user actions

Mastering functions and events is key to creating interactive web applications.', 2, 5);

-- Add quizzes
INSERT INTO quizzes (module_id, title, passing_score, points_reward) VALUES
(1, 'HTML Fundamentals Quiz', 70, 10),
(2, 'CSS Basics Quiz', 70, 10),
(3, 'JavaScript Quiz', 70, 10);

-- Quiz questions for HTML Fundamentals
INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index) VALUES
(1, 'What does HTML stand for?', '["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"]', 'HyperText Markup Language', 1),
(1, 'Which tag is used for the largest heading?', '["<heading>", "<h6>", "<h1>", "<head>"]', '<h1>', 2),
(1, 'What is the correct HTML element for inserting a line break?', '["<break>", "<br>", "<lb>", "<newline>"]', '<br>', 3);

-- Quiz questions for CSS Basics
INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index) VALUES
(2, 'What does CSS stand for?', '["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"]', 'Cascading Style Sheets', 1),
(2, 'Which property is used to change the background color?', '["bgcolor", "color", "background-color", "bg-color"]', 'background-color', 2),
(2, 'How do you select an element with id "header"?', '["#header", ".header", "header", "*header"]', '#header', 3);

-- Quiz questions for JavaScript
INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index) VALUES
(3, 'Which keyword is used to declare a variable in JavaScript?', '["var", "let", "const", "All of the above"]', 'All of the above', 1),
(3, 'What is the correct way to write a JavaScript function?', '["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"]', 'function myFunction()', 2),
(3, 'How do you call a function named "myFunction"?', '["call myFunction()", "myFunction()", "call function myFunction", "execute myFunction()"]', 'myFunction()', 3);
