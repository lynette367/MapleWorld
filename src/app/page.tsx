import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Cloud from "@/components/illustrations/Cloud";
import WorldMap from "@/components/illustrations/WorldMap";
import { ContactForm } from "@/components/ContactForm";

import TaxCountdown from "@/components/TaxCountdown";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "2026 F1/OPT 留学生报税保姆级指南 - MapleWorld",
  description: "MapleWorld专为留学生打造的 2026 报税避坑中心。提供 OPT/CPT 身份自测、1042-S 扫盲、FICA 退税及中美税收协定 $5000 申请教程。在 4.15 截止日前，助你合规完成 1040-NR 申报。",
  alternates: {
    canonical: "https://www.mapleworld.online/",
  },
  openGraph: {
    title: "2026 F1/OPT 留学生报税保姆级指南 - MapleWorld",
    description: "Form 8843、W-2 缺失、报税身份判定，实时报税时间表提醒，留学生需要的一站式税务工具箱。",
    url: "https://www.mapleworld.online/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MapleWorld 2026 报税工具箱",
      },
    ],
  },
};

const painPoints = [
  "用 TurboTax 会不会把我当 resident 报了？它主要面向居民报税，F1 很多时候是 nonresident，选错身份就麻烦。",
  "W-2 / 1099 / 1042-S 到底要等到什么时候？材料没齐，我也不敢乱填。",
  "州税要不要一起报？NR 和 resident 的规则不一样，我看不懂。",
  "我只想合法合规地把流程做对，不想花 $100 交学费。",
  "表格一堆：1040NR、8843、税表附表，最怕点错选项导致退税变罚款。",
];

const deliverables = [
  {
    title: "报税流程地图",
    description: "从材料准备到提交前检查的全流程，让你知道下一步该做什么。",
  },
  {
    title: "表格与身份选择对照",
    description: "1040NR / 8843 等“该选哪个”的判断树，减少走错路径。",
  },
  {
    title: "材料清单",
    description: "W-2 / 1099 / 1042-S / SSN / ITIN 按情况列出，不漏关键文件。",
  },
  {
    title: "常见错误清单",
    description: "重点提示身份/居民判定、工具选择等高频坑位。",
  },
  {
    title: "提交前 10 分钟检查表",
    description: "快速查漏补缺，把低级错误挡在提交前。",
  },
];

// Steps moved to ProcessSteps.tsx

const stories = [
  {
    title: "FICA 税（SSN/Medicare）误扣",
    content:
      "OPT留学生前五年免缴FICA税，一旦被误扣，个人每笔薪资会直接损失7.65%（社保6.2%+医保1.45%）。按月薪3000美元算，每月被扣约230美元，全年损失近2800美元；薪资越高，误扣金额越大，且这笔钱无法享受对应福利，不及时追回会造成实打实的经济亏损。",
    href: "/fica-refund-calculator",
    image: "/images/fica-calculator-icon.webp",
    alt: "F1/OPT 留学生 FICA 退税金额计算器",
    anchorText: "查看：2026 F1/OPT FICA 退税申请教程",
    ariaLabel: "2026 F1/OPT FICA 退税申请教程"
  },
  {
    title: "留学生报税软件避坑",
    content:
      "为什么 F1/OPT 不建议直接用 TurboTax？误用报税软件可能导致身份合规风险！针对 F1/OPT 身份，深入解析 TurboTax 的 Resident Alien 设定缺陷，对比 Sprintax 等专供工具的优劣。一文读懂用错软件对 H1B 及绿卡申请的潜在影响，精准避坑，稳妥退税。",
    href: "/turbotax-pitfalls-2026",
    image: "/images/turbotax-warning-icon.webp",
    alt: "F1/OPT 留学生使用 TurboTax 报税的合规性风险提示",
    anchorText: "深度对比：TurboTax vs Sprintax 留学生报税优劣",
    ariaLabel: "对比 TurboTax vs Sprintax 留学生报税优劣",
    itemProp: "itemListElement"
  },
  {
    title: "1042-s到底是啥？",
    content:
      "收到1042-s表格的时候我都懵了，我根本不知道这是什么。我只是一个拿F1签证的留学生，只是在学校里面帮了一下下教授整理资料……\n真的只有一小下下，总共就收了562刀……\n不要告诉我这么点钱也会交税吧？",
    href: "/1042-vs-1042-s",
    image: "/images/form-1042-vs-1042-s-comparison.webp",
    alt: "F1/OPT 留学生 1042-s 报税指南",
    anchorText: "扫盲指南：2026 留学生 1042-S 表格申报方法",
    ariaLabel: "2026 留学生 1042-S 表格申报方法",
    itemProp: "itemListElement"
  },
  {
    title: "W2 和 1099 收入都漏报了",
    content:
      "W2是雇佣薪资报表，1099是兼职/ freelance等杂项收入报表，IRS会同步收到两份报表数据。漏报任何一类收入，都会被IRS判定少缴税款，不仅要补缴欠税，还要加收利息和罚款。发现漏报需尽快提交1040-X修正表，主动补救可降低处罚力度，保护税务合规记录。",
    href: "/amend-w2-1099",
    image: "/images/lifebuoy-icon.png",
    anchorText: "补救教程：美国 W2 和 1099 联合报税/漏报修正",
    ariaLabel: "美国 W2 和 1099 联合报税/漏报修正",
    itemProp: "itemListElement",
    priority: "urgent"
  },
  {
    title: "中美税收协定省钱工具",
    content:
      "F1/OPT 身份在美前五年通常可享受中美税收协定，减免部分或全部联邦所得税。白白多交 $500 给 IRS？F1/OPT 专属的 $5000 免税额度你用了吗？详解 Article 20(c) 申请流程，助你拿回属于自己的退税款。",
    href: "/f1-tax-treaty-calculator",
    image: "/images/tax-treaty-calculator-icon.png",
    alt: "F1 OPT 留学生中美税收协定减免额计算器",
    anchorText: "申请教程：中美税收协定 $5000 免税额度申报",
    ariaLabel: "中美税收协定 $5000 免税额度申报",
    itemProp: "itemListElement"
  },
];

