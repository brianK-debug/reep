module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/radio-group.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RadioGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('grid gap-3', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/components/ui/radio-group.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/radio-group.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/actions/data:9e8b86 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40024d419bc900a75cee8a5523b434d9b5604a84aa":"submitQuiz"},"app/actions/courses.ts",""] */ __turbopack_context__.s([
    "submitQuiz",
    ()=>submitQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var submitQuiz = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40024d419bc900a75cee8a5523b434d9b5604a84aa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitQuiz"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY291cnNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHNxbCBmcm9tIFwiQC9saWIvZGJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyB3cml0ZUZpbGUsIG1rZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSBcImNyeXB0b1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2UoZm9ybURhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRpZmZpY3VsdHk6IHN0cmluZ1xuICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgdGh1bWJuYWlsX3VybD86IHN0cmluZ1xuICB0ZWFjaGVyX2lkOiBudW1iZXIgfCBzdHJpbmdcbiAgaXNfcHVibGlzaGVkOiBib29sZWFuXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gY291cnNlcyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkaWZmaWN1bHR5LCBwb2ludHNfcmV3YXJkLCB0aHVtYm5haWxfdXJsLCB0ZWFjaGVyX2lkLCBpc19wdWJsaXNoZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkLnRvU3RyaW5nKCkpfSxcbiAgICAgICAgJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICApXG4gICAgICBSRVRVUk5JTkcgaWRcbiAgICBgXG5cbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlc3VsdFswXS5pZFxuXG4gICAgLy8gQ3JlYXRlIG1vZHVsZXNcbiAgICBjb25zdCBtb2R1bGVzID0gW1xuICAgICAgeyB0aXRsZTogJ0NvdXJzZSBJbnRyb2R1Y3Rpb24nLCBkZXNjcmlwdGlvbjogJ0dldCBzdGFydGVkIHdpdGggdGhpcyBjb3Vyc2UgYW5kIHVuZGVyc3RhbmQgd2hhdCB5b3Ugd2lsbCBsZWFybicsIG9yZGVyX2luZGV4OiAxIH0sXG4gICAgICB7IHRpdGxlOiAnQ29yZSBDb25jZXB0cycsIGRlc2NyaXB0aW9uOiAnTGVhcm4gdGhlIGZ1bmRhbWVudGFsIGNvbmNlcHRzIGFuZCBwcmluY2lwbGVzJywgb3JkZXJfaW5kZXg6IDIgfSxcbiAgICAgIHsgdGl0bGU6ICdQcmFjdGljYWwgQXBwbGljYXRpb24nLCBkZXNjcmlwdGlvbjogJ0FwcGx5IHdoYXQgeW91IGhhdmUgbGVhcm5lZCB0aHJvdWdoIGhhbmRzLW9uIGV4ZXJjaXNlcycsIG9yZGVyX2luZGV4OiAzIH0sXG4gICAgICB7IHRpdGxlOiAnQWR2YW5jZWQgVG9waWNzJywgZGVzY3JpcHRpb246ICdFeHBsb3JlIGFkdmFuY2VkIGNvbmNlcHRzIGFuZCBiZXN0IHByYWN0aWNlcycsIG9yZGVyX2luZGV4OiA0IH1cbiAgICBdXG5cbiAgICBjb25zdCBtb2R1bGVJZHMgPSBbXVxuICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgIGNvbnN0IG1vZHVsZVJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gbW9kdWxlcyAoY291cnNlX2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yZGVyX2luZGV4KVxuICAgICAgICBWQUxVRVMgKCR7Y291cnNlSWR9LCAke21vZHVsZS50aXRsZX0sICR7bW9kdWxlLmRlc2NyaXB0aW9ufSwgJHttb2R1bGUub3JkZXJfaW5kZXh9KVxuICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgIGBcbiAgICAgIG1vZHVsZUlkcy5wdXNoKG1vZHVsZVJlc3VsdFswXS5pZClcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGVzc29ucyBmb3IgZWFjaCBtb2R1bGVcbiAgICBjb25zdCBsZXNzb25zID0gW1xuICAgICAgLy8gTW9kdWxlIDE6IEludHJvZHVjdGlvblxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIHRoZSBDb3Vyc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6IGBXZWxjb21lIHRvICR7Zm9ybURhdGEudGl0bGV9IVxuXG5UaGlzIGNvdXJzZSB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBlc3NlbnRpYWwgY29uY2VwdHMgYW5kIHNraWxscyB5b3UgbmVlZCB0byBzdWNjZWVkLiBCeSB0aGUgZW5kIG9mIHRoaXMgY291cnNlLCB5b3Ugd2lsbCBoYXZlIGEgc29saWQgdW5kZXJzdGFuZGluZyBvZiB0aGUgdG9waWMgYW5kIGJlIGFibGUgdG8gYXBwbHkgd2hhdCB5b3UndmUgbGVhcm5lZC5cblxuV2hhdCB5b3Ugd2lsbCBsZWFybjpcbi0gRnVuZGFtZW50YWwgY29uY2VwdHMgYW5kIHByaW5jaXBsZXNcbi0gUHJhY3RpY2FsIGFwcGxpY2F0aW9ucyBhbmQgZXhhbXBsZXNcbi0gQmVzdCBwcmFjdGljZXMgYW5kIGNvbW1vbiBwYXR0ZXJuc1xuLSBIYW5kcy1vbiBleGVyY2lzZXMgYW5kIHByb2plY3RzXG5cbkxldCdzIGdldCBzdGFydGVkIG9uIHRoaXMgbGVhcm5pbmcgam91cm5leSFgLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnQ291cnNlIE92ZXJ2aWV3IGFuZCBPYmplY3RpdmVzJyxcbiAgICAgICAgICBjb250ZW50OiBgSW4gdGhpcyBsZXNzb24sIHdlIHdpbGwgZXhwbG9yZTpcblxu4oCiIFRoZSBtYWluIHRvcGljcyBjb3ZlcmVkIGluIHRoaXMgY291cnNlXG7igKIgTGVhcm5pbmcgb2JqZWN0aXZlcyBhbmQgb3V0Y29tZXNcbuKAoiBQcmVyZXF1aXNpdGVzIGFuZCByZXF1aXJlbWVudHNcbuKAoiBDb3Vyc2Ugc3RydWN0dXJlIGFuZCBwcm9ncmVzc2lvblxu4oCiIEFzc2Vzc21lbnQgbWV0aG9kcyBhbmQgZ3JhZGluZyBjcml0ZXJpYVxuXG5VbmRlcnN0YW5kaW5nIHRoZXNlIGVsZW1lbnRzIHdpbGwgaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGxlYXJuaW5nIGV4cGVyaWVuY2UuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMjogQ29yZSBDb25jZXB0c1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdGdW5kYW1lbnRhbCBQcmluY2lwbGVzJyxcbiAgICAgICAgICBjb250ZW50OiBgTGV0J3MgZGl2ZSBpbnRvIHRoZSBjb3JlIHByaW5jaXBsZXMgdGhhdCBmb3JtIHRoZSBmb3VuZGF0aW9uIG9mIHRoaXMgc3ViamVjdC5cblxuS2V5IGNvbmNlcHRzIGNvdmVyZWQ6XG7igKIgQmFzaWMgdGVybWlub2xvZ3kgYW5kIGRlZmluaXRpb25zXG7igKIgQ29yZSBwcmluY2lwbGVzIGFuZCB0aGVvcmllc1xu4oCiIEZ1bmRhbWVudGFsIHJlbGF0aW9uc2hpcHMgYW5kIGRlcGVuZGVuY2llc1xu4oCiIENvbW1vbiBwYXR0ZXJucyBhbmQgc3RydWN0dXJlc1xuXG5UaGVzZSBmb3VuZGF0aW9uYWwgY29uY2VwdHMgd2lsbCBiZSByZWZlcmVuY2VkIHRocm91Z2hvdXQgdGhlIGNvdXJzZS5gLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnRXNzZW50aWFsIENvbmNlcHRzJyxcbiAgICAgICAgICBjb250ZW50OiBgQnVpbGRpbmcgb24gdGhlIGZ1bmRhbWVudGFscywgdGhpcyBsZXNzb24gY292ZXJzIGVzc2VudGlhbCBjb25jZXB0cyB0aGF0IGFyZSBjcml0aWNhbCB0byB1bmRlcnN0YW5kaW5nIHRoZSBzdWJqZWN0LlxuXG5Ub3BpY3MgaW5jbHVkZTpcbuKAoiBLZXkgZnJhbWV3b3JrcyBhbmQgbW9kZWxzXG7igKIgSW1wb3J0YW50IHJlbGF0aW9uc2hpcHMgYW5kIGludGVyYWN0aW9uc1xu4oCiIENyaXRpY2FsIHRoaW5raW5nIGFwcHJvYWNoZXNcbuKAoiBQcm9ibGVtLXNvbHZpbmcgbWV0aG9kb2xvZ2llc1xuXG5NYXN0ZXJpbmcgdGhlc2UgY29uY2VwdHMgd2lsbCBnaXZlIHlvdSBhIHN0cm9uZyBmb3VuZGF0aW9uIGZvciBhZHZhbmNlZCB0b3BpY3MuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMzogUHJhY3RpY2FsIEFwcGxpY2F0aW9uXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0hhbmRzLW9uIFByYWN0aWNlJyxcbiAgICAgICAgICBjb250ZW50OiBgTm93IGl0J3MgdGltZSB0byBhcHBseSB3aGF0IHlvdSd2ZSBsZWFybmVkIHRocm91Z2ggcHJhY3RpY2FsIGV4ZXJjaXNlcy5cblxuSW4gdGhpcyBsZXNzb24sIHlvdSB3aWxsOlxu4oCiIFdvcmsgdGhyb3VnaCBndWlkZWQgZXhhbXBsZXNcbuKAoiBDb21wbGV0ZSBpbnRlcmFjdGl2ZSBleGVyY2lzZXNcbuKAoiBBcHBseSBjb25jZXB0cyB0byByZWFsLXdvcmxkIHNjZW5hcmlvc1xu4oCiIFJlY2VpdmUgaW1tZWRpYXRlIGZlZWRiYWNrIG9uIHlvdXIgd29ya1xuXG5QcmFjdGljZSBpcyBlc3NlbnRpYWwgZm9yIHJlaW5mb3JjaW5nIGxlYXJuaW5nIGFuZCBidWlsZGluZyBjb25maWRlbmNlLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnUHJvamVjdCBXb3JrJyxcbiAgICAgICAgICBjb250ZW50OiBgVGhpcyBsZXNzb24gZm9jdXNlcyBvbiBhcHBseWluZyB5b3VyIGtub3dsZWRnZSB0byBhIGNvbXByZWhlbnNpdmUgcHJvamVjdC5cblxuUHJvamVjdCBjb21wb25lbnRzOlxu4oCiIFBsYW5uaW5nIGFuZCBkZXNpZ24gcGhhc2VcbuKAoiBJbXBsZW1lbnRhdGlvbiBhbmQgZGV2ZWxvcG1lbnRcbuKAoiBUZXN0aW5nIGFuZCB2YWxpZGF0aW9uXG7igKIgRG9jdW1lbnRhdGlvbiBhbmQgcHJlc2VudGF0aW9uXG5cbkNvbXBsZXRpbmcgdGhpcyBwcm9qZWN0IHdpbGwgZGVtb25zdHJhdGUgeW91ciBtYXN0ZXJ5IG9mIHRoZSBjb3Vyc2UgbWF0ZXJpYWwuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiAxMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy8gTW9kdWxlIDQ6IEFkdmFuY2VkIFRvcGljc1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdBZHZhbmNlZCBDb25jZXB0cycsXG4gICAgICAgICAgY29udGVudDogYEV4cGxvcmUgYWR2YW5jZWQgdG9waWNzIGFuZCBjdXR0aW5nLWVkZ2UgZGV2ZWxvcG1lbnRzIGluIHRoZSBmaWVsZC5cblxuQWR2YW5jZWQgdG9waWNzIGNvdmVyZWQ6XG7igKIgRW1lcmdpbmcgdHJlbmRzIGFuZCB0ZWNobm9sb2dpZXNcbuKAoiBDb21wbGV4IHByb2JsZW0tc29sdmluZyBzY2VuYXJpb3NcbuKAoiBJbnRlZ3JhdGlvbiB3aXRoIG90aGVyIHN5c3RlbXNcbuKAoiBGdXR1cmUgZGlyZWN0aW9ucyBhbmQgcG9zc2liaWxpdGllc1xuXG5UaGVzZSBhZHZhbmNlZCBjb25jZXB0cyB3aWxsIHByZXBhcmUgeW91IGZvciBwcm9mZXNzaW9uYWwgYXBwbGljYXRpb25zLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdCZXN0IFByYWN0aWNlcyBhbmQgTmV4dCBTdGVwcycsXG4gICAgICAgICAgY29udGVudDogYFRoaXMgZmluYWwgbGVzc29uIGNvdmVycyBiZXN0IHByYWN0aWNlcyBhbmQgcHJvdmlkZXMgZ3VpZGFuY2UgZm9yIGNvbnRpbnVlZCBsZWFybmluZy5cblxuVG9waWNzIGluY2x1ZGU6XG7igKIgSW5kdXN0cnkgYmVzdCBwcmFjdGljZXMgYW5kIHN0YW5kYXJkc1xu4oCiIENvbW1vbiBwaXRmYWxscyBhbmQgaG93IHRvIGF2b2lkIHRoZW1cbuKAoiBSZXNvdXJjZXMgZm9yIGZ1cnRoZXIgbGVhcm5pbmdcbuKAoiBDYXJlZXIgYXBwbGljYXRpb25zIGFuZCBvcHBvcnR1bml0aWVzXG7igKIgU3RheWluZyBjdXJyZW50IHdpdGggZGV2ZWxvcG1lbnRzXG5cbkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIHRoaXMgY291cnNlIWAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9XG4gICAgICBdXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXNzb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb2R1bGVMZXNzb25zID0gbGVzc29uc1tpXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2R1bGVMZXNzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGxlc3NvbiA9IG1vZHVsZUxlc3NvbnNbal1cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIGxlc3NvbnMgKG1vZHVsZV9pZCwgdGl0bGUsIGNvbnRlbnQsIHZpZGVvX3VybCwgb3JkZXJfaW5kZXgsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWRzW2ldfSxcbiAgICAgICAgICAgICR7bGVzc29uLnRpdGxlfSxcbiAgICAgICAgICAgICR7bGVzc29uLmNvbnRlbnR9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICR7aiArIDF9LFxuICAgICAgICAgICAgJHtsZXNzb24ucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcXVpenplcyBmb3Igc29tZSBsZXNzb25zXG4gICAgY29uc3QgcXVpekxlc3NvbnMgPSBbMiwgNCwgNiwgOF0gLy8gT25lIHF1aXogcGVyIG1vZHVsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVpekxlc3NvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxlc3NvbkluZGV4ID0gcXVpekxlc3NvbnNbaV0gLSAxIC8vIENvbnZlcnQgdG8gMC1iYXNlZFxuICAgICAgY29uc3QgbW9kdWxlSW5kZXggPSBNYXRoLmZsb29yKGxlc3NvbkluZGV4IC8gMilcbiAgICAgIGNvbnN0IGxlc3NvbkluTW9kdWxlID0gKGxlc3NvbkluZGV4ICUgMikgKyAxXG5cbiAgICAgIC8vIEZpbmQgdGhlIGFjdHVhbCBsZXNzb24gSURcbiAgICAgIGNvbnN0IGxlc3NvblJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIGlkIEZST00gbGVzc29uc1xuICAgICAgICBXSEVSRSBtb2R1bGVfaWQgPSAke21vZHVsZUlkc1ttb2R1bGVJbmRleF19XG4gICAgICAgIEFORCBvcmRlcl9pbmRleCA9ICR7bGVzc29uSW5Nb2R1bGV9XG4gICAgICBgXG5cbiAgICAgIGlmIChsZXNzb25SZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsZXNzb25JZCA9IGxlc3NvblJlc3VsdFswXS5pZFxuICAgICAgICBjb25zdCBxdWl6UmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXp6ZXMgKGxlc3Nvbl9pZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwYXNzaW5nX3Njb3JlLCBwb2ludHNfcmV3YXJkKVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke2xlc3NvbklkfSxcbiAgICAgICAgICAgICdNb2R1bGUgJHttb2R1bGVJbmRleCArIDF9IFF1aXonLFxuICAgICAgICAgICAgJ1Rlc3QgeW91ciB1bmRlcnN0YW5kaW5nIG9mIHRoZSBjb25jZXB0cyBjb3ZlcmVkIGluIE1vZHVsZSAke21vZHVsZUluZGV4ICsgMX0nLFxuICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICAxMFxuICAgICAgICAgIClcbiAgICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgICAgYFxuXG4gICAgICAgIGNvbnN0IHF1aXpJZCA9IHF1aXpSZXN1bHRbMF0uaWRcblxuICAgICAgICAvLyBBZGQgc2FtcGxlIHF1ZXN0aW9uc1xuICAgICAgICBjb25zdCBxdWVzdGlvbnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBtYWluIGNvbmNlcHQgY292ZXJlZCBpbiB0aGlzIG1vZHVsZT8nLFxuICAgICAgICAgICAgb3B0aW9uczogJ1tcIkNvcmUgcHJpbmNpcGxlc1wiLCBcIkFkdmFuY2VkIHRvcGljc1wiLCBcIlByYWN0aWNhbCBhcHBsaWNhdGlvblwiLCBcIkludHJvZHVjdGlvblwiXScsXG4gICAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0NvcmUgcHJpbmNpcGxlcydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBhIGtleSBsZWFybmluZyBvYmplY3RpdmU/JyxcbiAgICAgICAgICAgIG9wdGlvbnM6ICdbXCJVbmRlcnN0YW5kaW5nIGZ1bmRhbWVudGFsc1wiLCBcIk1lbW9yaXppbmcgZmFjdHNcIiwgXCJGb2xsb3dpbmcgaW5zdHJ1Y3Rpb25zXCIsIFwiQ29tcGxldGluZyBhc3NpZ25tZW50c1wiXScsXG4gICAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1VuZGVyc3RhbmRpbmcgZnVuZGFtZW50YWxzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IHNob3VsZCB5b3UgZG8gdG8gbWFzdGVyIHRoZSBtYXRlcmlhbD8nLFxuICAgICAgICAgICAgb3B0aW9uczogJ1tcIlByYWN0aWNlIHJlZ3VsYXJseVwiLCBcIlNraXAgZXhlcmNpc2VzXCIsIFwiT25seSByZWFkIGNvbnRlbnRcIiwgXCJNZW1vcml6ZSBhbnN3ZXJzXCJdJyxcbiAgICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnUHJhY3RpY2UgcmVndWxhcmx5J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuXG4gICAgICAgIGZvciAobGV0IHEgPSAwOyBxIDwgcXVlc3Rpb25zLmxlbmd0aDsgcSsrKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gcXVpel9xdWVzdGlvbnMgKHF1aXpfaWQsIHF1ZXN0aW9uLCBvcHRpb25zLCBjb3JyZWN0X2Fuc3dlciwgb3JkZXJfaW5kZXgpXG4gICAgICAgICAgICBWQUxVRVMgKFxuICAgICAgICAgICAgICAke3F1aXpJZH0sXG4gICAgICAgICAgICAgICR7cXVlc3Rpb25zW3FdLnF1ZXN0aW9ufSxcbiAgICAgICAgICAgICAgJHtxdWVzdGlvbnNbcV0ub3B0aW9uc30sXG4gICAgICAgICAgICAgICR7cXVlc3Rpb25zW3FdLmNvcnJlY3RfYW5zd2VyfSxcbiAgICAgICAgICAgICAgJHtxICsgMX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb3Vyc2VzXCIpXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdHV0b3JcIilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3Vyc2VJZCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gQ3JlYXRlIGNvdXJzZSBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY291cnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb3Vyc2UoY291cnNlSWQ6IG51bWJlciwgZm9ybURhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRpZmZpY3VsdHk6IHN0cmluZ1xuICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgdGh1bWJuYWlsX3VybD86IHN0cmluZ1xuICB0ZWFjaGVyX2lkOiBudW1iZXIgfCBzdHJpbmdcbiAgaXNfcHVibGlzaGVkOiBib29sZWFuXG59KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIGNvdXJzZXNcbiAgICAgIFNFVCB0aXRsZSA9ICR7Zm9ybURhdGEudGl0bGV9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICAgZGlmZmljdWx0eSA9ICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZCA9ICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICAgdGh1bWJuYWlsX3VybCA9ICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgICB0ZWFjaGVyX2lkID0gJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkLnRvU3RyaW5nKCkpfSxcbiAgICAgICAgICBpc19wdWJsaXNoZWQgPSAke2Zvcm1EYXRhLmlzX3B1Ymxpc2hlZH1cbiAgICAgIFdIRVJFIGlkID0gJHtjb3Vyc2VJZH1cbiAgICBgXG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb3Vyc2VzXCIpXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9jb3Vyc2VzLyR7Y291cnNlSWR9L2VkaXRgKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbdjBdIFVwZGF0ZSBjb3Vyc2UgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNvdXJzZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5yb2xsSW5Db3Vyc2UoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IGNvdXJzZUlkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImNvdXJzZUlkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInVzZXJJZFwiKSBhcyBzdHJpbmcpXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBlbnJvbGxtZW50cyAodXNlcl9pZCwgY291cnNlX2lkKVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7Y291cnNlSWR9KVxuICAgIGBcblxuICAgIC8vIEF3YXJkIGFjaGlldmVtZW50IHRvIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBhY2hpZXZlbWVudHMgKHVzZXJfaWQsIHR5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9pbnRzX2Vhcm5lZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgJ2NvdXJzZV9lbnJvbGxlZCcsXG4gICAgICAgICdOZXcgQ291cnNlIEVucm9sbGVkJyxcbiAgICAgICAgJ1N0YXJ0ZWQgYSBuZXcgbGVhcm5pbmcgam91cm5leScsXG4gICAgICAgIDVcbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBVcGRhdGUgc3R1ZGVudCBwb2ludHNcbiAgICBhd2FpdCBzcWxgXG4gICAgICBVUERBVEUgdXNlcnNcbiAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyA1XG4gICAgICBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIC8vIENoZWNrIGZvciBLbm93bGVkZ2UgU2Vla2VyIGJhZGdlIGZvciBzdHVkZW50XG4gICAgY29uc3QgZW5yb2xsbWVudENvdW50ID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIENPVU5UKERJU1RJTkNUIGNvdXJzZV9pZCkgYXMgY291bnQgRlJPTSBlbnJvbGxtZW50cyBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgaWYgKGVucm9sbG1lbnRDb3VudFswXS5jb3VudCA+PSAzKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnS25vd2xlZGdlIFNlZWtlcidcbiAgICAgIGBcblxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIFBvcHVsYXIgVGVhY2hlciBiYWRnZVxuICAgIGNvbnN0IHRlYWNoZXJEYXRhID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIHRlYWNoZXJfaWQgRlJPTSBjb3Vyc2VzIFdIRVJFIGlkID0gJHtjb3Vyc2VJZH1cbiAgICBgXG5cbiAgICBpZiAodGVhY2hlckRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGVhY2hlcklkID0gdGVhY2hlckRhdGFbMF0udGVhY2hlcl9pZFxuXG4gICAgICBjb25zdCB0b3RhbEVucm9sbG1lbnRzID0gYXdhaXQgc3FsYFxuICAgICAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnRcbiAgICAgICAgRlJPTSBlbnJvbGxtZW50cyBlXG4gICAgICAgIEpPSU4gY291cnNlcyBjIE9OIGUuY291cnNlX2lkID0gYy5pZFxuICAgICAgICBXSEVSRSBjLnRlYWNoZXJfaWQgPSAke3RlYWNoZXJJZH1cbiAgICAgIGBcblxuICAgICAgaWYgKHRvdGFsRW5yb2xsbWVudHNbMF0uY291bnQgPj0gMTApIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnUG9wdWxhciBUZWFjaGVyJ1xuICAgICAgICBgXG5cbiAgICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgICBWQUxVRVMgKCR7dGVhY2hlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbiAgICByZWRpcmVjdChgL2NvdXJzZXMvJHtjb3Vyc2VJZH1gKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbdjBdIEVucm9sbG1lbnQgZXJyb3I6XCIsIGVycm9yKVxuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbiAgcmVkaXJlY3QoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZENvdXJzZVRodW1ibmFpbChmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwidGh1bWJuYWlsXCIpIGFzIEZpbGVcblxuICAgIGlmICghZmlsZSB8fCBmaWxlLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJObyBmaWxlIHByb3ZpZGVkXCIgfVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIG11c3QgYmUgYW4gaW1hZ2VcIiB9XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplIChtYXggNU1CKVxuICAgIGlmIChmaWxlLnNpemUgPiA1ICogMTAyNCAqIDEwMjQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gNU1CXCIgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZVxuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBmaWxlLm5hbWUuc3BsaXQoXCIuXCIpLnBvcCgpXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyYW5kb21VVUlEKCl9LiR7ZmlsZUV4dGVuc2lvbn1gXG5cbiAgICAvLyBDcmVhdGUgdXBsb2FkcyBkaXJlY3RvcnkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGNvbnN0IHVwbG9hZHNEaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIFwidXBsb2Fkc1wiLCBcImNvdXJzZXNcIilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbWtkaXIodXBsb2Fkc0RpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gRGlyZWN0b3J5IG1pZ2h0IGFscmVhZHkgZXhpc3RcbiAgICB9XG5cbiAgICAvLyBTYXZlIGZpbGVcbiAgICBjb25zdCBmaWxlUGF0aCA9IGpvaW4odXBsb2Fkc0RpciwgZmlsZU5hbWUpXG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKClcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcylcbiAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIGJ1ZmZlcilcblxuICAgIC8vIFJldHVybiB0aGUgcHVibGljIFVSTFxuICAgIGNvbnN0IHB1YmxpY1VybCA9IGAvdXBsb2Fkcy9jb3Vyc2VzLyR7ZmlsZU5hbWV9YFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogcHVibGljVXJsIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGVcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZVdpdGhDb250ZW50KGZvcm1EYXRhOiB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBkaWZmaWN1bHR5OiBzdHJpbmdcbiAgcG9pbnRzX3Jld2FyZDogbnVtYmVyXG4gIHRodW1ibmFpbF91cmw/OiBzdHJpbmdcbiAgdGVhY2hlcl9pZDogc3RyaW5nXG4gIGlzX3B1Ymxpc2hlZDogYm9vbGVhblxuICBtb2R1bGVzOiBBcnJheTx7XG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBsZXNzb25zOiBBcnJheTx7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBjb250ZW50OiBzdHJpbmdcbiAgICAgIHBvaW50c19yZXdhcmQ6IG51bWJlclxuICAgIH0+XG4gICAgcXVpej86IHtcbiAgICAgIHRpdGxlOiBzdHJpbmdcbiAgICAgIHBhc3Npbmdfc2NvcmU6IG51bWJlclxuICAgICAgcG9pbnRzX3Jld2FyZDogbnVtYmVyXG4gICAgICBxdWVzdGlvbnM6IEFycmF5PHtcbiAgICAgICAgcXVlc3Rpb246IHN0cmluZ1xuICAgICAgICBhbnN3ZXJzOiBzdHJpbmdbXVxuICAgICAgICBjb3JyZWN0X2Fuc3dlcl9pbmRleDogbnVtYmVyXG4gICAgICB9PlxuICAgIH1cbiAgfT5cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBjb3Vyc2VzICh0aXRsZSwgZGVzY3JpcHRpb24sIGRpZmZpY3VsdHksIHBvaW50c19yZXdhcmQsIHRodW1ibmFpbF91cmwsIHRlYWNoZXJfaWQsIGlzX3B1Ymxpc2hlZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7Zm9ybURhdGEudGl0bGV9LFxuICAgICAgICAke2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSxcbiAgICAgICAgJHtmb3JtRGF0YS5kaWZmaWN1bHR5fSxcbiAgICAgICAgJHtmb3JtRGF0YS5wb2ludHNfcmV3YXJkfSxcbiAgICAgICAgJHtmb3JtRGF0YS50aHVtYm5haWxfdXJsIHx8IG51bGx9LFxuICAgICAgICAke3BhcnNlSW50KGZvcm1EYXRhLnRlYWNoZXJfaWQpfSxcbiAgICAgICAgJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICApXG4gICAgICBSRVRVUk5JTkcgaWRcbiAgICBgXG5cbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlc3VsdFswXS5pZFxuXG4gICAgLy8gQ3JlYXRlIG1vZHVsZXMgYW5kIHRoZWlyIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLm1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IGZvcm1EYXRhLm1vZHVsZXNbaV1cblxuICAgICAgY29uc3QgbW9kdWxlUmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgICBJTlNFUlQgSU5UTyBtb2R1bGVzIChjb3Vyc2VfaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgb3JkZXJfaW5kZXgpXG4gICAgICAgIFZBTFVFUyAoJHtjb3Vyc2VJZH0sICR7bW9kdWxlLnRpdGxlfSwgJHttb2R1bGUuZGVzY3JpcHRpb259LCAke2kgKyAxfSlcbiAgICAgICAgUkVUVVJOSU5HIGlkXG4gICAgICBgXG5cbiAgICAgIGNvbnN0IG1vZHVsZUlkID0gbW9kdWxlUmVzdWx0WzBdLmlkXG5cbiAgICAgIC8vIENyZWF0ZSBsZXNzb25zXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vZHVsZS5sZXNzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGxlc3NvbiA9IG1vZHVsZS5sZXNzb25zW2pdXG5cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIGxlc3NvbnMgKG1vZHVsZV9pZCwgdGl0bGUsIGNvbnRlbnQsIHZpZGVvX3VybCwgb3JkZXJfaW5kZXgsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWR9LFxuICAgICAgICAgICAgJHtsZXNzb24udGl0bGV9LFxuICAgICAgICAgICAgJHtsZXNzb24uY29udGVudH0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJHtqICsgMX0sXG4gICAgICAgICAgICAke2xlc3Nvbi5wb2ludHNfcmV3YXJkfVxuICAgICAgICAgIClcbiAgICAgICAgYFxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgcXVpeiBpZiBwcm92aWRlZCBhdCBtb2R1bGUgbGV2ZWxcbiAgICAgIGlmIChtb2R1bGUucXVpeikge1xuICAgICAgICBjb25zdCBxdWl6UmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXp6ZXMgKG1vZHVsZV9pZCwgdGl0bGUsIHBhc3Npbmdfc2NvcmUsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWR9LFxuICAgICAgICAgICAgJHttb2R1bGUucXVpei50aXRsZX0sXG4gICAgICAgICAgICAke21vZHVsZS5xdWl6LnBhc3Npbmdfc2NvcmV9LFxuICAgICAgICAgICAgJHttb2R1bGUucXVpei5wb2ludHNfcmV3YXJkfVxuICAgICAgICAgIClcbiAgICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgICAgYFxuXG4gICAgICAgIGNvbnN0IHF1aXpJZCA9IHF1aXpSZXN1bHRbMF0uaWRcblxuICAgICAgICAvLyBDcmVhdGUgcXVlc3Rpb25zXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbW9kdWxlLnF1aXoucXVlc3Rpb25zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBtb2R1bGUucXVpei5xdWVzdGlvbnNba11cbiAgICAgICAgICBjb25zdCBvcHRpb25zSnNvbiA9IEpTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLmFuc3dlcnMpXG4gICAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBxdWVzdGlvbi5jb3JyZWN0X2Fuc3dlcl9pbmRleCkgLy8gQSwgQiwgQywgRFxuXG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gcXVpel9xdWVzdGlvbnMgKHF1aXpfaWQsIHF1ZXN0aW9uLCBvcHRpb25zLCBjb3JyZWN0X2Fuc3dlciwgb3JkZXJfaW5kZXgpXG4gICAgICAgICAgICBWQUxVRVMgKFxuICAgICAgICAgICAgICAke3F1aXpJZH0sXG4gICAgICAgICAgICAgICR7cXVlc3Rpb24ucXVlc3Rpb259LFxuICAgICAgICAgICAgICAke29wdGlvbnNKc29ufSxcbiAgICAgICAgICAgICAgJHtjb3JyZWN0QW5zd2VyfSxcbiAgICAgICAgICAgICAgJHtrICsgMX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90dXRvclwiKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdXJzZUlkIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBDcmVhdGUgY291cnNlIHdpdGggY29udGVudCBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY291cnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wbGV0ZUxlc3Nvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgbGVzc29uSWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwibGVzc29uSWRcIikgYXMgc3RyaW5nKVxuICBjb25zdCB1c2VySWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwidXNlcklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgY291cnNlSWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiY291cnNlSWRcIikgYXMgc3RyaW5nKVxuXG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgYWxyZWFkeSBjb21wbGV0ZWRcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gbGVzc29uX3Byb2dyZXNzXG4gICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBsZXNzb25faWQgPSAke2xlc3NvbklkfVxuICAgIGBcblxuICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQWxyZWFkeSBjb21wbGV0ZWRcIiB9XG4gICAgfVxuXG4gICAgLy8gTWFyayBsZXNzb24gYXMgY29tcGxldGVcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBsZXNzb25fcHJvZ3Jlc3MgKHVzZXJfaWQsIGxlc3Nvbl9pZCwgY29tcGxldGVkLCBjb21wbGV0ZWRfYXQpXG4gICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtsZXNzb25JZH0sIHRydWUsIE5PVygpKVxuICAgIGBcblxuICAgIC8vIEdldCBsZXNzb24gcG9pbnRzXG4gICAgY29uc3QgbGVzc29ucyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBwb2ludHNfcmV3YXJkIEZST00gbGVzc29ucyBXSEVSRSBpZCA9ICR7bGVzc29uSWR9XG4gICAgYFxuXG4gICAgY29uc3QgcG9pbnRzUmV3YXJkID0gbGVzc29uc1swXT8ucG9pbnRzX3Jld2FyZCB8fCA1XG5cbiAgICAvLyBBd2FyZCBwb2ludHMgdG8gc3R1ZGVudFxuICAgIGF3YWl0IHNxbGBcbiAgICAgIFVQREFURSB1c2Vyc1xuICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArICR7cG9pbnRzUmV3YXJkfVxuICAgICAgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICBgXG5cbiAgICAvLyBBd2FyZCBwb2ludHMgdG8gdGVhY2hlciAoMSBwb2ludCBwZXIgbGVzc29uIGNvbXBsZXRpb24pXG4gICAgY29uc3QgdGVhY2hlckRhdGEgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgYy50ZWFjaGVyX2lkXG4gICAgICBGUk9NIGNvdXJzZXMgY1xuICAgICAgSk9JTiBtb2R1bGVzIG0gT04gYy5pZCA9IG0uY291cnNlX2lkXG4gICAgICBKT0lOIGxlc3NvbnMgbCBPTiBtLmlkID0gbC5tb2R1bGVfaWRcbiAgICAgIFdIRVJFIGwuaWQgPSAke2xlc3NvbklkfVxuICAgIGBcblxuICAgIGlmICh0ZWFjaGVyRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0ZWFjaGVySWQgPSB0ZWFjaGVyRGF0YVswXS50ZWFjaGVyX2lkXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2Vyc1xuICAgICAgICBTRVQgcG9pbnRzID0gcG9pbnRzICsgMVxuICAgICAgICBXSEVSRSBpZCA9ICR7dGVhY2hlcklkfVxuICAgICAgYFxuICAgICAgYXdhaXQgdXBkYXRlVXNlckxldmVsKHRlYWNoZXJJZClcbiAgICB9XG5cbiAgICBhd2FpdCB1cGRhdGVVc2VyTGV2ZWwodXNlcklkKVxuXG4gICAgYXdhaXQgdXBkYXRlU3RyZWFrKHVzZXJJZClcblxuICAgIGF3YWl0IHVwZGF0ZURhaWx5Q2hhbGxlbmdlUHJvZ3Jlc3ModXNlcklkLCBcImxlc3NvbnNfY29tcGxldGVkXCIsIDEpXG5cbiAgICAvLyBDcmVhdGUgYWNoaWV2ZW1lbnQgZm9yIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBhY2hpZXZlbWVudHMgKHVzZXJfaWQsIHR5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9pbnRzX2Vhcm5lZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgJ2xlc3Nvbl9jb21wbGV0ZWQnLFxuICAgICAgICAnTGVzc29uIENvbXBsZXRlJyxcbiAgICAgICAgJ0NvbXBsZXRlZCBhIGxlc3NvbicsXG4gICAgICAgICR7cG9pbnRzUmV3YXJkfVxuICAgICAgKVxuICAgIGBcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgc2hvdWxkIGdldCBcIkZpcnN0IFN0ZXBzXCIgYmFkZ2VcbiAgICBjb25zdCBsZXNzb25Db3VudCA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudCBGUk9NIGxlc3Nvbl9wcm9ncmVzc1xuICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgY29tcGxldGVkID0gdHJ1ZVxuICAgIGBcblxuICAgIGlmIChsZXNzb25Db3VudFswXS5jb3VudCA9PT0gMSkge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0ZpcnN0IFN0ZXBzJ1xuICAgICAgYFxuXG4gICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY291cnNlIHByb2dyZXNzXG4gICAgYXdhaXQgdXBkYXRlQ291cnNlUHJvZ3Jlc3ModXNlcklkLCBjb3Vyc2VJZClcblxuICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfS9sZXNzb25zLyR7bGVzc29uSWR9YClcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBDb21wbGV0ZSBsZXNzb24gZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY29tcGxldGUgbGVzc29uXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRRdWl6KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBxdWl6SWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwicXVpeklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInVzZXJJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGxlc3NvbklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImxlc3NvbklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgY291cnNlSWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiY291cnNlSWRcIikgYXMgc3RyaW5nKVxuICBjb25zdCBhbnN3ZXJzSnNvbiA9IGZvcm1EYXRhLmdldChcImFuc3dlcnNcIikgYXMgc3RyaW5nXG4gIGNvbnN0IGFuc3dlcnMgPSBKU09OLnBhcnNlKGFuc3dlcnNKc29uKVxuXG4gIHRyeSB7XG4gICAgLy8gR2V0IHF1aXogZGV0YWlscyBhbmQgcXVlc3Rpb25zXG4gICAgY29uc3QgcXVpenplcyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gcXVpenplcyBXSEVSRSBpZCA9ICR7cXVpeklkfVxuICAgIGBcblxuICAgIGNvbnN0IHF1aXogPSBxdWl6emVzWzBdXG5cbiAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgKiBGUk9NIHF1aXpfcXVlc3Rpb25zIFdIRVJFIHF1aXpfaWQgPSAke3F1aXpJZH1cbiAgICBgXG5cbiAgICAvLyBDYWxjdWxhdGUgc2NvcmVcbiAgICBsZXQgY29ycmVjdENvdW50ID0gMFxuICAgIHF1ZXN0aW9ucy5mb3JFYWNoKChxKSA9PiB7XG4gICAgICBpZiAoYW5zd2Vyc1txLmlkXSA9PT0gcS5jb3JyZWN0X2Fuc3dlcikge1xuICAgICAgICBjb3JyZWN0Q291bnQrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzY29yZSA9IE1hdGgucm91bmQoKGNvcnJlY3RDb3VudCAvIHF1ZXN0aW9ucy5sZW5ndGgpICogMTAwKVxuICAgIGNvbnN0IHBhc3NlZCA9IHNjb3JlID49IHF1aXoucGFzc2luZ19zY29yZVxuXG4gICAgLy8gUmVjb3JkIGF0dGVtcHRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBxdWl6X2F0dGVtcHRzICh1c2VyX2lkLCBxdWl6X2lkLCBzY29yZSwgYW5zd2VycywgcGFzc2VkKVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7cXVpeklkfSwgJHtzY29yZX0sICR7YW5zd2Vyc0pzb259LCAke3Bhc3NlZH0pXG4gICAgYFxuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgLy8gQXdhcmQgcG9pbnRzXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VycyBcbiAgICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArICR7cXVpei5wb2ludHNfcmV3YXJkfVxuICAgICAgICBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgICAgYFxuXG4gICAgICAvLyBDcmVhdGUgYWNoaWV2ZW1lbnRcbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgJHt1c2VySWR9LCBcbiAgICAgICAgICAncXVpel9wYXNzZWQnLCBcbiAgICAgICAgICAnUXVpeiBQYXNzZWQnLFxuICAgICAgICAgICdTdWNjZXNzZnVsbHkgcGFzc2VkIGEgcXVpeicsXG4gICAgICAgICAgJHtxdWl6LnBvaW50c19yZXdhcmR9XG4gICAgICAgIClcbiAgICAgIGBcblxuICAgICAgLy8gQ2hlY2sgZm9yIFF1aXogTWFzdGVyIGJhZGdlXG4gICAgICBjb25zdCBwZXJmZWN0UXVpenplcyA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50IEZST00gcXVpel9hdHRlbXB0c1xuICAgICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBzY29yZSA9IDEwMFxuICAgICAgYFxuXG4gICAgICBpZiAocGVyZmVjdFF1aXp6ZXNbMF0uY291bnQgPj0gMykge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdRdWl6IE1hc3RlcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfS9sZXNzb25zLyR7bGVzc29uSWR9YClcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzY29yZSwgcGFzc2VkIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBTdWJtaXQgcXVpeiBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBzdWJtaXQgcXVpelwiIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVDb3Vyc2VQcm9ncmVzcyh1c2VySWQ6IG51bWJlciwgY291cnNlSWQ6IG51bWJlcikge1xuICAvLyBHZXQgdG90YWwgbGVzc29ucyBpbiBjb3Vyc2VcbiAgY29uc3QgdG90YWxMZXNzb25zID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudFxuICAgIEZST00gbGVzc29ucyBsXG4gICAgSk9JTiBtb2R1bGVzIG0gT04gbC5tb2R1bGVfaWQgPSBtLmlkXG4gICAgV0hFUkUgbS5jb3Vyc2VfaWQgPSAke2NvdXJzZUlkfVxuICBgXG5cbiAgLy8gR2V0IGNvbXBsZXRlZCBsZXNzb25zXG4gIGNvbnN0IGNvbXBsZXRlZExlc3NvbnMgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50XG4gICAgRlJPTSBsZXNzb25fcHJvZ3Jlc3MgbHBcbiAgICBKT0lOIGxlc3NvbnMgbCBPTiBscC5sZXNzb25faWQgPSBsLmlkXG4gICAgSk9JTiBtb2R1bGVzIG0gT04gbC5tb2R1bGVfaWQgPSBtLmlkXG4gICAgV0hFUkUgbHAudXNlcl9pZCA9ICR7dXNlcklkfSBcbiAgICBBTkQgbS5jb3Vyc2VfaWQgPSAke2NvdXJzZUlkfVxuICAgIEFORCBscC5jb21wbGV0ZWQgPSB0cnVlXG4gIGBcblxuICBjb25zdCB0b3RhbCA9IHRvdGFsTGVzc29uc1swXS5jb3VudFxuICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZWRMZXNzb25zWzBdLmNvdW50XG4gIGNvbnN0IHByb2dyZXNzID0gdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoY29tcGxldGVkIC8gdG90YWwpICogMTAwKSA6IDBcblxuICAvLyBVcGRhdGUgZW5yb2xsbWVudFxuICBhd2FpdCBzcWxgXG4gICAgVVBEQVRFIGVucm9sbG1lbnRzIFxuICAgIFNFVCBwcm9ncmVzcyA9ICR7cHJvZ3Jlc3N9LFxuICAgICAgICBzdGF0dXMgPSBDQVNFIFdIRU4gJHtwcm9ncmVzc30gPSAxMDAgVEhFTiAnY29tcGxldGVkJyBFTFNFICdhY3RpdmUnIEVORCxcbiAgICAgICAgY29tcGxldGVkX2F0ID0gQ0FTRSBXSEVOICR7cHJvZ3Jlc3N9ID0gMTAwIFRIRU4gTk9XKCkgRUxTRSBOVUxMIEVORFxuICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNvdXJzZV9pZCA9ICR7Y291cnNlSWR9XG4gIGBcblxuICAvLyBJZiBjb21wbGV0ZWQsIGF3YXJkIGNvdXJzZSBjb21wbGV0aW9uIHBvaW50c1xuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgcG9pbnRzX3Jld2FyZCwgdGVhY2hlcl9pZCBGUk9NIGNvdXJzZXMgV0hFUkUgaWQgPSAke2NvdXJzZUlkfVxuICAgIGBcblxuICAgIGNvbnN0IHBvaW50c1Jld2FyZCA9IGNvdXJzZXNbMF0/LnBvaW50c19yZXdhcmQgfHwgMTAwXG4gICAgY29uc3QgdGVhY2hlcklkID0gY291cnNlc1swXT8udGVhY2hlcl9pZFxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBVUERBVEUgdXNlcnNcbiAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3BvaW50c1Jld2FyZH1cbiAgICAgIFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHRlYWNoZXIgKDEwIHBvaW50cyBwZXIgY291cnNlIGNvbXBsZXRpb24pXG4gICAgaWYgKHRlYWNoZXJJZCkge1xuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcnNcbiAgICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArIDEwXG4gICAgICAgIFdIRVJFIGlkID0gJHt0ZWFjaGVySWR9XG4gICAgICBgXG4gICAgICBhd2FpdCB1cGRhdGVVc2VyTGV2ZWwodGVhY2hlcklkKVxuICAgIH1cblxuICAgIGF3YWl0IHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIGFjaGlldmVtZW50cyAodXNlcl9pZCwgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb2ludHNfZWFybmVkKVxuICAgICAgVkFMVUVTIChcbiAgICAgICAgJHt1c2VySWR9LFxuICAgICAgICAnY291cnNlX2NvbXBsZXRlZCcsXG4gICAgICAgICdDb3Vyc2UgQ29tcGxldGUnLFxuICAgICAgICAnRmluaXNoZWQgYW4gZW50aXJlIGNvdXJzZScsXG4gICAgICAgICR7cG9pbnRzUmV3YXJkfVxuICAgICAgKVxuICAgIGBcblxuICAgIC8vIENoZWNrIGZvciBDb3Vyc2UgQ2hhbXBpb24gYmFkZ2UgZm9yIHN0dWRlbnRcbiAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0NvdXJzZSBDaGFtcGlvbidcbiAgICBgXG5cbiAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgYFxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciB0ZWFjaGVyIGJhZGdlc1xuICAgIGlmICh0ZWFjaGVySWQpIHtcbiAgICAgIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudFxuICAgICAgICBGUk9NIGVucm9sbG1lbnRzIGVcbiAgICAgICAgSk9JTiBjb3Vyc2VzIGMgT04gZS5jb3Vyc2VfaWQgPSBjLmlkXG4gICAgICAgIFdIRVJFIGMudGVhY2hlcl9pZCA9ICR7dGVhY2hlcklkfSBBTkQgZS5zdGF0dXMgPSAnY29tcGxldGVkJ1xuICAgICAgYFxuXG4gICAgICBjb25zdCBjb21wbGV0aW9uQ291bnQgPSB0b3RhbENvbXBsZXRpb25zWzBdLmNvdW50XG5cbiAgICAgIC8vIEVmZmVjdGl2ZSBUZWFjaGVyICg1IGNvbXBsZXRpb25zKVxuICAgICAgaWYgKGNvbXBsZXRpb25Db3VudCA+PSA1KSB7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0VmZmVjdGl2ZSBUZWFjaGVyJ1xuICAgICAgICBgXG5cbiAgICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgICBWQUxVRVMgKCR7dGVhY2hlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE1hc3RlciBFZHVjYXRvciAoMjAgY29tcGxldGlvbnMpXG4gICAgICBpZiAoY29tcGxldGlvbkNvdW50ID49IDIwKSB7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ01hc3RlciBFZHVjYXRvcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3RlYWNoZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHVzZXIgbGV2ZWwgYmFzZWQgb24gcG9pbnRzXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyTGV2ZWwodXNlcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIHBvaW50cywgbGV2ZWwgRlJPTSB1c2VycyBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICBgXG5cbiAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgY29uc3QgeyBwb2ludHMsIGxldmVsIH0gPSB1c2VyRGF0YVswXVxuXG4gIC8vIExldmVsIGNhbGN1bGF0aW9uOiBsZXZlbCA9IGZsb29yKHBvaW50cyAvIDEwMCkgKyAxXG4gIGNvbnN0IG5ld0xldmVsID0gTWF0aC5mbG9vcihwb2ludHMgLyAxMDApICsgMVxuXG4gIGlmIChuZXdMZXZlbCA+IGxldmVsKSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIHVzZXJzIFNFVCBsZXZlbCA9ICR7bmV3TGV2ZWx9IFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgLy8gQXdhcmQgYWNoaWV2ZW1lbnQgZm9yIGxldmVsaW5nIHVwXG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke3VzZXJJZH0sIFxuICAgICAgICAnbGV2ZWxfdXAnLCBcbiAgICAgICAgJ0xldmVsIFVwIScsXG4gICAgICAgICR7YFJlYWNoZWQgbGV2ZWwgJHtuZXdMZXZlbH1gfSxcbiAgICAgICAgMTBcbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBDaGVjayBmb3IgbGV2ZWwtYmFzZWQgYmFkZ2VzXG4gICAgaWYgKG5ld0xldmVsID09PSA1KSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdSaXNpbmcgU3RhcidgXG4gICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGV2ZWwgPT09IDEwKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdPdmVyYWNoaWV2ZXInYFxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgc3RyZWFrXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTdHJlYWsodXNlcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXG5cbiAgY29uc3Qgc3RyZWFrRGF0YSA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgKiBGUk9NIHVzZXJfc3RyZWFrcyBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9XG4gIGBcblxuICBpZiAoc3RyZWFrRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBDcmVhdGUgbmV3IHN0cmVha1xuICAgIGF3YWl0IHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIHVzZXJfc3RyZWFrcyAodXNlcl9pZCwgY3VycmVudF9zdHJlYWssIGxvbmdlc3Rfc3RyZWFrLCBsYXN0X2FjdGl2aXR5X2RhdGUpXG4gICAgICBWQUxVRVMgKCR7dXNlcklkfSwgMSwgMSwgJHt0b2RheX0pXG4gICAgYFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0cmVhayA9IHN0cmVha0RhdGFbMF1cbiAgICBjb25zdCBsYXN0RGF0ZSA9IHN0cmVhay5sYXN0X2FjdGl2aXR5X2RhdGVcblxuICAgIGlmIChsYXN0RGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgIC8vIEFscmVhZHkgdXBkYXRlZCB0b2RheVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoKVxuICAgIHllc3RlcmRheS5zZXREYXRlKHllc3RlcmRheS5nZXREYXRlKCkgLSAxKVxuICAgIGNvbnN0IHllc3RlcmRheVN0ciA9IHllc3RlcmRheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuXG4gICAgaWYgKGxhc3REYXRlID09PSB5ZXN0ZXJkYXlTdHIpIHtcbiAgICAgIC8vIENvbnRpbnVpbmcgc3RyZWFrXG4gICAgICBjb25zdCBuZXdTdHJlYWsgPSBzdHJlYWsuY3VycmVudF9zdHJlYWsgKyAxXG4gICAgICBjb25zdCBsb25nZXN0U3RyZWFrID0gTWF0aC5tYXgobmV3U3RyZWFrLCBzdHJlYWsubG9uZ2VzdF9zdHJlYWspXG5cbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIHVzZXJfc3RyZWFrcyBcbiAgICAgICAgU0VUIGN1cnJlbnRfc3RyZWFrID0gJHtuZXdTdHJlYWt9LFxuICAgICAgICAgICAgbG9uZ2VzdF9zdHJlYWsgPSAke2xvbmdlc3RTdHJlYWt9LFxuICAgICAgICAgICAgbGFzdF9hY3Rpdml0eV9kYXRlID0gJHt0b2RheX0sXG4gICAgICAgICAgICB1cGRhdGVkX2F0ID0gTk9XKClcbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICAgICAgYFxuXG4gICAgICAvLyBDaGVjayBmb3Igc3RyZWFrIGJhZGdlc1xuICAgICAgaWYgKG5ld1N0cmVhayA9PT0gNykge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdEZWRpY2F0ZWQgTGVhcm5lcidgXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdHJlYWsgYnJva2VuLCByZXNldCB0byAxXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VyX3N0cmVha3MgXG4gICAgICAgIFNFVCBjdXJyZW50X3N0cmVhayA9IDEsXG4gICAgICAgICAgICBsYXN0X2FjdGl2aXR5X2RhdGUgPSAke3RvZGF5fSxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQgPSBOT1coKVxuICAgICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9XG4gICAgICBgXG4gICAgfVxuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgZGFpbHkgY2hhbGxlbmdlIHByb2dyZXNzXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVEYWlseUNoYWxsZW5nZVByb2dyZXNzKHVzZXJJZDogbnVtYmVyLCBjaGFsbGVuZ2VUeXBlOiBzdHJpbmcsIGluY3JlbWVudDogbnVtYmVyKSB7XG4gIC8vIEdldCBhY3RpdmUgY2hhbGxlbmdlcyBvZiB0aGlzIHR5cGVcbiAgY29uc3QgY2hhbGxlbmdlcyA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgaWQsIHRhcmdldF92YWx1ZSBcbiAgICBGUk9NIGRhaWx5X2NoYWxsZW5nZXNcbiAgICBXSEVSRSBjaGFsbGVuZ2VfdHlwZSA9ICR7Y2hhbGxlbmdlVHlwZX1cbiAgICAgIEFORCBzdGFydF9kYXRlIDw9IENVUlJFTlRfREFURSBcbiAgICAgIEFORCBlbmRfZGF0ZSA+PSBDVVJSRU5UX0RBVEVcbiAgYFxuXG4gIGZvciAoY29uc3QgY2hhbGxlbmdlIG9mIGNoYWxsZW5nZXMpIHtcbiAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBwcm9ncmVzcyBlbnRyeVxuICAgIGNvbnN0IHByb2dyZXNzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSB1c2VyX2RhaWx5X2NoYWxsZW5nZXNcbiAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNoYWxsZW5nZV9pZCA9ICR7Y2hhbGxlbmdlLmlkfVxuICAgIGBcblxuICAgIGlmIChwcm9ncmVzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIENyZWF0ZSBuZXcgcHJvZ3Jlc3MgZW50cnlcbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gaW5jcmVtZW50XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBuZXdQcm9ncmVzcyA+PSBjaGFsbGVuZ2UudGFyZ2V0X3ZhbHVlXG5cbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9kYWlseV9jaGFsbGVuZ2VzICh1c2VyX2lkLCBjaGFsbGVuZ2VfaWQsIHByb2dyZXNzLCBjb21wbGV0ZWQsIGNvbXBsZXRlZF9hdClcbiAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7Y2hhbGxlbmdlLmlkfSwgJHtuZXdQcm9ncmVzc30sICR7Y29tcGxldGVkfSwgJHtjb21wbGV0ZWQgPyBcIk5PVygpXCIgOiBudWxsfSlcbiAgICAgIGBcblxuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAvLyBBd2FyZCBwb2ludHNcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlRGF0YSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgcG9pbnRzX3Jld2FyZCBGUk9NIGRhaWx5X2NoYWxsZW5nZXMgV0hFUkUgaWQgPSAke2NoYWxsZW5nZS5pZH1cbiAgICAgICAgYFxuICAgICAgICBjb25zdCBwb2ludHNSZXdhcmQgPSBjaGFsbGVuZ2VEYXRhWzBdPy5wb2ludHNfcmV3YXJkIHx8IDBcblxuICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgVVBEQVRFIHVzZXJzIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3BvaW50c1Jld2FyZH0gV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICAgICAgYFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXByb2dyZXNzWzBdLmNvbXBsZXRlZCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByb2dyZXNzXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IHByb2dyZXNzWzBdLnByb2dyZXNzICsgaW5jcmVtZW50XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBuZXdQcm9ncmVzcyA+PSBjaGFsbGVuZ2UudGFyZ2V0X3ZhbHVlXG5cbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIHVzZXJfZGFpbHlfY2hhbGxlbmdlc1xuICAgICAgICBTRVQgcHJvZ3Jlc3MgPSAke25ld1Byb2dyZXNzfSxcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9ICR7Y29tcGxldGVkfSxcbiAgICAgICAgICAgIGNvbXBsZXRlZF9hdCA9ICR7Y29tcGxldGVkID8gXCJOT1coKVwiIDogbnVsbH1cbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgY2hhbGxlbmdlX2lkID0gJHtjaGFsbGVuZ2UuaWR9XG4gICAgICBgXG5cbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgLy8gQXdhcmQgcG9pbnRzXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZURhdGEgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIHBvaW50c19yZXdhcmQgRlJPTSBkYWlseV9jaGFsbGVuZ2VzIFdIRVJFIGlkID0gJHtjaGFsbGVuZ2UuaWR9XG4gICAgICAgIGBcbiAgICAgICAgY29uc3QgcG9pbnRzUmV3YXJkID0gY2hhbGxlbmdlRGF0YVswXT8ucG9pbnRzX3Jld2FyZCB8fCAwXG5cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIFVQREFURSB1c2VycyBTRVQgcG9pbnRzID0gcG9pbnRzICsgJHtwb2ludHNSZXdhcmR9IFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBNG9Cc0IifQ==
}),
"[project]/components/quiz-component.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizComponent",
    ()=>QuizComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/radio-group.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$9e8b86__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:9e8b86 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
