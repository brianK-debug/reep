(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/radio-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function RadioGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid gap-3', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/radio-group.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RadioGroup;
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
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
_c1 = RadioGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "RadioGroup");
__turbopack_context__.k.register(_c1, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:bebf70 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40024d419bc900a75cee8a5523b434d9b5604a84aa":"submitQuiz"},"app/actions/courses.ts",""] */ __turbopack_context__.s([
    "submitQuiz",
    ()=>submitQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var submitQuiz = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40024d419bc900a75cee8a5523b434d9b5604a84aa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitQuiz"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY291cnNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHNxbCBmcm9tIFwiQC9saWIvZGJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyB3cml0ZUZpbGUsIG1rZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSBcImNyeXB0b1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2UoZm9ybURhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRpZmZpY3VsdHk6IHN0cmluZ1xuICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgdGh1bWJuYWlsX3VybD86IHN0cmluZ1xuICB0ZWFjaGVyX2lkOiBudW1iZXIgfCBzdHJpbmdcbiAgaXNfcHVibGlzaGVkOiBib29sZWFuXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gY291cnNlcyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkaWZmaWN1bHR5LCBwb2ludHNfcmV3YXJkLCB0aHVtYm5haWxfdXJsLCB0ZWFjaGVyX2lkLCBpc19wdWJsaXNoZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkLnRvU3RyaW5nKCkpfSxcbiAgICAgICAgJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICApXG4gICAgICBSRVRVUk5JTkcgaWRcbiAgICBgXG5cbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlc3VsdFswXS5pZFxuXG4gICAgLy8gQ3JlYXRlIG1vZHVsZXNcbiAgICBjb25zdCBtb2R1bGVzID0gW1xuICAgICAgeyB0aXRsZTogJ0NvdXJzZSBJbnRyb2R1Y3Rpb24nLCBkZXNjcmlwdGlvbjogJ0dldCBzdGFydGVkIHdpdGggdGhpcyBjb3Vyc2UgYW5kIHVuZGVyc3RhbmQgd2hhdCB5b3Ugd2lsbCBsZWFybicsIG9yZGVyX2luZGV4OiAxIH0sXG4gICAgICB7IHRpdGxlOiAnQ29yZSBDb25jZXB0cycsIGRlc2NyaXB0aW9uOiAnTGVhcm4gdGhlIGZ1bmRhbWVudGFsIGNvbmNlcHRzIGFuZCBwcmluY2lwbGVzJywgb3JkZXJfaW5kZXg6IDIgfSxcbiAgICAgIHsgdGl0bGU6ICdQcmFjdGljYWwgQXBwbGljYXRpb24nLCBkZXNjcmlwdGlvbjogJ0FwcGx5IHdoYXQgeW91IGhhdmUgbGVhcm5lZCB0aHJvdWdoIGhhbmRzLW9uIGV4ZXJjaXNlcycsIG9yZGVyX2luZGV4OiAzIH0sXG4gICAgICB7IHRpdGxlOiAnQWR2YW5jZWQgVG9waWNzJywgZGVzY3JpcHRpb246ICdFeHBsb3JlIGFkdmFuY2VkIGNvbmNlcHRzIGFuZCBiZXN0IHByYWN0aWNlcycsIG9yZGVyX2luZGV4OiA0IH1cbiAgICBdXG5cbiAgICBjb25zdCBtb2R1bGVJZHMgPSBbXVxuICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgIGNvbnN0IG1vZHVsZVJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gbW9kdWxlcyAoY291cnNlX2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yZGVyX2luZGV4KVxuICAgICAgICBWQUxVRVMgKCR7Y291cnNlSWR9LCAke21vZHVsZS50aXRsZX0sICR7bW9kdWxlLmRlc2NyaXB0aW9ufSwgJHttb2R1bGUub3JkZXJfaW5kZXh9KVxuICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgIGBcbiAgICAgIG1vZHVsZUlkcy5wdXNoKG1vZHVsZVJlc3VsdFswXS5pZClcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGVzc29ucyBmb3IgZWFjaCBtb2R1bGVcbiAgICBjb25zdCBsZXNzb25zID0gW1xuICAgICAgLy8gTW9kdWxlIDE6IEludHJvZHVjdGlvblxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIHRoZSBDb3Vyc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6IGBXZWxjb21lIHRvICR7Zm9ybURhdGEudGl0bGV9IVxuXG5UaGlzIGNvdXJzZSB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBlc3NlbnRpYWwgY29uY2VwdHMgYW5kIHNraWxscyB5b3UgbmVlZCB0byBzdWNjZWVkLiBCeSB0aGUgZW5kIG9mIHRoaXMgY291cnNlLCB5b3Ugd2lsbCBoYXZlIGEgc29saWQgdW5kZXJzdGFuZGluZyBvZiB0aGUgdG9waWMgYW5kIGJlIGFibGUgdG8gYXBwbHkgd2hhdCB5b3UndmUgbGVhcm5lZC5cblxuV2hhdCB5b3Ugd2lsbCBsZWFybjpcbi0gRnVuZGFtZW50YWwgY29uY2VwdHMgYW5kIHByaW5jaXBsZXNcbi0gUHJhY3RpY2FsIGFwcGxpY2F0aW9ucyBhbmQgZXhhbXBsZXNcbi0gQmVzdCBwcmFjdGljZXMgYW5kIGNvbW1vbiBwYXR0ZXJuc1xuLSBIYW5kcy1vbiBleGVyY2lzZXMgYW5kIHByb2plY3RzXG5cbkxldCdzIGdldCBzdGFydGVkIG9uIHRoaXMgbGVhcm5pbmcgam91cm5leSFgLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnQ291cnNlIE92ZXJ2aWV3IGFuZCBPYmplY3RpdmVzJyxcbiAgICAgICAgICBjb250ZW50OiBgSW4gdGhpcyBsZXNzb24sIHdlIHdpbGwgZXhwbG9yZTpcblxu4oCiIFRoZSBtYWluIHRvcGljcyBjb3ZlcmVkIGluIHRoaXMgY291cnNlXG7igKIgTGVhcm5pbmcgb2JqZWN0aXZlcyBhbmQgb3V0Y29tZXNcbuKAoiBQcmVyZXF1aXNpdGVzIGFuZCByZXF1aXJlbWVudHNcbuKAoiBDb3Vyc2Ugc3RydWN0dXJlIGFuZCBwcm9ncmVzc2lvblxu4oCiIEFzc2Vzc21lbnQgbWV0aG9kcyBhbmQgZ3JhZGluZyBjcml0ZXJpYVxuXG5VbmRlcnN0YW5kaW5nIHRoZXNlIGVsZW1lbnRzIHdpbGwgaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGxlYXJuaW5nIGV4cGVyaWVuY2UuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMjogQ29yZSBDb25jZXB0c1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdGdW5kYW1lbnRhbCBQcmluY2lwbGVzJyxcbiAgICAgICAgICBjb250ZW50OiBgTGV0J3MgZGl2ZSBpbnRvIHRoZSBjb3JlIHByaW5jaXBsZXMgdGhhdCBmb3JtIHRoZSBmb3VuZGF0aW9uIG9mIHRoaXMgc3ViamVjdC5cblxuS2V5IGNvbmNlcHRzIGNvdmVyZWQ6XG7igKIgQmFzaWMgdGVybWlub2xvZ3kgYW5kIGRlZmluaXRpb25zXG7igKIgQ29yZSBwcmluY2lwbGVzIGFuZCB0aGVvcmllc1xu4oCiIEZ1bmRhbWVudGFsIHJlbGF0aW9uc2hpcHMgYW5kIGRlcGVuZGVuY2llc1xu4oCiIENvbW1vbiBwYXR0ZXJucyBhbmQgc3RydWN0dXJlc1xuXG5UaGVzZSBmb3VuZGF0aW9uYWwgY29uY2VwdHMgd2lsbCBiZSByZWZlcmVuY2VkIHRocm91Z2hvdXQgdGhlIGNvdXJzZS5gLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnRXNzZW50aWFsIENvbmNlcHRzJyxcbiAgICAgICAgICBjb250ZW50OiBgQnVpbGRpbmcgb24gdGhlIGZ1bmRhbWVudGFscywgdGhpcyBsZXNzb24gY292ZXJzIGVzc2VudGlhbCBjb25jZXB0cyB0aGF0IGFyZSBjcml0aWNhbCB0byB1bmRlcnN0YW5kaW5nIHRoZSBzdWJqZWN0LlxuXG5Ub3BpY3MgaW5jbHVkZTpcbuKAoiBLZXkgZnJhbWV3b3JrcyBhbmQgbW9kZWxzXG7igKIgSW1wb3J0YW50IHJlbGF0aW9uc2hpcHMgYW5kIGludGVyYWN0aW9uc1xu4oCiIENyaXRpY2FsIHRoaW5raW5nIGFwcHJvYWNoZXNcbuKAoiBQcm9ibGVtLXNvbHZpbmcgbWV0aG9kb2xvZ2llc1xuXG5NYXN0ZXJpbmcgdGhlc2UgY29uY2VwdHMgd2lsbCBnaXZlIHlvdSBhIHN0cm9uZyBmb3VuZGF0aW9uIGZvciBhZHZhbmNlZCB0b3BpY3MuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMzogUHJhY3RpY2FsIEFwcGxpY2F0aW9uXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0hhbmRzLW9uIFByYWN0aWNlJyxcbiAgICAgICAgICBjb250ZW50OiBgTm93IGl0J3MgdGltZSB0byBhcHBseSB3aGF0IHlvdSd2ZSBsZWFybmVkIHRocm91Z2ggcHJhY3RpY2FsIGV4ZXJjaXNlcy5cblxuSW4gdGhpcyBsZXNzb24sIHlvdSB3aWxsOlxu4oCiIFdvcmsgdGhyb3VnaCBndWlkZWQgZXhhbXBsZXNcbuKAoiBDb21wbGV0ZSBpbnRlcmFjdGl2ZSBleGVyY2lzZXNcbuKAoiBBcHBseSBjb25jZXB0cyB0byByZWFsLXdvcmxkIHNjZW5hcmlvc1xu4oCiIFJlY2VpdmUgaW1tZWRpYXRlIGZlZWRiYWNrIG9uIHlvdXIgd29ya1xuXG5QcmFjdGljZSBpcyBlc3NlbnRpYWwgZm9yIHJlaW5mb3JjaW5nIGxlYXJuaW5nIGFuZCBidWlsZGluZyBjb25maWRlbmNlLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnUHJvamVjdCBXb3JrJyxcbiAgICAgICAgICBjb250ZW50OiBgVGhpcyBsZXNzb24gZm9jdXNlcyBvbiBhcHBseWluZyB5b3VyIGtub3dsZWRnZSB0byBhIGNvbXByZWhlbnNpdmUgcHJvamVjdC5cblxuUHJvamVjdCBjb21wb25lbnRzOlxu4oCiIFBsYW5uaW5nIGFuZCBkZXNpZ24gcGhhc2VcbuKAoiBJbXBsZW1lbnRhdGlvbiBhbmQgZGV2ZWxvcG1lbnRcbuKAoiBUZXN0aW5nIGFuZCB2YWxpZGF0aW9uXG7igKIgRG9jdW1lbnRhdGlvbiBhbmQgcHJlc2VudGF0aW9uXG5cbkNvbXBsZXRpbmcgdGhpcyBwcm9qZWN0IHdpbGwgZGVtb25zdHJhdGUgeW91ciBtYXN0ZXJ5IG9mIHRoZSBjb3Vyc2UgbWF0ZXJpYWwuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiAxMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy8gTW9kdWxlIDQ6IEFkdmFuY2VkIFRvcGljc1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdBZHZhbmNlZCBDb25jZXB0cycsXG4gICAgICAgICAgY29udGVudDogYEV4cGxvcmUgYWR2YW5jZWQgdG9waWNzIGFuZCBjdXR0aW5nLWVkZ2UgZGV2ZWxvcG1lbnRzIGluIHRoZSBmaWVsZC5cblxuQWR2YW5jZWQgdG9waWNzIGNvdmVyZWQ6XG7igKIgRW1lcmdpbmcgdHJlbmRzIGFuZCB0ZWNobm9sb2dpZXNcbuKAoiBDb21wbGV4IHByb2JsZW0tc29sdmluZyBzY2VuYXJpb3NcbuKAoiBJbnRlZ3JhdGlvbiB3aXRoIG90aGVyIHN5c3RlbXNcbuKAoiBGdXR1cmUgZGlyZWN0aW9ucyBhbmQgcG9zc2liaWxpdGllc1xuXG5UaGVzZSBhZHZhbmNlZCBjb25jZXB0cyB3aWxsIHByZXBhcmUgeW91IGZvciBwcm9mZXNzaW9uYWwgYXBwbGljYXRpb25zLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdCZXN0IFByYWN0aWNlcyBhbmQgTmV4dCBTdGVwcycsXG4gICAgICAgICAgY29udGVudDogYFRoaXMgZmluYWwgbGVzc29uIGNvdmVycyBiZXN0IHByYWN0aWNlcyBhbmQgcHJvdmlkZXMgZ3VpZGFuY2UgZm9yIGNvbnRpbnVlZCBsZWFybmluZy5cblxuVG9waWNzIGluY2x1ZGU6XG7igKIgSW5kdXN0cnkgYmVzdCBwcmFjdGljZXMgYW5kIHN0YW5kYXJkc1xu4oCiIENvbW1vbiBwaXRmYWxscyBhbmQgaG93IHRvIGF2b2lkIHRoZW1cbuKAoiBSZXNvdXJjZXMgZm9yIGZ1cnRoZXIgbGVhcm5pbmdcbuKAoiBDYXJlZXIgYXBwbGljYXRpb25zIGFuZCBvcHBvcnR1bml0aWVzXG7igKIgU3RheWluZyBjdXJyZW50IHdpdGggZGV2ZWxvcG1lbnRzXG5cbkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIHRoaXMgY291cnNlIWAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9XG4gICAgICBdXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXNzb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb2R1bGVMZXNzb25zID0gbGVzc29uc1tpXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2R1bGVMZXNzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGxlc3NvbiA9IG1vZHVsZUxlc3NvbnNbal1cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIGxlc3NvbnMgKG1vZHVsZV9pZCwgdGl0bGUsIGNvbnRlbnQsIHZpZGVvX3VybCwgb3JkZXJfaW5kZXgsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWRzW2ldfSxcbiAgICAgICAgICAgICR7bGVzc29uLnRpdGxlfSxcbiAgICAgICAgICAgICR7bGVzc29uLmNvbnRlbnR9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICR7aiArIDF9LFxuICAgICAgICAgICAgJHtsZXNzb24ucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcXVpenplcyBmb3IgbW9kdWxlcyAob25lIHF1aXogcGVyIG1vZHVsZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbW9kdWxlSWQgPSBtb2R1bGVJZHNbaV1cbiAgICAgIGNvbnN0IHF1aXpSZXN1bHQgPSBhd2FpdCBzcWxgXG4gICAgICAgIElOU0VSVCBJTlRPIHF1aXp6ZXMgKG1vZHVsZV9pZCwgdGl0bGUsIHBhc3Npbmdfc2NvcmUsIHBvaW50c19yZXdhcmQpXG4gICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgJHttb2R1bGVJZH0sXG4gICAgICAgICAgJ01vZHVsZSAke2kgKyAxfSBBc3Nlc3NtZW50JyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMFxuICAgICAgICApXG4gICAgICAgIFJFVFVSTklORyBpZFxuICAgICAgYFxuXG4gICAgICBjb25zdCBxdWl6SWQgPSBxdWl6UmVzdWx0WzBdLmlkXG5cbiAgICAgIC8vIEFkZCBzYW1wbGUgcXVlc3Rpb25zXG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIG1haW4gY29uY2VwdCBjb3ZlcmVkIGluIHRoaXMgbW9kdWxlPycsXG4gICAgICAgICAgb3B0aW9uczogJ1tcIkNvcmUgcHJpbmNpcGxlc1wiLCBcIkFkdmFuY2VkIHRvcGljc1wiLCBcIlByYWN0aWNhbCBhcHBsaWNhdGlvblwiLCBcIkludHJvZHVjdGlvblwiXScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdDb3JlIHByaW5jaXBsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ1doaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgYSBrZXkgbGVhcm5pbmcgb2JqZWN0aXZlPycsXG4gICAgICAgICAgb3B0aW9uczogJ1tcIlVuZGVyc3RhbmRpbmcgZnVuZGFtZW50YWxzXCIsIFwiTWVtb3JpemluZyBmYWN0c1wiLCBcIkZvbGxvd2luZyBpbnN0cnVjdGlvbnNcIiwgXCJDb21wbGV0aW5nIGFzc2lnbm1lbnRzXCJdJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1VuZGVyc3RhbmRpbmcgZnVuZGFtZW50YWxzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcXVlc3Rpb246ICdXaGF0IHNob3VsZCB5b3UgZG8gdG8gbWFzdGVyIHRoZSBtYXRlcmlhbD8nLFxuICAgICAgICAgIG9wdGlvbnM6ICdbXCJQcmFjdGljZSByZWd1bGFybHlcIiwgXCJTa2lwIGV4ZXJjaXNlc1wiLCBcIk9ubHkgcmVhZCBjb250ZW50XCIsIFwiTWVtb3JpemUgYW5zd2Vyc1wiXScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdQcmFjdGljZSByZWd1bGFybHknXG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgICAgZm9yIChsZXQgcSA9IDA7IHEgPCBxdWVzdGlvbnMubGVuZ3RoOyBxKyspIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXpfcXVlc3Rpb25zIChxdWl6X2lkLCBxdWVzdGlvbiwgb3B0aW9ucywgY29ycmVjdF9hbnN3ZXIsIG9yZGVyX2luZGV4KVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke3F1aXpJZH0sXG4gICAgICAgICAgICAke3F1ZXN0aW9uc1txXS5xdWVzdGlvbn0sXG4gICAgICAgICAgICAke3F1ZXN0aW9uc1txXS5vcHRpb25zfSxcbiAgICAgICAgICAgICR7cXVlc3Rpb25zW3FdLmNvcnJlY3RfYW5zd2VyfSxcbiAgICAgICAgICAgICR7cSArIDF9XG4gICAgICAgICAgKVxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vY291cnNlc1wiKVxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3R1dG9yXCIpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291cnNlSWQgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbdjBdIENyZWF0ZSBjb3Vyc2UgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlKGNvdXJzZUlkOiBudW1iZXIsIGZvcm1EYXRhOiB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBkaWZmaWN1bHR5OiBzdHJpbmdcbiAgcG9pbnRzX3Jld2FyZDogbnVtYmVyXG4gIHRodW1ibmFpbF91cmw/OiBzdHJpbmdcbiAgdGVhY2hlcl9pZDogbnVtYmVyIHwgc3RyaW5nXG4gIGlzX3B1Ymxpc2hlZDogYm9vbGVhblxufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHNxbGBcbiAgICAgIFVQREFURSBjb3Vyc2VzXG4gICAgICBTRVQgdGl0bGUgPSAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9ICR7Zm9ybURhdGEuZGVzY3JpcHRpb259LFxuICAgICAgICAgIGRpZmZpY3VsdHkgPSAke2Zvcm1EYXRhLmRpZmZpY3VsdHl9LFxuICAgICAgICAgIHBvaW50c19yZXdhcmQgPSAke2Zvcm1EYXRhLnBvaW50c19yZXdhcmR9LFxuICAgICAgICAgIHRodW1ibmFpbF91cmwgPSAke2Zvcm1EYXRhLnRodW1ibmFpbF91cmwgfHwgbnVsbH0sXG4gICAgICAgICAgdGVhY2hlcl9pZCA9ICR7cGFyc2VJbnQoZm9ybURhdGEudGVhY2hlcl9pZC50b1N0cmluZygpKX0sXG4gICAgICAgICAgaXNfcHVibGlzaGVkID0gJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICBXSEVSRSBpZCA9ICR7Y291cnNlSWR9XG4gICAgYFxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vY291cnNlc1wiKVxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vY291cnNlcy8ke2NvdXJzZUlkfS9lZGl0YClcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBVcGRhdGUgY291cnNlIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVucm9sbEluQ291cnNlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBjb3Vyc2VJZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJjb3Vyc2VJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IHVzZXJJZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJ1c2VySWRcIikgYXMgc3RyaW5nKVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gZW5yb2xsbWVudHMgKHVzZXJfaWQsIGNvdXJzZV9pZClcbiAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2NvdXJzZUlkfSlcbiAgICBgXG5cbiAgICAvLyBBd2FyZCBhY2hpZXZlbWVudCB0byBzdHVkZW50XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke3VzZXJJZH0sXG4gICAgICAgICdjb3Vyc2VfZW5yb2xsZWQnLFxuICAgICAgICAnTmV3IENvdXJzZSBFbnJvbGxlZCcsXG4gICAgICAgICdTdGFydGVkIGEgbmV3IGxlYXJuaW5nIGpvdXJuZXknLFxuICAgICAgICA1XG4gICAgICApXG4gICAgYFxuXG4gICAgLy8gVXBkYXRlIHN0dWRlbnQgcG9pbnRzXG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIHVzZXJzXG4gICAgICBTRVQgcG9pbnRzID0gcG9pbnRzICsgNVxuICAgICAgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICBgXG5cbiAgICAvLyBDaGVjayBmb3IgS25vd2xlZGdlIFNlZWtlciBiYWRnZSBmb3Igc3R1ZGVudFxuICAgIGNvbnN0IGVucm9sbG1lbnRDb3VudCA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBDT1VOVChESVNUSU5DVCBjb3Vyc2VfaWQpIGFzIGNvdW50IEZST00gZW5yb2xsbWVudHMgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIGlmIChlbnJvbGxtZW50Q291bnRbMF0uY291bnQgPj0gMykge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0tub3dsZWRnZSBTZWVrZXInXG4gICAgICBgXG5cbiAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgYFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBQb3B1bGFyIFRlYWNoZXIgYmFkZ2VcbiAgICBjb25zdCB0ZWFjaGVyRGF0YSA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCB0ZWFjaGVyX2lkIEZST00gY291cnNlcyBXSEVSRSBpZCA9ICR7Y291cnNlSWR9XG4gICAgYFxuXG4gICAgaWYgKHRlYWNoZXJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRlYWNoZXJJZCA9IHRlYWNoZXJEYXRhWzBdLnRlYWNoZXJfaWRcblxuICAgICAgY29uc3QgdG90YWxFbnJvbGxtZW50cyA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50XG4gICAgICAgIEZST00gZW5yb2xsbWVudHMgZVxuICAgICAgICBKT0lOIGNvdXJzZXMgYyBPTiBlLmNvdXJzZV9pZCA9IGMuaWRcbiAgICAgICAgV0hFUkUgYy50ZWFjaGVyX2lkID0gJHt0ZWFjaGVySWR9XG4gICAgICBgXG5cbiAgICAgIGlmICh0b3RhbEVucm9sbG1lbnRzWzBdLmNvdW50ID49IDEwKSB7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ1BvcHVsYXIgVGVhY2hlcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3RlYWNoZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfWApXG4gICAgcmVkaXJlY3QoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBFbnJvbGxtZW50IGVycm9yOlwiLCBlcnJvcilcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfWApXG4gIHJlZGlyZWN0KGAvY291cnNlcy8ke2NvdXJzZUlkfWApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRDb3Vyc2VUaHVtYm5haWwoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInRodW1ibmFpbFwiKSBhcyBGaWxlXG5cbiAgICBpZiAoIWZpbGUgfHwgZmlsZS5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiTm8gZmlsZSBwcm92aWRlZFwiIH1cbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgICBpZiAoIWZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBtdXN0IGJlIGFuIGltYWdlXCIgfVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDVNQilcbiAgICBpZiAoZmlsZS5zaXplID4gNSAqIDEwMjQgKiAxMDI0KSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBzaXplIG11c3QgYmUgbGVzcyB0aGFuIDVNQlwiIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSB1bmlxdWUgZmlsZW5hbWVcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKVxuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7cmFuZG9tVVVJRCgpfS4ke2ZpbGVFeHRlbnNpb259YFxuXG4gICAgLy8gQ3JlYXRlIHVwbG9hZHMgZGlyZWN0b3J5IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBjb25zdCB1cGxvYWRzRGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBcInVwbG9hZHNcIiwgXCJjb3Vyc2VzXCIpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG1rZGlyKHVwbG9hZHNEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIERpcmVjdG9yeSBtaWdodCBhbHJlYWR5IGV4aXN0XG4gICAgfVxuXG4gICAgLy8gU2F2ZSBmaWxlXG4gICAgY29uc3QgZmlsZVBhdGggPSBqb2luKHVwbG9hZHNEaXIsIGZpbGVOYW1lKVxuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpXG4gICAgYXdhaXQgd3JpdGVGaWxlKGZpbGVQYXRoLCBidWZmZXIpXG5cbiAgICAvLyBSZXR1cm4gdGhlIHB1YmxpYyBVUkxcbiAgICBjb25zdCBwdWJsaWNVcmwgPSBgL3VwbG9hZHMvY291cnNlcy8ke2ZpbGVOYW1lfWBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IHB1YmxpY1VybCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gVXBsb2FkIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwbG9hZCBmaWxlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2VXaXRoQ29udGVudChmb3JtRGF0YToge1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgZGlmZmljdWx0eTogc3RyaW5nXG4gIHBvaW50c19yZXdhcmQ6IG51bWJlclxuICB0aHVtYm5haWxfdXJsPzogc3RyaW5nXG4gIHRlYWNoZXJfaWQ6IHN0cmluZ1xuICBpc19wdWJsaXNoZWQ6IGJvb2xlYW5cbiAgbW9kdWxlczogQXJyYXk8e1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgbGVzc29uczogQXJyYXk8e1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgY29udGVudDogc3RyaW5nXG4gICAgICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgICB9PlxuICAgIHF1aXo/OiB7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBwYXNzaW5nX3Njb3JlOiBudW1iZXJcbiAgICAgIHBvaW50c19yZXdhcmQ6IG51bWJlclxuICAgICAgcXVlc3Rpb25zOiBBcnJheTx7XG4gICAgICAgIHF1ZXN0aW9uOiBzdHJpbmdcbiAgICAgICAgYW5zd2Vyczogc3RyaW5nW11cbiAgICAgICAgY29ycmVjdF9hbnN3ZXJfaW5kZXg6IG51bWJlclxuICAgICAgfT5cbiAgICB9XG4gIH0+XG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gY291cnNlcyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkaWZmaWN1bHR5LCBwb2ludHNfcmV3YXJkLCB0aHVtYm5haWxfdXJsLCB0ZWFjaGVyX2lkLCBpc19wdWJsaXNoZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkKX0sXG4gICAgICAgICR7Zm9ybURhdGEuaXNfcHVibGlzaGVkfVxuICAgICAgKVxuICAgICAgUkVUVVJOSU5HIGlkXG4gICAgYFxuXG4gICAgY29uc3QgY291cnNlSWQgPSByZXN1bHRbMF0uaWRcblxuICAgIC8vIENyZWF0ZSBtb2R1bGVzIGFuZCB0aGVpciBjb250ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRGF0YS5tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb2R1bGUgPSBmb3JtRGF0YS5tb2R1bGVzW2ldXG5cbiAgICAgIGNvbnN0IG1vZHVsZVJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gbW9kdWxlcyAoY291cnNlX2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yZGVyX2luZGV4KVxuICAgICAgICBWQUxVRVMgKCR7Y291cnNlSWR9LCAke21vZHVsZS50aXRsZX0sICR7bW9kdWxlLmRlc2NyaXB0aW9ufSwgJHtpICsgMX0pXG4gICAgICAgIFJFVFVSTklORyBpZFxuICAgICAgYFxuXG4gICAgICBjb25zdCBtb2R1bGVJZCA9IG1vZHVsZVJlc3VsdFswXS5pZFxuXG4gICAgICAvLyBDcmVhdGUgbGVzc29uc1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2R1bGUubGVzc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBsZXNzb24gPSBtb2R1bGUubGVzc29uc1tqXVxuXG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyBsZXNzb25zIChtb2R1bGVfaWQsIHRpdGxlLCBjb250ZW50LCB2aWRlb191cmwsIG9yZGVyX2luZGV4LCBwb2ludHNfcmV3YXJkKVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke21vZHVsZUlkfSxcbiAgICAgICAgICAgICR7bGVzc29uLnRpdGxlfSxcbiAgICAgICAgICAgICR7bGVzc29uLmNvbnRlbnR9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICR7aiArIDF9LFxuICAgICAgICAgICAgJHtsZXNzb24ucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgIGBcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHF1aXogaWYgcHJvdmlkZWQgYXQgbW9kdWxlIGxldmVsXG4gICAgICBpZiAobW9kdWxlLnF1aXopIHtcbiAgICAgICAgY29uc3QgcXVpelJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyBxdWl6emVzIChtb2R1bGVfaWQsIHRpdGxlLCBwYXNzaW5nX3Njb3JlLCBwb2ludHNfcmV3YXJkKVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke21vZHVsZUlkfSxcbiAgICAgICAgICAgICR7bW9kdWxlLnF1aXoudGl0bGV9LFxuICAgICAgICAgICAgJHttb2R1bGUucXVpei5wYXNzaW5nX3Njb3JlfSxcbiAgICAgICAgICAgICR7bW9kdWxlLnF1aXoucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgICAgUkVUVVJOSU5HIGlkXG4gICAgICAgIGBcblxuICAgICAgICBjb25zdCBxdWl6SWQgPSBxdWl6UmVzdWx0WzBdLmlkXG5cbiAgICAgICAgLy8gQ3JlYXRlIHF1ZXN0aW9uc1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1vZHVsZS5xdWl6LnF1ZXN0aW9ucy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gbW9kdWxlLnF1aXoucXVlc3Rpb25zW2tdXG4gICAgICAgICAgY29uc3Qgb3B0aW9uc0pzb24gPSBKU09OLnN0cmluZ2lmeShxdWVzdGlvbi5hbnN3ZXJzKVxuICAgICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgcXVlc3Rpb24uY29ycmVjdF9hbnN3ZXJfaW5kZXgpIC8vIEEsIEIsIEMsIERcblxuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXpfcXVlc3Rpb25zIChxdWl6X2lkLCBxdWVzdGlvbiwgb3B0aW9ucywgY29ycmVjdF9hbnN3ZXIsIG9yZGVyX2luZGV4KVxuICAgICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICAgJHtxdWl6SWR9LFxuICAgICAgICAgICAgICAke3F1ZXN0aW9uLnF1ZXN0aW9ufSxcbiAgICAgICAgICAgICAgJHtvcHRpb25zSnNvbn0sXG4gICAgICAgICAgICAgICR7Y29ycmVjdEFuc3dlcn0sXG4gICAgICAgICAgICAgICR7ayArIDF9XG4gICAgICAgICAgICApXG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdHV0b3JcIilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3Vyc2VJZCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gQ3JlYXRlIGNvdXJzZSB3aXRoIGNvbnRlbnQgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcGxldGVMZXNzb24oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IGxlc3NvbklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImxlc3NvbklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInVzZXJJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGNvdXJzZUlkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImNvdXJzZUlkXCIpIGFzIHN0cmluZylcblxuICB0cnkge1xuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgY29tcGxldGVkXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgKiBGUk9NIGxlc3Nvbl9wcm9ncmVzc1xuICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgbGVzc29uX2lkID0gJHtsZXNzb25JZH1cbiAgICBgXG5cbiAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkFscmVhZHkgY29tcGxldGVkXCIgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgbGVzc29uIGFzIGNvbXBsZXRlXG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gbGVzc29uX3Byb2dyZXNzICh1c2VyX2lkLCBsZXNzb25faWQsIGNvbXBsZXRlZCwgY29tcGxldGVkX2F0KVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7bGVzc29uSWR9LCB0cnVlLCBOT1coKSlcbiAgICBgXG5cbiAgICAvLyBHZXQgbGVzc29uIHBvaW50c1xuICAgIGNvbnN0IGxlc3NvbnMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgcG9pbnRzX3Jld2FyZCBGUk9NIGxlc3NvbnMgV0hFUkUgaWQgPSAke2xlc3NvbklkfVxuICAgIGBcblxuICAgIGNvbnN0IHBvaW50c1Jld2FyZCA9IGxlc3NvbnNbMF0/LnBvaW50c19yZXdhcmQgfHwgNVxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBVUERBVEUgdXNlcnNcbiAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3BvaW50c1Jld2FyZH1cbiAgICAgIFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHRlYWNoZXIgKDEgcG9pbnQgcGVyIGxlc3NvbiBjb21wbGV0aW9uKVxuICAgIGNvbnN0IHRlYWNoZXJEYXRhID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIGMudGVhY2hlcl9pZFxuICAgICAgRlJPTSBjb3Vyc2VzIGNcbiAgICAgIEpPSU4gbW9kdWxlcyBtIE9OIGMuaWQgPSBtLmNvdXJzZV9pZFxuICAgICAgSk9JTiBsZXNzb25zIGwgT04gbS5pZCA9IGwubW9kdWxlX2lkXG4gICAgICBXSEVSRSBsLmlkID0gJHtsZXNzb25JZH1cbiAgICBgXG5cbiAgICBpZiAodGVhY2hlckRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGVhY2hlcklkID0gdGVhY2hlckRhdGFbMF0udGVhY2hlcl9pZFxuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcnNcbiAgICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArIDFcbiAgICAgICAgV0hFUkUgaWQgPSAke3RlYWNoZXJJZH1cbiAgICAgIGBcbiAgICAgIGF3YWl0IHVwZGF0ZVVzZXJMZXZlbCh0ZWFjaGVySWQpXG4gICAgfVxuXG4gICAgYXdhaXQgdXBkYXRlVXNlckxldmVsKHVzZXJJZClcblxuICAgIGF3YWl0IHVwZGF0ZVN0cmVhayh1c2VySWQpXG5cbiAgICBhd2FpdCB1cGRhdGVEYWlseUNoYWxsZW5nZVByb2dyZXNzKHVzZXJJZCwgXCJsZXNzb25zX2NvbXBsZXRlZFwiLCAxKVxuXG4gICAgLy8gQ3JlYXRlIGFjaGlldmVtZW50IGZvciBzdHVkZW50XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke3VzZXJJZH0sXG4gICAgICAgICdsZXNzb25fY29tcGxldGVkJyxcbiAgICAgICAgJ0xlc3NvbiBDb21wbGV0ZScsXG4gICAgICAgICdDb21wbGV0ZWQgYSBsZXNzb24nLFxuICAgICAgICAke3BvaW50c1Jld2FyZH1cbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIHNob3VsZCBnZXQgXCJGaXJzdCBTdGVwc1wiIGJhZGdlXG4gICAgY29uc3QgbGVzc29uQ291bnQgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnQgRlJPTSBsZXNzb25fcHJvZ3Jlc3NcbiAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNvbXBsZXRlZCA9IHRydWVcbiAgICBgXG5cbiAgICBpZiAobGVzc29uQ291bnRbMF0uY291bnQgPT09IDEpIHtcbiAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdGaXJzdCBTdGVwcydcbiAgICAgIGBcblxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNvdXJzZSBwcm9ncmVzc1xuICAgIGF3YWl0IHVwZGF0ZUNvdXJzZVByb2dyZXNzKHVzZXJJZCwgY291cnNlSWQpXG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZXMvJHtjb3Vyc2VJZH0vbGVzc29ucy8ke2xlc3NvbklkfWApXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gQ29tcGxldGUgbGVzc29uIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNvbXBsZXRlIGxlc3NvblwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVpeihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcXVpeklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInF1aXpJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IHVzZXJJZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJ1c2VySWRcIikgYXMgc3RyaW5nKVxuICBjb25zdCBsZXNzb25JZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJsZXNzb25JZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGNvdXJzZUlkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImNvdXJzZUlkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgYW5zd2Vyc0pzb24gPSBmb3JtRGF0YS5nZXQoXCJhbnN3ZXJzXCIpIGFzIHN0cmluZ1xuICBjb25zdCBhbnN3ZXJzID0gSlNPTi5wYXJzZShhbnN3ZXJzSnNvbilcblxuICB0cnkge1xuICAgIC8vIEdldCBxdWl6IGRldGFpbHMgYW5kIHF1ZXN0aW9uc1xuICAgIGNvbnN0IHF1aXp6ZXMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgKiBGUk9NIHF1aXp6ZXMgV0hFUkUgaWQgPSAke3F1aXpJZH1cbiAgICBgXG5cbiAgICBjb25zdCBxdWl6ID0gcXVpenplc1swXVxuXG4gICAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSBxdWl6X3F1ZXN0aW9ucyBXSEVSRSBxdWl6X2lkID0gJHtxdWl6SWR9XG4gICAgYFxuXG4gICAgLy8gQ2FsY3VsYXRlIHNjb3JlXG4gICAgbGV0IGNvcnJlY3RDb3VudCA9IDBcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocSkgPT4ge1xuICAgICAgaWYgKGFuc3dlcnNbcS5pZF0gPT09IHEuY29ycmVjdF9hbnN3ZXIpIHtcbiAgICAgICAgY29ycmVjdENvdW50KytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgc2NvcmUgPSBNYXRoLnJvdW5kKChjb3JyZWN0Q291bnQgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMClcbiAgICBjb25zdCBwYXNzZWQgPSBzY29yZSA+PSBxdWl6LnBhc3Npbmdfc2NvcmVcblxuICAgIC8vIFJlY29yZCBhdHRlbXB0XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gcXVpel9hdHRlbXB0cyAodXNlcl9pZCwgcXVpel9pZCwgc2NvcmUsIGFuc3dlcnMsIHBhc3NlZClcbiAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke3F1aXpJZH0sICR7c2NvcmV9LCAke2Fuc3dlcnNKc29ufSwgJHtwYXNzZWR9KVxuICAgIGBcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIC8vIEF3YXJkIHBvaW50c1xuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcnMgXG4gICAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3F1aXoucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICAgIGBcblxuICAgICAgLy8gQ3JlYXRlIGFjaGlldmVtZW50XG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIElOU0VSVCBJTlRPIGFjaGlldmVtZW50cyAodXNlcl9pZCwgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb2ludHNfZWFybmVkKVxuICAgICAgICBWQUxVRVMgKFxuICAgICAgICAgICR7dXNlcklkfSwgXG4gICAgICAgICAgJ3F1aXpfcGFzc2VkJywgXG4gICAgICAgICAgJ1F1aXogUGFzc2VkJyxcbiAgICAgICAgICAnU3VjY2Vzc2Z1bGx5IHBhc3NlZCBhIHF1aXonLFxuICAgICAgICAgICR7cXVpei5wb2ludHNfcmV3YXJkfVxuICAgICAgICApXG4gICAgICBgXG5cbiAgICAgIC8vIENoZWNrIGZvciBRdWl6IE1hc3RlciBiYWRnZVxuICAgICAgY29uc3QgcGVyZmVjdFF1aXp6ZXMgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudCBGUk9NIHF1aXpfYXR0ZW1wdHNcbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgc2NvcmUgPSAxMDBcbiAgICAgIGBcblxuICAgICAgaWYgKHBlcmZlY3RRdWl6emVzWzBdLmNvdW50ID49IDMpIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnUXVpeiBNYXN0ZXInXG4gICAgICAgIGBcblxuICAgICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZXMvJHtjb3Vyc2VJZH0vbGVzc29ucy8ke2xlc3NvbklkfWApXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2NvcmUsIHBhc3NlZCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gU3VibWl0IHF1aXogZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gc3VibWl0IHF1aXpcIiB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlUHJvZ3Jlc3ModXNlcklkOiBudW1iZXIsIGNvdXJzZUlkOiBudW1iZXIpIHtcbiAgLy8gR2V0IHRvdGFsIGxlc3NvbnMgaW4gY291cnNlXG4gIGNvbnN0IHRvdGFsTGVzc29ucyA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnRcbiAgICBGUk9NIGxlc3NvbnMgbFxuICAgIEpPSU4gbW9kdWxlcyBtIE9OIGwubW9kdWxlX2lkID0gbS5pZFxuICAgIFdIRVJFIG0uY291cnNlX2lkID0gJHtjb3Vyc2VJZH1cbiAgYFxuXG4gIC8vIEdldCBjb21wbGV0ZWQgbGVzc29uc1xuICBjb25zdCBjb21wbGV0ZWRMZXNzb25zID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudFxuICAgIEZST00gbGVzc29uX3Byb2dyZXNzIGxwXG4gICAgSk9JTiBsZXNzb25zIGwgT04gbHAubGVzc29uX2lkID0gbC5pZFxuICAgIEpPSU4gbW9kdWxlcyBtIE9OIGwubW9kdWxlX2lkID0gbS5pZFxuICAgIFdIRVJFIGxwLnVzZXJfaWQgPSAke3VzZXJJZH0gXG4gICAgQU5EIG0uY291cnNlX2lkID0gJHtjb3Vyc2VJZH1cbiAgICBBTkQgbHAuY29tcGxldGVkID0gdHJ1ZVxuICBgXG5cbiAgY29uc3QgdG90YWwgPSB0b3RhbExlc3NvbnNbMF0uY291bnRcbiAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVkTGVzc29uc1swXS5jb3VudFxuICBjb25zdCBwcm9ncmVzcyA9IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvbXBsZXRlZCAvIHRvdGFsKSAqIDEwMCkgOiAwXG5cbiAgLy8gVXBkYXRlIGVucm9sbG1lbnRcbiAgYXdhaXQgc3FsYFxuICAgIFVQREFURSBlbnJvbGxtZW50cyBcbiAgICBTRVQgcHJvZ3Jlc3MgPSAke3Byb2dyZXNzfSxcbiAgICAgICAgc3RhdHVzID0gQ0FTRSBXSEVOICR7cHJvZ3Jlc3N9ID0gMTAwIFRIRU4gJ2NvbXBsZXRlZCcgRUxTRSAnYWN0aXZlJyBFTkQsXG4gICAgICAgIGNvbXBsZXRlZF9hdCA9IENBU0UgV0hFTiAke3Byb2dyZXNzfSA9IDEwMCBUSEVOIE5PVygpIEVMU0UgTlVMTCBFTkRcbiAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBjb3Vyc2VfaWQgPSAke2NvdXJzZUlkfVxuICBgXG5cbiAgLy8gSWYgY29tcGxldGVkLCBhd2FyZCBjb3Vyc2UgY29tcGxldGlvbiBwb2ludHNcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHtcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIHBvaW50c19yZXdhcmQsIHRlYWNoZXJfaWQgRlJPTSBjb3Vyc2VzIFdIRVJFIGlkID0gJHtjb3Vyc2VJZH1cbiAgICBgXG5cbiAgICBjb25zdCBwb2ludHNSZXdhcmQgPSBjb3Vyc2VzWzBdPy5wb2ludHNfcmV3YXJkIHx8IDEwMFxuICAgIGNvbnN0IHRlYWNoZXJJZCA9IGNvdXJzZXNbMF0/LnRlYWNoZXJfaWRcblxuICAgIC8vIEF3YXJkIHBvaW50cyB0byBzdHVkZW50XG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIHVzZXJzXG4gICAgICBTRVQgcG9pbnRzID0gcG9pbnRzICsgJHtwb2ludHNSZXdhcmR9XG4gICAgICBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIC8vIEF3YXJkIHBvaW50cyB0byB0ZWFjaGVyICgxMCBwb2ludHMgcGVyIGNvdXJzZSBjb21wbGV0aW9uKVxuICAgIGlmICh0ZWFjaGVySWQpIHtcbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIHVzZXJzXG4gICAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAxMFxuICAgICAgICBXSEVSRSBpZCA9ICR7dGVhY2hlcklkfVxuICAgICAgYFxuICAgICAgYXdhaXQgdXBkYXRlVXNlckxldmVsKHRlYWNoZXJJZClcbiAgICB9XG5cbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBhY2hpZXZlbWVudHMgKHVzZXJfaWQsIHR5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9pbnRzX2Vhcm5lZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgJ2NvdXJzZV9jb21wbGV0ZWQnLFxuICAgICAgICAnQ291cnNlIENvbXBsZXRlJyxcbiAgICAgICAgJ0ZpbmlzaGVkIGFuIGVudGlyZSBjb3Vyc2UnLFxuICAgICAgICAke3BvaW50c1Jld2FyZH1cbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBDaGVjayBmb3IgQ291cnNlIENoYW1waW9uIGJhZGdlIGZvciBzdHVkZW50XG4gICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdDb3Vyc2UgQ2hhbXBpb24nXG4gICAgYFxuXG4gICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgIGBcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgdGVhY2hlciBiYWRnZXNcbiAgICBpZiAodGVhY2hlcklkKSB7XG4gICAgICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gYXdhaXQgc3FsYFxuICAgICAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnRcbiAgICAgICAgRlJPTSBlbnJvbGxtZW50cyBlXG4gICAgICAgIEpPSU4gY291cnNlcyBjIE9OIGUuY291cnNlX2lkID0gYy5pZFxuICAgICAgICBXSEVSRSBjLnRlYWNoZXJfaWQgPSAke3RlYWNoZXJJZH0gQU5EIGUuc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgICAgIGBcblxuICAgICAgY29uc3QgY29tcGxldGlvbkNvdW50ID0gdG90YWxDb21wbGV0aW9uc1swXS5jb3VudFxuXG4gICAgICAvLyBFZmZlY3RpdmUgVGVhY2hlciAoNSBjb21wbGV0aW9ucylcbiAgICAgIGlmIChjb21wbGV0aW9uQ291bnQgPj0gNSkge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdFZmZlY3RpdmUgVGVhY2hlcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3RlYWNoZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNYXN0ZXIgRWR1Y2F0b3IgKDIwIGNvbXBsZXRpb25zKVxuICAgICAgaWYgKGNvbXBsZXRpb25Db3VudCA+PSAyMCkge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdNYXN0ZXIgRWR1Y2F0b3InXG4gICAgICAgIGBcblxuICAgICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICAgIFZBTFVFUyAoJHt0ZWFjaGVySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB1c2VyIGxldmVsIGJhc2VkIG9uIHBvaW50c1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckxldmVsKHVzZXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBwb2ludHMsIGxldmVsIEZST00gdXNlcnMgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgYFxuXG4gIGlmICh1c2VyRGF0YS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGNvbnN0IHsgcG9pbnRzLCBsZXZlbCB9ID0gdXNlckRhdGFbMF1cblxuICAvLyBMZXZlbCBjYWxjdWxhdGlvbjogbGV2ZWwgPSBmbG9vcihwb2ludHMgLyAxMDApICsgMVxuICBjb25zdCBuZXdMZXZlbCA9IE1hdGguZmxvb3IocG9pbnRzIC8gMTAwKSArIDFcblxuICBpZiAobmV3TGV2ZWwgPiBsZXZlbCkge1xuICAgIGF3YWl0IHNxbGBcbiAgICAgIFVQREFURSB1c2VycyBTRVQgbGV2ZWwgPSAke25ld0xldmVsfSBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIC8vIEF3YXJkIGFjaGlldmVtZW50IGZvciBsZXZlbGluZyB1cFxuICAgIGF3YWl0IHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIGFjaGlldmVtZW50cyAodXNlcl9pZCwgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb2ludHNfZWFybmVkKVxuICAgICAgVkFMVUVTIChcbiAgICAgICAgJHt1c2VySWR9LCBcbiAgICAgICAgJ2xldmVsX3VwJywgXG4gICAgICAgICdMZXZlbCBVcCEnLFxuICAgICAgICAke2BSZWFjaGVkIGxldmVsICR7bmV3TGV2ZWx9YH0sXG4gICAgICAgIDEwXG4gICAgICApXG4gICAgYFxuXG4gICAgLy8gQ2hlY2sgZm9yIGxldmVsLWJhc2VkIGJhZGdlc1xuICAgIGlmIChuZXdMZXZlbCA9PT0gNSkge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnUmlzaW5nIFN0YXInYFxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xldmVsID09PSAxMCkge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnT3ZlcmFjaGlldmVyJ2BcbiAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgYFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHN0cmVha1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3RyZWFrKHVzZXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuXG4gIGNvbnN0IHN0cmVha0RhdGEgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUICogRlJPTSB1c2VyX3N0cmVha3MgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICBgXG5cbiAgaWYgKHN0cmVha0RhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gQ3JlYXRlIG5ldyBzdHJlYWtcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyB1c2VyX3N0cmVha3MgKHVzZXJfaWQsIGN1cnJlbnRfc3RyZWFrLCBsb25nZXN0X3N0cmVhaywgbGFzdF9hY3Rpdml0eV9kYXRlKVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sIDEsIDEsICR7dG9kYXl9KVxuICAgIGBcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdHJlYWsgPSBzdHJlYWtEYXRhWzBdXG4gICAgY29uc3QgbGFzdERhdGUgPSBzdHJlYWsubGFzdF9hY3Rpdml0eV9kYXRlXG5cbiAgICBpZiAobGFzdERhdGUgPT09IHRvZGF5KSB7XG4gICAgICAvLyBBbHJlYWR5IHVwZGF0ZWQgdG9kYXlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKClcbiAgICB5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSlcbiAgICBjb25zdCB5ZXN0ZXJkYXlTdHIgPSB5ZXN0ZXJkYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF1cblxuICAgIGlmIChsYXN0RGF0ZSA9PT0geWVzdGVyZGF5U3RyKSB7XG4gICAgICAvLyBDb250aW51aW5nIHN0cmVha1xuICAgICAgY29uc3QgbmV3U3RyZWFrID0gc3RyZWFrLmN1cnJlbnRfc3RyZWFrICsgMVxuICAgICAgY29uc3QgbG9uZ2VzdFN0cmVhayA9IE1hdGgubWF4KG5ld1N0cmVhaywgc3RyZWFrLmxvbmdlc3Rfc3RyZWFrKVxuXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VyX3N0cmVha3MgXG4gICAgICAgIFNFVCBjdXJyZW50X3N0cmVhayA9ICR7bmV3U3RyZWFrfSxcbiAgICAgICAgICAgIGxvbmdlc3Rfc3RyZWFrID0gJHtsb25nZXN0U3RyZWFrfSxcbiAgICAgICAgICAgIGxhc3RfYWN0aXZpdHlfZGF0ZSA9ICR7dG9kYXl9LFxuICAgICAgICAgICAgdXBkYXRlZF9hdCA9IE5PVygpXG4gICAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH1cbiAgICAgIGBcblxuICAgICAgLy8gQ2hlY2sgZm9yIHN0cmVhayBiYWRnZXNcbiAgICAgIGlmIChuZXdTdHJlYWsgPT09IDcpIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnRGVkaWNhdGVkIExlYXJuZXInYFxuICAgICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyZWFrIGJyb2tlbiwgcmVzZXQgdG8gMVxuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcl9zdHJlYWtzIFxuICAgICAgICBTRVQgY3VycmVudF9zdHJlYWsgPSAxLFxuICAgICAgICAgICAgbGFzdF9hY3Rpdml0eV9kYXRlID0gJHt0b2RheX0sXG4gICAgICAgICAgICB1cGRhdGVkX2F0ID0gTk9XKClcbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICAgICAgYFxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIGRhaWx5IGNoYWxsZW5nZSBwcm9ncmVzc1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlDaGFsbGVuZ2VQcm9ncmVzcyh1c2VySWQ6IG51bWJlciwgY2hhbGxlbmdlVHlwZTogc3RyaW5nLCBpbmNyZW1lbnQ6IG51bWJlcikge1xuICAvLyBHZXQgYWN0aXZlIGNoYWxsZW5nZXMgb2YgdGhpcyB0eXBlXG4gIGNvbnN0IGNoYWxsZW5nZXMgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIGlkLCB0YXJnZXRfdmFsdWUgXG4gICAgRlJPTSBkYWlseV9jaGFsbGVuZ2VzXG4gICAgV0hFUkUgY2hhbGxlbmdlX3R5cGUgPSAke2NoYWxsZW5nZVR5cGV9XG4gICAgICBBTkQgc3RhcnRfZGF0ZSA8PSBDVVJSRU5UX0RBVEUgXG4gICAgICBBTkQgZW5kX2RhdGUgPj0gQ1VSUkVOVF9EQVRFXG4gIGBcblxuICBmb3IgKGNvbnN0IGNoYWxsZW5nZSBvZiBjaGFsbGVuZ2VzKSB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgcHJvZ3Jlc3MgZW50cnlcbiAgICBjb25zdCBwcm9ncmVzcyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gdXNlcl9kYWlseV9jaGFsbGVuZ2VzXG4gICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBjaGFsbGVuZ2VfaWQgPSAke2NoYWxsZW5nZS5pZH1cbiAgICBgXG5cbiAgICBpZiAocHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBDcmVhdGUgbmV3IHByb2dyZXNzIGVudHJ5XG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGluY3JlbWVudFxuICAgICAgY29uc3QgY29tcGxldGVkID0gbmV3UHJvZ3Jlc3MgPj0gY2hhbGxlbmdlLnRhcmdldF92YWx1ZVxuXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIElOU0VSVCBJTlRPIHVzZXJfZGFpbHlfY2hhbGxlbmdlcyAodXNlcl9pZCwgY2hhbGxlbmdlX2lkLCBwcm9ncmVzcywgY29tcGxldGVkLCBjb21wbGV0ZWRfYXQpXG4gICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2NoYWxsZW5nZS5pZH0sICR7bmV3UHJvZ3Jlc3N9LCAke2NvbXBsZXRlZH0sICR7Y29tcGxldGVkID8gXCJOT1coKVwiIDogbnVsbH0pXG4gICAgICBgXG5cbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgLy8gQXdhcmQgcG9pbnRzXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZURhdGEgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIHBvaW50c19yZXdhcmQgRlJPTSBkYWlseV9jaGFsbGVuZ2VzIFdIRVJFIGlkID0gJHtjaGFsbGVuZ2UuaWR9XG4gICAgICAgIGBcbiAgICAgICAgY29uc3QgcG9pbnRzUmV3YXJkID0gY2hhbGxlbmdlRGF0YVswXT8ucG9pbnRzX3Jld2FyZCB8fCAwXG5cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIFVQREFURSB1c2VycyBTRVQgcG9pbnRzID0gcG9pbnRzICsgJHtwb2ludHNSZXdhcmR9IFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwcm9ncmVzc1swXS5jb21wbGV0ZWQpIHtcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcm9ncmVzc1xuICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBwcm9ncmVzc1swXS5wcm9ncmVzcyArIGluY3JlbWVudFxuICAgICAgY29uc3QgY29tcGxldGVkID0gbmV3UHJvZ3Jlc3MgPj0gY2hhbGxlbmdlLnRhcmdldF92YWx1ZVxuXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VyX2RhaWx5X2NoYWxsZW5nZXNcbiAgICAgICAgU0VUIHByb2dyZXNzID0gJHtuZXdQcm9ncmVzc30sXG4gICAgICAgICAgICBjb21wbGV0ZWQgPSAke2NvbXBsZXRlZH0sXG4gICAgICAgICAgICBjb21wbGV0ZWRfYXQgPSAke2NvbXBsZXRlZCA/IFwiTk9XKClcIiA6IG51bGx9XG4gICAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNoYWxsZW5nZV9pZCA9ICR7Y2hhbGxlbmdlLmlkfVxuICAgICAgYFxuXG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIC8vIEF3YXJkIHBvaW50c1xuICAgICAgICBjb25zdCBjaGFsbGVuZ2VEYXRhID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBwb2ludHNfcmV3YXJkIEZST00gZGFpbHlfY2hhbGxlbmdlcyBXSEVSRSBpZCA9ICR7Y2hhbGxlbmdlLmlkfVxuICAgICAgICBgXG4gICAgICAgIGNvbnN0IHBvaW50c1Jld2FyZCA9IGNoYWxsZW5nZURhdGFbMF0/LnBvaW50c19yZXdhcmQgfHwgMFxuXG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBVUERBVEUgdXNlcnMgU0VUIHBvaW50cyA9IHBvaW50cyArICR7cG9pbnRzUmV3YXJkfSBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQTZuQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/quiz-component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizComponent",
    ()=>QuizComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$bebf70__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:bebf70 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function QuizComponent({ quiz, questions, userId, lessonId, courseId }) {
    _s();
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("quizId", quiz.id.toString());
        formData.append("userId", userId.toString());
        formData.append("lessonId", lessonId.toString());
        formData.append("courseId", courseId.toString());
        formData.append("answers", JSON.stringify(answers));
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$bebf70__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitQuiz"])(formData);
        setResult(response);
        setIsSubmitting(false);
    };
    const allAnswered = questions.every((q)=>answers[q.id]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: quiz.description
                    }, void 0, false, {
                        fileName: "[project]/components/quiz-component.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-6",
                children: !result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                        value: answers[question.id],
                                        onValueChange: (value)=>setAnswers({
                                                ...answers,
                                                [question.id]: value
                                            }),
                                        children: question.options.map((option, optionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                        value: option,
                                                        id: `q${question.id}-${optionIndex}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/quiz-component.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: result.passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-16 h-16 text-accent mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "Congratulations!"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "w-16 h-16 text-destructive mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "Keep Trying!"
                            }, void 0, false, {
                                fileName: "[project]/components/quiz-component.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(QuizComponent, "F2WvlP9tu69ZlxPyBnG9jhK8DwA=");
_c = QuizComponent;
var _c;
__turbopack_context__.k.register(_c, "QuizComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:fb7419 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075":"completeLesson"},"app/actions/courses.ts",""] */ __turbopack_context__.s([
    "completeLesson",
    ()=>completeLesson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var completeLesson = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40005978500ad6a4948b9b1ae6a3ad2ad1c60a2075", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "completeLesson"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY291cnNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHNxbCBmcm9tIFwiQC9saWIvZGJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyB3cml0ZUZpbGUsIG1rZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSBcImNyeXB0b1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2UoZm9ybURhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGRpZmZpY3VsdHk6IHN0cmluZ1xuICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgdGh1bWJuYWlsX3VybD86IHN0cmluZ1xuICB0ZWFjaGVyX2lkOiBudW1iZXIgfCBzdHJpbmdcbiAgaXNfcHVibGlzaGVkOiBib29sZWFuXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gY291cnNlcyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkaWZmaWN1bHR5LCBwb2ludHNfcmV3YXJkLCB0aHVtYm5haWxfdXJsLCB0ZWFjaGVyX2lkLCBpc19wdWJsaXNoZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkLnRvU3RyaW5nKCkpfSxcbiAgICAgICAgJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICApXG4gICAgICBSRVRVUk5JTkcgaWRcbiAgICBgXG5cbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlc3VsdFswXS5pZFxuXG4gICAgLy8gQ3JlYXRlIG1vZHVsZXNcbiAgICBjb25zdCBtb2R1bGVzID0gW1xuICAgICAgeyB0aXRsZTogJ0NvdXJzZSBJbnRyb2R1Y3Rpb24nLCBkZXNjcmlwdGlvbjogJ0dldCBzdGFydGVkIHdpdGggdGhpcyBjb3Vyc2UgYW5kIHVuZGVyc3RhbmQgd2hhdCB5b3Ugd2lsbCBsZWFybicsIG9yZGVyX2luZGV4OiAxIH0sXG4gICAgICB7IHRpdGxlOiAnQ29yZSBDb25jZXB0cycsIGRlc2NyaXB0aW9uOiAnTGVhcm4gdGhlIGZ1bmRhbWVudGFsIGNvbmNlcHRzIGFuZCBwcmluY2lwbGVzJywgb3JkZXJfaW5kZXg6IDIgfSxcbiAgICAgIHsgdGl0bGU6ICdQcmFjdGljYWwgQXBwbGljYXRpb24nLCBkZXNjcmlwdGlvbjogJ0FwcGx5IHdoYXQgeW91IGhhdmUgbGVhcm5lZCB0aHJvdWdoIGhhbmRzLW9uIGV4ZXJjaXNlcycsIG9yZGVyX2luZGV4OiAzIH0sXG4gICAgICB7IHRpdGxlOiAnQWR2YW5jZWQgVG9waWNzJywgZGVzY3JpcHRpb246ICdFeHBsb3JlIGFkdmFuY2VkIGNvbmNlcHRzIGFuZCBiZXN0IHByYWN0aWNlcycsIG9yZGVyX2luZGV4OiA0IH1cbiAgICBdXG5cbiAgICBjb25zdCBtb2R1bGVJZHMgPSBbXVxuICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgIGNvbnN0IG1vZHVsZVJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gbW9kdWxlcyAoY291cnNlX2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yZGVyX2luZGV4KVxuICAgICAgICBWQUxVRVMgKCR7Y291cnNlSWR9LCAke21vZHVsZS50aXRsZX0sICR7bW9kdWxlLmRlc2NyaXB0aW9ufSwgJHttb2R1bGUub3JkZXJfaW5kZXh9KVxuICAgICAgICBSRVRVUk5JTkcgaWRcbiAgICAgIGBcbiAgICAgIG1vZHVsZUlkcy5wdXNoKG1vZHVsZVJlc3VsdFswXS5pZClcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbGVzc29ucyBmb3IgZWFjaCBtb2R1bGVcbiAgICBjb25zdCBsZXNzb25zID0gW1xuICAgICAgLy8gTW9kdWxlIDE6IEludHJvZHVjdGlvblxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIHRoZSBDb3Vyc2UnLFxuICAgICAgICAgIGNvbnRlbnQ6IGBXZWxjb21lIHRvICR7Zm9ybURhdGEudGl0bGV9IVxuXG5UaGlzIGNvdXJzZSB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBlc3NlbnRpYWwgY29uY2VwdHMgYW5kIHNraWxscyB5b3UgbmVlZCB0byBzdWNjZWVkLiBCeSB0aGUgZW5kIG9mIHRoaXMgY291cnNlLCB5b3Ugd2lsbCBoYXZlIGEgc29saWQgdW5kZXJzdGFuZGluZyBvZiB0aGUgdG9waWMgYW5kIGJlIGFibGUgdG8gYXBwbHkgd2hhdCB5b3UndmUgbGVhcm5lZC5cblxuV2hhdCB5b3Ugd2lsbCBsZWFybjpcbi0gRnVuZGFtZW50YWwgY29uY2VwdHMgYW5kIHByaW5jaXBsZXNcbi0gUHJhY3RpY2FsIGFwcGxpY2F0aW9ucyBhbmQgZXhhbXBsZXNcbi0gQmVzdCBwcmFjdGljZXMgYW5kIGNvbW1vbiBwYXR0ZXJuc1xuLSBIYW5kcy1vbiBleGVyY2lzZXMgYW5kIHByb2plY3RzXG5cbkxldCdzIGdldCBzdGFydGVkIG9uIHRoaXMgbGVhcm5pbmcgam91cm5leSFgLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnQ291cnNlIE92ZXJ2aWV3IGFuZCBPYmplY3RpdmVzJyxcbiAgICAgICAgICBjb250ZW50OiBgSW4gdGhpcyBsZXNzb24sIHdlIHdpbGwgZXhwbG9yZTpcblxu4oCiIFRoZSBtYWluIHRvcGljcyBjb3ZlcmVkIGluIHRoaXMgY291cnNlXG7igKIgTGVhcm5pbmcgb2JqZWN0aXZlcyBhbmQgb3V0Y29tZXNcbuKAoiBQcmVyZXF1aXNpdGVzIGFuZCByZXF1aXJlbWVudHNcbuKAoiBDb3Vyc2Ugc3RydWN0dXJlIGFuZCBwcm9ncmVzc2lvblxu4oCiIEFzc2Vzc21lbnQgbWV0aG9kcyBhbmQgZ3JhZGluZyBjcml0ZXJpYVxuXG5VbmRlcnN0YW5kaW5nIHRoZXNlIGVsZW1lbnRzIHdpbGwgaGVscCB5b3UgbWFrZSB0aGUgbW9zdCBvZiB5b3VyIGxlYXJuaW5nIGV4cGVyaWVuY2UuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMjogQ29yZSBDb25jZXB0c1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdGdW5kYW1lbnRhbCBQcmluY2lwbGVzJyxcbiAgICAgICAgICBjb250ZW50OiBgTGV0J3MgZGl2ZSBpbnRvIHRoZSBjb3JlIHByaW5jaXBsZXMgdGhhdCBmb3JtIHRoZSBmb3VuZGF0aW9uIG9mIHRoaXMgc3ViamVjdC5cblxuS2V5IGNvbmNlcHRzIGNvdmVyZWQ6XG7igKIgQmFzaWMgdGVybWlub2xvZ3kgYW5kIGRlZmluaXRpb25zXG7igKIgQ29yZSBwcmluY2lwbGVzIGFuZCB0aGVvcmllc1xu4oCiIEZ1bmRhbWVudGFsIHJlbGF0aW9uc2hpcHMgYW5kIGRlcGVuZGVuY2llc1xu4oCiIENvbW1vbiBwYXR0ZXJucyBhbmQgc3RydWN0dXJlc1xuXG5UaGVzZSBmb3VuZGF0aW9uYWwgY29uY2VwdHMgd2lsbCBiZSByZWZlcmVuY2VkIHRocm91Z2hvdXQgdGhlIGNvdXJzZS5gLFxuICAgICAgICAgIHBvaW50c19yZXdhcmQ6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnRXNzZW50aWFsIENvbmNlcHRzJyxcbiAgICAgICAgICBjb250ZW50OiBgQnVpbGRpbmcgb24gdGhlIGZ1bmRhbWVudGFscywgdGhpcyBsZXNzb24gY292ZXJzIGVzc2VudGlhbCBjb25jZXB0cyB0aGF0IGFyZSBjcml0aWNhbCB0byB1bmRlcnN0YW5kaW5nIHRoZSBzdWJqZWN0LlxuXG5Ub3BpY3MgaW5jbHVkZTpcbuKAoiBLZXkgZnJhbWV3b3JrcyBhbmQgbW9kZWxzXG7igKIgSW1wb3J0YW50IHJlbGF0aW9uc2hpcHMgYW5kIGludGVyYWN0aW9uc1xu4oCiIENyaXRpY2FsIHRoaW5raW5nIGFwcHJvYWNoZXNcbuKAoiBQcm9ibGVtLXNvbHZpbmcgbWV0aG9kb2xvZ2llc1xuXG5NYXN0ZXJpbmcgdGhlc2UgY29uY2VwdHMgd2lsbCBnaXZlIHlvdSBhIHN0cm9uZyBmb3VuZGF0aW9uIGZvciBhZHZhbmNlZCB0b3BpY3MuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBNb2R1bGUgMzogUHJhY3RpY2FsIEFwcGxpY2F0aW9uXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0hhbmRzLW9uIFByYWN0aWNlJyxcbiAgICAgICAgICBjb250ZW50OiBgTm93IGl0J3MgdGltZSB0byBhcHBseSB3aGF0IHlvdSd2ZSBsZWFybmVkIHRocm91Z2ggcHJhY3RpY2FsIGV4ZXJjaXNlcy5cblxuSW4gdGhpcyBsZXNzb24sIHlvdSB3aWxsOlxu4oCiIFdvcmsgdGhyb3VnaCBndWlkZWQgZXhhbXBsZXNcbuKAoiBDb21wbGV0ZSBpbnRlcmFjdGl2ZSBleGVyY2lzZXNcbuKAoiBBcHBseSBjb25jZXB0cyB0byByZWFsLXdvcmxkIHNjZW5hcmlvc1xu4oCiIFJlY2VpdmUgaW1tZWRpYXRlIGZlZWRiYWNrIG9uIHlvdXIgd29ya1xuXG5QcmFjdGljZSBpcyBlc3NlbnRpYWwgZm9yIHJlaW5mb3JjaW5nIGxlYXJuaW5nIGFuZCBidWlsZGluZyBjb25maWRlbmNlLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnUHJvamVjdCBXb3JrJyxcbiAgICAgICAgICBjb250ZW50OiBgVGhpcyBsZXNzb24gZm9jdXNlcyBvbiBhcHBseWluZyB5b3VyIGtub3dsZWRnZSB0byBhIGNvbXByZWhlbnNpdmUgcHJvamVjdC5cblxuUHJvamVjdCBjb21wb25lbnRzOlxu4oCiIFBsYW5uaW5nIGFuZCBkZXNpZ24gcGhhc2VcbuKAoiBJbXBsZW1lbnRhdGlvbiBhbmQgZGV2ZWxvcG1lbnRcbuKAoiBUZXN0aW5nIGFuZCB2YWxpZGF0aW9uXG7igKIgRG9jdW1lbnRhdGlvbiBhbmQgcHJlc2VudGF0aW9uXG5cbkNvbXBsZXRpbmcgdGhpcyBwcm9qZWN0IHdpbGwgZGVtb25zdHJhdGUgeW91ciBtYXN0ZXJ5IG9mIHRoZSBjb3Vyc2UgbWF0ZXJpYWwuYCxcbiAgICAgICAgICBwb2ludHNfcmV3YXJkOiAxMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy8gTW9kdWxlIDQ6IEFkdmFuY2VkIFRvcGljc1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdBZHZhbmNlZCBDb25jZXB0cycsXG4gICAgICAgICAgY29udGVudDogYEV4cGxvcmUgYWR2YW5jZWQgdG9waWNzIGFuZCBjdXR0aW5nLWVkZ2UgZGV2ZWxvcG1lbnRzIGluIHRoZSBmaWVsZC5cblxuQWR2YW5jZWQgdG9waWNzIGNvdmVyZWQ6XG7igKIgRW1lcmdpbmcgdHJlbmRzIGFuZCB0ZWNobm9sb2dpZXNcbuKAoiBDb21wbGV4IHByb2JsZW0tc29sdmluZyBzY2VuYXJpb3NcbuKAoiBJbnRlZ3JhdGlvbiB3aXRoIG90aGVyIHN5c3RlbXNcbuKAoiBGdXR1cmUgZGlyZWN0aW9ucyBhbmQgcG9zc2liaWxpdGllc1xuXG5UaGVzZSBhZHZhbmNlZCBjb25jZXB0cyB3aWxsIHByZXBhcmUgeW91IGZvciBwcm9mZXNzaW9uYWwgYXBwbGljYXRpb25zLmAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdCZXN0IFByYWN0aWNlcyBhbmQgTmV4dCBTdGVwcycsXG4gICAgICAgICAgY29udGVudDogYFRoaXMgZmluYWwgbGVzc29uIGNvdmVycyBiZXN0IHByYWN0aWNlcyBhbmQgcHJvdmlkZXMgZ3VpZGFuY2UgZm9yIGNvbnRpbnVlZCBsZWFybmluZy5cblxuVG9waWNzIGluY2x1ZGU6XG7igKIgSW5kdXN0cnkgYmVzdCBwcmFjdGljZXMgYW5kIHN0YW5kYXJkc1xu4oCiIENvbW1vbiBwaXRmYWxscyBhbmQgaG93IHRvIGF2b2lkIHRoZW1cbuKAoiBSZXNvdXJjZXMgZm9yIGZ1cnRoZXIgbGVhcm5pbmdcbuKAoiBDYXJlZXIgYXBwbGljYXRpb25zIGFuZCBvcHBvcnR1bml0aWVzXG7igKIgU3RheWluZyBjdXJyZW50IHdpdGggZGV2ZWxvcG1lbnRzXG5cbkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIHRoaXMgY291cnNlIWAsXG4gICAgICAgICAgcG9pbnRzX3Jld2FyZDogNVxuICAgICAgICB9XG4gICAgICBdXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXNzb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb2R1bGVMZXNzb25zID0gbGVzc29uc1tpXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2R1bGVMZXNzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGxlc3NvbiA9IG1vZHVsZUxlc3NvbnNbal1cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIGxlc3NvbnMgKG1vZHVsZV9pZCwgdGl0bGUsIGNvbnRlbnQsIHZpZGVvX3VybCwgb3JkZXJfaW5kZXgsIHBvaW50c19yZXdhcmQpXG4gICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICR7bW9kdWxlSWRzW2ldfSxcbiAgICAgICAgICAgICR7bGVzc29uLnRpdGxlfSxcbiAgICAgICAgICAgICR7bGVzc29uLmNvbnRlbnR9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICR7aiArIDF9LFxuICAgICAgICAgICAgJHtsZXNzb24ucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcXVpenplcyBmb3IgbW9kdWxlcyAob25lIHF1aXogcGVyIG1vZHVsZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbW9kdWxlSWQgPSBtb2R1bGVJZHNbaV1cbiAgICAgIGNvbnN0IHF1aXpSZXN1bHQgPSBhd2FpdCBzcWxgXG4gICAgICAgIElOU0VSVCBJTlRPIHF1aXp6ZXMgKG1vZHVsZV9pZCwgdGl0bGUsIHBhc3Npbmdfc2NvcmUsIHBvaW50c19yZXdhcmQpXG4gICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgJHttb2R1bGVJZH0sXG4gICAgICAgICAgJ01vZHVsZSAke2kgKyAxfSBBc3Nlc3NtZW50JyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMFxuICAgICAgICApXG4gICAgICAgIFJFVFVSTklORyBpZFxuICAgICAgYFxuXG4gICAgICBjb25zdCBxdWl6SWQgPSBxdWl6UmVzdWx0WzBdLmlkXG5cbiAgICAgIC8vIEFkZCBzYW1wbGUgcXVlc3Rpb25zXG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIG1haW4gY29uY2VwdCBjb3ZlcmVkIGluIHRoaXMgbW9kdWxlPycsXG4gICAgICAgICAgb3B0aW9uczogJ1tcIkNvcmUgcHJpbmNpcGxlc1wiLCBcIkFkdmFuY2VkIHRvcGljc1wiLCBcIlByYWN0aWNhbCBhcHBsaWNhdGlvblwiLCBcIkludHJvZHVjdGlvblwiXScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdDb3JlIHByaW5jaXBsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ1doaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgYSBrZXkgbGVhcm5pbmcgb2JqZWN0aXZlPycsXG4gICAgICAgICAgb3B0aW9uczogJ1tcIlVuZGVyc3RhbmRpbmcgZnVuZGFtZW50YWxzXCIsIFwiTWVtb3JpemluZyBmYWN0c1wiLCBcIkZvbGxvd2luZyBpbnN0cnVjdGlvbnNcIiwgXCJDb21wbGV0aW5nIGFzc2lnbm1lbnRzXCJdJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1VuZGVyc3RhbmRpbmcgZnVuZGFtZW50YWxzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcXVlc3Rpb246ICdXaGF0IHNob3VsZCB5b3UgZG8gdG8gbWFzdGVyIHRoZSBtYXRlcmlhbD8nLFxuICAgICAgICAgIG9wdGlvbnM6ICdbXCJQcmFjdGljZSByZWd1bGFybHlcIiwgXCJTa2lwIGV4ZXJjaXNlc1wiLCBcIk9ubHkgcmVhZCBjb250ZW50XCIsIFwiTWVtb3JpemUgYW5zd2Vyc1wiXScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdQcmFjdGljZSByZWd1bGFybHknXG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgICAgZm9yIChsZXQgcSA9IDA7IHEgPCBxdWVzdGlvbnMubGVuZ3RoOyBxKyspIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXpfcXVlc3Rpb25zIChxdWl6X2lkLCBxdWVzdGlvbiwgb3B0aW9ucywgY29ycmVjdF9hbnN3ZXIsIG9yZGVyX2luZGV4KVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke3F1aXpJZH0sXG4gICAgICAgICAgICAke3F1ZXN0aW9uc1txXS5xdWVzdGlvbn0sXG4gICAgICAgICAgICAke3F1ZXN0aW9uc1txXS5vcHRpb25zfSxcbiAgICAgICAgICAgICR7cXVlc3Rpb25zW3FdLmNvcnJlY3RfYW5zd2VyfSxcbiAgICAgICAgICAgICR7cSArIDF9XG4gICAgICAgICAgKVxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vY291cnNlc1wiKVxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3R1dG9yXCIpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291cnNlSWQgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbdjBdIENyZWF0ZSBjb3Vyc2UgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlKGNvdXJzZUlkOiBudW1iZXIsIGZvcm1EYXRhOiB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBkaWZmaWN1bHR5OiBzdHJpbmdcbiAgcG9pbnRzX3Jld2FyZDogbnVtYmVyXG4gIHRodW1ibmFpbF91cmw/OiBzdHJpbmdcbiAgdGVhY2hlcl9pZDogbnVtYmVyIHwgc3RyaW5nXG4gIGlzX3B1Ymxpc2hlZDogYm9vbGVhblxufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHNxbGBcbiAgICAgIFVQREFURSBjb3Vyc2VzXG4gICAgICBTRVQgdGl0bGUgPSAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9ICR7Zm9ybURhdGEuZGVzY3JpcHRpb259LFxuICAgICAgICAgIGRpZmZpY3VsdHkgPSAke2Zvcm1EYXRhLmRpZmZpY3VsdHl9LFxuICAgICAgICAgIHBvaW50c19yZXdhcmQgPSAke2Zvcm1EYXRhLnBvaW50c19yZXdhcmR9LFxuICAgICAgICAgIHRodW1ibmFpbF91cmwgPSAke2Zvcm1EYXRhLnRodW1ibmFpbF91cmwgfHwgbnVsbH0sXG4gICAgICAgICAgdGVhY2hlcl9pZCA9ICR7cGFyc2VJbnQoZm9ybURhdGEudGVhY2hlcl9pZC50b1N0cmluZygpKX0sXG4gICAgICAgICAgaXNfcHVibGlzaGVkID0gJHtmb3JtRGF0YS5pc19wdWJsaXNoZWR9XG4gICAgICBXSEVSRSBpZCA9ICR7Y291cnNlSWR9XG4gICAgYFxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vY291cnNlc1wiKVxuICAgIHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vY291cnNlcy8ke2NvdXJzZUlkfS9lZGl0YClcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBVcGRhdGUgY291cnNlIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVucm9sbEluQ291cnNlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBjb3Vyc2VJZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJjb3Vyc2VJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IHVzZXJJZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJ1c2VySWRcIikgYXMgc3RyaW5nKVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gZW5yb2xsbWVudHMgKHVzZXJfaWQsIGNvdXJzZV9pZClcbiAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2NvdXJzZUlkfSlcbiAgICBgXG5cbiAgICAvLyBBd2FyZCBhY2hpZXZlbWVudCB0byBzdHVkZW50XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke3VzZXJJZH0sXG4gICAgICAgICdjb3Vyc2VfZW5yb2xsZWQnLFxuICAgICAgICAnTmV3IENvdXJzZSBFbnJvbGxlZCcsXG4gICAgICAgICdTdGFydGVkIGEgbmV3IGxlYXJuaW5nIGpvdXJuZXknLFxuICAgICAgICA1XG4gICAgICApXG4gICAgYFxuXG4gICAgLy8gVXBkYXRlIHN0dWRlbnQgcG9pbnRzXG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIHVzZXJzXG4gICAgICBTRVQgcG9pbnRzID0gcG9pbnRzICsgNVxuICAgICAgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICBgXG5cbiAgICAvLyBDaGVjayBmb3IgS25vd2xlZGdlIFNlZWtlciBiYWRnZSBmb3Igc3R1ZGVudFxuICAgIGNvbnN0IGVucm9sbG1lbnRDb3VudCA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCBDT1VOVChESVNUSU5DVCBjb3Vyc2VfaWQpIGFzIGNvdW50IEZST00gZW5yb2xsbWVudHMgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIGlmIChlbnJvbGxtZW50Q291bnRbMF0uY291bnQgPj0gMykge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ0tub3dsZWRnZSBTZWVrZXInXG4gICAgICBgXG5cbiAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgYFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBQb3B1bGFyIFRlYWNoZXIgYmFkZ2VcbiAgICBjb25zdCB0ZWFjaGVyRGF0YSA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCB0ZWFjaGVyX2lkIEZST00gY291cnNlcyBXSEVSRSBpZCA9ICR7Y291cnNlSWR9XG4gICAgYFxuXG4gICAgaWYgKHRlYWNoZXJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRlYWNoZXJJZCA9IHRlYWNoZXJEYXRhWzBdLnRlYWNoZXJfaWRcblxuICAgICAgY29uc3QgdG90YWxFbnJvbGxtZW50cyA9IGF3YWl0IHNxbGBcbiAgICAgICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50XG4gICAgICAgIEZST00gZW5yb2xsbWVudHMgZVxuICAgICAgICBKT0lOIGNvdXJzZXMgYyBPTiBlLmNvdXJzZV9pZCA9IGMuaWRcbiAgICAgICAgV0hFUkUgYy50ZWFjaGVyX2lkID0gJHt0ZWFjaGVySWR9XG4gICAgICBgXG5cbiAgICAgIGlmICh0b3RhbEVucm9sbG1lbnRzWzBdLmNvdW50ID49IDEwKSB7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBpZCBGUk9NIGJhZGdlcyBXSEVSRSBuYW1lID0gJ1BvcHVsYXIgVGVhY2hlcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3RlYWNoZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfWApXG4gICAgcmVkaXJlY3QoYC9jb3Vyc2VzLyR7Y291cnNlSWR9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBFbnJvbGxtZW50IGVycm9yOlwiLCBlcnJvcilcbiAgfVxuXG4gIHJldmFsaWRhdGVQYXRoKGAvY291cnNlcy8ke2NvdXJzZUlkfWApXG4gIHJlZGlyZWN0KGAvY291cnNlcy8ke2NvdXJzZUlkfWApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRDb3Vyc2VUaHVtYm5haWwoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInRodW1ibmFpbFwiKSBhcyBGaWxlXG5cbiAgICBpZiAoIWZpbGUgfHwgZmlsZS5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiTm8gZmlsZSBwcm92aWRlZFwiIH1cbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcbiAgICBpZiAoIWZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBtdXN0IGJlIGFuIGltYWdlXCIgfVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDVNQilcbiAgICBpZiAoZmlsZS5zaXplID4gNSAqIDEwMjQgKiAxMDI0KSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmlsZSBzaXplIG11c3QgYmUgbGVzcyB0aGFuIDVNQlwiIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSB1bmlxdWUgZmlsZW5hbWVcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKVxuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7cmFuZG9tVVVJRCgpfS4ke2ZpbGVFeHRlbnNpb259YFxuXG4gICAgLy8gQ3JlYXRlIHVwbG9hZHMgZGlyZWN0b3J5IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBjb25zdCB1cGxvYWRzRGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBcInVwbG9hZHNcIiwgXCJjb3Vyc2VzXCIpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG1rZGlyKHVwbG9hZHNEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIERpcmVjdG9yeSBtaWdodCBhbHJlYWR5IGV4aXN0XG4gICAgfVxuXG4gICAgLy8gU2F2ZSBmaWxlXG4gICAgY29uc3QgZmlsZVBhdGggPSBqb2luKHVwbG9hZHNEaXIsIGZpbGVOYW1lKVxuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpXG4gICAgYXdhaXQgd3JpdGVGaWxlKGZpbGVQYXRoLCBidWZmZXIpXG5cbiAgICAvLyBSZXR1cm4gdGhlIHB1YmxpYyBVUkxcbiAgICBjb25zdCBwdWJsaWNVcmwgPSBgL3VwbG9hZHMvY291cnNlcy8ke2ZpbGVOYW1lfWBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cmw6IHB1YmxpY1VybCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gVXBsb2FkIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwbG9hZCBmaWxlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2VXaXRoQ29udGVudChmb3JtRGF0YToge1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgZGlmZmljdWx0eTogc3RyaW5nXG4gIHBvaW50c19yZXdhcmQ6IG51bWJlclxuICB0aHVtYm5haWxfdXJsPzogc3RyaW5nXG4gIHRlYWNoZXJfaWQ6IHN0cmluZ1xuICBpc19wdWJsaXNoZWQ6IGJvb2xlYW5cbiAgbW9kdWxlczogQXJyYXk8e1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgbGVzc29uczogQXJyYXk8e1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgY29udGVudDogc3RyaW5nXG4gICAgICBwb2ludHNfcmV3YXJkOiBudW1iZXJcbiAgICB9PlxuICAgIHF1aXo/OiB7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgICBwYXNzaW5nX3Njb3JlOiBudW1iZXJcbiAgICAgIHBvaW50c19yZXdhcmQ6IG51bWJlclxuICAgICAgcXVlc3Rpb25zOiBBcnJheTx7XG4gICAgICAgIHF1ZXN0aW9uOiBzdHJpbmdcbiAgICAgICAgYW5zd2Vyczogc3RyaW5nW11cbiAgICAgICAgY29ycmVjdF9hbnN3ZXJfaW5kZXg6IG51bWJlclxuICAgICAgfT5cbiAgICB9XG4gIH0+XG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gY291cnNlcyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkaWZmaWN1bHR5LCBwb2ludHNfcmV3YXJkLCB0aHVtYm5haWxfdXJsLCB0ZWFjaGVyX2lkLCBpc19wdWJsaXNoZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke2Zvcm1EYXRhLnRpdGxlfSxcbiAgICAgICAgJHtmb3JtRGF0YS5kZXNjcmlwdGlvbn0sXG4gICAgICAgICR7Zm9ybURhdGEuZGlmZmljdWx0eX0sXG4gICAgICAgICR7Zm9ybURhdGEucG9pbnRzX3Jld2FyZH0sXG4gICAgICAgICR7Zm9ybURhdGEudGh1bWJuYWlsX3VybCB8fCBudWxsfSxcbiAgICAgICAgJHtwYXJzZUludChmb3JtRGF0YS50ZWFjaGVyX2lkKX0sXG4gICAgICAgICR7Zm9ybURhdGEuaXNfcHVibGlzaGVkfVxuICAgICAgKVxuICAgICAgUkVUVVJOSU5HIGlkXG4gICAgYFxuXG4gICAgY29uc3QgY291cnNlSWQgPSByZXN1bHRbMF0uaWRcblxuICAgIC8vIENyZWF0ZSBtb2R1bGVzIGFuZCB0aGVpciBjb250ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRGF0YS5tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb2R1bGUgPSBmb3JtRGF0YS5tb2R1bGVzW2ldXG5cbiAgICAgIGNvbnN0IG1vZHVsZVJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gbW9kdWxlcyAoY291cnNlX2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yZGVyX2luZGV4KVxuICAgICAgICBWQUxVRVMgKCR7Y291cnNlSWR9LCAke21vZHVsZS50aXRsZX0sICR7bW9kdWxlLmRlc2NyaXB0aW9ufSwgJHtpICsgMX0pXG4gICAgICAgIFJFVFVSTklORyBpZFxuICAgICAgYFxuXG4gICAgICBjb25zdCBtb2R1bGVJZCA9IG1vZHVsZVJlc3VsdFswXS5pZFxuXG4gICAgICAvLyBDcmVhdGUgbGVzc29uc1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb2R1bGUubGVzc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBsZXNzb24gPSBtb2R1bGUubGVzc29uc1tqXVxuXG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyBsZXNzb25zIChtb2R1bGVfaWQsIHRpdGxlLCBjb250ZW50LCB2aWRlb191cmwsIG9yZGVyX2luZGV4LCBwb2ludHNfcmV3YXJkKVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke21vZHVsZUlkfSxcbiAgICAgICAgICAgICR7bGVzc29uLnRpdGxlfSxcbiAgICAgICAgICAgICR7bGVzc29uLmNvbnRlbnR9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICR7aiArIDF9LFxuICAgICAgICAgICAgJHtsZXNzb24ucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgIGBcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHF1aXogaWYgcHJvdmlkZWQgYXQgbW9kdWxlIGxldmVsXG4gICAgICBpZiAobW9kdWxlLnF1aXopIHtcbiAgICAgICAgY29uc3QgcXVpelJlc3VsdCA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyBxdWl6emVzIChtb2R1bGVfaWQsIHRpdGxlLCBwYXNzaW5nX3Njb3JlLCBwb2ludHNfcmV3YXJkKVxuICAgICAgICAgIFZBTFVFUyAoXG4gICAgICAgICAgICAke21vZHVsZUlkfSxcbiAgICAgICAgICAgICR7bW9kdWxlLnF1aXoudGl0bGV9LFxuICAgICAgICAgICAgJHttb2R1bGUucXVpei5wYXNzaW5nX3Njb3JlfSxcbiAgICAgICAgICAgICR7bW9kdWxlLnF1aXoucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgICApXG4gICAgICAgICAgUkVUVVJOSU5HIGlkXG4gICAgICAgIGBcblxuICAgICAgICBjb25zdCBxdWl6SWQgPSBxdWl6UmVzdWx0WzBdLmlkXG5cbiAgICAgICAgLy8gQ3JlYXRlIHF1ZXN0aW9uc1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1vZHVsZS5xdWl6LnF1ZXN0aW9ucy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gbW9kdWxlLnF1aXoucXVlc3Rpb25zW2tdXG4gICAgICAgICAgY29uc3Qgb3B0aW9uc0pzb24gPSBKU09OLnN0cmluZ2lmeShxdWVzdGlvbi5hbnN3ZXJzKVxuICAgICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgcXVlc3Rpb24uY29ycmVjdF9hbnN3ZXJfaW5kZXgpIC8vIEEsIEIsIEMsIERcblxuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHF1aXpfcXVlc3Rpb25zIChxdWl6X2lkLCBxdWVzdGlvbiwgb3B0aW9ucywgY29ycmVjdF9hbnN3ZXIsIG9yZGVyX2luZGV4KVxuICAgICAgICAgICAgVkFMVUVTIChcbiAgICAgICAgICAgICAgJHtxdWl6SWR9LFxuICAgICAgICAgICAgICAke3F1ZXN0aW9uLnF1ZXN0aW9ufSxcbiAgICAgICAgICAgICAgJHtvcHRpb25zSnNvbn0sXG4gICAgICAgICAgICAgICR7Y29ycmVjdEFuc3dlcn0sXG4gICAgICAgICAgICAgICR7ayArIDF9XG4gICAgICAgICAgICApXG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdHV0b3JcIilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3Vyc2VJZCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gQ3JlYXRlIGNvdXJzZSB3aXRoIGNvbnRlbnQgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcGxldGVMZXNzb24oZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IGxlc3NvbklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImxlc3NvbklkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInVzZXJJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGNvdXJzZUlkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImNvdXJzZUlkXCIpIGFzIHN0cmluZylcblxuICB0cnkge1xuICAgIC8vIENoZWNrIGlmIGFscmVhZHkgY29tcGxldGVkXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgKiBGUk9NIGxlc3Nvbl9wcm9ncmVzc1xuICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgbGVzc29uX2lkID0gJHtsZXNzb25JZH1cbiAgICBgXG5cbiAgICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkFscmVhZHkgY29tcGxldGVkXCIgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgbGVzc29uIGFzIGNvbXBsZXRlXG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gbGVzc29uX3Byb2dyZXNzICh1c2VyX2lkLCBsZXNzb25faWQsIGNvbXBsZXRlZCwgY29tcGxldGVkX2F0KVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7bGVzc29uSWR9LCB0cnVlLCBOT1coKSlcbiAgICBgXG5cbiAgICAvLyBHZXQgbGVzc29uIHBvaW50c1xuICAgIGNvbnN0IGxlc3NvbnMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgcG9pbnRzX3Jld2FyZCBGUk9NIGxlc3NvbnMgV0hFUkUgaWQgPSAke2xlc3NvbklkfVxuICAgIGBcblxuICAgIGNvbnN0IHBvaW50c1Jld2FyZCA9IGxlc3NvbnNbMF0/LnBvaW50c19yZXdhcmQgfHwgNVxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHN0dWRlbnRcbiAgICBhd2FpdCBzcWxgXG4gICAgICBVUERBVEUgdXNlcnNcbiAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3BvaW50c1Jld2FyZH1cbiAgICAgIFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgYFxuXG4gICAgLy8gQXdhcmQgcG9pbnRzIHRvIHRlYWNoZXIgKDEgcG9pbnQgcGVyIGxlc3NvbiBjb21wbGV0aW9uKVxuICAgIGNvbnN0IHRlYWNoZXJEYXRhID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIGMudGVhY2hlcl9pZFxuICAgICAgRlJPTSBjb3Vyc2VzIGNcbiAgICAgIEpPSU4gbW9kdWxlcyBtIE9OIGMuaWQgPSBtLmNvdXJzZV9pZFxuICAgICAgSk9JTiBsZXNzb25zIGwgT04gbS5pZCA9IGwubW9kdWxlX2lkXG4gICAgICBXSEVSRSBsLmlkID0gJHtsZXNzb25JZH1cbiAgICBgXG5cbiAgICBpZiAodGVhY2hlckRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGVhY2hlcklkID0gdGVhY2hlckRhdGFbMF0udGVhY2hlcl9pZFxuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcnNcbiAgICAgICAgU0VUIHBvaW50cyA9IHBvaW50cyArIDFcbiAgICAgICAgV0hFUkUgaWQgPSAke3RlYWNoZXJJZH1cbiAgICAgIGBcbiAgICAgIGF3YWl0IHVwZGF0ZVVzZXJMZXZlbCh0ZWFjaGVySWQpXG4gICAgfVxuXG4gICAgYXdhaXQgdXBkYXRlVXNlckxldmVsKHVzZXJJZClcblxuICAgIGF3YWl0IHVwZGF0ZVN0cmVhayh1c2VySWQpXG5cbiAgICBhd2FpdCB1cGRhdGVEYWlseUNoYWxsZW5nZVByb2dyZXNzKHVzZXJJZCwgXCJsZXNzb25zX2NvbXBsZXRlZFwiLCAxKVxuXG4gICAgLy8gQ3JlYXRlIGFjaGlldmVtZW50IGZvciBzdHVkZW50XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gYWNoaWV2ZW1lbnRzICh1c2VyX2lkLCB0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvaW50c19lYXJuZWQpXG4gICAgICBWQUxVRVMgKFxuICAgICAgICAke3VzZXJJZH0sXG4gICAgICAgICdsZXNzb25fY29tcGxldGVkJyxcbiAgICAgICAgJ0xlc3NvbiBDb21wbGV0ZScsXG4gICAgICAgICdDb21wbGV0ZWQgYSBsZXNzb24nLFxuICAgICAgICAke3BvaW50c1Jld2FyZH1cbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIHNob3VsZCBnZXQgXCJGaXJzdCBTdGVwc1wiIGJhZGdlXG4gICAgY29uc3QgbGVzc29uQ291bnQgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnQgRlJPTSBsZXNzb25fcHJvZ3Jlc3NcbiAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNvbXBsZXRlZCA9IHRydWVcbiAgICBgXG5cbiAgICBpZiAobGVzc29uQ291bnRbMF0uY291bnQgPT09IDEpIHtcbiAgICAgIGNvbnN0IGJhZGdlID0gYXdhaXQgc3FsYFxuICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdGaXJzdCBTdGVwcydcbiAgICAgIGBcblxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNvdXJzZSBwcm9ncmVzc1xuICAgIGF3YWl0IHVwZGF0ZUNvdXJzZVByb2dyZXNzKHVzZXJJZCwgY291cnNlSWQpXG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZXMvJHtjb3Vyc2VJZH0vbGVzc29ucy8ke2xlc3NvbklkfWApXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gQ29tcGxldGUgbGVzc29uIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIGNvbXBsZXRlIGxlc3NvblwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVpeihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgY29uc3QgcXVpeklkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcInF1aXpJZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IHVzZXJJZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJ1c2VySWRcIikgYXMgc3RyaW5nKVxuICBjb25zdCBsZXNzb25JZCA9IE51bWJlci5wYXJzZUludChmb3JtRGF0YS5nZXQoXCJsZXNzb25JZFwiKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGNvdXJzZUlkID0gTnVtYmVyLnBhcnNlSW50KGZvcm1EYXRhLmdldChcImNvdXJzZUlkXCIpIGFzIHN0cmluZylcbiAgY29uc3QgYW5zd2Vyc0pzb24gPSBmb3JtRGF0YS5nZXQoXCJhbnN3ZXJzXCIpIGFzIHN0cmluZ1xuICBjb25zdCBhbnN3ZXJzID0gSlNPTi5wYXJzZShhbnN3ZXJzSnNvbilcblxuICB0cnkge1xuICAgIC8vIEdldCBxdWl6IGRldGFpbHMgYW5kIHF1ZXN0aW9uc1xuICAgIGNvbnN0IHF1aXp6ZXMgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgKiBGUk9NIHF1aXp6ZXMgV0hFUkUgaWQgPSAke3F1aXpJZH1cbiAgICBgXG5cbiAgICBjb25zdCBxdWl6ID0gcXVpenplc1swXVxuXG4gICAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSBxdWl6X3F1ZXN0aW9ucyBXSEVSRSBxdWl6X2lkID0gJHtxdWl6SWR9XG4gICAgYFxuXG4gICAgLy8gQ2FsY3VsYXRlIHNjb3JlXG4gICAgbGV0IGNvcnJlY3RDb3VudCA9IDBcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocSkgPT4ge1xuICAgICAgaWYgKGFuc3dlcnNbcS5pZF0gPT09IHEuY29ycmVjdF9hbnN3ZXIpIHtcbiAgICAgICAgY29ycmVjdENvdW50KytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgc2NvcmUgPSBNYXRoLnJvdW5kKChjb3JyZWN0Q291bnQgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMClcbiAgICBjb25zdCBwYXNzZWQgPSBzY29yZSA+PSBxdWl6LnBhc3Npbmdfc2NvcmVcblxuICAgIC8vIFJlY29yZCBhdHRlbXB0XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gcXVpel9hdHRlbXB0cyAodXNlcl9pZCwgcXVpel9pZCwgc2NvcmUsIGFuc3dlcnMsIHBhc3NlZClcbiAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke3F1aXpJZH0sICR7c2NvcmV9LCAke2Fuc3dlcnNKc29ufSwgJHtwYXNzZWR9KVxuICAgIGBcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIC8vIEF3YXJkIHBvaW50c1xuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcnMgXG4gICAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAke3F1aXoucG9pbnRzX3Jld2FyZH1cbiAgICAgICAgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgICAgIGBcblxuICAgICAgLy8gQ3JlYXRlIGFjaGlldmVtZW50XG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIElOU0VSVCBJTlRPIGFjaGlldmVtZW50cyAodXNlcl9pZCwgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb2ludHNfZWFybmVkKVxuICAgICAgICBWQUxVRVMgKFxuICAgICAgICAgICR7dXNlcklkfSwgXG4gICAgICAgICAgJ3F1aXpfcGFzc2VkJywgXG4gICAgICAgICAgJ1F1aXogUGFzc2VkJyxcbiAgICAgICAgICAnU3VjY2Vzc2Z1bGx5IHBhc3NlZCBhIHF1aXonLFxuICAgICAgICAgICR7cXVpei5wb2ludHNfcmV3YXJkfVxuICAgICAgICApXG4gICAgICBgXG5cbiAgICAgIC8vIENoZWNrIGZvciBRdWl6IE1hc3RlciBiYWRnZVxuICAgICAgY29uc3QgcGVyZmVjdFF1aXp6ZXMgPSBhd2FpdCBzcWxgXG4gICAgICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudCBGUk9NIHF1aXpfYXR0ZW1wdHNcbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfSBBTkQgc2NvcmUgPSAxMDBcbiAgICAgIGBcblxuICAgICAgaWYgKHBlcmZlY3RRdWl6emVzWzBdLmNvdW50ID49IDMpIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnUXVpeiBNYXN0ZXInXG4gICAgICAgIGBcblxuICAgICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NvdXJzZXMvJHtjb3Vyc2VJZH0vbGVzc29ucy8ke2xlc3NvbklkfWApXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc2NvcmUsIHBhc3NlZCB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gU3VibWl0IHF1aXogZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJGYWlsZWQgdG8gc3VibWl0IHF1aXpcIiB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlUHJvZ3Jlc3ModXNlcklkOiBudW1iZXIsIGNvdXJzZUlkOiBudW1iZXIpIHtcbiAgLy8gR2V0IHRvdGFsIGxlc3NvbnMgaW4gY291cnNlXG4gIGNvbnN0IHRvdGFsTGVzc29ucyA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnRcbiAgICBGUk9NIGxlc3NvbnMgbFxuICAgIEpPSU4gbW9kdWxlcyBtIE9OIGwubW9kdWxlX2lkID0gbS5pZFxuICAgIFdIRVJFIG0uY291cnNlX2lkID0gJHtjb3Vyc2VJZH1cbiAgYFxuXG4gIC8vIEdldCBjb21wbGV0ZWQgbGVzc29uc1xuICBjb25zdCBjb21wbGV0ZWRMZXNzb25zID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBDT1VOVCgqKSBhcyBjb3VudFxuICAgIEZST00gbGVzc29uX3Byb2dyZXNzIGxwXG4gICAgSk9JTiBsZXNzb25zIGwgT04gbHAubGVzc29uX2lkID0gbC5pZFxuICAgIEpPSU4gbW9kdWxlcyBtIE9OIGwubW9kdWxlX2lkID0gbS5pZFxuICAgIFdIRVJFIGxwLnVzZXJfaWQgPSAke3VzZXJJZH0gXG4gICAgQU5EIG0uY291cnNlX2lkID0gJHtjb3Vyc2VJZH1cbiAgICBBTkQgbHAuY29tcGxldGVkID0gdHJ1ZVxuICBgXG5cbiAgY29uc3QgdG90YWwgPSB0b3RhbExlc3NvbnNbMF0uY291bnRcbiAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVkTGVzc29uc1swXS5jb3VudFxuICBjb25zdCBwcm9ncmVzcyA9IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGNvbXBsZXRlZCAvIHRvdGFsKSAqIDEwMCkgOiAwXG5cbiAgLy8gVXBkYXRlIGVucm9sbG1lbnRcbiAgYXdhaXQgc3FsYFxuICAgIFVQREFURSBlbnJvbGxtZW50cyBcbiAgICBTRVQgcHJvZ3Jlc3MgPSAke3Byb2dyZXNzfSxcbiAgICAgICAgc3RhdHVzID0gQ0FTRSBXSEVOICR7cHJvZ3Jlc3N9ID0gMTAwIFRIRU4gJ2NvbXBsZXRlZCcgRUxTRSAnYWN0aXZlJyBFTkQsXG4gICAgICAgIGNvbXBsZXRlZF9hdCA9IENBU0UgV0hFTiAke3Byb2dyZXNzfSA9IDEwMCBUSEVOIE5PVygpIEVMU0UgTlVMTCBFTkRcbiAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBjb3Vyc2VfaWQgPSAke2NvdXJzZUlkfVxuICBgXG5cbiAgLy8gSWYgY29tcGxldGVkLCBhd2FyZCBjb3Vyc2UgY29tcGxldGlvbiBwb2ludHNcbiAgaWYgKHByb2dyZXNzID09PSAxMDApIHtcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUIHBvaW50c19yZXdhcmQsIHRlYWNoZXJfaWQgRlJPTSBjb3Vyc2VzIFdIRVJFIGlkID0gJHtjb3Vyc2VJZH1cbiAgICBgXG5cbiAgICBjb25zdCBwb2ludHNSZXdhcmQgPSBjb3Vyc2VzWzBdPy5wb2ludHNfcmV3YXJkIHx8IDEwMFxuICAgIGNvbnN0IHRlYWNoZXJJZCA9IGNvdXJzZXNbMF0/LnRlYWNoZXJfaWRcblxuICAgIC8vIEF3YXJkIHBvaW50cyB0byBzdHVkZW50XG4gICAgYXdhaXQgc3FsYFxuICAgICAgVVBEQVRFIHVzZXJzXG4gICAgICBTRVQgcG9pbnRzID0gcG9pbnRzICsgJHtwb2ludHNSZXdhcmR9XG4gICAgICBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIC8vIEF3YXJkIHBvaW50cyB0byB0ZWFjaGVyICgxMCBwb2ludHMgcGVyIGNvdXJzZSBjb21wbGV0aW9uKVxuICAgIGlmICh0ZWFjaGVySWQpIHtcbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIHVzZXJzXG4gICAgICAgIFNFVCBwb2ludHMgPSBwb2ludHMgKyAxMFxuICAgICAgICBXSEVSRSBpZCA9ICR7dGVhY2hlcklkfVxuICAgICAgYFxuICAgICAgYXdhaXQgdXBkYXRlVXNlckxldmVsKHRlYWNoZXJJZClcbiAgICB9XG5cbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBhY2hpZXZlbWVudHMgKHVzZXJfaWQsIHR5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9pbnRzX2Vhcm5lZClcbiAgICAgIFZBTFVFUyAoXG4gICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgJ2NvdXJzZV9jb21wbGV0ZWQnLFxuICAgICAgICAnQ291cnNlIENvbXBsZXRlJyxcbiAgICAgICAgJ0ZpbmlzaGVkIGFuIGVudGlyZSBjb3Vyc2UnLFxuICAgICAgICAke3BvaW50c1Jld2FyZH1cbiAgICAgIClcbiAgICBgXG5cbiAgICAvLyBDaGVjayBmb3IgQ291cnNlIENoYW1waW9uIGJhZGdlIGZvciBzdHVkZW50XG4gICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgXG4gICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdDb3Vyc2UgQ2hhbXBpb24nXG4gICAgYFxuXG4gICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgIGBcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgdGVhY2hlciBiYWRnZXNcbiAgICBpZiAodGVhY2hlcklkKSB7XG4gICAgICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gYXdhaXQgc3FsYFxuICAgICAgICBTRUxFQ1QgQ09VTlQoKikgYXMgY291bnRcbiAgICAgICAgRlJPTSBlbnJvbGxtZW50cyBlXG4gICAgICAgIEpPSU4gY291cnNlcyBjIE9OIGUuY291cnNlX2lkID0gYy5pZFxuICAgICAgICBXSEVSRSBjLnRlYWNoZXJfaWQgPSAke3RlYWNoZXJJZH0gQU5EIGUuc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgICAgIGBcblxuICAgICAgY29uc3QgY29tcGxldGlvbkNvdW50ID0gdG90YWxDb21wbGV0aW9uc1swXS5jb3VudFxuXG4gICAgICAvLyBFZmZlY3RpdmUgVGVhY2hlciAoNSBjb21wbGV0aW9ucylcbiAgICAgIGlmIChjb21wbGV0aW9uQ291bnQgPj0gNSkge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdFZmZlY3RpdmUgVGVhY2hlcidcbiAgICAgICAgYFxuXG4gICAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgICAgSU5TRVJUIElOVE8gdXNlcl9iYWRnZXMgKHVzZXJfaWQsIGJhZGdlX2lkKVxuICAgICAgICAgICAgVkFMVUVTICgke3RlYWNoZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNYXN0ZXIgRWR1Y2F0b3IgKDIwIGNvbXBsZXRpb25zKVxuICAgICAgaWYgKGNvbXBsZXRpb25Db3VudCA+PSAyMCkge1xuICAgICAgICBjb25zdCBiYWRnZSA9IGF3YWl0IHNxbGBcbiAgICAgICAgICBTRUxFQ1QgaWQgRlJPTSBiYWRnZXMgV0hFUkUgbmFtZSA9ICdNYXN0ZXIgRWR1Y2F0b3InXG4gICAgICAgIGBcblxuICAgICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICAgIFZBTFVFUyAoJHt0ZWFjaGVySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB1c2VyIGxldmVsIGJhc2VkIG9uIHBvaW50c1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckxldmVsKHVzZXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBwb2ludHMsIGxldmVsIEZST00gdXNlcnMgV0hFUkUgaWQgPSAke3VzZXJJZH1cbiAgYFxuXG4gIGlmICh1c2VyRGF0YS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGNvbnN0IHsgcG9pbnRzLCBsZXZlbCB9ID0gdXNlckRhdGFbMF1cblxuICAvLyBMZXZlbCBjYWxjdWxhdGlvbjogbGV2ZWwgPSBmbG9vcihwb2ludHMgLyAxMDApICsgMVxuICBjb25zdCBuZXdMZXZlbCA9IE1hdGguZmxvb3IocG9pbnRzIC8gMTAwKSArIDFcblxuICBpZiAobmV3TGV2ZWwgPiBsZXZlbCkge1xuICAgIGF3YWl0IHNxbGBcbiAgICAgIFVQREFURSB1c2VycyBTRVQgbGV2ZWwgPSAke25ld0xldmVsfSBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgIGBcblxuICAgIC8vIEF3YXJkIGFjaGlldmVtZW50IGZvciBsZXZlbGluZyB1cFxuICAgIGF3YWl0IHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIGFjaGlldmVtZW50cyAodXNlcl9pZCwgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb2ludHNfZWFybmVkKVxuICAgICAgVkFMVUVTIChcbiAgICAgICAgJHt1c2VySWR9LCBcbiAgICAgICAgJ2xldmVsX3VwJywgXG4gICAgICAgICdMZXZlbCBVcCEnLFxuICAgICAgICAke2BSZWFjaGVkIGxldmVsICR7bmV3TGV2ZWx9YH0sXG4gICAgICAgIDEwXG4gICAgICApXG4gICAgYFxuXG4gICAgLy8gQ2hlY2sgZm9yIGxldmVsLWJhc2VkIGJhZGdlc1xuICAgIGlmIChuZXdMZXZlbCA9PT0gNSkge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnUmlzaW5nIFN0YXInYFxuICAgICAgaWYgKGJhZGdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICBWQUxVRVMgKCR7dXNlcklkfSwgJHtiYWRnZVswXS5pZH0pXG4gICAgICAgICAgT04gQ09ORkxJQ1QgRE8gTk9USElOR1xuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xldmVsID09PSAxMCkge1xuICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnT3ZlcmFjaGlldmVyJ2BcbiAgICAgIGlmIChiYWRnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBJTlNFUlQgSU5UTyB1c2VyX2JhZGdlcyAodXNlcl9pZCwgYmFkZ2VfaWQpXG4gICAgICAgICAgVkFMVUVTICgke3VzZXJJZH0sICR7YmFkZ2VbMF0uaWR9KVxuICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgYFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHN0cmVha1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3RyZWFrKHVzZXJJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxuXG4gIGNvbnN0IHN0cmVha0RhdGEgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUICogRlJPTSB1c2VyX3N0cmVha3MgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICBgXG5cbiAgaWYgKHN0cmVha0RhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gQ3JlYXRlIG5ldyBzdHJlYWtcbiAgICBhd2FpdCBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyB1c2VyX3N0cmVha3MgKHVzZXJfaWQsIGN1cnJlbnRfc3RyZWFrLCBsb25nZXN0X3N0cmVhaywgbGFzdF9hY3Rpdml0eV9kYXRlKVxuICAgICAgVkFMVUVTICgke3VzZXJJZH0sIDEsIDEsICR7dG9kYXl9KVxuICAgIGBcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdHJlYWsgPSBzdHJlYWtEYXRhWzBdXG4gICAgY29uc3QgbGFzdERhdGUgPSBzdHJlYWsubGFzdF9hY3Rpdml0eV9kYXRlXG5cbiAgICBpZiAobGFzdERhdGUgPT09IHRvZGF5KSB7XG4gICAgICAvLyBBbHJlYWR5IHVwZGF0ZWQgdG9kYXlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKClcbiAgICB5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSlcbiAgICBjb25zdCB5ZXN0ZXJkYXlTdHIgPSB5ZXN0ZXJkYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF1cblxuICAgIGlmIChsYXN0RGF0ZSA9PT0geWVzdGVyZGF5U3RyKSB7XG4gICAgICAvLyBDb250aW51aW5nIHN0cmVha1xuICAgICAgY29uc3QgbmV3U3RyZWFrID0gc3RyZWFrLmN1cnJlbnRfc3RyZWFrICsgMVxuICAgICAgY29uc3QgbG9uZ2VzdFN0cmVhayA9IE1hdGgubWF4KG5ld1N0cmVhaywgc3RyZWFrLmxvbmdlc3Rfc3RyZWFrKVxuXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VyX3N0cmVha3MgXG4gICAgICAgIFNFVCBjdXJyZW50X3N0cmVhayA9ICR7bmV3U3RyZWFrfSxcbiAgICAgICAgICAgIGxvbmdlc3Rfc3RyZWFrID0gJHtsb25nZXN0U3RyZWFrfSxcbiAgICAgICAgICAgIGxhc3RfYWN0aXZpdHlfZGF0ZSA9ICR7dG9kYXl9LFxuICAgICAgICAgICAgdXBkYXRlZF9hdCA9IE5PVygpXG4gICAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH1cbiAgICAgIGBcblxuICAgICAgLy8gQ2hlY2sgZm9yIHN0cmVhayBiYWRnZXNcbiAgICAgIGlmIChuZXdTdHJlYWsgPT09IDcpIHtcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBhd2FpdCBzcWxgU0VMRUNUIGlkIEZST00gYmFkZ2VzIFdIRVJFIG5hbWUgPSAnRGVkaWNhdGVkIExlYXJuZXInYFxuICAgICAgICBpZiAoYmFkZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJfYmFkZ2VzICh1c2VyX2lkLCBiYWRnZV9pZClcbiAgICAgICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2JhZGdlWzBdLmlkfSlcbiAgICAgICAgICAgIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcbiAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyZWFrIGJyb2tlbiwgcmVzZXQgdG8gMVxuICAgICAgYXdhaXQgc3FsYFxuICAgICAgICBVUERBVEUgdXNlcl9zdHJlYWtzIFxuICAgICAgICBTRVQgY3VycmVudF9zdHJlYWsgPSAxLFxuICAgICAgICAgICAgbGFzdF9hY3Rpdml0eV9kYXRlID0gJHt0b2RheX0sXG4gICAgICAgICAgICB1cGRhdGVkX2F0ID0gTk9XKClcbiAgICAgICAgV0hFUkUgdXNlcl9pZCA9ICR7dXNlcklkfVxuICAgICAgYFxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIGRhaWx5IGNoYWxsZW5nZSBwcm9ncmVzc1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlDaGFsbGVuZ2VQcm9ncmVzcyh1c2VySWQ6IG51bWJlciwgY2hhbGxlbmdlVHlwZTogc3RyaW5nLCBpbmNyZW1lbnQ6IG51bWJlcikge1xuICAvLyBHZXQgYWN0aXZlIGNoYWxsZW5nZXMgb2YgdGhpcyB0eXBlXG4gIGNvbnN0IGNoYWxsZW5nZXMgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIGlkLCB0YXJnZXRfdmFsdWUgXG4gICAgRlJPTSBkYWlseV9jaGFsbGVuZ2VzXG4gICAgV0hFUkUgY2hhbGxlbmdlX3R5cGUgPSAke2NoYWxsZW5nZVR5cGV9XG4gICAgICBBTkQgc3RhcnRfZGF0ZSA8PSBDVVJSRU5UX0RBVEUgXG4gICAgICBBTkQgZW5kX2RhdGUgPj0gQ1VSUkVOVF9EQVRFXG4gIGBcblxuICBmb3IgKGNvbnN0IGNoYWxsZW5nZSBvZiBjaGFsbGVuZ2VzKSB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgcHJvZ3Jlc3MgZW50cnlcbiAgICBjb25zdCBwcm9ncmVzcyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gdXNlcl9kYWlseV9jaGFsbGVuZ2VzXG4gICAgICBXSEVSRSB1c2VyX2lkID0gJHt1c2VySWR9IEFORCBjaGFsbGVuZ2VfaWQgPSAke2NoYWxsZW5nZS5pZH1cbiAgICBgXG5cbiAgICBpZiAocHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBDcmVhdGUgbmV3IHByb2dyZXNzIGVudHJ5XG4gICAgICBjb25zdCBuZXdQcm9ncmVzcyA9IGluY3JlbWVudFxuICAgICAgY29uc3QgY29tcGxldGVkID0gbmV3UHJvZ3Jlc3MgPj0gY2hhbGxlbmdlLnRhcmdldF92YWx1ZVxuXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIElOU0VSVCBJTlRPIHVzZXJfZGFpbHlfY2hhbGxlbmdlcyAodXNlcl9pZCwgY2hhbGxlbmdlX2lkLCBwcm9ncmVzcywgY29tcGxldGVkLCBjb21wbGV0ZWRfYXQpXG4gICAgICAgIFZBTFVFUyAoJHt1c2VySWR9LCAke2NoYWxsZW5nZS5pZH0sICR7bmV3UHJvZ3Jlc3N9LCAke2NvbXBsZXRlZH0sICR7Y29tcGxldGVkID8gXCJOT1coKVwiIDogbnVsbH0pXG4gICAgICBgXG5cbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgLy8gQXdhcmQgcG9pbnRzXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZURhdGEgPSBhd2FpdCBzcWxgXG4gICAgICAgICAgU0VMRUNUIHBvaW50c19yZXdhcmQgRlJPTSBkYWlseV9jaGFsbGVuZ2VzIFdIRVJFIGlkID0gJHtjaGFsbGVuZ2UuaWR9XG4gICAgICAgIGBcbiAgICAgICAgY29uc3QgcG9pbnRzUmV3YXJkID0gY2hhbGxlbmdlRGF0YVswXT8ucG9pbnRzX3Jld2FyZCB8fCAwXG5cbiAgICAgICAgYXdhaXQgc3FsYFxuICAgICAgICAgIFVQREFURSB1c2VycyBTRVQgcG9pbnRzID0gcG9pbnRzICsgJHtwb2ludHNSZXdhcmR9IFdIRVJFIGlkID0gJHt1c2VySWR9XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwcm9ncmVzc1swXS5jb21wbGV0ZWQpIHtcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBwcm9ncmVzc1xuICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBwcm9ncmVzc1swXS5wcm9ncmVzcyArIGluY3JlbWVudFxuICAgICAgY29uc3QgY29tcGxldGVkID0gbmV3UHJvZ3Jlc3MgPj0gY2hhbGxlbmdlLnRhcmdldF92YWx1ZVxuXG4gICAgICBhd2FpdCBzcWxgXG4gICAgICAgIFVQREFURSB1c2VyX2RhaWx5X2NoYWxsZW5nZXNcbiAgICAgICAgU0VUIHByb2dyZXNzID0gJHtuZXdQcm9ncmVzc30sXG4gICAgICAgICAgICBjb21wbGV0ZWQgPSAke2NvbXBsZXRlZH0sXG4gICAgICAgICAgICBjb21wbGV0ZWRfYXQgPSAke2NvbXBsZXRlZCA/IFwiTk9XKClcIiA6IG51bGx9XG4gICAgICAgIFdIRVJFIHVzZXJfaWQgPSAke3VzZXJJZH0gQU5EIGNoYWxsZW5nZV9pZCA9ICR7Y2hhbGxlbmdlLmlkfVxuICAgICAgYFxuXG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIC8vIEF3YXJkIHBvaW50c1xuICAgICAgICBjb25zdCBjaGFsbGVuZ2VEYXRhID0gYXdhaXQgc3FsYFxuICAgICAgICAgIFNFTEVDVCBwb2ludHNfcmV3YXJkIEZST00gZGFpbHlfY2hhbGxlbmdlcyBXSEVSRSBpZCA9ICR7Y2hhbGxlbmdlLmlkfVxuICAgICAgICBgXG4gICAgICAgIGNvbnN0IHBvaW50c1Jld2FyZCA9IGNoYWxsZW5nZURhdGFbMF0/LnBvaW50c19yZXdhcmQgfHwgMFxuXG4gICAgICAgIGF3YWl0IHNxbGBcbiAgICAgICAgICBVUERBVEUgdXNlcnMgU0VUIHBvaW50cyA9IHBvaW50cyArICR7cG9pbnRzUmV3YXJkfSBXSEVSRSBpZCA9ICR7dXNlcklkfVxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQXFoQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lesson-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonContent",
    ()=>LessonContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quiz-component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$fb7419__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:fb7419 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LessonContent({ lesson, quiz, questions, completed, userId, courseId }) {
    _s();
    const [isCompleted, setIsCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(completed);
    const [estimatedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.ceil(lesson.content.split(" ").length / 200)) // ~200 words per minute
    ;
    const handleComplete = async ()=>{
        const formData = new FormData();
        formData.append("lessonId", lesson.id.toString());
        formData.append("userId", userId.toString());
        formData.append("courseId", courseId.toString());
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$fb7419__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["completeLesson"])(formData);
        if (result?.success) {
            setIsCompleted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-5 h-5 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/lesson-content.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2 text-accent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            lesson.video_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-16 h-16 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/lesson-content.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-gray max-w-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-accent/30 bg-gradient-to-r from-accent/5 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 text-accent mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px w-12 bg-accent/30"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "End of Lesson"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            quiz && questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuizComponent"], {
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
            !isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-surface border-primary/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-foreground mb-1",
                                    children: "Mark as Complete"
                                }, void 0, false, {
                                    fileName: "[project]/components/lesson-content.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleComplete,
                            className: "bg-accent hover:bg-accent/90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
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
_s(LessonContent, "Zy6fZ23sGMAgoVfnKgB6ET3HbAE=");
_c = LessonContent;
var _c;
__turbopack_context__.k.register(_c, "LessonContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e59b7b1d._.js.map