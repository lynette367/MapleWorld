import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SidebarCompliance from "@/components/SidebarCompliance";
import CompanyRiskQuiz from "@/components/tools/CompanyRiskQuiz";

export const metadata: Metadata = {
    title: "F1 / OPT 留学生可以开公司吗？身份合规完整指南",
    description:
        "F1 / OPT / STEM OPT 留学生能不能开公司？被动股东和主动经营的分界线在哪？附身份风险自测工具，梳理各阶段差异与常见误区，非移民律师意见，仅供参考。",
    alternates: {
        canonical: "https://www.mapleworld.online/compliance/can-f1-open-company",
    },
};

const faqs = [
    {
        question: "F1 学生可以注册一家公司吗？",
        answer:
            "注册公司本身（比如登记一家 LLC）通常不等于「工作」，很多情况下作为纯被动股东是相对可行的。但一旦你开始参与经营、管理，或者从公司领取任何形式的报酬，就可能被认定为工作授权之外的雇佣行为。具体是否可行，取决于你的身份阶段和参与程度，建议用本文的自测工具先做初步判断，再找移民律师确认。",
    },
    {
        question: "OPT 期间开公司，会不会影响 OPT 的专业相关性要求？",
        answer:
            "如果你打算通过自己的公司满足 OPT 的雇佣和专业相关性要求（比如给自己发工资、把公司当作 OPT 雇主），需要格外谨慎——这类操作对雇主关系和岗位真实性的要求比普通雇佣更高，容易被认定为不符合要求。建议在采取行动前书面确认。",
    },
    {
        question: "被动股东和主动经营，具体怎么区分？",
        answer:
            "简单理解：只出钱、不参与日常决策、不从公司领取报酬，通常更接近被动投资；只要你开始处理日常运营、做决策、或者领取工资/顾问费，就更接近「工作」。边界不总是非黑即白，这也是建议咨询移民律师而不是自行判断的原因。",
    },
    {
        question: "开公司之后还要注意报税身份的变化吗？",
        answer:
            "会。开公司之后的报税方式（比如是否需要填 W8BEN）跟你之前单纯拿工资/奖学金时不一样，这部分我们会在本系列的 W8BEN 解析中详细展开。",
    },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "F1 / OPT 留学生可以开公司吗？身份合规完整指南",
    description:
        "F1 / OPT / STEM OPT 留学生能不能开公司的身份合规解析，附风险自测工具。",
    author: {
        "@type": "Organization",
        name: "MapleWorld",
    },
    publisher: {
        "@type": "Organization",
        name: "MapleWorld",
    },
    mainEntityOfPage: "https://www.mapleworld.online/compliance/can-f1-open-company",
};

