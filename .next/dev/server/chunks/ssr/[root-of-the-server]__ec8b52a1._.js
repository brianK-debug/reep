module.exports = [
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-rsc] (ecmascript)");
;
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neon"])(process.env.DATABASE_URL);
const __TURBOPACK__default__export__ = sql;
}),
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "createToken",
    ()=>createToken,
    "getSession",
    ()=>getSession,
    "hashPassword",
    ()=>hashPassword,
    "requireAuth",
    ()=>requireAuth,
    "requireRole",
    ()=>requireRole,
    "setSession",
    ()=>setSession,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
;
;
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "reep-secret-key-change-in-production");
async function hashPassword(password) {
    const bcrypt = await __turbopack_context__.A("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript, async loader)");
    return bcrypt.default.hash(password, 10);
}
async function verifyPassword(password, hash) {
    const bcrypt = await __turbopack_context__.A("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript, async loader)");
    return bcrypt.default.compare(password, hash);
}
async function createToken(user) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"]({
        user
    }).setProtectedHeader({
        alg: "HS256"
    }).setExpirationTime("7d").sign(secret);
}
async function verifyToken(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload.user;
    } catch  {
        return null;
    }
}
async function getSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("auth-token");
    if (!token) {
        return null;
    }
    return verifyToken(token.value);
}
async function setSession(user) {
    const token = await createToken(user);
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("auth-token", token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}
async function clearSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("auth-token");
}
async function requireAuth() {
    const user = await getSession();
    if (!user) {
        throw new Error("Unauthorized");
    }
    return user;
}
async function requireRole(role) {
    const user = await requireAuth();
    if (user.role !== role && user.role !== "admin") {
        throw new Error("Forbidden");
    }
    return user;
}
}),
"[project]/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0044a30ae8491bb728c8f656bf10fcbbf971e0afc5":"signOut","00a5cca465185c46fe6f41459b63d52282a26df8d8":"getCurrentUser","604ee91a7414b788c9d4d79a3b01a27fe1f9906645":"signUp","609c0bfc21541e295b494afee4c0911da9f585e8e4":"signIn"},"",""] */ __turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function signUp(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const fullName = formData.get("fullName");
    const role = formData.get("role");
    if (!email || !password || !fullName || !role) {
        return {
            error: "All fields are required"
        };
    }
    if (password.length < 8) {
        return {
            error: "Password must be at least 8 characters"
        };
    }
    if (![
        "student",
        "teacher"
    ].includes(role)) {
        return {
            error: "Invalid role selected"
        };
    }
    try {
        // Check if user already exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT id FROM users WHERE email = ${email}
    `;
        if (existingUser.length > 0) {
            return {
                error: "User with this email already exists"
            };
        }
        // Create new user
        const passwordHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(password);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO users (email, password_hash, full_name, role)
      VALUES (${email}, ${passwordHash}, ${fullName}, ${role})
      RETURNING id, email, full_name, role, avatar_url, points, level
    `;
        const user = result[0];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])(user);
        return {
            success: "Account created successfully! Welcome to REEP."
        };
    } catch (error) {
        console.error("[v0] Sign up error:", error);
        return {
            error: "Failed to create account. Please try again."
        };
    }
}
async function signIn(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
        return {
            error: "Email and password are required"
        };
    }
    let user = null;
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT id, email, password_hash, full_name, role, avatar_url, points, level
      FROM users
      WHERE email = ${email}
    `;
        if (result.length === 0) {
            return {
                error: "Invalid email or password"
            };
        }
        user = result[0];
        const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(password, user.password_hash);
        if (!isValid) {
            return {
                error: "Invalid email or password"
            };
        }
        const { password_hash, ...userWithoutPassword } = user;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])(userWithoutPassword);
        return {
            success: "Signed in successfully! Redirecting...",
            role: user.role
        };
    } catch (error) {
        console.error("[v0] Sign in error:", error);
        return {
            error: "Failed to sign in. Please try again."
        };
    }
}
async function signOut() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function getCurrentUser() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"])();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signUp,
    signIn,
    signOut,
    getCurrentUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signUp, "604ee91a7414b788c9d4d79a3b01a27fe1f9906645", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signIn, "609c0bfc21541e295b494afee4c0911da9f585e8e4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "0044a30ae8491bb728c8f656bf10fcbbf971e0afc5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentUser, "00a5cca465185c46fe6f41459b63d52282a26df8d8", null);
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/actions/courses.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075":"completeLesson","40024d419bc900a75cee8a5523b434d9b5604a84aa":"submitQuiz","404df110a63c4138751c6911c2f29861ce4a6bd62f":"createCourseWithContent","407844702eb472feffee580215cc3dc426407b1146":"uploadCourseThumbnail","409072d17d685db5ee19855f919dd5ed80f35fcc3e":"createCourse","409a67d0d7a035533a91e509fc99c1ff2d1231860e":"enrollInCourse","60a9fb9da29c0ce114238b29ff8bb0ebb1bc79f058":"updateCourse"},"",""] */ __turbopack_context__.s([
    "completeLesson",
    ()=>completeLesson,
    "createCourse",
    ()=>createCourse,
    "createCourseWithContent",
    ()=>createCourseWithContent,
    "enrollInCourse",
    ()=>enrollInCourse,
    "submitQuiz",
    ()=>submitQuiz,
    "updateCourse",
    ()=>updateCourse,
    "uploadCourseThumbnail",
    ()=>uploadCourseThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function createCourse(formData) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
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
    `;
        const courseId = result[0].id;
        // Create modules
        const modules = [
            {
                title: 'Course Introduction',
                description: 'Get started with this course and understand what you will learn',
                order_index: 1
            },
            {
                title: 'Core Concepts',
                description: 'Learn the fundamental concepts and principles',
                order_index: 2
            },
            {
                title: 'Practical Application',
                description: 'Apply what you have learned through hands-on exercises',
                order_index: 3
            },
            {
                title: 'Advanced Topics',
                description: 'Explore advanced concepts and best practices',
                order_index: 4
            }
        ];
        const moduleIds = [];
        for (const module of modules){
            const moduleResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        INSERT INTO modules (course_id, title, description, order_index)
        VALUES (${courseId}, ${module.title}, ${module.description}, ${module.order_index})
        RETURNING id
      `;
            moduleIds.push(moduleResult[0].id);
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
        ];
        for(let i = 0; i < lessons.length; i++){
            const moduleLessons = lessons[i];
            for(let j = 0; j < moduleLessons.length; j++){
                const lesson = moduleLessons[j];
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO lessons (module_id, title, content, video_url, order_index, points_reward)
          VALUES (
            ${moduleIds[i]},
            ${lesson.title},
            ${lesson.content},
            null,
            ${j + 1},
            ${lesson.points_reward}
          )
        `;
            }
        }
        // Create quizzes for modules (one quiz per module)
        for(let i = 0; i < moduleIds.length; i++){
            const moduleId = moduleIds[i];
            const quizResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        INSERT INTO quizzes (module_id, title, passing_score, points_reward)
        VALUES (
          ${moduleId},
          'Module ${i + 1} Assessment',
          70,
          10
        )
        RETURNING id
      `;
            const quizId = quizResult[0].id;
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
            ];
            for(let q = 0; q < questions.length; q++){
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index)
          VALUES (
            ${quizId},
            ${questions[q].question},
            ${questions[q].options},
            ${questions[q].correct_answer},
            ${q + 1}
          )
        `;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/courses");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/tutor");
        return {
            success: true,
            courseId
        };
    } catch (error) {
        console.error("[v0] Create course error:", error);
        return {
            success: false,
            error: "Failed to create course"
        };
    }
}
async function updateCourse(courseId, formData) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      UPDATE courses
      SET title = ${formData.title},
          description = ${formData.description},
          difficulty = ${formData.difficulty},
          points_reward = ${formData.points_reward},
          thumbnail_url = ${formData.thumbnail_url || null},
          teacher_id = ${parseInt(formData.teacher_id.toString())},
          is_published = ${formData.is_published}
      WHERE id = ${courseId}
    `;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/courses");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/courses/${courseId}/edit`);
        return {
            success: true
        };
    } catch (error) {
        console.error("[v0] Update course error:", error);
        return {
            success: false,
            error: "Failed to update course"
        };
    }
}
async function enrollInCourse(formData) {
    const courseId = Number.parseInt(formData.get("courseId"));
    const userId = Number.parseInt(formData.get("userId"));
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO enrollments (user_id, course_id)
      VALUES (${userId}, ${courseId})
    `;
        // Award achievement to student
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'course_enrolled',
        'New Course Enrolled',
        'Started a new learning journey',
        5
      )
    `;
        // Update student points
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      UPDATE users
      SET points = points + 5
      WHERE id = ${userId}
    `;
        // Check for Knowledge Seeker badge for student
        const enrollmentCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT COUNT(DISTINCT course_id) as count FROM enrollments WHERE user_id = ${userId}
    `;
        if (enrollmentCount[0].count >= 3) {
            const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        SELECT id FROM badges WHERE name = 'Knowledge Seeker'
      `;
            if (badge.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `;
            }
        }
        // Check for Popular Teacher badge
        const teacherData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT teacher_id FROM courses WHERE id = ${courseId}
    `;
        if (teacherData.length > 0) {
            const teacherId = teacherData[0].teacher_id;
            const totalEnrollments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        SELECT COUNT(*) as count
        FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        WHERE c.teacher_id = ${teacherId}
      `;
            if (totalEnrollments[0].count >= 10) {
                const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          SELECT id FROM badges WHERE name = 'Popular Teacher'
        `;
                if (badge.length > 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${teacherId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `;
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${courseId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/courses/${courseId}`);
    } catch (error) {
        console.error("[v0] Enrollment error:", error);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${courseId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/courses/${courseId}`);
}
async function uploadCourseThumbnail(formData) {
    try {
        const file = formData.get("thumbnail");
        if (!file || file.size === 0) {
            return {
                success: false,
                error: "No file provided"
            };
        }
        // Validate file type
        if (!file.type.startsWith("image/")) {
            return {
                success: false,
                error: "File must be an image"
            };
        }
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            return {
                success: false,
                error: "File size must be less than 5MB"
            };
        }
        // Generate unique filename
        const fileExtension = file.name.split(".").pop();
        const fileName = `${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])()}.${fileExtension}`;
        // Create uploads directory if it doesn't exist
        const uploadsDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "public", "uploads", "courses");
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadsDir, {
                recursive: true
            });
        } catch (error) {
        // Directory might already exist
        }
        // Save file
        const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(uploadsDir, fileName);
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, buffer);
        // Return the public URL
        const publicUrl = `/uploads/courses/${fileName}`;
        return {
            success: true,
            url: publicUrl
        };
    } catch (error) {
        console.error("[v0] Upload error:", error);
        return {
            success: false,
            error: "Failed to upload file"
        };
    }
}
async function createCourseWithContent(formData) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
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
    `;
        const courseId = result[0].id;
        // Create modules and their content
        for(let i = 0; i < formData.modules.length; i++){
            const module = formData.modules[i];
            const moduleResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        INSERT INTO modules (course_id, title, description, order_index)
        VALUES (${courseId}, ${module.title}, ${module.description}, ${i + 1})
        RETURNING id
      `;
            const moduleId = moduleResult[0].id;
            // Create lessons
            for(let j = 0; j < module.lessons.length; j++){
                const lesson = module.lessons[j];
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO lessons (module_id, title, content, video_url, order_index, points_reward)
          VALUES (
            ${moduleId},
            ${lesson.title},
            ${lesson.content},
            null,
            ${j + 1},
            ${lesson.points_reward}
          )
        `;
            }
            // Create quiz if provided at module level
            if (module.quiz) {
                const quizResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO quizzes (module_id, title, passing_score, points_reward)
          VALUES (
            ${moduleId},
            ${module.quiz.title},
            ${module.quiz.passing_score},
            ${module.quiz.points_reward}
          )
          RETURNING id
        `;
                const quizId = quizResult[0].id;
                // Create questions
                for(let k = 0; k < module.quiz.questions.length; k++){
                    const question = module.quiz.questions[k];
                    const optionsJson = JSON.stringify(question.answers);
                    const correctAnswer = String.fromCharCode(65 + question.correct_answer_index) // A, B, C, D
                    ;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
            INSERT INTO quiz_questions (quiz_id, question, options, correct_answer, order_index)
            VALUES (
              ${quizId},
              ${question.question},
              ${optionsJson},
              ${correctAnswer},
              ${k + 1}
            )
          `;
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/tutor");
        return {
            success: true,
            courseId
        };
    } catch (error) {
        console.error("[v0] Create course with content error:", error);
        return {
            success: false,
            error: "Failed to create course"
        };
    }
}
async function completeLesson(formData) {
    const lessonId = Number.parseInt(formData.get("lessonId"));
    const userId = Number.parseInt(formData.get("userId"));
    const courseId = Number.parseInt(formData.get("courseId"));
    try {
        // Check if already completed
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT * FROM lesson_progress
      WHERE user_id = ${userId} AND lesson_id = ${lessonId}
    `;
        if (existing.length > 0) {
            return {
                success: false,
                error: "Already completed"
            };
        }
        // Mark lesson as complete
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO lesson_progress (user_id, lesson_id, completed, completed_at)
      VALUES (${userId}, ${lessonId}, true, NOW())
    `;
        // Get lesson points
        const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT points_reward FROM lessons WHERE id = ${lessonId}
    `;
        const pointsReward = lessons[0]?.points_reward || 5;
        // Award points to student
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      UPDATE users
      SET points = points + ${pointsReward}
      WHERE id = ${userId}
    `;
        // Award points to teacher (1 point per lesson completion)
        const teacherData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT c.teacher_id
      FROM courses c
      JOIN modules m ON c.id = m.course_id
      JOIN lessons l ON m.id = l.module_id
      WHERE l.id = ${lessonId}
    `;
        if (teacherData.length > 0) {
            const teacherId = teacherData[0].teacher_id;
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        UPDATE users
        SET points = points + 1
        WHERE id = ${teacherId}
      `;
            await updateUserLevel(teacherId);
        }
        await updateUserLevel(userId);
        await updateStreak(userId);
        await updateDailyChallengeProgress(userId, "lessons_completed", 1);
        // Create achievement for student
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'lesson_completed',
        'Lesson Complete',
        'Completed a lesson',
        ${pointsReward}
      )
    `;
        // Check if user should get "First Steps" badge
        const lessonCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT COUNT(*) as count FROM lesson_progress
      WHERE user_id = ${userId} AND completed = true
    `;
        if (lessonCount[0].count === 1) {
            const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        SELECT id FROM badges WHERE name = 'First Steps'
      `;
            if (badge.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `;
            }
        }
        // Check if module is completed
        const moduleCompletion = await checkModuleCompletion(userId, lessonId);
        // Update course progress
        await updateCourseProgress(userId, courseId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${courseId}/lessons/${lessonId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${courseId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        return {
            success: true,
            pointsEarned: pointsReward,
            moduleCompleted: moduleCompletion.completed,
            moduleTitle: moduleCompletion.title,
            modulePoints: moduleCompletion.points
        };
    } catch (error) {
        console.error("[v0] Complete lesson error:", error);
        return {
            success: false,
            error: "Failed to complete lesson"
        };
    }
}
async function submitQuiz(formData) {
    const quizId = Number.parseInt(formData.get("quizId"));
    const userId = Number.parseInt(formData.get("userId"));
    const lessonId = Number.parseInt(formData.get("lessonId"));
    const courseId = Number.parseInt(formData.get("courseId"));
    const answersJson = formData.get("answers");
    const answers = JSON.parse(answersJson);
    try {
        // Get quiz details and questions
        const quizzes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT * FROM quizzes WHERE id = ${quizId}
    `;
        const quiz = quizzes[0];
        const questions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT * FROM quiz_questions WHERE quiz_id = ${quizId}
    `;
        // Calculate score
        let correctCount = 0;
        questions.forEach((q)=>{
            if (answers[q.id] === q.correct_answer) {
                correctCount++;
            }
        });
        const score = Math.round(correctCount / questions.length * 100);
        const passed = score >= quiz.passing_score;
        // Record attempt
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO quiz_attempts (user_id, quiz_id, score, answers, passed)
      VALUES (${userId}, ${quizId}, ${score}, ${answersJson}, ${passed})
    `;
        if (passed) {
            // Award points
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        UPDATE users 
        SET points = points + ${quiz.points_reward}
        WHERE id = ${userId}
      `;
            // Create achievement
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        INSERT INTO achievements (user_id, type, title, description, points_earned)
        VALUES (
          ${userId}, 
          'quiz_passed', 
          'Quiz Passed',
          'Successfully passed a quiz',
          ${quiz.points_reward}
        )
      `;
            // Check for Quiz Master badge
            const perfectQuizzes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        SELECT COUNT(*) as count FROM quiz_attempts
        WHERE user_id = ${userId} AND score = 100
      `;
            if (perfectQuizzes[0].count >= 3) {
                const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          SELECT id FROM badges WHERE name = 'Quiz Master'
        `;
                if (badge.length > 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${userId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `;
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${courseId}/lessons/${lessonId}`);
        return {
            success: true,
            score,
            passed
        };
    } catch (error) {
        console.error("[v0] Submit quiz error:", error);
        return {
            success: false,
            error: "Failed to submit quiz"
        };
    }
}
async function updateCourseProgress(userId, courseId) {
    // Get total lessons in course
    const totalLessons = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT COUNT(*) as count
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE m.course_id = ${courseId}
  `;
    // Get completed lessons
    const completedLessons = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT COUNT(*) as count
    FROM lesson_progress lp
    JOIN lessons l ON lp.lesson_id = l.id
    JOIN modules m ON l.module_id = m.id
    WHERE lp.user_id = ${userId} 
    AND m.course_id = ${courseId}
    AND lp.completed = true
  `;
    const total = totalLessons[0].count;
    const completed = completedLessons[0].count;
    const progress = total > 0 ? Math.round(completed / total * 100) : 0;
    // Update enrollment
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    UPDATE enrollments 
    SET progress = ${progress},
        status = CASE WHEN ${progress} = 100 THEN 'completed' ELSE 'active' END,
        completed_at = CASE WHEN ${progress} = 100 THEN NOW() ELSE NULL END
    WHERE user_id = ${userId} AND course_id = ${courseId}
  `;
    // If completed, award course completion points
    if (progress === 100) {
        const courses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT points_reward, teacher_id FROM courses WHERE id = ${courseId}
    `;
        const pointsReward = courses[0]?.points_reward || 100;
        const teacherId = courses[0]?.teacher_id;
        // Award points to student
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      UPDATE users
      SET points = points + ${pointsReward}
      WHERE id = ${userId}
    `;
        // Award points to teacher (10 points per course completion)
        if (teacherId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        UPDATE users
        SET points = points + 10
        WHERE id = ${teacherId}
      `;
            await updateUserLevel(teacherId);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'course_completed',
        'Course Complete',
        'Finished an entire course',
        ${pointsReward}
      )
    `;
        // Check for Course Champion badge for student
        const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT id FROM badges WHERE name = 'Course Champion'
    `;
        if (badge.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        INSERT INTO user_badges (user_id, badge_id)
        VALUES (${userId}, ${badge[0].id})
        ON CONFLICT DO NOTHING
      `;
        }
        // Check for teacher badges
        if (teacherId) {
            const totalCompletions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        SELECT COUNT(*) as count
        FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        WHERE c.teacher_id = ${teacherId} AND e.status = 'completed'
      `;
            const completionCount = totalCompletions[0].count;
            // Effective Teacher (5 completions)
            if (completionCount >= 5) {
                const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          SELECT id FROM badges WHERE name = 'Effective Teacher'
        `;
                if (badge.length > 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${teacherId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `;
                }
            }
            // Master Educator (20 completions)
            if (completionCount >= 20) {
                const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          SELECT id FROM badges WHERE name = 'Master Educator'
        `;
                if (badge.length > 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${teacherId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `;
                }
            }
        }
    }
}
// Helper function to check if module is completed
async function checkModuleCompletion(userId, lessonId) {
    // Get the module for this lesson
    const lessonData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT m.id, m.title
    FROM lessons l
    JOIN modules m ON l.module_id = m.id
    WHERE l.id = ${lessonId}
  `;
    if (lessonData.length === 0) return {
        completed: false
    };
    const moduleId = lessonData[0].id;
    const moduleTitle = lessonData[0].title;
    // Get total lessons in module
    const totalLessons = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT COUNT(*) as count FROM lessons WHERE module_id = ${moduleId}
  `;
    // Get completed lessons in module
    const completedLessons = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT COUNT(*) as count
    FROM lesson_progress lp
    JOIN lessons l ON lp.lesson_id = l.id
    WHERE lp.user_id = ${userId}
      AND l.module_id = ${moduleId}
      AND lp.completed = true
  `;
    const total = totalLessons[0].count;
    const completed = completedLessons[0].count;
    if (completed === total) {
        // Module completed! Award points and create achievement
        const modulePoints = 15 // Fixed points for module completion
        ;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      UPDATE users SET points = points + ${modulePoints} WHERE id = ${userId}
    `;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId},
        'module_completed',
        'Module Master',
        'Completed module: ${moduleTitle}',
        ${modulePoints}
      )
    `;
        return {
            completed: true,
            title: moduleTitle,
            points: modulePoints
        };
    }
    return {
        completed: false
    };
}
// Helper function to update user level based on points
async function updateUserLevel(userId) {
    const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT points, level FROM users WHERE id = ${userId}
  `;
    if (userData.length === 0) return;
    const { points, level } = userData[0];
    // Level calculation: level = floor(points / 100) + 1
    const newLevel = Math.floor(points / 100) + 1;
    if (newLevel > level) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      UPDATE users SET level = ${newLevel} WHERE id = ${userId}
    `;
        // Award achievement for leveling up
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO achievements (user_id, type, title, description, points_earned)
      VALUES (
        ${userId}, 
        'level_up', 
        'Level Up!',
        ${`Reached level ${newLevel}`},
        10
      )
    `;
        // Check for level-based badges
        if (newLevel === 5) {
            const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`SELECT id FROM badges WHERE name = 'Rising Star'`;
            if (badge.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `;
            }
        }
        if (newLevel === 10) {
            const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`SELECT id FROM badges WHERE name = 'Overachiever'`;
            if (badge.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          INSERT INTO user_badges (user_id, badge_id)
          VALUES (${userId}, ${badge[0].id})
          ON CONFLICT DO NOTHING
        `;
            }
        }
    }
}
// Helper function to update streak
async function updateStreak(userId) {
    const today = new Date().toISOString().split("T")[0];
    const streakData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT * FROM user_streaks WHERE user_id = ${userId}
  `;
    if (streakData.length === 0) {
        // Create new streak
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_activity_date)
      VALUES (${userId}, 1, 1, ${today})
    `;
    } else {
        const streak = streakData[0];
        const lastDate = streak.last_activity_date;
        if (lastDate === today) {
            // Already updated today
            return;
        }
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];
        if (lastDate === yesterdayStr) {
            // Continuing streak
            const newStreak = streak.current_streak + 1;
            const longestStreak = Math.max(newStreak, streak.longest_streak);
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        UPDATE user_streaks 
        SET current_streak = ${newStreak},
            longest_streak = ${longestStreak},
            last_activity_date = ${today},
            updated_at = NOW()
        WHERE user_id = ${userId}
      `;
            // Check for streak badges
            if (newStreak === 7) {
                const badge = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`SELECT id FROM badges WHERE name = 'Dedicated Learner'`;
                if (badge.length > 0) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
            INSERT INTO user_badges (user_id, badge_id)
            VALUES (${userId}, ${badge[0].id})
            ON CONFLICT DO NOTHING
          `;
                }
            }
        } else {
            // Streak broken, reset to 1
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        UPDATE user_streaks 
        SET current_streak = 1,
            last_activity_date = ${today},
            updated_at = NOW()
        WHERE user_id = ${userId}
      `;
        }
    }
}
// Helper function to update daily challenge progress
async function updateDailyChallengeProgress(userId, challengeType, increment) {
    // Get active challenges of this type
    const challenges = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
    SELECT id, target_value 
    FROM daily_challenges
    WHERE challenge_type = ${challengeType}
      AND start_date <= CURRENT_DATE 
      AND end_date >= CURRENT_DATE
  `;
    for (const challenge of challenges){
        // Check if user has progress entry
        const progress = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
      SELECT * FROM user_daily_challenges
      WHERE user_id = ${userId} AND challenge_id = ${challenge.id}
    `;
        if (progress.length === 0) {
            // Create new progress entry
            const newProgress = increment;
            const completed = newProgress >= challenge.target_value;
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        INSERT INTO user_daily_challenges (user_id, challenge_id, progress, completed, completed_at)
        VALUES (${userId}, ${challenge.id}, ${newProgress}, ${completed}, ${completed ? "NOW()" : null})
      `;
            if (completed) {
                // Award points
                const challengeData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          SELECT points_reward FROM daily_challenges WHERE id = ${challenge.id}
        `;
                const pointsReward = challengeData[0]?.points_reward || 0;
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          UPDATE users SET points = points + ${pointsReward} WHERE id = ${userId}
        `;
            }
        } else if (!progress[0].completed) {
            // Update existing progress
            const newProgress = progress[0].progress + increment;
            const completed = newProgress >= challenge.target_value;
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
        UPDATE user_daily_challenges
        SET progress = ${newProgress},
            completed = ${completed},
            completed_at = ${completed ? "NOW()" : null}
        WHERE user_id = ${userId} AND challenge_id = ${challenge.id}
      `;
            if (completed) {
                // Award points
                const challengeData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          SELECT points_reward FROM daily_challenges WHERE id = ${challenge.id}
        `;
                const pointsReward = challengeData[0]?.points_reward || 0;
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
          UPDATE users SET points = points + ${pointsReward} WHERE id = ${userId}
        `;
            }
        }
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCourse,
    updateCourse,
    enrollInCourse,
    uploadCourseThumbnail,
    createCourseWithContent,
    completeLesson,
    submitQuiz
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourse, "409072d17d685db5ee19855f919dd5ed80f35fcc3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCourse, "60a9fb9da29c0ce114238b29ff8bb0ebb1bc79f058", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(enrollInCourse, "409a67d0d7a035533a91e509fc99c1ff2d1231860e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadCourseThumbnail, "407844702eb472feffee580215cc3dc426407b1146", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourseWithContent, "404df110a63c4138751c6911c2f29861ce4a6bd62f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(completeLesson, "40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitQuiz, "40024d419bc900a75cee8a5523b434d9b5604a84aa", null);
}),
"[project]/.next-internal/server/app/courses/[courseId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/courses.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/courses.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/courses/[courseId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/courses.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0044a30ae8491bb728c8f656bf10fcbbf971e0afc5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "00a5cca465185c46fe6f41459b63d52282a26df8d8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"],
    "40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["completeLesson"],
    "40024d419bc900a75cee8a5523b434d9b5604a84aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitQuiz"],
    "404df110a63c4138751c6911c2f29861ce4a6bd62f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCourseWithContent"],
    "407844702eb472feffee580215cc3dc426407b1146",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadCourseThumbnail"],
    "409072d17d685db5ee19855f919dd5ed80f35fcc3e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCourse"],
    "409a67d0d7a035533a91e509fc99c1ff2d1231860e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enrollInCourse"],
    "604ee91a7414b788c9d4d79a3b01a27fe1f9906645",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signUp"],
    "609c0bfc21541e295b494afee4c0911da9f585e8e4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"],
    "60a9fb9da29c0ce114238b29ff8bb0ebb1bc79f058",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCourse"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$courses$2f5b$courseId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/courses/[courseId]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/courses.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/courses.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec8b52a1._.js.map