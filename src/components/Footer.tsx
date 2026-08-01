import Link from "next/link";
import Image from "next/image";

const footerNav = [
  {
    title: "申报专区 (F1/OPT Filing)",
    links: [
      { label: "1040-NR 填表指南", href: "/1040-nr-filling-guide" },
      { label: "Form 8843 申报教程", href: "/form-8843-guide" },
      { label: "W2/1099 漏报修正", href: "/amend-w2-1099" },
      { label: "J1 报税避坑指南", href: "/guides/j1-tax-guide" },
      { label: "1040-X 修正指南", href: "/guides/opt-1040-fix" },
      { label: "州税申报低价平台", href: "#", disabled: true },
    ],
  },
  {
    title: "政策扫盲 (Knowledge Base)",
    links: [
      { label: "中美税收协定 $5000 详解", href: "/f1-tax-treaty-calculator" },
      { label: "FICA 税退税资格说明", href: "/fica-refund-calculator#eligibility" },
      { label: "TurboTax vs Sprintax 对比", href: "/turbotax-pitfalls-2026" },
      { label: "IRS 2026 关键截止日期", href: "/tax-deadlines-2026" },
    ],
  },
  {
    title: "快速工具 (Quick Tools)",
    links: [
      { label: "SPT 报税身份自测", href: "/tools/opt-tax" },
      { label: "FICA 退税金额计算器", href: "/fica-refund-calculator" },
      { label: "Form 8843 在线助手", href: "/form-8843-tutorial-2026" },
      { label: "2026 报税倒计时", href: "/tax-deadlines-2026" },
    ],
  },
  {
    title: "身份合规 (Status & Compliance)",
    links: [
      { label: "F1/OPT 能否开公司？完整指南", href: "/compliance/can-f1-open-company" },
      { label: "W8BEN 填写解析", href: "#", disabled: true },
      { label: "开公司法律注意事项", href: "#", disabled: true },
    ],
  },
];

const seoKeywords = [
  "IRS Form 8843",
  "Non-Resident Alien Tax",
  "F1 OPT Tax Return",
  "International Student Tax Guide",
  "1040-NR filing",
  "Tax Treaty USA China",
];

function FooterLink({ label, href, disabled }: { label: string, href: string, disabled?: boolean }) {
  if (disabled) {
    return (
      <span 
        className="block py-1 text-sm font-medium text-brand-ink/30 cursor-not-allowed select-none group relative"
        title="专题建设中 (Coming Soon)"
      >
        {label}
        <span className="hidden group-hover:inline ml-2 text-[10px] bg-brand-ink/5 px-1.5 py-0.5 rounded opacity-60">Soon</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="block py-1 text-sm font-medium text-brand-ink/65 transition hover:text-brand-pinkdeep hover:translate-x-1"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="relative mt-20 px-4 pb-12">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-brand-pink/20 bg-brand-pink/10 p-8 shadow-[0_25px_60px_rgba(247,198,217,0.2)] backdrop-blur-xl sm:p-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-ink/50">
                MapleWorld
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                专业、精准、合规、守护
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                专注为全球梦想家提供专业的美国税务合规工具。由留学生为留学生打造，致力于消除跨境税务信息差，守护每一份在美身份。
              </p>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-start gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-pinkdeep">
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-brand-pinkdeep" />
                  扫码进行 2026 留学生报税咨询
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 p-2 shadow-sm transition hover:scale-[1.02]">
                  <Image
                    src="/images/2026-us-tax-help-qr.webp"
                    alt="2026 留学生报税互助群二维码 - MapleWorld"
                    width={100}
                    height={100}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <nav className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:w-[760px]">
            {footerNav.map((category) => (
              <div key={category.title} className="flex flex-col gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-ink/40">
                  {category.title}
                </p>
                <div className="flex flex-col gap-2">
                  {category.links.map((link) => (
                    <FooterLink 
                      key={link.label} 
                      label={link.label} 
                      href={link.href} 
                      disabled={link.disabled} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 space-y-8 border-t border-brand-ink/5 pt-10">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-widest text-brand-ink/30">
            {seoKeywords.map((keyword) => (
              <span key={keyword} className="transition-colors hover:text-brand-pinkdeep cursor-default">
                {keyword}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="max-w-2xl text-center text-[10px] font-medium leading-relaxed tracking-wide text-brand-ink/40">
              免责声明：本站非 CPA/EA 执业服务，不提供代报代填或法律建议。内容仅供参考，具体以 IRS 及各州税务局官方说明为准。
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-ink/30">
              © {new Date().getFullYear()} MapleWorld Compliance Engineering. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