const faqs = [
  {
    question: "1. 美国报税 TurboTax 和 FreeTaxUSA 哪个更适合留学生？",
    answer:
      "这是一个常见深坑。TurboTax 和 FreeTaxUSA 主要面向 Resident (RA) 开发。对于 F1 前 5 年的 Non-resident (NRA) 同学，直接使用这些软件极易导致身份报错。如果你是 NRA，建议首选 Sprintax 等适配软件；如果你已满 5 年转为 RA，FreeTaxUSA 通常比 TurboTax 更划算（联邦税申报常年免费）。",
  },
  {
    question: "2. 留学生使用 AI 工具（如 ChatGPT/Claude）辅助报税的方法和风险？",
    answer:
      "AI 可以帮你快速理解 1042-S 等税表名词，但绝不能直接让它计算税额。AI 无法实时更新 2026 年的最细微税法变动（如具体的 Standard Deduction 调整），也无法准确判定你的 $5000 中美税收协定适用性。建议将 AI 作为“名词解释器”，操作请参考本站保姆级指南。",
  },
  {
    question: "3. 既有 W-2 又有 1099 收入，留学生该如何联合报税？",
    answer:
      "很多 OPT 同学既有校内工作 (W-2) 又有兼职/自雇 (1099-NEC)。F1 NRA 同学需注意，1099 收入涉及 Self-employment 范畴，需填写不同的附表（如 Schedule C）。漏报任何一份 1099 收入都极易触发 IRS 审计，建议在 1040-NR 中统一汇总申报。",
  },
  {
    question: "4. 2026 年有哪些推荐的美国联邦税免费申报软件？",
    answer:
      "对于 NRA 身份：几乎没有完全免费的商业软件，建议先看学校是否提供 Sprintax 免费码。对于 RA 身份：推荐使用 IRS Free File 平台，或者直接使用 FreeTaxUSA。本站也提供了针对 8843 表格的免费辅助工具。",
  },
  {
    question: "5. 留学生报税找 CPA 还是自己报划算？",
    answer:
      "如果你的情况只有 W-2 和 8843，按照本站的“五步走”教程完全可以 DIY，省下 $200-$500 的服务费。但如果你涉及多州报税、大量股票交易或海外资产申报（FBAR），找专业的 CPA 能有效规避合规风险，特别是面临 H1B 或绿卡申请时，合规性远比省钱重要。",
  },
  {
    question: "6. 为什么我的补税/退税金额和同学差异巨大？",
    answer:
      "原因通常有三：1. 是否正确申报了 $5000 的中美税收协定（Treaty）；2. 是否存在 FICA 误扣（OPT 前五年免缴社保医保税）；3. 各州税法差异。例如加州不承认 $5000 协定，这会导致联邦退税多、州税补税多的情况。",
  },
  {
    question: "7. 美国州税（State Tax）低价甚至免费申报平台推荐？",
    answer:
      "州税通常是商业软件的额外付费项。RA 同学可以尝试 MyFreeTaxes 等公益平台。NRA 同学如果想追求“0 元方案”，最稳妥的方法是从州税务局官网下载 PDF 手填后邮寄。若想图省事，Sprintax 等软件提供州税加购服务。",
  },
  {
    question: "8. 美国报税 IRS 官方免费申报（Direct File）流程适用于留学生吗？",
    answer:
      "IRS Direct File 目前主要针对简单的 Resident 报税。由于大多数 F1 留学生涉及 Non-resident 身份或特殊的 Treaty 协定减免，目前仍需通过传统的 1040-NR 路径申报。建议先使用本站的“身份自测工具”确认你的报税类别。",
  },
  {
    question: "9. 2026 留学生 / 海外工作者（F1/OPT/H1B）报税核心攻略？",
    answer:
      "核心在于“身份判定”。F1/OPT 阶段重点是 Form 8843 和 $5000 协定；转 H1B 后则需关注全球收入申报。本站提供一站式工具箱，帮助你精准避开 TurboTax 误选身份、FICA 税误扣等高频坑位。",
  },
  {
    question: "10. 留学生买股票、撸羊毛（开卡奖励）产生的资本增值如何报税？",
    answer:
      "股票买卖产生的 Capital Gain，NRA 身份通常按 30% 固定税率申报（除非符合特定天数要求），且不能抵扣 $3000 损失。银行开卡奖励通常会收到 1099-INT，需视同普通收入申报。具体请参考本站《股票与数字货币报税专题》。",
  },
];

