module.exports = [
"[project]/src/components/tools/CompanyRiskQuiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyRiskQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const questions = {
    q1: {
        id: "q1",
        text: "Q1 你现在的身份阶段？",
        options: [
            {
                label: "F1 在读（未开始 CPT / OPT）",
                value: "f1",
                next: "q2"
            },
            {
                label: "CPT",
                value: "cpt",
                next: "result_cpt"
            },
            {
                label: "OPT / STEM OPT",
                value: "opt",
                next: "q2"
            },
            {
                label: "已转 H1B 或绿卡",
                value: "authorized",
                next: "result_authorized"
            }
        ]
    },
    q2: {
        id: "q2",
        text: "Q2 你打算在这家公司里做什么？",
        hint: "这是判断风险高低最关键的一步。",
        options: [
            {
                label: "只出资，不参与经营（纯被动股东）",
                value: "passive",
                next: "q3"
            },
            {
                label: "参与日常经营管理",
                value: "active_manage",
                next: "result_active"
            },
            {
                label: "自己给公司干活，并从中拿工资/报酬",
                value: "active_paid",
                next: "result_active"
            }
        ]
    },
    q3: {
        id: "q3",
        text: "Q3 公司会不会给你分红或发钱？",
        options: [
            {
                label: "完全不发钱，只是登记股东",
                value: "no_pay",
                next: "result_passive_low"
            },
            {
                label: "会发工资或顾问费给我",
                value: "pay",
                next: "result_active"
            }
        ]
    }
};
const results = {
    result_cpt: {
        level: "high",
        levelLabel: "⚠️ 高风险",
        title: "CPT 阶段开公司，风险信号非常明显",
        description: "CPT 的工作授权和你就读学校的课程要求、雇主实习安排绑定得很紧。如果你打算以自己名下的公司作为 CPT 雇主，或者用自己开的公司满足 CPT 要求，这类操作极容易被认定为不符合 CPT 授权范围，进而影响 F1 身份本身。这不是税务问题，是身份问题，建议在采取任何行动前先找学校 DSO 或移民律师书面确认。",
        nextSteps: [
            {
                label: "查看开公司身份合规完整指南 →",
                href: "/compliance/can-f1-open-company"
            }
        ]
    },
    result_authorized: {
        level: "na",
        levelLabel: "规则不同",
        title: "H1B / 绿卡阶段，适用的是另一套规则",
        description: "本自测主要针对 F1 / CPT / OPT 阶段的身份合规风险。H1B 有自己的雇主绑定规则，绿卡持有者在开公司这件事上限制则少得多。你面对的是不同的规则体系，建议单独咨询移民律师，而不是套用本工具的判断。",
        nextSteps: []
    },
    result_active: {
        level: "high",
        levelLabel: "⚠️ 高风险",
        title: "存在被认定为 unauthorized employment 的风险",
        description: "只要你在公司里做的事超出了「单纯出资」的范围——不管是参与日常经营，还是自己给公司干活并拿钱——都有可能被认定为在从事工作授权之外的雇佣活动。F1 / OPT 的工作授权通常要求雇主明确、岗位明确、且与你的专业相关。自己开公司给自己发工资，恰恰是这几条最容易踩线的地方。",
        nextSteps: [
            {
                label: "查看开公司身份合规完整指南 →",
                href: "/compliance/can-f1-open-company"
            }
        ]
    },
    result_passive_low: {
        level: "low",
        levelLabel: "相对低风险",
        title: "纯被动股东身份，风险相对较低",
        description: "只出资、不经营、不领取任何形式的报酬，通常被视为被动投资行为，和「工作」是两回事，这条路径的合规风险相对较低。但「相对低」不等于「零风险」——建议保留完整的书面记录（股东协议、不参与经营的书面说明），并在正式操作前找移民律师做一次确认，尤其是涉及资金来源和股权结构的部分。",
        nextSteps: [
            {
                label: "查看开公司身份合规完整指南 →",
                href: "/compliance/can-f1-open-company"
            }
        ]
    }
};
function CompanyRiskQuiz() {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("q1");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleOptionSelect = (next)=>{
        setHistory([
            ...history,
            currentStep
        ]);
        setCurrentStep(next);
    };
    const handleReset = ()=>{
        setCurrentStep("q1");
        setHistory([]);
    };
    const isResult = results[currentStep] !== undefined;
    const result = results[currentStep];
    const levelStyles = {
        low: "bg-emerald-50 border-emerald-200 text-emerald-700",
        medium: "bg-amber-50 border-amber-200 text-amber-700",
        high: "bg-red-50 border-red-200 text-red-600",
        na: "bg-brand-pink/10 border-brand-pink/30 text-brand-pinkdeep"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 rounded-[28px] border border-brand-pink/40 bg-white/95 p-6 sm:p-8 shadow-[0_20px_60px_rgba(244,185,200,0.25)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-brand-ink",
                        children: "开公司身份风险自测：我现在开公司安全吗？"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReset,
                        className: "text-xs font-semibold text-brand-pinkdeep hover:underline",
                        children: "重新开始"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            !isResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-medium text-brand-ink/90",
                        children: questions[currentStep].text
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this),
                    questions[currentStep].hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "-mt-4 text-xs text-brand-ink/50",
                        children: questions[currentStep].hint
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 143,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: questions[currentStep].options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleOptionSelect(option.next),
                                className: "rounded-xl border border-brand-pink/30 bg-white px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-pinkdeep hover:bg-brand-pink/5 hover:shadow-sm",
                                children: option.label
                            }, option.value, false, {
                                fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                                lineNumber: 149,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                lineNumber: 138,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-2xl border p-5 ${levelStyles[result.level]}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-wide",
                        children: result.levelLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 161,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mt-1 text-lg font-bold text-brand-ink",
                        children: result.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-brand-ink/80 leading-relaxed",
                        children: result.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 167,
                        columnNumber: 21
                    }, this),
                    result.nextSteps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-3",
                        children: result.nextSteps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: step.href,
                                className: "inline-flex items-center rounded-lg bg-brand-pinkdeep px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-pinkhover",
                                children: step.label
                            }, step.href, false, {
                                fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                                lineNumber: 173,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 171,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-xs text-brand-ink/50 leading-relaxed",
                        children: "本结果为一般性风险提示，不构成移民律师意见。涉及身份合规问题，请务必咨询有资质的移民律师或学校 DSO。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
                lineNumber: 160,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tools/CompanyRiskQuiz.tsx",
        lineNumber: 122,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_8e1b11ee._.js.map