export default function CanF1OpenCompanyPage() {
    return (
        <main className="pb-16 text-brand-ink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <section className="px-4 py-12 sm:py-16">
                <div className="page-shell">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-start">
                        <article className="min-w-0">
                            <Breadcrumbs
                                items={[
                                    { label: "身份合规专区", href: "/compliance" },
                                    { label: "能否开公司" },
                                ]}
                            />
                            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                                Compliance / 身份合规
                            </p>
                            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                                F1 / OPT 留学生可以开公司吗？身份合规完整指南
                            </h1>

                            <p className="mt-6 text-lg text-brand-ink/80 leading-relaxed">
                                这个问题没有一个「能」或「不能」的简单答案。<br />
                                真正决定风险高低的，是你打算<strong>怎么参与</strong>这家公司——是纯粹出资的被动股东，
                                还是要亲自参与经营、给自己发工资。这篇文章会先帮你判断自己属于哪一类，再讲清楚每个阶段该注意什么。
                            </p>

                            {/* Interactive Tool Placement */}
                            <CompanyRiskQuiz />

                            <div className="prose prose-pink max-w-none mt-10">
                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    被动股东 vs 主动经营——这是能不能开的关键分界线
                                </h2>
                                <p className="text-brand-ink/75 leading-7">
                                    F1 / OPT 身份的核心限制是「工作授权」，也就是你只能在授权范围内的雇主/岗位下工作。
                                    开公司这件事本身不违反任何规则，真正的风险点在于：<strong>你在公司里扮演的角色是不是构成了「工作」</strong>。
                                </p>
                                <div className="my-6 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                        <p className="font-semibold text-emerald-700 mb-2">相对低风险</p>
                                        <p className="text-sm text-brand-ink/80 leading-relaxed">
                                            只出资、不参与日常决策、不从公司领取任何报酬，通常更接近「被动投资」，
                                            和你需要工作授权才能做的「工作」是两回事。
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                                        <p className="font-semibold text-red-600 mb-2">高风险</p>
                                        <p className="text-sm text-brand-ink/80 leading-relaxed">
                                            参与日常经营管理，或者给自己发工资/顾问费，都容易被认定为在从事工作授权之外的雇佣活动。
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    F1 / CPT / OPT / STEM OPT 各阶段的具体差异
                                </h2>
                                <p className="text-brand-ink/75 leading-7">
                                    不同身份阶段对「工作」的定义和限制并不完全一样：
                                </p>
                                <ul className="mt-4 space-y-3 text-brand-ink/80 leading-relaxed">
                                    <li>
                                        <strong>F1 在读（未开始 CPT/OPT）：</strong>
                                        原则上不允许校外工作，纯被动投资的空间相对大一些，但一旦涉及经营或领薪，风险很高。
                                    </li>
                                    <li>
                                        <strong>CPT：</strong>
                                        工作授权和课程/实习安排绑定得很紧，用自己的公司满足 CPT 要求容易被认定为不符合授权范围。
                                    </li>
                                    <li>
                                        <strong>OPT / STEM OPT：</strong>
                                        对雇主和岗位的专业相关性要求较高，自雇/自己开公司给自己发工资是最容易被审查的场景之一。
                                    </li>
                                    <li>
                                        <strong>已转 H1B / 绿卡：</strong>
                                        规则体系完全不同，H1B 有雇主绑定要求，绿卡持有者限制则少得多，不适用本文的判断框架。
                                    </li>
                                </ul>

                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    常见误区："我朋友这么干了没事"
                                </h2>
                                <div className="rounded-[20px] bg-brand-pink/10 p-6 my-6">
                                    <p className="text-sm text-brand-ink/80 leading-relaxed">
                                        身份合规问题很少在当下就暴露，往往是在申请 OPT 延期、H1B 或绿卡的时候才被追溯审查。
                                        「朋友这么干了没事」大概率只是还没到审查节点，而不是这个操作真的安全。
                                        身份问题和报税问题最大的区别是：报税报错了通常可以事后补救，身份问题一旦被认定，
                                        补救空间要小得多。
                                    </p>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    开公司之后，报税和身份合规还要注意什么
                                </h2>
                                <p className="text-brand-ink/75 leading-7">
                                    如果你确认自己属于风险较低的路径，决定开公司之后，接下来要处理两件事：
                                    公司层面的税务申报身份怎么定（这会决定要不要填 W8BEN），
                                    以及公司架构本身有没有踩到其他法律红线。这两块内容我们会在本系列的后续文章中详细展开。
                                </p>

                                <div className="mt-12 rounded-[28px] border border-brand-pink/40 bg-white/95 p-8 shadow-[0_20px_60px_rgba(244,185,200,0.3)]">
                                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-brand-ink">下一步该看什么？</h2>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="soft-card !bg-brand-pink/5">
                                            <h3 className="font-semibold mb-2">回到专区总览</h3>
                                            <p className="text-sm text-brand-ink/70 mb-4">
                                                查看身份合规专区完整地图，了解 W8BEN 和法律风险两篇的规划。
                                            </p>
                                            <Link href="/compliance" className="text-sm text-brand-pinkdeep font-bold hover:underline">
                                                查看身份合规专区 →
                                            </Link>
                                        </div>
                                        <div className="soft-card !bg-brand-pink/5">
                                            <h3 className="font-semibold mb-2">先确认报税身份</h3>
                                            <p className="text-sm text-brand-ink/70 mb-4">
                                                开公司之前，先确认自己现在的报税身份路径是否已经理清楚。
                                            </p>
                                            <Link href="/tools/opt-tax" className="text-sm text-brand-pinkdeep font-bold hover:underline">
                                                去使用身份判定工具 →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-brand-ink">
                                    常见问题
                                </h2>
                                <div className="space-y-5">
                                    {faqs.map((faq) => (
                                        <div key={faq.question} className="rounded-2xl border border-brand-pink/20 bg-white/70 p-5">
                                            <p className="font-semibold text-brand-ink mb-2">{faq.question}</p>
                                            <p className="text-sm text-brand-ink/75 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <section id="disclaimer" className="mt-16 pt-8 border-t border-brand-pink/20">
                                <p className="text-xs text-brand-ink/50 leading-relaxed">
                                    免责声明：本内容为经验整理与信息说明，不构成 CPA / EA 执业服务，也<strong>不构成移民律师意见</strong>。
                                    身份合规问题风险较高且个体差异大，请务必根据个人具体情况咨询有资质的移民律师或学校 DSO 后再采取行动。
                                </p>
                            </section>
                        </article>
                        <aside className="lg:sticky lg:top-24">
                            <SidebarCompliance />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