export default function Home() {
  return (
    <main className="pb-16 text-brand-ink">
      <span style={{ display: 'none' }}>Impact-Site-Verification: eed619a2-8edf-4f11-9504-97edd29deaf9</span>


      <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#F7C6D9] bg-paper px-4 pt-40 pb-12 sm:pb-20 lg:pb-32">
        <WorldMap />
        <div className="pointer-events-none absolute inset-0 bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-brand-pink/60" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1] text-brand-ink drop-shadow-sm">
            2026 F1/OPT 留学生<br className="hidden sm:block" />报税保姆级指南 & 避坑工具箱
          </h1>

          {/* 逾期报税自救指南入口 */}
          <Link
            href="/guides/f1-late-filing-guide"
            className="mt-8 w-full max-w-lg rounded-[24px] border border-white/60 bg-white/40 p-6 backdrop-blur-md shadow-[0_20px_50px_rgba(247,198,217,0.4)] transition hover:shadow-[0_25px_60px_rgba(247,198,217,0.5)] block"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-xs font-bold bg-green-100 text-green-700 rounded-full">新上线</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-brand-ink/90">
              F1 报税迟交怎么办？最新留学生【逾期报税自救指南】及补救流程
            </p>
            <div className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-pinkdeep shadow-lg transition hover:scale-[1.02] hover:bg-white/90 hover:shadow-xl">
              查看指南 →
            </div>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] min-w-[200px] min-h-[200px] max-w-[600px] max-h-[600px] pointer-events-none">
          <Image
            src="/images/hero/traveler.jpg"
            alt="小男孩拖着行李箱"
            width={1650}
            height={1275}
            className="w-full h-full object-contain opacity-80"
            priority
            unoptimized
          />
        </div>

        <div className="absolute top-10 right-0 w-[30vw] h-[30vh] max-w-[300px] max-h-[300px] pointer-events-none">
          <Image
            src="/images/hero/airplane.png"
            alt="飞机"
            width={300}
            height={300}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="pointer-events-none absolute right-[12%] top-1/2 hidden sm:block">
          <div className="cloud-float-fast">
            <Cloud />
          </div>
        </div>
        <div className="pointer-events-none absolute left-[12%] top-[15%] hidden sm:block">
          <div className="cloud-float-slow">
            <Cloud />
          </div>
        </div>
      </section>

      <section className="px-4 pt-12 pb-0 sm:pt-16 sm:pb-0 lg:pt-20 lg:pb-0">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              你可能也被这些问题困住过
            </h2>
          </div>
          <div className="mt-6 rounded-[28px] border border-brand-pink/40 bg-white/85 p-6 sm:p-8 shadow-[0_18px_60px_rgba(244,185,200,0.3)] flex flex-col gap-4">
            <Link 
              href="/guides" 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pinkdeep hover:bg-brand-pink/20 hover:scale-[1.02] transition-all group w-fit"
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
                Guides / 教程
              </span>
              <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">→</span>
            </Link>
            <Link
              href="/form-8843-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 F1留学生没收入也要报税吗？不报税的后果惩罚？（附Form 8843 PDF 下载）》
              </h3>
            </Link>
            <Link
              href="/form-8843-amend-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 Form 8843 填错了/寄早了？留学生修正申报 (Amended Return) 全攻略(附 PDF 下载)》
              </h3>
            </Link>
            <Link
              href="/w2-missing-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 报税季：F1 学生没收到 W-2 表格怎么办？教你 4 步联系雇主及 IRS 替代方案(附 PDF 下载)》
              </h3>
            </Link>
            <Link
              href="/1042-vs-1042-s"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《1042 vs 1042-S 有什么区别？2026 留学生报税表格最全解析(附 PDF 下载)》
              </h3>
            </Link>
            <Link
              href="/guides/j1-tax-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep bg-brand-pink/5 p-3 rounded-2xl border border-brand-pink/10 transition hover:scale-[1.01]"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep text-brand-ink">
                ✨《2026 J1 报税避坑：离 4.15 截止只剩最后几天，你漏报了吗？》
              </h3>
            </Link>
            <Link
              href="/guides/opt-1040-fix"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《救急！OPT 报税发现填成了 1040 (Resident) 怎么办？4.15 前的最后补救指南》
              </h3>
            </Link>
          </div>
          <div
            className="mt-6 block rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)] flex flex-col gap-4"
          >
            <Link 
              href="/tools" 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pinkdeep hover:bg-brand-pink/20 hover:scale-[1.02] transition-all group w-fit"
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
                Tools / 工具
              </span>
              <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">→</span>
            </Link>

            <Link
              href="/tax-deadlines-2026"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                查看 2026 美国 IRS 报税截止日期与关键时间表 →
              </h3>
            </Link>

            <Link
              href="/tools/opt-tax"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                2026 留学生报税，你是 Resident 还是 Non-Resident(NRA)？→
              </h3>
            </Link>

            <Link
              href="/form-8843-tutorial-2026"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 Form 8843 在线填写助手：手把手辅助版 5 分钟搞定免税声明》
              </h3>
            </Link>
            <Link
              href="/opt-late-filing-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-semibold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep">
                《2026 OPT 报税逾期补救指南：罚款计算与身份风险详解》
              </h3>
            </Link>
            <Link
              href="/1040-nr-filling-guide"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep bg-brand-pink/10 p-4 rounded-2xl border border-brand-pink/20 transition hover:scale-[1.01]"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-bold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep text-brand-ink">
                ✨【2026 强推】留学生 1040-NR 填写指南：手把手教你申报 $5000 免税额 (附 PDF 下载)
              </h3>
            </Link>
          </div>

          {/* 身份合规专区入口 —— 与上面 Guides / Tools 两个板块保持同一视觉结构 */}
          <div
            className="mt-6 block rounded-[28px] border border-brand-pink/40 bg-white/90 p-6 shadow-[0_18px_60px_rgba(244,185,200,0.25)] flex flex-col gap-4"
          >
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pinkdeep hover:bg-brand-pink/20 hover:scale-[1.02] transition-all group w-fit"
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
                Compliance / 身份合规
              </span>
              <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">→</span>
            </Link>

            <Link
              href="/compliance/can-f1-open-company"
              className="group flex gap-3 text-sm sm:text-base text-brand-ink/80 hover:text-brand-pinkdeep bg-brand-pink/10 p-4 rounded-2xl border border-brand-pink/20 transition hover:scale-[1.01]"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-pinkdeep group-hover:bg-brand-pinkhover" />
              <h3 className="font-bold underline underline-offset-4 decoration-brand-pink/40 group-hover:decoration-brand-pinkdeep text-brand-ink">
                ✨【新专题】F1 / OPT 留学生可以开公司吗？身份合规完整指南 + 风险自测
              </h3>
            </Link>

            <p className="text-xs text-brand-ink/40 pl-1">
              开公司之后要不要填 W8BEN、有哪些法律红线，专区内容持续更新中
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 pb-10 sm:pt-16 lg:pt-10 lg:pb-10">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              2026 留学生报税 5 大避坑红线
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => {
              const cardContent = (
                <article className="flex flex-col h-full">
                  <header className="flex items-start gap-4">
                    {'image' in story && story.image && (
                      <div className="shrink-0 p-1 bg-white rounded-xl shadow-sm border border-brand-pink/10">
                        <Image
                          src={story.image}
                          alt={story.alt || story.title}
                          title={story.title}
                          width={32}
                          height={32}
                          className="rounded-lg object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-brand-ink leading-snug group-hover:text-brand-pinkdeep transition-colors">
                      {story.title}
                    </h3>
                  </header>
                  <p className="mt-4 text-sm leading-relaxed text-brand-ink/70 flex-1 whitespace-pre-line">
                    {story.content}
                  </p>
                  {'anchorText' in story && story.anchorText && (
                    <footer className="mt-6 text-sm font-bold text-brand-pinkdeep group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {story.anchorText}
                    </footer>
                  )}
                </article>
              );

              const cardClass = "group block rounded-[32px] border border-brand-pink/40 bg-white/90 p-7 shadow-[0_20px_60px_rgba(244,185,200,0.25)] h-full transition hover:shadow-[0_25px_70px_rgba(247,198,217,0.4)] hover:scale-[1.01]";

              return story.href ? (
                <div
                  key={story.title}
                  className="tax-card"
                  aria-label={'ariaLabel' in story ? story.ariaLabel : undefined}
                  itemProp={'itemProp' in story ? story.itemProp : undefined}
                >
                  <Link
                    href={story.href}
                    className={cardClass}
                  >
                    {cardContent}
                  </Link>
                </div>
              ) : (
                <div key={story.title} className={cardClass}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 pb-10 sm:pt-16 lg:pt-10 lg:pb-10">
        <div className="page-shell">
          <div className="max-w-3xl">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              热门搜索
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 overflow-hidden">
            {[
              { label: "1040 填表", href: "/1040-nr-filling-guide", color: "#8E9775" },
              { label: "美国报税 TurboTax", href: "/opt-turbotax", color: "#E28E8E" },
              { label: "FreeTaxUSA", href: "/opt-turbotax", color: "#94B49F" },
              { label: "FICA 退税", href: "/fica-refund-calculator", color: "#D4BEAD" },
              { label: "Form 8843", href: "/guides/j1-tax-guide", color: "#A2B5BB" },
              { label: "SPT 身份自测", href: "/tools/opt-tax", color: "#BB9981" },
              { label: "Tax Treaty", href: "/guides/j1-tax-guide", color: "#8E9775" },
              { label: "J1 Tax", href: "/guides/j1-tax-guide", color: "#E28E8E" },
              { label: "1040-X 修正", href: "/guides/opt-1040-fix", color: "#94B49F" },
              { label: "逾期报税补救", href: "/guides/f1-late-filing-guide", color: "#D4BEAD" },
              { label: "F1 开公司", href: "/compliance/can-f1-open-company", color: "#A2B5BB" },
            ].map((tag) => (
              <Link
                key={tag.label}
                href={tag.href}
                style={{ backgroundColor: tag.color }}
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.05] hover:shadow-md active:scale-[0.98]"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="px-4 py-12 sm:py-16 lg:py-20 bg-brand-pink/10">
        <div className="page-shell">
          <div className="text-center">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              OPT报税五步走
            </h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-ink/50 font-bold">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ink">
              常见问题
            </h2>
          </div>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[24px] border border-brand-pink/35 bg-white/90 p-5 shadow-[0_12px_40px_rgba(244,185,200,0.2)] open:bg-brand-pink/5 transition-all"
              >
                <summary className="cursor-pointer text-sm sm:text-base font-bold text-brand-ink list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-brand-pinkdeep group-open:rotate-180 transition-transform font-mono text-xl">+</span>
                </summary>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-brand-ink/70 border-t border-brand-pink/10 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "MapleWorld Tax Tool",
            "description": "2026 美国留学生报税身份自测及 8843 填报工具",
            "applicationCategory": "TaxCalculation",
            "operatingSystem": "All",
            "url": "https://www.mapleworld.online/",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "hasPart": [
              {
                "@type": "ItemList",
                "name": "2026 留学生报税 5 大避坑红线",
                "itemListElement": stories.map((story, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": story.title,
                    "url": `https://www.mapleworld.online${story.href}`
                  }
                }))
              },
              {
                "@type": "ItemList",
                "name": "OPT报税五步走",
                "description": "2026 留学生 F1/OPT 身份报税合规全流程导引",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "2026 美国报税身份判定 (F1/OPT NRA 自测)",
                    "item": "https://www.mapleworld.online/tools/opt-tax"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "准备W-2/1099表格",
                    "item": "https://www.mapleworld.online/w2-missing-guide"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "查看：2026 留学生 1040-NR 手把手填表教程",
                    "item": "https://www.mapleworld.online/1040-nr-filling-guide"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "申报8843表",
                    "item": "https://www.mapleworld.online/form-8843-tutorial-2026"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "邮寄/电子提交(e-file)",
                    "item": "https://www.mapleworld.online/turbotax-pitfalls-2026"
                  }
                ]
              }
            ]
          })
        }}
      />
    </main>
  );
}

