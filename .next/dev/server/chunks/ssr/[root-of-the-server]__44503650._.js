module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allGuides",
    ()=>allGuides,
    "allTools",
    ()=>allTools
]);
const allGuides = [
    {
        title: "F1 留学生报税身份判定：你是 Resident 还是 Non-Resident？",
        description: "面向在美 F1 / OPT 留学生的判断说明书：解释 SPT 测试与留美满五年规则，给出身份切换判断清单。",
        audience: "刚开始自己报税、担心选错 1040-NR/1040 路径的 F1 / OPT 学生。",
        href: "/guides/f1-tax-residency"
    },
    {
        title: "留学生避坑：为什么不建议直接用 TurboTax？",
        description: "TurboTax 默认居民路径对 F1 / OPT 存在错用风险。本指南拆解 Sprintax / TurboTax 的本质区别与误用后果。",
        audience: "准备使用 TurboTax 的 F1 / OPT 学生，或担心报税软件选错路径的人。",
        href: "/guides/turbotax-pitfalls"
    },
    {
        title: "1040-NR 填写全攻略：留学生专属税表拆解",
        description: "1040 vs 1040-NR 区别、Standard Deduction 限制、Treaty 位置与 8843 必填要点，一站式拆解留学生报税路径。",
        audience: "已经确定需要走非居民路径、准备填写 1040-NR 的 F1 / OPT 留学生。",
        href: "/guides/1040nr-guide"
    },
    {
        title: "报税报错了怎么办？1040-X 修正表救命指南",
        description: "从 IRS 通知前后处理差异、如何撤销 Resident 申报、补缴与罚款逻辑，到邮寄与处理周期的完整说明书。",
        audience: "已经报错或怀疑报错的 F1 / OPT 留学生，希望了解 1040X 修正表流程。",
        href: "/guides/1040x-fix"
    },
    {
        title: "1042 是啥？2026 留学生 1042-S 报税终极解惑",
        description: "如果你在信封上看到 1042 字样，它通常指的就是 Form 1042-S. 本文为 2026 留学生提供 1042-S 报税全指南。",
        audience: "收到 1042-S 或有奖学金免税额的 F1 留学生。",
        href: "/1042-vs-1042-s"
    },
    {
        title: "2026 Form 8843 填错了/寄早了？留学生修正申报 (Amended Return) 全攻略",
        description: "手把手教你如何修正 Form 8843 错误，包含重新邮寄流程与注意事项。",
        audience: "已经提交但发现错误的 F1 留学生。",
        href: "/form-8843-amend-guide"
    },
    {
        title: "2026 F1留学生没收入也要报税吗？不报税的后果惩罚？",
        description: "详解 Form 8843 的强制性、填写要点及不申报可能面临的签证风险。",
        audience: "所有在美 F 签证留学生（无论是否有收入）。",
        href: "/form-8843-guide"
    },
    {
        title: "2026 报税关键时间表",
        description: "整理 2026 年 F1/OPT 留学生必须关注的报税、截止、延期等重要日期。",
        audience: "需要掌握报税时间节点的国际学生。",
        href: "/tax-deadlines-2026"
    },
    {
        title: "2026 报税季：F1 学生没收到 W-2 表格怎么办？",
        description: "详细梳理 4 步联系雇主及 IRS 替代方案，助你顺利开启报税流程。",
        audience: "在校内或校外工作但未按时收到 W-2 的学生。",
        href: "/w2-missing-guide"
    },
    {
        title: "留学生身份合规专区：开公司 / W8BEN / 法律风险完整指南",
        description: "F1 / OPT 留学生身份合规专题总览：能不能开公司、W8BEN 怎么填、开公司后要注意哪些法律红线，按决策顺序整理成系列。",
        audience: "在报税之外，还想弄清楚开公司、身份合规风险的 F1 / OPT 留学生。",
        href: "/compliance"
    },
    {
        title: "F1 / OPT 留学生可以开公司吗？身份合规完整指南",
        description: "被动股东和主动经营的分界线在哪？F1 / CPT / OPT / STEM OPT 各阶段的具体差异是什么？附身份风险自测工具。",
        audience: "正在考虑开公司、但不确定会不会影响 F1 / OPT 身份的留学生。",
        href: "/compliance/can-f1-open-company"
    }
];
const allTools = [
    {
        title: "2026 留学生报税身份自测 (SPT 计算器)",
        description: "不确定是 NRA 还是 Resident？使用我们的 SPT 自动计算器。专为留学生设计，涵盖 F1 签证 5 年豁免规则。",
        cta: "开始自测",
        ctaText: "立即判定：2026 报税身份 (NRA/RA)",
        href: "/tools/opt-tax"
    },
    {
        title: "Form 8843 在线填写助手",
        description: "手把手教你填写 2026 最新 Form 8843。包含 Part I 和 Part III 详细说明。",
        cta: "去使用",
        ctaText: "指南：IRS Form 8843 免费申报流程",
        href: "/form-8843-tutorial-2026"
    },
    {
        title: "TurboTax 适用性判定",
        description: "OPT 可以用 TurboTax 吗？回答 8 个问题，拿到你的报税路径建议。",
        cta: "开始判定",
        ctaText: "对比：TurboTax vs Sprintax 留学生避坑",
        href: "/opt-turbotax"
    },
    {
        title: "F1/OPT FICA 退税金额计算器",
        description: "一键测算被误扣的 Social Security 与 Medicare 税，详细梳理 向雇主 / IRS 提交 Form 843 全流程要回退款。",
        cta: "计算退税",
        ctaText: "计算：2026 F1/OPT FICA 联邦税退税金额",
        href: "/fica-refund-calculator"
    },
    {
        title: "留学生 1040-NR 填写指南",
        description: "手把手教你申报 $5000 免税额，详解 1040-NR 核心字段填写细节。",
        cta: "查看指南",
        ctaText: "立即查看：2026 1040-NR 填表教程",
        href: "/1040-nr-filling-guide"
    },
    {
        title: "W2 和 1099 收入漏报补救指南",
        description: "发现漏报收入？教你如何使用 1040-X 修正表主动补救，降低处罚风险。",
        cta: "立即补救",
        ctaText: "补救教程：W2 和 1099 联合报税/漏报修正",
        href: "/amend-w2-1099"
    },
    {
        title: "中美税收协定省钱工具",
        description: "详解 Article 20(c) 申请流程，助你拿回属于自己的 $5000 免税额度。",
        cta: "立即计算",
        ctaText: "申请教程：中美税收协定 $5000 免税额度申报",
        href: "/f1-tax-treaty-calculator"
    },
    {
        title: "2026 OPT 报税逾期补救指南",
        description: "逾期申报怎么办？一文梳理罚款计算、身份风险及补齐申报的具体步骤。",
        cta: "查看方案",
        ctaText: "立即补救：2026 OPT 报税逾期罚款计算",
        href: "/opt-late-filing-guide"
    },
    {
        title: "2026 留学生 OPT 报税避坑指南",
        description: "详解为什么不建议直接用 TurboTax，对比 Sprintax vs TurboTax，助你避开报税红线。",
        cta: "立即避坑",
        ctaText: "对比：TurboTax vs Sprintax 留学生报税优劣",
        href: "/turbotax-pitfalls-2026"
    },
    {
        title: "开公司身份风险自测",
        description: "回答 2-3 个问题，判断你打算开的公司属于被动投资还是主动经营，给出对应的风险等级和下一步建议。",
        cta: "开始自测",
        ctaText: "自测：F1/OPT 开公司身份风险等级",
        href: "/compliance/can-f1-open-company"
    }
];
}),
"[project]/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
function Breadcrumbs({ items }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index)=>({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                "item": item.href ? `https://www.mapleworld.online${item.href}` : undefined
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumbs.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm text-brand-ink/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:text-brand-pinkdeep transition-colors",
                            children: "首页"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumbs.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "select-none",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumbs.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "hover:text-brand-pinkdeep transition-colors",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-ink/80 font-medium",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumbs.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Breadcrumbs.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Breadcrumbs.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Breadcrumbs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(tools)/tools/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "留学生报税工具箱：身份判断与计算器 - MapleWorld",
    description: "汇集了针对 F1/OPT 留学生的报税实用工具：包括 FICA 退税自动计算器、SPT 实质居留测试自测、Form 8843 在线填写助手等，助你轻松拿回应退税款。",
    keywords: "报税工具, FICA 退税计算器, Form 8843 填写, 留学生退税工具, SPT 测试, F1 报税软件",
    alternates: {
        canonical: "https://www.mapleworld.online/tools"
    }
};
function ToolsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pb-16 text-brand-ink",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-4 py-12 sm:py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                items: [
                                    {
                                        label: "报税工具"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50",
                                children: "Tools"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-2 text-3xl sm:text-4xl font-semibold",
                                children: "报税工具：简化你的申报流程"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm sm:text-base text-brand-ink/70",
                                children: "这些工具旨在帮助你快速做出判断，节省研究税法的时间。"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(tools)/tools/page.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allTools"].map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: tool.href,
                                className: "soft-card flex flex-col transition hover:scale-[1.02] hover:shadow-lg group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg sm:text-xl font-semibold group-hover:text-brand-pinkdeep transition-colors",
                                        children: tool.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 flex-1 text-sm text-brand-ink/70 line-clamp-3",
                                        children: tool.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-6 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-pinkhover",
                                        children: tool.ctaText || tool.cta || "立即使用"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tool.href, true, {
                                fileName: "[project]/src/app/(tools)/tools/page.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(tools)/tools/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(tools)/tools/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(tools)/tools/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(tools)/tools/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(tools)/tools/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(tools)/tools/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__44503650._.js.map