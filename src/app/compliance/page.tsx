import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "留学生身份合规专区：开公司 / W8BEN / 法律风险完整指南",
    description:
        "F1 / OPT 留学生身份合规专题：能不能开公司、W8BEN 怎么填、开公司后要注意哪些法律红线。由留学生为留学生整理，非移民律师意见，具体情况请咨询专业人士。",
    alternates: {
        canonical: "https://www.mapleworld.online/compliance",
    },
};

const clusterPages = [
    {
        title: "F1 / OPT 能不能开公司？",
        description:
            "先判断被动股东和主动经营的分界线，再看你的身份阶段属于哪一类风险区间。附身份风险自测工具。",
        href: "/compliance/can-f1-open-company",
        status: "live" as const,
    },
    {
        title: "W8BEN 到底怎么填",
        description:
            "开公司之后，税务身份怎么申报，W8BEN 和 W9 该选哪个，字段逐一拆解。",
        href: "/compliance/w8ben-guide",
        status: "soon" as const,
    },
    {
        title: "开公司后的法律注意事项",
        description:
            "从工作授权边界到公司架构选择，梳理最容易被忽视的合规红线。",
        href: "/compliance/business-legal-risks",
        status: "soon" as const,
    },
];

export default function CompliancePillarPage() {
    return (
        <main className="pb-16 text-brand-ink">
            <section className="px-4 py-12 sm:py-16">
                <div className="page-shell">
                    <div className="max-w-4xl mx-auto">
                        <Breadcrumbs items={[{ label: "身份合规专区" }]} />
                        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50">
                            Compliance / 身份与合规
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            留学生身份合规专区：开公司 / W8BEN / 法律风险
                        </h1>
                        <p className="mt-6 text-lg text-brand-ink/80 leading-relaxed">
                            报税只是留学生身份合规里的一部分。很多同学在问「我能不能开公司」的时候，
                            真正想问的其实是「这样做会不会影响我的 F1 / OPT 身份」。这个专区就是为了回答这一整条链路：
                            <strong>能不能开 → 开了怎么报税 → 开了要注意什么法律风险</strong>，按顺序理清楚，而不是东拼西凑地搜。
                        </p>

                        <div className="mt-10 space-y-6">
                            {clusterPages.map((page, index) => (
                                <div key={page.href} className="soft-card !p-6 sm:!p-8">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-pinkdeep text-sm font-bold text-white">
                                            {index + 1}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h2 className="text-xl font-semibold text-brand-ink">
                                                    {page.title}
                                                </h2>
                                                {page.status === "soon" && (
                                                    <span className="rounded-full bg-brand-pink/20 px-2.5 py-0.5 text-xs font-bold text-brand-pinkdeep">
                                                        Soon
                                                    </span>
                                                )}
                                            </div>
                                            <p className="mt-2 text-sm text-brand-ink/75 leading-relaxed">
                                                {page.description}
                                            </p>
                                            {page.status === "live" ? (
                                                <Link
                                                    href={page.href}
                                                    className="mt-4 inline-flex items-center text-sm font-bold text-brand-pinkdeep hover:underline"
                                                >
                                                    立即查看 →
                                                </Link>
                                            ) : (
                                                <p className="mt-4 text-sm font-medium text-brand-ink/40">
                                                    内容整理中，敬请期待
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <section id="disclaimer" className="mt-16 pt-8 border-t border-brand-pink/20">
                            <p className="text-xs text-brand-ink/50 leading-relaxed">
                                免责声明：本专区内容为经验整理与信息说明，不构成 CPA / EA 执业服务，也不构成移民律师意见。
                                身份合规问题风险较高，请务必根据个人情况咨询有资质的移民律师或学校 DSO 后再采取行动。
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}