"use client";
;
;
;
;
;
;
;
;
function QuizComponent({ quiz, questions, userId, lessonId, courseId }) {
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("quizId", quiz.id.toString());
        formData.append("userId", userId.toString());
        formData.append("lessonId", lessonId.toString());
        formData.append("courseId", courseId.toString());
        formData.append("answers", JSON.stringify(answers));
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$9e8b86__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitQuiz"])(formData);
        setResult(response);
        setIsSubmitting(false);
    };
    const allAnswered = questions.every((q)=>answers[q.id]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "w-5 h-5 text-accent"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            quiz.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz-component.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: quiz.description
                    }, void 0, false, {
                        fileName: "[project]/components/quiz-component.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Passing score: ",
                            quiz.passing_score,
                            "% | Reward: ",
                            quiz.points_reward,
                            " points"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/quiz-component.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/quiz-component.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-6",
                children: !result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-base font-semibold text-foreground",
                                        children: [
                                            index + 1,
                                            ". ",
                                            question.question
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/quiz-component.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                        value: answers[question.id],
                                        onValueChange: (value)=>setAnswers({
                                                ...answers,
                                                [question.id]: value
                                            }),
                                        children: question.options.map((option, optionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                        value: option,
                                                        id: `q${question.id}-${optionIndex}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/quiz-component.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: `q${question.id}-${optionIndex}`,
                                                        className: "cursor-pointer",
                                                        children: option
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/quiz-component.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, optionIndex, true, {
                                                fileName: "[project]/components/quiz-component.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/quiz-component.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, question.id, true, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubmit,
                            disabled: !allAnswered || isSubmitting,
                            className: "w-full bg-primary hover:bg-primary-dark",
                            children: isSubmitting ? "Submitting..." : "Submit Quiz"
                        }, void 0, false, {
                            fileName: "[project]/components/quiz-component.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: result.passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-16 h-16 text-accent mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "Congratulations!"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground mb-4",
                                children: [
                                    "You scored ",
                                    result.score,
                                    "% and passed the quiz!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-accent font-semibold",
                                children: [
                                    "+",
                                    quiz.points_reward,
                                    " points earned"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "w-16 h-16 text-destructive mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "Keep Trying!"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground mb-4",
                                children: [
                                    "You scored ",
                                    result.score,
                                    "%. Try again!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    setResult(null);
                                    setAnswers({});
                                },
                                children: "Retake Quiz"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/quiz-component.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/quiz-component.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/quiz-component.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/actions/data:32b85a [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075":"completeLesson"},"app/actions/courses.ts",""] */ __turbopack_context__.s([
    "completeLesson",
    ()=>completeLesson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var completeLesson = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "completeLesson"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY291cnNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHNxbCBmcm9tIFwiQC9saWIvZGJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyB3cml0ZUZpbGUsIG1rZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSBcImNyeXB0b1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2UoZm9ybURhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRpZmZpY3VsdHk6IHN0cmluZ1xuICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgdGh1bWJuYWlsX3VybD86IHN0cmluZ1xuICB0ZWFjaGVyX2lkOiBudW1iZXIgfCBzdHJpbmdcbiAgaXNfcHVibGlzaGVkOiBib29sZWFuXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gY291cnNlcyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkaWZmaWN1bHR5LCBwb2ludHNfcmV3YXJkLCB0aHVtYm5haWxfdXJsLCB0ZWFjaGVyX2lkLCBpc19wdWJsaXNoZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkLnRvU3RyaW5nKCkpfSxcbiAgICAgICAgJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICApXG4gICAgICBSRVRVUk5JTkcgaWRcbiAgICBgXG5cbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlc3VsdFswXS5pZFxuXG4gICAgLy8gQ3JlYXRlIG1vZHVsZXNcbiAgICBjb25zdCBtb2R1bGVzID0gW1xuICAgICAgeyB0aXRsZTogJ0NvdXJzZSBJbnRyb2R1Y3Rpb24nLCBkZXNjcmlwdGlvbjogJ0dldCBzdGFydGVkIHdpdGggdGhpcyBjb3Vyc2UgYW5kIHVuZGVyc3RhbmQgd2hhdCB5b3Ugd2lsbCBsZWFybicsIG9yZGVyX2luZGV4OiAxIH0sXG4gICAgICB7IHRpdGxlOiAnQ29yZSBDb25jZXB0cycsIGRlc2NyaXB0aW9uOiAnTGVhcm4gdGhlIGZ1bmRhbWVudGFsIGNvbmNlcHRzIGFuZCBwcmluY2lwbGVzJywgb3JkZXJfaW5kZXg6IDIgfSxcbiAgICAgIHsgdGl0bGU6ICdQcmFjdGljYWwgQXBwbGljYXRpb24nLCBkZXNjcmlwdGlvbjogJ0FwcGx5IHdoYXQgeW91IGhhdmUgbGVhcm5lZCB0aHJvdWdoIGhhbmRzLW9uIGV4ZXJjaXNlcycsIG9yZGVyX2luZGV4OiAzIH0sXG4gICAgICB7IHRpdGxlOiAnQWR2YW5jZWQgVG9waWNzJywgZGVzY3JpcHRpb246ICdFeHBsb3JlIGFkdmFuY2VkIGNvbmNlcHRzIGFuZCBiZXN0IHByYWN0aWNlcycsIG9yZGVyX2luZGV4OiA0IH1cbiAgICBdXG5cbiAgICBjb25zdCBtb2R1bGVJZHMgPSBbXVxuICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgIGNvbnN0IG1vZHVsZVJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gbW9kdWxlcyAoY291cnNlX2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yZGVyX2luZGV4KVxuICAgICAgICBWQUxVRVMgKCR7Y291cnNlSWR9LCAke21vZHVsZS50aXRsZX0sICR7bW9kdWxlLmRlc2NyaXB0aW9ufSwgJHttb2R1bGUub3JkZXJfaW5kZXh9KVxuICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgIGBcbiAgICAgIG1vZHVsZUlkcy5wdXNoKG1vZHVsZVJlc3VsdFswXS5pZClcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGVzc29ucyBmb3IgZWFjaCBtb2R1bGVcbiAgICBjb25zdCBsZXNzb25zID0gW1xuICAgICAgLy8gTW9kdWxlIDE6IEludHJvZHVjdGlvblxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIHRoZSBDb3Vyc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6IGBXZWxjb21lIHRvICR7Zm9ybURhdGEudGl0bGV9IVxuXG5UaGlzIGNvdXJzZSB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBlc3NlbnRpYWwgY29uY2VwdHMgYW5kIHNraWxscyB5b3UgbmVlZCB0byBzdWNjZWVkLiBCeSB0aGUgZW5kIG9mIHRoaXMgY291cnNlLCB5b3Ugd2lsbCBoYXZlIGEgc29saWQgdW5kZXJzdGFuZGluZyBvZiB0aGUgdG9waWMgYW5kIGJlIGFibGUgdG8gYXBwbHkgd2hhdCB5b3UndmUgbGVhcm5lZC5cblxuV2hhdCB5b3Ugd2lsbCBsZWFybjpcbi0gRnVuZGFtZW50YWwgY29uY2VwdHMgYW5kIHByaW5jaXBsZXNcbi0gUHJhY3RpY2FsIGFwcGxpY2F0aW9ucyBhbmQgZXhhbXBsZXNcbi0gQmVzdCBwcmFjdGljZXMgYW5kIGNvbW1vbiBwYXR0ZXJuc1xuLSBIYW5kcy1vbiBleGVyY2lzZXMgYW5kIHByb2plY3RzXG5cbkxldCdzIGdldCBzdGFydGVkIG9uIHRoaXMgbGVhcm5pbmcgam91cm5leSFgLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnQ291cnNlIE92ZXJ2aWV3IGFuZCBPYmplY3RpdmVzJyxcbiAgICAgICAgICBjb250ZW50OiBgSW4gdGhpcyBsZXNzb24sIHdlIHdpbGwgZXhwbG9yZTpcblxu4oCiIFRoZSBtYWluIHRvcGljcyBjb3ZlcmVkIGluIHRoaXMgY291cnNlXG7igKIgTGVhcm5pbmcgb2JqZWN0aXZlcyBhbmQgb3V0Y29tZXNcbuKAoiBQcmVyZXF1aXNpdGVzIGFuZCByZXF1aXJlbWVudHNcbuKAoiBDb3Vyc2Ugc3RydWN0dXJlIGFuZCBwcm9ncmVzc2lvblxu4oCiIEFzc2Vzc21lbnQgbWV0aG9kcyBhbmQgZ3JhZGluZyBjcml0ZXJpYVxuXG5VbmRlcnN0YW5kaW5nIHRoZXNlIGVsZW1lbnRzIHdpbGwgaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGxlYXJuaW5nIGV4cGVyaWVuY2UuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMjogQ29yZSBDb25jZXB0c1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdGdW5kYW1lbnRhbCBQcmluY2lwbGVzJyxcbiAgICAgICAgICBjb250ZW50OiBgTGV0J3MgZGl2ZSBpbnRvIHRoZSBjb3JlIHByaW5jaXBsZXMgdGhhdCBmb3JtIHRoZSBmb3VuZGF0aW9uIG9mIHRoaXMgc3ViamVjdC5cblxuS2V5IGNvbmNlcHRzIGNvdmVyZWQ6XG7igKIgQmFzaWMgdGVybWlub2xvZ3kgYW5kIGRlZmluaXRpb25zXG7igKIgQ29yZSBwcmluY2lwbGVzIGFuZCB0aGVvcmllc1xu4oCiIEZ1bmRhbWVudGFsIHJlbGF0aW9uc2hpcHMgYW5kIGRlcGVuZGVuY2llc1xu4oCiIENvbW1vbiBwYXR0ZXJucyBhbmQgc3RydWN0dXJlc1xuXG5UaGVzZSBmb3VuZGF0aW9uYWwgY29uY2VwdHMgd2lsbCBiZSByZWZlcmVuY2VkIHRocm91Z2hvdXQgdGhlIGNvdXJzZS5gLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnRXNzZW50aWFsIENvbmNlcHRzJyxcbiAgICAgICAgICBjb250ZW50OiBgQnVpbGRpbmcgb24gdGhlIGZ1bmRhbWVudGFscywgdGhpcyBsZXNzb24gY292ZXJzIGVzc2VudGlhbCBjb25jZXB0cyB0aGF0IGFyZSBjcml0aWNhbCB0byB1bmRlcnN0YW5kaW5nIHRoZSBzdWJqZWN0LlxuXG5Ub3BpY3MgaW5jbHVkZTpcbuKAoiBLZXkgZnJhbWV3b3JrcyBhbmQgbW9kZWxzXG7igKIgSW1wb3J0YW50IHJlbGF0aW9uc2hpcHMgYW5kIGludGVyYWN0aW9uc1xu4oCiIENyaXRpY2FsIHRoaW5raW5nIGFwcHJvYWNoZXNcbuKAoiBQcm9ibGVtLXNvbHZpbmcgbWV0aG9kb2xvZ2llc1xuXG5NYXN0ZXJpbmcgdGhlc2UgY29uY2VwdHMgd2lsbCBnaXZlIHlvdSBhIHN0cm9uZyBmb3VuZGF0aW9uIGZvciBhZHZhbmNlZCB0b3BpY3MuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMzogUHJhY3RpY2FsIEFwcGxpY2F0aW9uXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0hhbmRzLW9uIFByYWN0aWNlJyxcbiAgICAgICAgICBjb250ZW50OiBgTm93IGl0J3MgdGltZSB0byBhcHBseSB3aGF0IHlvdSd2ZSBsZWFybmVkIHRocm91Z2ggcHJhY3RpY2FsIGV4ZXJjaXNlcy5cblxuSW4gdGhpcyBsZXNzb24sIHlvdSB3aWxsOlxu4oCiIFdvcmsgdGhyb3VnaCBndWlkZWQgZXhhbXBsZXNcbuKAoiBDb21wbGV0ZSBpbnRlcmFjdGl2ZSBleGVyY2lzZXNcbuKAoiBBcHBseSBjb25jZXB0cyB0byByZWFsLXdvcmxkIHNjZW5hcmlvc1xu4oCiIFJlY2VpdmUgaW1tZWRpYXRlIGZlZWRiYWNrIG9uIHlvdXIgd29ya1xuXG5QcmFjdGljZSBpcyBlc3NlbnRpYWwgZm9yIHJlaW5mb3JjaW5nIGxlYXJuaW5nIGFuZCBidWlsZGluZyBjb25maWRlbmNlLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnUHJvamVjdCBXb3JrJyxcbiAgICAgICAgICBjb250ZW50OiBgVGhpcyBsZXNzb24gZm9jdXNlcyBvbiBhcHBseWluZyB5b3VyIGtub3dsZWRnZSB0byBhIGNvbXByZWhlbnNpdmUgcHJvamVjdC5cblxuUHJvamVjdCBjb21wb25lbnRzOlxu4oCiIFBsYW5uaW5nIGFuZCBkZXNpZ24gcGhhc2VcbuKAoiBJbXBsZW1lbnRhdGlvbiBhbmQgZGV2ZWxvcG1lbnRcbuKAoiBUZXN0aW5nIGFuZCB2YWxpZGF0aW9uXG7igKIgRG9jdW1lbnRhdGlvbiBhbmQgcHJlc2VudGF0aW9uXG5cbkNvbXBsZXRpbmcgdGhpcyBwcm9qZWN0IHdpbGwgZGVtb25zdHJhdGUgeW91ciBtYXN0ZXJ5IG9mIHRoZSBjb3Vyc2UgbWF0ZXJpYWwuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiAxMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy8gTW9kdWxlIDQ6IEFkdmFuY2VkIFRvcGljc1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdBZHZhbmNlZCBDb25jZXB0cycsXG4gICAgICAgICAgY29udGVudDogYEV4cGxvcmUgYWR2YW5jZWQgdG9waWNzIGFuZCBjdXR0aW5nLWVkZ2UgZGV2ZWxvcG1lbnRzIGluIHRoZSBmaWVsZC5cblxuQWR2YW5jZWQgdG9waWNzIGNvdmVyZWQ6XG7igKIgRW1lcmdpbmcgdHJlbmRzIGFuZCB0ZWNobm9sb2dpZXNcbuKAoiBDb21wbGV4IHByb2JsZW0tc29sdmluZyBzY2VuYXJpb3NcbuKAoiBJbnRlZ3JhdGlvbiB3aXRoIG90aGVyIHN5c3RlbXNcbuKAoiBGdXR1cmUgZGlyZWN0aW9ucyBhbmQgcG9zc2liaWxpdGllc1xuXG5UaGVzZSBhZHZhbmNlZCBjb25jZXB0cyB3aWxsIHByZXBhcmUgeW91IGZvciBwcm9mZXNzaW9uYWwgYXBwbGljYXRpb25zLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdCZXN0IFByYWN0aWNlcyBhbmQgTmV4dCBTdGVwcycsXG4gICAgICAgICAgY29udGVudDogYFRoaXMgZmluYWwgbGVzc29uIGNvdmVycyBiZXN0IHByYWN0aWNlcyBhbmQgcHJvdmlkZXMgZ3VpZGFuY2UgZm9yIGNvbnRpbnVlZCBsZWFybmluZy5cblxuVG9waWNzIGluY2x1ZGU6XG7igKIgSW5kdXN0cnkgYmVzdCBwcmFjdGljZXMgYW5kIHN0YW5kYXJkc1xu4oCiIENvbW1vbiBwaXRmYWxscyBhbmQgaG93IHRvIGF2b2lkIHRoZW1cbuKAoiBSZXNvdXJjZXMgZm9yIGZ1cnRoZXIgbGVhcm5pbmdcbuKAoiBDYXJlZXIgYXBwbGljYXRpb25zIGFuZCBvcHBvcnR1bml0aWVzXG7igKIgU3RheWluZyBjdXJyZW50IHdpdGggZGV2ZWxvcG1lbnRzXG5cbkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIHRoaXMgY291cnNlIWAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9XG4gICAgICBdXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXNzb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb2R1bGVMZXNzb25zID0gbGVzc29uc1tpXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2R1bGVMZXNzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGxlc3NvbiA9IG1vZHVsZUxlc3NvbnNbal1cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIGxlc3NvbnMgKG1vZHVsZV9pZCwgdGl0bGUsIGNvbnRlbnQsIHZpZGVvX3VybCwgb3JkZXJfaW5kZXgsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWRzW2ldfSxcbiAgICAgICAgICAgICR7bGVzc29uLnRpdGxlfSxcbiAgICAgICAgICAgICR7bGVzc29uLmNvbnRlbnR9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICR7aiArIDF9LFxuICAgICAgICAgICAgJHtsZXNzb24ucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcXVpenplcyBmb3Igc29tZSBsZXNzb25zXG4gICAgY29uc3QgcXVpekxlc3NvbnMgPSBbMiwgNCwgNiwgOF0gLy8gT25lIHF1aXogcGVyIG1vZHVsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVpekxlc3NvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxlc3NvbkluZGV4ID0gcXVpekxlc3NvbnNbaV0gLSAxIC8vIENvbnZlcnQgdG8gMC1iYXNlZFxuICAgICAgY29uc3QgbW9kdWxlSW5kZXggPSBNYXRoLmZsb29yKGxlc3NvbkluZGV4IC8gMilcbiAgICAgIGNvbnN0IGxlc3NvbkluTW9kdWxlID0gKGxlc3NvbkluZGV4ICUgMikgKyAxXG5cbiAgICAgIC8vIEZpbmQgdGhlIGFjdHVhbCBsZXNzb24gSURcbiAgICAgIGNvbnN0IGxlc3NvblJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIGlkIEZST00gbGVzc29uc1xuICAgICAgICBXSEVSRSBtb2R1bGVfaWQgPSAke21vZHVsZUlkc1ttb2R1bGVJbmRleF19XG4gICAgICAgIEFORCBvcmRlcl9pbmRleCA9ICR7bGVzc29uSW5Nb2R1bGV9XG4gICAgICBgXG5cbiAgICAgIGlmIChsZXNzb25SZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsZXNzb25JZCA9IGxlc3NvblJlc3VsdFswXS5pZFxuICAgICAgICBjb25zdCBxdWl6UmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXp6ZXMgKGxlc3Nvbl9pZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwYXNzaW5nX3Njb3JlLCBwb2ludHNfcmV3YXJkKVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke2xlc3NvbklkfSxcbiAgICAgICAgICAgICdNb2R1bGUgJHttb2R1bGVJbmRleCArIDF9IFF1aXonLFxuICAgICAgICAgICAgJ1Rlc3QgeW91ciB1bmRlcnN0YW5kaW5nIG9mIHRoZSBjb25jZXB0cyBjb3ZlcmVkIGluIE1vZHVsZSAke21vZHVsZUluZGV4ICsgMX0nLFxuICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICAxMFxuICAgICAgICAgIClcbiAgICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgICAgYFxuXG4gICAgICAgIGNvbnN0IHF1aXpJZCA9IHF1aXpSZXN1bHRbMF0uaWRcblxuICAgICAgICAvLyBBZGQgc2FtcGxlIHF1ZXN0aW9uc1xuICAgICAgICBjb25zdCBxdWVzdGlvbnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBtYWluIGNvbmNlcHQgY292ZXJlZCBpbiB0aGlzIG1vZHVsZT8nLFxuICAgICAgICAgICAgb3B0aW9uczogJ1tcIkNvcmUgcHJpbmNpcGxlc1wiLCBcIkFkdmFuY2VkIHRvcGljc1wiLCBcIlByYWN0aWNhbCBhcHBsaWNhdGlvblwiLCBcIkludHJvZHVjdGlvblwiXScsXG4gICAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0NvcmUgcHJpbmNpcGxlcydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBhIGtleSBsZWFybmluZyBvYmplY3RpdmU/JyxcbiAgICAgICAgICAgIG9wdGlvbnM6ICdbXCJVbmRlcnN0YW5kaW5nIGZ1bmRhbWVudGFsc1wiLCBcIk1lbW9yaXppbmcgZmFjdHNcIiwgXCJGb2xsb3dpbmcgaW5zdHJ1Y3Rpb25zXCIsIFwiQ29tcGxldGluZyBhc3NpZ25tZW50c1wiXScsXG4gICAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1VuZGVyc3RhbmRpbmcgZnVuZGFtZW50YWxzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IHNob3VsZCB5b3UgZG8gdG8gbWFzdGVyIHRoZSBtYXRlcmlhbD8nLFxuICAgICAgICAgICAgb3B0aW9uczogJ1tcIlByYWN0aWNlIHJlZ3VsYXJseVwiLCBcIlNraXAgZXhlcmNpc2VzXCIsIFwiT25seSByZWFkIGNvbnRlbnRcIiwgXCJNZW1vcml6ZSBhbnN3ZXJzXCJdJyxcbiAgICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnUHJhY3RpY2UgcmVndWxhcmx5J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuXG4gICAgICAgIGZvciAobGV0IHEgPSAwOyBxIDwgcXVlc3Rpb25zLmxlbmd0aDsgcSsrKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gcXVpel9xdWVzdGlvbnMgKHF1aXpfaWQsIHF1ZXN0aW9uLCBvcHRpb25zLCBjb3JyZWN0X2Fuc3dlciwgb3JkZXJfaW5kZXgpXG4gICAgICAgICAgICBWQUxVRVMgKFxuICAgICAgICAgICAgICAke3F1aXpJZH0sXG4gICAgICAgICAgICAgICR7cXVlc3Rpb25zW3FdLnF1ZXN0aW9ufSxcbiAgICAgICAgICAgICAgJHtxdWVzdGlvbnNbcV0ub3B0aW9uc30sXG4gICAgICAgICAgICAgICR7cXVlc3Rpb25zW3FdLmNvcnJlY3RfYW5zd2VyfSxcbiAgICAgICAgICAgICAgJHtxICsgMX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb3Vyc2VzXCIpXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdHV0b3JcIilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3Vyc2VJZCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gQ3JlYXRlIGNvdXJzZSBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY291cnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb3Vyc2UoY291cnNlSWQ6IG51bWJlciwgZm9ybURhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRpZmZpY3VsdHk6IHN0cmluZ1xuICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgdGh1bWJuYWlsX3VybD86IHN0cmluZ1xuICB0ZWFjaGVyX2lkOiBudW1iZXIgfCBzdHJpbmdcbiAgaXNfcHVibGlzaGVkOiBib29sZWFuXG59KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIGNvdXJzZXNcbiAgICAgIFNFVCB0aXRsZSA9ICR7Zm9ybURhdGEudGl0bGV9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICAgZGlmZmljdWx0eSA9ICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZCA9ICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICAgdGh1bWJuYWlsX3VybCA9ICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgICB0ZWFjaGVyX2lkID0gJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkLnRvU3RyaW5nKCkpfSxcbiAgICAgICAgICBpc19wdWJsaXNoZWQgPSAke2Zvcm1EYXRhLmlzX3B1Ymxpc2hlZH1cbiAgICAgIFdIRVJFIGlkID0gJHtjb3Vyc2VJZH1cbiAgICBgXG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9jb3Vyc2VzXCIpXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9jb3Vyc2VzLyR7Y291cnNlSWR9L2VkaXRgKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbdjBdIFVwZGF0ZSBjb3Vyc2UgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNvdXJzZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5yb2xsSW5Db3Vyc2UoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IGNvdXJzZUlkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImNvdXJzZUlkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInVzZXJJZFwiKSBhcyBzdHJpbmcpXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBlbnJvbGxtZW50cyAodXNlcl9pZCwgY291cnNlX2lkKVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7Y291cnNlSWR9KVxuICAgIGBcblxuICAgIC8vIEF3YXJkIGFjaGlldmVtZW50IHRvIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBhY2hpZXZlbWVudHMgKHVzZXJfaWQsIHR5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9pbnRzX2Vhcm5lZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgJ2NvdXJzZV9lbnJvbGxlZCcsXG4gICAgICAgICdOZXcgQ291cnNlIEVucm9sbGVkJyxcbiAgICAgICAgJ1N0YXJ0ZWQgYSBuZXcgbGVhcm5pbmcgam91cm5leScsXG4gICAgICAgIDVcbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBVcGRhdGUgc3R1ZGVudCBwb2ludHNcbiAgICBhd2FpdCBzcWxgXG4gICAgICBVUERBVEUgdXNlcnNcbiAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyA1XG4gICAgICBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIC8vIENoZWNrIGZvciBLbm93bGVkZ2UgU2Vla2VyIGJhZGdlIGZvciBzdHVkZW50XG4gICAgY29uc3QgZW5yb2xsbWVudENvdW50ID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIENPVU5UKERJU1RJTkNUIGNvdXJzZV9pZCkgYXMgY291bnQgRlJPTSBlbnJvbGxtZW50cyBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgaWYgKGVucm9sbG1lbnRDb3VudFswXS5jb3VudCA+PSAzKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnS25vd2xlZGdlIFNlZWtlcidcbiAgICAgIGBcblxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIFBvcHVsYXIgVGVhY2hlciBiYWRnZVxuICAgIGNvbnN0IHRlYWNoZXJEYXRhID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIHRlYWNoZXJfaWQgRlJPTSBjb3Vyc2VzIFdIRVJFIGlkID0gJHtjb3Vyc2VJZH1cbiAgICBgXG5cbiAgICBpZiAodGVhY2hlckRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGVhY2hlcklkID0gdGVhY2hlckRhdGFbMF0udGVhY2hlcl9pZFxuXG4gICAgICBjb25zdCB0b3RhbEVucm9sbG1lbnRzID0gYXdhaXQgc3FsYFxuICAgICAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnRcbiAgICAgICAgRlJPTSBlbnJvbGxtZW50cyBlXG4gICAgICAgIEpPSU4gY291cnNlcyBjIE9OIGUuY291cnNlX2lkID0gYy5pZFxuICAgICAgICBXSEVSRSBjLnRlYWNoZXJfaWQgPSAke3RlYWNoZXJJZH1cbiAgICAgIGBcblxuICAgICAgaWYgKHRvdGFsRW5yb2xsbWVudHNbMF0uY291bnQgPj0gMTApIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnUG9wdWxhciBUZWFjaGVyJ1xuICAgICAgICBgXG5cbiAgICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgICBWQUxVRVMgKCR7dGVhY2hlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbiAgICByZWRpcmVjdChgL2NvdXJzZXMvJHtjb3Vyc2VJZH1gKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbdjBdIEVucm9sbG1lbnQgZXJyb3I6XCIsIGVycm9yKVxuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbiAgcmVkaXJlY3QoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZENvdXJzZVRodW1ibmFpbChmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwidGh1bWJuYWlsXCIpIGFzIEZpbGVcblxuICAgIGlmICghZmlsZSB8fCBmaWxlLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJObyBmaWxlIHByb3ZpZGVkXCIgfVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIG11c3QgYmUgYW4gaW1hZ2VcIiB9XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplIChtYXggNU1CKVxuICAgIGlmIChmaWxlLnNpemUgPiA1ICogMTAyNCAqIDEwMjQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGaWxlIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gNU1CXCIgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZVxuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBmaWxlLm5hbWUuc3BsaXQoXCIuXCIpLnBvcCgpXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtyYW5kb21VVUlEKCl9LiR7ZmlsZUV4dGVuc2lvbn1gXG5cbiAgICAvLyBDcmVhdGUgdXBsb2FkcyBkaXJlY3RvcnkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGNvbnN0IHVwbG9hZHNEaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIFwidXBsb2Fkc1wiLCBcImNvdXJzZXNcIilcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbWtkaXIodXBsb2Fkc0RpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gRGlyZWN0b3J5IG1pZ2h0IGFscmVhZHkgZXhpc3RcbiAgICB9XG5cbiAgICAvLyBTYXZlIGZpbGVcbiAgICBjb25zdCBmaWxlUGF0aCA9IGpvaW4odXBsb2Fkc0RpciwgZmlsZU5hbWUpXG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKClcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcylcbiAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIGJ1ZmZlcilcblxuICAgIC8vIFJldHVybiB0aGUgcHVibGljIFVSTFxuICAgIGNvbnN0IHB1YmxpY1VybCA9IGAvdXBsb2Fkcy9jb3Vyc2VzLyR7ZmlsZU5hbWV9YFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVybDogcHVibGljVXJsIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGZpbGVcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZVdpdGhDb250ZW50KGZvcm1EYXRhOiB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBkaWZmaWN1bHR5OiBzdHJpbmdcbiAgcG9pbnRzX3Jld2FyZDogbnVtYmVyXG4gIHRodW1ibmFpbF91cmw/OiBzdHJpbmdcbiAgdGVhY2hlcl9pZDogc3RyaW5nXG4gIGlzX3B1Ymxpc2hlZDogYm9vbGVhblxuICBtb2R1bGVzOiBBcnJheTx7XG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBsZXNzb25zOiBBcnJheTx7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBjb250ZW50OiBzdHJpbmdcbiAgICAgIHBvaW50c19yZXdhcmQ6IG51bWJlclxuICAgIH0+XG4gICAgcXVpej86IHtcbiAgICAgIHRpdGxlOiBzdHJpbmdcbiAgICAgIHBhc3Npbmdfc2NvcmU6IG51bWJlclxuICAgICAgcG9pbnRzX3Jld2FyZDogbnVtYmVyXG4gICAgICBxdWVzdGlvbnM6IEFycmF5PHtcbiAgICAgICAgcXVlc3Rpb246IHN0cmluZ1xuICAgICAgICBhbnN3ZXJzOiBzdHJpbmdbXVxuICAgICAgICBjb3JyZWN0X2Fuc3dlcl9pbmRleDogbnVtYmVyXG4gICAgICB9PlxuICAgIH1cbiAgfT5cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBjb3Vyc2VzICh0aXRsZSwgZGVzY3JpcHRpb24sIGRpZmZpY3VsdHksIHBvaW50c19yZXdhcmQsIHRodW1ibmFpbF91cmwsIHRlYWNoZXJfaWQsIGlzX3B1Ymxpc2hlZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7Zm9ybURhdGEudGl0bGV9LFxuICAgICAgICAke2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSxcbiAgICAgICAgJHtmb3JtRGF0YS5kaWZmaWN1bHR5fSxcbiAgICAgICAgJHtmb3JtRGF0YS5wb2ludHNfcmV3YXJkfSxcbiAgICAgICAgJHtmb3JtRGF0YS50aHVtYm5haWxfdXJsIHx8IG51bGx9LFxuICAgICAgICAke3BhcnNlSW50KGZvcm1EYXRhLnRlYWNoZXJfaWQpfSxcbiAgICAgICAgJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICApXG4gICAgICBSRVRVUk5JTkcgaWRcbiAgICBgXG5cbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlc3VsdFswXS5pZFxuXG4gICAgLy8gQ3JlYXRlIG1vZHVsZXMgYW5kIHRoZWlyIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLm1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IGZvcm1EYXRhLm1vZHVsZXNbaV1cblxuICAgICAgY29uc3QgbW9kdWxlUmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgICBJTlNFUlQgSU5UTyBtb2R1bGVzIChjb3Vyc2VfaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgb3JkZXJfaW5kZXgpXG4gICAgICAgIFZBTFVFUyAoJHtjb3Vyc2VJZH0sICR7bW9kdWxlLnRpdGxlfSwgJHttb2R1bGUuZGVzY3JpcHRpb259LCAke2kgKyAxfSlcbiAgICAgICAgUkVUVVJOSU5HIGlkXG4gICAgICBgXG5cbiAgICAgIGNvbnN0IG1vZHVsZUlkID0gbW9kdWxlUmVzdWx0WzBdLmlkXG5cbiAgICAgIC8vIENyZWF0ZSBsZXNzb25zXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1vZHVsZS5sZXNzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGxlc3NvbiA9IG1vZHVsZS5sZXNzb25zW2pdXG5cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIGxlc3NvbnMgKG1vZHVsZV9pZCwgdGl0bGUsIGNvbnRlbnQsIHZpZGVvX3VybCwgb3JkZXJfaW5kZXgsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWR9LFxuICAgICAgICAgICAgJHtsZXNzb24udGl0bGV9LFxuICAgICAgICAgICAgJHtsZXNzb24uY29udGVudH0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJHtqICsgMX0sXG4gICAgICAgICAgICAke2xlc3Nvbi5wb2ludHNfcmV3YXJkfVxuICAgICAgICAgIClcbiAgICAgICAgYFxuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgcXVpeiBpZiBwcm92aWRlZCBhdCBtb2R1bGUgbGV2ZWxcbiAgICAgIGlmIChtb2R1bGUucXVpeikge1xuICAgICAgICBjb25zdCBxdWl6UmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXp6ZXMgKG1vZHVsZV9pZCwgdGl0bGUsIHBhc3Npbmdfc2NvcmUsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWR9LFxuICAgICAgICAgICAgJHttb2R1bGUucXVpei50aXRsZX0sXG4gICAgICAgICAgICAke21vZHVsZS5xdWl6LnBhc3Npbmdfc2NvcmV9LFxuICAgICAgICAgICAgJHttb2R1bGUucXVpei5wb2ludHNfcmV3YXJkfVxuICAgICAgICAgIClcbiAgICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgICAgYFxuXG4gICAgICAgIGNvbnN0IHF1aXpJZCA9IHF1aXpSZXN1bHRbMF0uaWRcblxuICAgICAgICAvLyBDcmVhdGUgcXVlc3Rpb25zXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbW9kdWxlLnF1aXoucXVlc3Rpb25zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBtb2R1bGUucXVpei5xdWVzdGlvbnNba11cbiAgICAgICAgICBjb25zdCBvcHRpb25zSnNvbiA9IEpTT04uc3RyaW5naWZ5KHF1ZXN0aW9uLmFuc3dlcnMpXG4gICAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBxdWVzdGlvbi5jb3JyZWN0X2Fuc3dlcl9pbmRleCkgLy8gQSwgQiwgQywgRFxuXG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gcXVpel9xdWVzdGlvbnMgKHF1aXpfaWQsIHF1ZXN0aW9uLCBvcHRpb25zLCBjb3JyZWN0X2Fuc3dlciwgb3JkZXJfaW5kZXgpXG4gICAgICAgICAgICBWQUxVRVMgKFxuICAgICAgICAgICAgICAke3F1aXpJZH0sXG4gICAgICAgICAgICAgICR7cXVlc3Rpb24ucXVlc3Rpb259LFxuICAgICAgICAgICAgICAke29wdGlvbnNKc29ufSxcbiAgICAgICAgICAgICAgJHtjb3JyZWN0QW5zd2VyfSxcbiAgICAgICAgICAgICAgJHtrICsgMX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90dXRvclwiKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdXJzZUlkIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBDcmVhdGUgY291cnNlIHdpdGggY29udGVudCBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY291cnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wbGV0ZUxlc3Nvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgbGVzc29uSWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwibGVzc29uSWRcIikgYXMgc3RyaW5nKVxuICBjb25zdCB1c2VySWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwidXNlcklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgY291cnNlSWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiY291cnNlSWRcIikgYXMgc3RyaW5nKVxuXG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgYWxyZWFkeSBjb21wbGV0ZWRcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gbGVzc29uX3Byb2dyZXNzXG4gICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBsZXNzb25faWQgPSAke2xlc3NvbklkfVxuICAgIGBcblxuICAgIGlmIChleGlzdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQWxyZWFkeSBjb21wbGV0ZWRcIiB9XG4gICAgfVxuXG4gICAgLy8gTWFyayBsZXNzb24gYXMgY29tcGxldGVcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBsZXNzb25fcHJvZ3Jlc3MgKHVzZXJfaWQsIGxlc3Nvbl9pZCwgY29tcGxldGVkLCBjb21wbGV0ZWRfYXQpXG4gICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtsZXNzb25JZH0sIHRydWUsIE5PVygpKVxuICAgIGBcblxuICAgIC8vIEdldCBsZXNzb24gcG9pbnRzXG4gICAgY29uc3QgbGVzc29ucyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBwb2ludHNfcmV3YXJkIEZST00gbGVzc29ucyBXSEVSRSBpZCA9ICR7bGVzc29uSWR9XG4gICAgYFxuXG4gICAgY29uc3QgcG9pbnRzUmV3YXJkID0gbGVzc29uc1swXT8ucG9pbnRzX3Jld2FyZCB8fCA1XG5cbiAgICAvLyBBd2FyZCBwb2ludHMgdG8gc3R1ZGVudFxuICAgIGF3YWl0IHNxbGBcbiAgICAgIFVQREFURSB1c2Vyc1xuICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArICR7cG9pbnRzUmV3YXJkfVxuICAgICAgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICBgXG5cbiAgICAvLyBBd2FyZCBwb2ludHMgdG8gdGVhY2hlciAoMSBwb2ludCBwZXIgbGVzc29uIGNvbXBsZXRpb24pXG4gICAgY29uc3QgdGVhY2hlckRhdGEgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgYy50ZWFjaGVyX2lkXG4gICAgICBGUk9NIGNvdXJzZXMgY1xuICAgICAgSk9JTiBtb2R1bGVzIG0gT04gYy5pZCA9IG0uY291cnNlX2lkXG4gICAgICBKT0lOIGxlc3NvbnMgbCBPTiBtLmlkID0gbC5tb2R1bGVfaWRcbiAgICAgIFdIRVJFIGwuaWQgPSAke2xlc3NvbklkfVxuICAgIGBcblxuICAgIGlmICh0ZWFjaGVyRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0ZWFjaGVySWQgPSB0ZWFjaGVyRGF0YVswXS50ZWFjaGVyX2lkXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2Vyc1xuICAgICAgICBTRVQgcG9pbnRzID0gcG9pbnRzICsgMVxuICAgICAgICBXSEVSRSBpZCA9ICR7dGVhY2hlcklkfVxuICAgICAgYFxuICAgICAgYXdhaXQgdXBkYXRlVXNlckxldmVsKHRlYWNoZXJJZClcbiAgICB9XG5cbiAgICBhd2FpdCB1cGRhdGVVc2VyTGV2ZWwodXNlcklkKVxuXG4gICAgYXdhaXQgdXBkYXRlU3RyZWFrKHVzZXJJZClcblxuICAgIGF3YWl0IHVwZGF0ZURhaWx5Q2hhbGxlbmdlUHJvZ3Jlc3ModXNlcklkLCBcImxlc3NvbnNfY29tcGxldGVkXCIsIDEpXG5cbiAgICAvLyBDcmVhdGUgYWNoaWV2ZW1lbnQgZm9yIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBhY2hpZXZlbWVudHMgKHVzZXJfaWQsIHR5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9pbnRzX2Vhcm5lZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgJ2xlc3Nvbl9jb21wbGV0ZWQnLFxuICAgICAgICAnTGVzc29uIENvbXBsZXRlJyxcbiAgICAgICAgJ0NvbXBsZXRlZCBhIGxlc3NvbicsXG4gICAgICAgICR7cG9pbnRzUmV3YXJkfVxuICAgICAgKVxuICAgIGBcblxuICAgIC8vIENoZWNrIGlmIHVzZXIgc2hvdWxkIGdldCBcIkZpcnN0IFN0ZXBzXCIgYmFkZ2VcbiAgICBjb25zdCBsZXNzb25Db3VudCA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudCBGUk9NIGxlc3Nvbl9wcm9ncmVzc1xuICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgY29tcGxldGVkID0gdHJ1ZVxuICAgIGBcblxuICAgIGlmIChsZXNzb25Db3VudFswXS5jb3VudCA9PT0gMSkge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0ZpcnN0IFN0ZXBzJ1xuICAgICAgYFxuXG4gICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY291cnNlIHByb2dyZXNzXG4gICAgYXdhaXQgdXBkYXRlQ291cnNlUHJvZ3Jlc3ModXNlcklkLCBjb3Vyc2VJZClcblxuICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfS9sZXNzb25zLyR7bGVzc29uSWR9YClcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBDb21wbGV0ZSBsZXNzb24gZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY29tcGxldGUgbGVzc29uXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRRdWl6KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBxdWl6SWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwicXVpeklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInVzZXJJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGxlc3NvbklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImxlc3NvbklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgY291cnNlSWQgPSBOdW1iZXIucGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwiY291cnNlSWRcIikgYXMgc3RyaW5nKVxuICBjb25zdCBhbnN3ZXJzSnNvbiA9IGZvcm1EYXRhLmdldChcImFuc3dlcnNcIikgYXMgc3RyaW5nXG4gIGNvbnN0IGFuc3dlcnMgPSBKU09OLnBhcnNlKGFuc3dlcnNKc29uKVxuXG4gIHRyeSB7XG4gICAgLy8gR2V0IHF1aXogZGV0YWlscyBhbmQgcXVlc3Rpb25zXG4gICAgY29uc3QgcXVpenplcyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gcXVpenplcyBXSEVSRSBpZCA9ICR7cXVpeklkfVxuICAgIGBcblxuICAgIGNvbnN0IHF1aXogPSBxdWl6emVzWzBdXG5cbiAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgKiBGUk9NIHF1aXpfcXVlc3Rpb25zIFdIRVJFIHF1aXpfaWQgPSAke3F1aXpJZH1cbiAgICBgXG5cbiAgICAvLyBDYWxjdWxhdGUgc2NvcmVcbiAgICBsZXQgY29ycmVjdENvdW50ID0gMFxuICAgIHF1ZXN0aW9ucy5mb3JFYWNoKChxKSA9PiB7XG4gICAgICBpZiAoYW5zd2Vyc1txLmlkXSA9PT0gcS5jb3JyZWN0X2Fuc3dlcikge1xuICAgICAgICBjb3JyZWN0Q291bnQrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzY29yZSA9IE1hdGgucm91bmQoKGNvcnJlY3RDb3VudCAvIHF1ZXN0aW9ucy5sZW5ndGgpICogMTAwKVxuICAgIGNvbnN0IHBhc3NlZCA9IHNjb3JlID49IHF1aXoucGFzc2luZ19zY29yZVxuXG4gICAgLy8gUmVjb3JkIGF0dGVtcHRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBxdWl6X2F0dGVtcHRzICh1c2VyX2lkLCBxdWl6X2lkLCBzY29yZSwgYW5zd2VycywgcGFzc2VkKVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7cXVpeklkfSwgJHtzY29yZX0sICR7YW5zd2Vyc0pzb259LCAke3Bhc3NlZH0pXG4gICAgYFxuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgLy8gQXdhcmQgcG9pbnRzXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VycyBcbiAgICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArICR7cXVpei5wb2ludHNfcmV3YXJkfVxuICAgICAgICBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgICAgYFxuXG4gICAgICAvLyBDcmVhdGUgYWNoaWV2ZW1lbnRcbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgJHt1c2VySWR9LCBcbiAgICAgICAgICAncXVpel9wYXNzZWQnLCBcbiAgICAgICAgICAnUXVpeiBQYXNzZWQnLFxuICAgICAgICAgICdTdWNjZXNzZnVsbHkgcGFzc2VkIGEgcXVpeicsXG4gICAgICAgICAgJHtxdWl6LnBvaW50c19yZXdhcmR9XG4gICAgICAgIClcbiAgICAgIGBcblxuICAgICAgLy8gQ2hlY2sgZm9yIFF1aXogTWFzdGVyIGJhZGdlXG4gICAgICBjb25zdCBwZXJmZWN0UXVpenplcyA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50IEZST00gcXVpel9hdHRlbXB0c1xuICAgICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBzY29yZSA9IDEwMFxuICAgICAgYFxuXG4gICAgICBpZiAocGVyZmVjdFF1aXp6ZXNbMF0uY291bnQgPj0gMykge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdRdWl6IE1hc3RlcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfS9sZXNzb25zLyR7bGVzc29uSWR9YClcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBzY29yZSwgcGFzc2VkIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBTdWJtaXQgcXVpeiBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBzdWJtaXQgcXVpelwiIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVDb3Vyc2VQcm9ncmVzcyh1c2VySWQ6IG51bWJlciwgY291cnNlSWQ6IG51bWJlcikge1xuICAvLyBHZXQgdG90YWwgbGVzc29ucyBpbiBjb3Vyc2VcbiAgY29uc3QgdG90YWxMZXNzb25zID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudFxuICAgIEZST00gbGVzc29ucyBsXG4gICAgSk9JTiBtb2R1bGVzIG0gT04gbC5tb2R1bGVfaWQgPSBtLmlkXG4gICAgV0hFUkUgbS5jb3Vyc2VfaWQgPSAke2NvdXJzZUlkfVxuICBgXG5cbiAgLy8gR2V0IGNvbXBsZXRlZCBsZXNzb25zXG4gIGNvbnN0IGNvbXBsZXRlZExlc3NvbnMgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50XG4gICAgRlJPTSBsZXNzb25fcHJvZ3Jlc3MgbHBcbiAgICBKT0lOIGxlc3NvbnMgbCBPTiBscC5sZXNzb25faWQgPSBsLmlkXG4gICAgSk9JTiBtb2R1bGVzIG0gT04gbC5tb2R1bGVfaWQgPSBtLmlkXG4gICAgV0hFUkUgbHAudXNlcl9pZCA9ICR7dXNlcklkfSBcbiAgICBBTkQgbS5jb3Vyc2VfaWQgPSAke2NvdXJzZUlkfVxuICAgIEFORCBscC5jb21wbGV0ZWQgPSB0cnVlXG4gIGBcblxuICBjb25zdCB0b3RhbCA9IHRvdGFsTGVzc29uc1swXS5jb3VudFxuICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZWRMZXNzb25zWzBdLmNvdW50XG4gIGNvbnN0IHByb2dyZXNzID0gdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoY29tcGxldGVkIC8gdG90YWwpICogMTAwKSA6IDBcblxuICAvLyBVcGRhdGUgZW5yb2xsbWVudFxuICBhd2FpdCBzcWxgXG4gICAgVVBEQVRFIGVucm9sbG1lbnRzIFxuICAgIFNFVCBwcm9ncmVzcyA9ICR7cHJvZ3Jlc3N9LFxuICAgICAgICBzdGF0dXMgPSBDQVNFIFdIRU4gJHtwcm9ncmVzc30gPSAxMDAgVEhFTiAnY29tcGxldGVkJyBFTFNFICdhY3RpdmUnIEVORCxcbiAgICAgICAgY29tcGxldGVkX2F0ID0gQ0FTRSBXSEVOICR7cHJvZ3Jlc3N9ID0gMTAwIFRIRU4gTk9XKCkgRUxTRSBOVUxMIEVORFxuICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNvdXJzZV9pZCA9ICR7Y291cnNlSWR9XG4gIGBcblxuICAvLyBJZiBjb21wbGV0ZWQsIGF3YXJkIGNvdXJzZSBjb21wbGV0aW9uIHBvaW50c1xuICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgcG9pbnRzX3Jld2FyZCwgdGVhY2hlcl9pZCBGUk9NIGNvdXJzZXMgV0hFUkUgaWQgPSAke2NvdXJzZUlkfVxuICAgIGBcblxuICAgIGNvbnN0IHBvaW50c1Jld2FyZCA9IGNvdXJzZXNbMF0/LnBvaW50c19yZXdhcmQgfHwgMTAwXG4gICAgY29uc3QgdGVhY2hlcklkID0gY291cnNlc1swXT8udGVhY2hlcl9pZFxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBVUERBVEUgdXNlcnNcbiAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3BvaW50c1Jld2FyZH1cbiAgICAgIFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHRlYWNoZXIgKDEwIHBvaW50cyBwZXIgY291cnNlIGNvbXBsZXRpb24pXG4gICAgaWYgKHRlYWNoZXJJZCkge1xuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcnNcbiAgICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArIDEwXG4gICAgICAgIFdIRVJFIGlkID0gJHt0ZWFjaGVySWR9XG4gICAgICBgXG4gICAgICBhd2FpdCB1cGRhdGVVc2VyTGV2ZWwodGVhY2hlcklkKVxuICAgIH1cblxuICAgIGF3YWl0IHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIGFjaGlldmVtZW50cyAodXNlcl9pZCwgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb2ludHNfZWFybmVkKVxuICAgICAgVkFMVUVTIChcbiAgICAgICAgJHt1c2VySWR9LFxuICAgICAgICAnY291cnNlX2NvbXBsZXRlZCcsXG4gICAgICAgICdDb3Vyc2UgQ29tcGxldGUnLFxuICAgICAgICAnRmluaXNoZWQgYW4gZW50aXJlIGNvdXJzZScsXG4gICAgICAgICR7cG9pbnRzUmV3YXJkfVxuICAgICAgKVxuICAgIGBcblxuICAgIC8vIENoZWNrIGZvciBDb3Vyc2UgQ2hhbXBpb24gYmFkZ2UgZm9yIHN0dWRlbnRcbiAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0NvdXJzZSBDaGFtcGlvbidcbiAgICBgXG5cbiAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgYFxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciB0ZWFjaGVyIGJhZGdlc1xuICAgIGlmICh0ZWFjaGVySWQpIHtcbiAgICAgIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudFxuICAgICAgICBGUk9NIGVucm9sbG1lbnRzIGVcbiAgICAgICAgSk9JTiBjb3Vyc2VzIGMgT04gZS5jb3Vyc2VfaWQgPSBjLmlkXG4gICAgICAgIFdIRVJFIGMudGVhY2hlcl9pZCA9ICR7dGVhY2hlcklkfSBBTkQgZS5zdGF0dXMgPSAnY29tcGxldGVkJ1xuICAgICAgYFxuXG4gICAgICBjb25zdCBjb21wbGV0aW9uQ291bnQgPSB0b3RhbENvbXBsZXRpb25zWzBdLmNvdW50XG5cbiAgICAgIC8vIEVmZmVjdGl2ZSBUZWFjaGVyICg1IGNvbXBsZXRpb25zKVxuICAgICAgaWYgKGNvbXBsZXRpb25Db3VudCA+PSA1KSB7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0VmZmVjdGl2ZSBUZWFjaGVyJ1xuICAgICAgICBgXG5cbiAgICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgICBWQUxVRVMgKCR7dGVhY2hlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE1hc3RlciBFZHVjYXRvciAoMjAgY29tcGxldGlvbnMpXG4gICAgICBpZiAoY29tcGxldGlvbkNvdW50ID49IDIwKSB7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ01hc3RlciBFZHVjYXRvcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3RlYWNoZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHVzZXIgbGV2ZWwgYmFzZWQgb24gcG9pbnRzXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyTGV2ZWwodXNlcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIHBvaW50cywgbGV2ZWwgRlJPTSB1c2VycyBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICBgXG5cbiAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgY29uc3QgeyBwb2ludHMsIGxldmVsIH0gPSB1c2VyRGF0YVswXVxuXG4gIC8vIExldmVsIGNhbGN1bGF0aW9uOiBsZXZlbCA9IGZsb29yKHBvaW50cyAvIDEwMCkgKyAxXG4gIGNvbnN0IG5ld0xldmVsID0gTWF0aC5mbG9vcihwb2ludHMgLyAxMDApICsgMVxuXG4gIGlmIChuZXdMZXZlbCA+IGxldmVsKSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIHVzZXJzIFNFVCBsZXZlbCA9ICR7bmV3TGV2ZWx9IFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgLy8gQXdhcmQgYWNoaWV2ZW1lbnQgZm9yIGxldmVsaW5nIHVwXG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke3VzZXJJZH0sIFxuICAgICAgICAnbGV2ZWxfdXAnLCBcbiAgICAgICAgJ0xldmVsIFVwIScsXG4gICAgICAgICR7YFJlYWNoZWQgbGV2ZWwgJHtuZXdMZXZlbH1gfSxcbiAgICAgICAgMTBcbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBDaGVjayBmb3IgbGV2ZWwtYmFzZWQgYmFkZ2VzXG4gICAgaWYgKG5ld0xldmVsID09PSA1KSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdSaXNpbmcgU3RhcidgXG4gICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICBPTiBDT05GTElDVCBETyBOT1RISU5HXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGV2ZWwgPT09IDEwKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdPdmVyYWNoaWV2ZXInYFxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgc3RyZWFrXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTdHJlYWsodXNlcklkOiBudW1iZXIpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXG5cbiAgY29uc3Qgc3RyZWFrRGF0YSA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgKiBGUk9NIHVzZXJfc3RyZWFrcyBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9XG4gIGBcblxuICBpZiAoc3RyZWFrRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBDcmVhdGUgbmV3IHN0cmVha1xuICAgIGF3YWl0IHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIHVzZXJfc3RyZWFrcyAodXNlcl9pZCwgY3VycmVudF9zdHJlYWssIGxvbmdlc3Rfc3RyZWFrLCBsYXN0X2FjdGl2aXR5X2RhdGUpXG4gICAgICBWQUxVRVMgKCR7dXNlcklkfSwgMSwgMSwgJHt0b2RheX0pXG4gICAgYFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0cmVhayA9IHN0cmVha0RhdGFbMF1cbiAgICBjb25zdCBsYXN0RGF0ZSA9IHN0cmVhay5sYXN0X2FjdGl2aXR5X2RhdGVcblxuICAgIGlmIChsYXN0RGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgIC8vIEFscmVhZHkgdXBkYXRlZCB0b2RheVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoKVxuICAgIHllc3RlcmRheS5zZXREYXRlKHllc3RlcmRheS5nZXREYXRlKCkgLSAxKVxuICAgIGNvbnN0IHllc3RlcmRheVN0ciA9IHllc3RlcmRheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuXG4gICAgaWYgKGxhc3REYXRlID09PSB5ZXN0ZXJkYXlTdHIpIHtcbiAgICAgIC8vIENvbnRpbnVpbmcgc3RyZWFrXG4gICAgICBjb25zdCBuZXdTdHJlYWsgPSBzdHJlYWsuY3VycmVudF9zdHJlYWsgKyAxXG4gICAgICBjb25zdCBsb25nZXN0U3RyZWFrID0gTWF0aC5tYXgobmV3U3RyZWFrLCBzdHJlYWsubG9uZ2VzdF9zdHJlYWspXG5cbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIHVzZXJfc3RyZWFrcyBcbiAgICAgICAgU0VUIGN1cnJlbnRfc3RyZWFrID0gJHtuZXdTdHJlYWt9LFxuICAgICAgICAgICAgbG9uZ2VzdF9zdHJlYWsgPSAke2xvbmdlc3RTdHJlYWt9LFxuICAgICAgICAgICAgbGFzdF9hY3Rpdml0eV9kYXRlID0gJHt0b2RheX0sXG4gICAgICAgICAgICB1cGRhdGVkX2F0ID0gTk9XKClcbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICAgICAgYFxuXG4gICAgICAvLyBDaGVjayBmb3Igc3RyZWFrIGJhZGdlc1xuICAgICAgaWYgKG5ld1N0cmVhayA9PT0gNykge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdEZWRpY2F0ZWQgTGVhcm5lcidgXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdHJlYWsgYnJva2VuLCByZXNldCB0byAxXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VyX3N0cmVha3MgXG4gICAgICAgIFNFVCBjdXJyZW50X3N0cmVhayA9IDEsXG4gICAgICAgICAgICBsYXN0X2FjdGl2aXR5X2RhdGUgPSAke3RvZGF5fSxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQgPSBOT1coKVxuICAgICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9XG4gICAgICBgXG4gICAgfVxuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgZGFpbHkgY2hhbGxlbmdlIHByb2dyZXNzXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVEYWlseUNoYWxsZW5nZVByb2dyZXNzKHVzZXJJZDogbnVtYmVyLCBjaGFsbGVuZ2VUeXBlOiBzdHJpbmcsIGluY3JlbWVudDogbnVtYmVyKSB7XG4gIC8vIEdldCBhY3RpdmUgY2hhbGxlbmdlcyBvZiB0aGlzIHR5cGVcbiAgY29uc3QgY2hhbGxlbmdlcyA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgaWQsIHRhcmdldF92YWx1ZSBcbiAgICBGUk9NIGRhaWx5X2NoYWxsZW5nZXNcbiAgICBXSEVSRSBjaGFsbGVuZ2VfdHlwZSA9ICR7Y2hhbGxlbmdlVHlwZX1cbiAgICAgIEFORCBzdGFydF9kYXRlIDw9IENVUlJFTlRfREFURSBcbiAgICAgIEFORCBlbmRfZGF0ZSA+PSBDVVJSRU5UX0RBVEVcbiAgYFxuXG4gIGZvciAoY29uc3QgY2hhbGxlbmdlIG9mIGNoYWxsZW5nZXMpIHtcbiAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBwcm9ncmVzcyBlbnRyeVxuICAgIGNvbnN0IHByb2dyZXNzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSB1c2VyX2RhaWx5X2NoYWxsZW5nZXNcbiAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNoYWxsZW5nZV9pZCA9ICR7Y2hhbGxlbmdlLmlkfVxuICAgIGBcblxuICAgIGlmIChwcm9ncmVzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIENyZWF0ZSBuZXcgcHJvZ3Jlc3MgZW50cnlcbiAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gaW5jcmVtZW50XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBuZXdQcm9ncmVzcyA+PSBjaGFsbGVuZ2UudGFyZ2V0X3ZhbHVlXG5cbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9kYWlseV9jaGFsbGVuZ2VzICh1c2VyX2lkLCBjaGFsbGVuZ2VfaWQsIHByb2dyZXNzLCBjb21wbGV0ZWQsIGNvbXBsZXRlZF9hdClcbiAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7Y2hhbGxlbmdlLmlkfSwgJHtuZXdQcm9ncmVzc30sICR7Y29tcGxldGVkfSwgJHtjb21wbGV0ZWQgPyBcIk5PVygpXCIgOiBudWxsfSlcbiAgICAgIGBcblxuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAvLyBBd2FyZCBwb2ludHNcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlRGF0YSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgcG9pbnRzX3Jld2FyZCBGUk9NIGRhaWx5X2NoYWxsZW5nZXMgV0hFUkUgaWQgPSAke2NoYWxsZW5nZS5pZH1cbiAgICAgICAgYFxuICAgICAgICBjb25zdCBwb2ludHNSZXdhcmQgPSBjaGFsbGVuZ2VEYXRhWzBdPy5wb2ludHNfcmV3YXJkIHx8IDBcblxuICAgICAgICBhd2FpdCBzcWxgXG4gICAgICAgICAgVVBEQVRFIHVzZXJzIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3BvaW50c1Jld2FyZH0gV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICAgICAgYFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXByb2dyZXNzWzBdLmNvbXBsZXRlZCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHByb2dyZXNzXG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IHByb2dyZXNzWzBdLnByb2dyZXNzICsgaW5jcmVtZW50XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBuZXdQcm9ncmVzcyA+PSBjaGFsbGVuZ2UudGFyZ2V0X3ZhbHVlXG5cbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIHVzZXJfZGFpbHlfY2hhbGxlbmdlc1xuICAgICAgICBTRVQgcHJvZ3Jlc3MgPSAke25ld1Byb2dyZXNzfSxcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9ICR7Y29tcGxldGVkfSxcbiAgICAgICAgICAgIGNvbXBsZXRlZF9hdCA9ICR7Y29tcGxldGVkID8gXCJOT1coKVwiIDogbnVsbH1cbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgY2hhbGxlbmdlX2lkID0gJHtjaGFsbGVuZ2UuaWR9XG4gICAgICBgXG5cbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgLy8gQXdhcmQgcG9pbnRzXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZURhdGEgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIHBvaW50c19yZXdhcmQgRlJPTSBkYWlseV9jaGFsbGVuZ2VzIFdIRVJFIGlkID0gJHtjaGFsbGVuZ2UuaWR9XG4gICAgICAgIGBcbiAgICAgICAgY29uc3QgcG9pbnRzUmV3YXJkID0gY2hhbGxlbmdlRGF0YVswXT8ucG9pbnRzX3Jld2FyZCB8fCAwXG5cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIFVQREFURSB1c2VycyBTRVQgcG9pbnRzID0gcG9pbnRzICsgJHtwb2ludHNSZXdhcmR9IFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBb2lCc0IifQ==
}),
"[project]/components/lesson-content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonContent",
    ()=>LessonContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quiz-component.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$32b85a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:32b85a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
"use client";
;
;
;
;
;
;
;
function LessonContent({ lesson, quiz, questions, completed, userId, courseId }) {
    const [isCompleted, setIsCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(completed);
    const [estimatedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.ceil(lesson.content.split(" ").length / 200)) // ~200 words per minute
    ;
    const handleComplete = async ()=>{
        const formData = new FormData();
        formData.append("lessonId", lesson.id.toString());
        formData.append("userId", userId.toString());
        formData.append("courseId", courseId.toString());
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$32b85a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["completeLesson"])(formData);
        if (result?.success) {
            setIsCompleted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-5 h-5 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-foreground",
                                    children: [
                                        "Estimated time: ",
                                        estimatedTime,
                                        " min"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                        "Complete to earn ",
                                        lesson.points_reward,
                                        " points"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2 text-accent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lesson-content.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lesson-content.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            lesson.video_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-16 h-16 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/lesson-content.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground ml-4",
                                children: [
                                    "Video: ",
                                    lesson.video_url
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/lesson-content.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/lesson-content.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/lesson-content.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lesson-content.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Lesson Content"
                        }, void 0, false, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lesson-content.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-gray max-w-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground leading-relaxed whitespace-pre-wrap",
                                children: lesson.content
                            }, void 0, false, {
                                fileName: "[project]/components/lesson-content.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/lesson-content.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/lesson-content.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-accent/30 bg-gradient-to-r from-accent/5 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 text-accent mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px w-12 bg-accent/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "End of Lesson"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px w-12 bg-accent/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: quiz ? "Complete the quiz below to test your knowledge" : "Mark as complete to continue"
                        }, void 0, false, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lesson-content.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lesson-content.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            quiz && questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuizComponent"], {
                quiz: quiz,
                questions: questions,
                userId: userId,
                lessonId: lesson.id,
                courseId: courseId
            }, void 0, false, {
                fileName: "[project]/components/lesson-content.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-surface border-primary/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-foreground mb-1",
                                    children: "Mark as Complete"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Earn ",
                                        lesson.points_reward,
                                        " points"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleComplete,
                            className: "bg-accent hover:bg-accent/90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                "Complete Lesson"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lesson-content.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/lesson-content.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/lesson-content.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_37fd369a._.js.map