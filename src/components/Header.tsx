import Link from "next/link";

type NavLink = { label: string; href: string; disabled?: boolean };

const navGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "申报专区",
    links: [
      { label: "1040-NR 填表指南", href: "/1040-nr-filling-guide" },
      { label: "Form 8843 申报教程", href: "/form-8843-guide" },
      { label: "W2/1099 漏报修正", href: "/amend-w2-1099" },
      { label: "J1 报税避坑指南", href: "/guides/j1-tax-guide" },
    ],
  },
  {
    title: "政策扫盲",
    links: [
      { label: "中美税收协定 $5000 详解", href: "/f1-tax-treaty-calculator" },
      { label: "FICA 税退税资格说明", href: "/fica-refund-calculator#eligibility" },
      { label: "TurboTax vs Sprintax 对比", href: "/turbotax-pitfalls-2026" },
      { label: "IRS 2026 关键截止日期", href: "/tax-deadlines-2026" },
    ],
  },
  {
    title: "身份合规",
    links: [
      { label: "F1/OPT 能否开公司？", href: "/compliance/can-f1-open-company" },
      { label: "W8BEN 填写解析", href: "/compliance", disabled: true },
      { label: "开公司法律注意事项", href: "/compliance", disabled: true },
    ],
  },
];

function NavDropdown({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex cursor-default items-center gap-1 text-sm font-semibold text-brand-ink/70 transition hover:text-brand-pinkdeep"
      >
        {title}
        <span className="text-[10px] transition-transform group-hover:rotate-180">▾</span>
      </button>

      {/* pt-3 撑开一段"缓冲区"，让鼠标从按钮移到面板之间不会因为空隙而触发消失 */}
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-brand-pink/20 bg-white p-2 shadow-[0_20px_50px_rgba(244,185,200,0.35)]">
          {links.map((link) =>
            link.disabled ? (
              <span
                key={link.label}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-brand-ink/30 cursor-not-allowed"
              >
                {link.label}
                <span className="ml-2 text-[10px] bg-brand-ink/5 px-1.5 py-0.5 rounded opacity-70">Soon</span>
              </span>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-brand-ink/75 transition hover:bg-brand-pink/10 hover:text-brand-pinkdeep"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="relative z-50 w-full border-b border-brand-pink/20 bg-brand-pink/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink/70">
            MapleWorld
          </span>
          <p className="hidden text-sm text-brand-ink/80 lg:block">
            美国 F1 + OPT 报税，把不该亏的税拿回来
          </p>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navGroups.map((group) => (
            <NavDropdown key={group.title} title={group.title} links={group.links} />
          ))}
          <Link
            href="/tools"
            className="text-sm font-semibold text-brand-ink/70 transition hover:text-brand-pinkdeep"
          >
            快速工具
          </Link>
        </nav>

        <Link
          href="/#footer"
          className="inline-flex items-center justify-center rounded-full bg-brand-pinkdeep px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-brand-pinkhover"
        >
          扫码咨询
        </Link>
      </div>
    </header>
  );
}
