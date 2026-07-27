# MapleWorld — Project Context

> 一站式服务 F1 / OPT 在美留学生报税的内容 + 工具网站。
> 生产域名：**https://www.mapleworld.online**

---

## 1. 项目定位

MapleWorld 是一个面向在美中国留学生（F1 / J1 / OPT）的**报税指南 & 自动化工具网站**，核心解决以下痛点：

- 1040-NR vs 1040 身份判断
- Form 8843 填写（无收入也需申报）
- 1042-S 奖学金收入解析
- W-2 缺失处理
- Tax Treaty（中美税收协定）$5000 减免申请
- FICA 退税计算
- TurboTax vs Sprintax 的正确选择

---

## 2. 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | **Next.js 16**（App Router，TypeScript） |
| 样式 | **Tailwind CSS v4** + 自定义 CSS 变量 |
| 字体 | **Nunito**（Google Fonts，通过 `next/font/google` 加载） |
| 图标 | **lucide-react** |
| 邮件发送 | **Resend**（API Key 通过环境变量注入） |
| 分析 | Google Analytics 4（`G-5JK5TTVP1J`）+ Google Tag Manager（`GTM-5P6LBHL6`），**仅在 production 环境启用** |
| 部署 | **Vercel** |
| 语言环境 | `<html lang="zh-CN">`，内容以中文为主 |

---

## 3. 目录结构

```
MapleWorld/
├── src/
│   ├── app/                        # Next.js App Router 根目录
│   │   ├── layout.tsx              # 全局 Root Layout（Header + Footer + Analytics）
│   │   ├── page.tsx                # 首页（/）约 32KB，包含所有首页 section
│   │   ├── globals.css             # 全局样式 + CSS 变量 + 自定义动画
│   │   ├── robots.ts               # /robots.txt 生成
│   │   ├── sitemap.ts              # /sitemap.xml 生成
│   │   ├── favicon.ico
│   │   ├── (guides)/               # Route Group：报税指南类页面（不影响 URL）
│   │   │   ├── 1042-vs-1042-s/     # → /1042-vs-1042-s
│   │   │   ├── form-8843-amend-guide/  # → /form-8843-amend-guide
│   │   │   ├── form-8843-guide/    # → /form-8843-guide
│   │   │   ├── guides/             # → /guides（动态或静态列表页）
│   │   │   ├── tax-deadlines-2026/ # → /tax-deadlines-2026
│   │   │   └── w2-missing-guide/   # → /w2-missing-guide
│   │   ├── (tools)/                # Route Group：工具类页面（不影响 URL）
│   │   │   ├── tools/              # → /tools（工具列表页）
│   │   │   │   └── opt-tax/        # → /tools/opt-tax（SPT 计算器）
│   │   │   ├── 1040-nr-filling-guide/
│   │   │   ├── amend-w2-1099/
│   │   │   ├── f1-tax-treaty-calculator/
│   │   │   ├── fica-refund-calculator/
│   │   │   ├── form-8843-tutorial-2026/
│   │   │   ├── opt-late-filing-guide/
│   │   │   ├── opt-turbotax/
│   │   │   └── turbotax-pitfalls-2026/
│   │   ├── api/
│   │   │   └── contact/            # POST /api/contact → 调用 Resend 发送邮件
│   │   └── archive/                # 旧内容归档（study/volunteer/aupair/work/immigration）
│   ├── components/                 # 共享 React 组件
│   │   ├── Header.tsx              # 顶部导航
│   │   ├── Footer.tsx              # 页脚
│   │   ├── TaxCountdown.tsx        # 报税截止倒计时组件
│   │   ├── TaxQuiz.tsx             # 报税身份自测问卷
│   │   ├── Form8843Stepper.tsx     # Form 8843 逐步填写向导（最大组件，23KB）
│   │   ├── TaxTreatyEstimator.tsx  # 中美 Tax Treaty 估算工具
│   │   ├── W2Estimator.tsx         # W-2 / 1042-S 税金估算
│   │   ├── Tax1042SAssessment.tsx  # 1042-S 评估工具
│   │   ├── AmIScrewedWidget.tsx    # "我是不是报错了？"快速自测
│   │   ├── ContactForm.tsx         # 联系表单（调用 /api/contact）
│   │   ├── CopyableEmail.tsx       # 可复制邮箱组件
│   │   ├── Breadcrumbs.tsx         # 面包屑导航
│   │   ├── ProcessSteps.tsx        # 流程步骤展示
│   │   ├── ServiceCard.tsx         # 服务卡片
│   │   ├── JourneyPageTemplate.tsx # 通用 Journey 页面模板
│   │   ├── Sidebar8843.tsx         # Form 8843 页面侧边栏
│   │   ├── BrandStoryHope.tsx      # 品牌故事（Hope 版）
│   │   ├── FooterHope.tsx          # 简化版 Footer
│   │   ├── ServiceCardHope.tsx     # Hope 主题服务卡片
│   │   ├── WhyUsHope.tsx           # "为什么选择我们"模块
│   │   ├── illustrations/          # SVG / 插图资源
│   │   └── tools/
│   │       └── TurboTaxQuiz.tsx    # TurboTax 适用性判定问卷（最大工具组件，26KB）
│   └── lib/
│       ├── guides.ts               # 所有 Guide 的内容数据（TypeScript 定义 + 数组）
│       ├── content.ts              # allGuides / allTools 列表（用于导航和首页展示）
│       └── email.ts                # sendContactEmail() 工具函数（封装 Resend）
├── public/                         # 静态资源（图片、纹理、og-image 等）
├── next.config.ts                  # Next.js 配置（redirects / rewrites / headers）
├── tailwind.config.js              # Tailwind CSS 配置
├── tsconfig.json
└── package.json
```

---

## 4. 路由设计

### Route Groups
项目使用两个 Route Group，**不影响最终 URL**：
- `(guides)/` — 偏内容、SEO 向的攻略页面
- `(tools)/` — 含有交互式计算器 / 问卷的工具页面

### Archive 路由
`next.config.ts` 中配置了 rewrites，将旧路径（`/study`, `/volunteer`, `/aupair`, `/work`, `/immigration`）内部重写到 `/archive/*`，并通过 `X-Robots-Tag: noindex, follow` 阻止索引。

### 主要页面与 URL 对照

| URL | 说明 |
|-----|------|
| `/` | 首页 |
| `/guides` | 指南列表 |
| `/guides/[slug]` | 动态指南详情（数据来自 `src/lib/guides.ts`） |
| `/tools` | 工具列表 |
| `/tools/opt-tax` | SPT 报税身份计算器 |
| `/form-8843-tutorial-2026` | Form 8843 填写助手 |
| `/1042-vs-1042-s` | 1042-S 指南 |
| `/form-8843-guide` | Form 8843 无收入申报指南 |
| `/form-8843-amend-guide` | Form 8843 修正指南 |
| `/tax-deadlines-2026` | 2026 报税时间表 |
| `/w2-missing-guide` | W-2 缺失处理 |
| `/f1-tax-treaty-calculator` | 中美 Tax Treaty 计算器 |
| `/fica-refund-calculator` | FICA 退税计算器 |
| `/1040-nr-filling-guide` | 1040-NR 填表指南 |
| `/amend-w2-1099` | W-2/1099 漏报补救 |
| `/opt-late-filing-guide` | 逾期申报补救 |
| `/opt-turbotax` | TurboTax 适用性判定 |
| `/turbotax-pitfalls-2026` | TurboTax 避坑指南 |
| `POST /api/contact` | 联系表单 API |

---

## 5. 数据层

### `src/lib/guides.ts`
所有指南的**结构化内容数据**，定义在 TypeScript 中（无数据库/CMS）。

**核心类型：**
```ts
type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "quiz"; id: string };

type GuideSection = {
  heading: string;
  level?: 2 | 3;
  blocks: GuideBlock[];
};

type Guide = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
  cta: { label: string; href: string };
};
```

目前内置 Guide slug：`f1-tax-residency`、`turbotax-pitfalls`、`1040nr-guide`、`1040x-fix`、`opt-1040-fix`（以及更多）。

### `src/lib/content.ts`
导出 `allGuides` 和 `allTools` 两个数组（`ContentItem[]`），用于首页展示卡片和 `/tools`、`/guides` 列表页。

### `src/lib/email.ts`
封装 `sendContactEmail(payload)` 函数，需要环境变量：
- `RESEND_API_KEY` — Resend 服务密钥
- `CONTACT_EMAIL` — 收件地址（默认 `yqying95@gmail.com`）

---

## 6. 设计系统

### CSS 变量（`globals.css`）
```css
--background:      #fff9f2   /* 暖米白，全站底色 */
--foreground:      #302a2f   /* 深棕墨色 */
--brand-pink:      #f7c6d9   /* 主题粉 */
--brand-sky:       #b8d9ff   /* 天蓝辅助色 */
--brand-blush:     #ffe3ef   /* 浅玫瑰 */
--brand-sand:      #fcdcc2   /* 沙橙 */
--brand-ink:       #2b1f2d   /* 最深墨色 */
--brand-mist:      #f4f9ff   /* 极浅蓝白 */
--brand-hotpink:   #ff69b4
--brand-pinkdeep:  #e499b3
--brand-pinkhover: #c87f9b
```

### 常用 CSS 工具类
- **`.page-shell`** — 全宽最大 `max-w-6xl`，水平居中，左右 `px-6`
- **`.soft-card`** — 带悬浮动画的白色玻璃卡片（`bg-white/80`，pink shadow）
- **`.glass-panel`** — 半透明白色面板（`rgba(255,255,255,0.9)`）
- **`.bg-paper`** — 粉色纸张纹理背景
- **`.washi-tape-cta`** — 和纸胶带风格 CTA 按钮（Clay Gray → Espresso Brown hover）

### 动画
- **`.animate-parallax-fast`** — 12s 浮动循环（装饰元素）
- **`.animate-parallax-slow`** — 20s 浮动循环（背景装饰）
- **`.cta-breathe`** — CTA 按钮呼吸光晕（3.2s）
- **`.cloud-float-slow / fast`** — 云朵飘动
- **`.airplane-glide`** — 飞机滑翔

### 字体
Nunito（Google Fonts），权重 400/500/600/700/800，CSS 变量 `--font-body`。

---

## 7. 关键组件说明

| 组件 | 用途 | 备注 |
|------|------|------|
| `Header.tsx` | 顶部全局导航 | 所有页面共用 |
| `Footer.tsx` | 页脚（含友链、法律声明）| 约 6KB |
| `Form8843Stepper.tsx` | Form 8843 逐步填写向导 | 最复杂的 UI 组件，23KB |
| `TurboTaxQuiz.tsx` | TurboTax 适用性多步问卷 | 最大工具组件，26KB |
| `TaxTreatyEstimator.tsx` | Tax Treaty $5000 估算工具 | 含中美条约逻辑 |
| `TaxQuiz.tsx` | 报税身份自测 | 嵌入首页或专页 |
| `AmIScrewedWidget.tsx` | "我报税报错了吗？"快速诊断 | 首页嵌入 |
| `ContactForm.tsx` | 用户联系表单 | 提交到 `/api/contact` |
| `TaxCountdown.tsx` | 报税截止倒计时 | 动态计算剩余天数 |

---

## 8. API Routes

### `POST /api/contact`
- **文件**：`src/app/api/contact/`
- **功能**：接收联系表单，通过 `sendContactEmail()` 调用 Resend 发送邮件
- **依赖**：`RESEND_API_KEY` 环境变量

---

## 9. SEO 约定

- 每个页面应通过 `export const metadata: Metadata` 提供 `title`、`description`
- Root layout 的 `metadata.title.template` 为 `"%s · MapleWorld"`
- `metadataBase` 设为 `https://www.mapleworld.online`
- OG image 路径：`/og-image.png`（1200×630）
- `sitemap.ts` 和 `robots.ts` 自动生成 SEO 文件

---

## 10. 环境变量

| 变量名 | 用途 | 必填 |
|--------|------|------|
| `RESEND_API_KEY` | Resend 邮件服务密钥 | 否（缺失时跳过发送，打印警告） |
| `CONTACT_EMAIL` | 收件邮箱（默认 `yqying95@gmail.com`） | 否 |

本地配置文件：`.env.local`（已加入 `.gitignore`）。

---

## 11. 开发命令

```bash
npm run dev     # 启动本地开发服务器（http://localhost:3000）
npm run build   # 构建生产包
npm run start   # 启动生产服务器
npm run lint    # ESLint 检查
```

---

## 12. 添加新页面的规范

1. **指南页**：在 `src/app/(guides)/[slug]/` 下新建 `page.tsx`，同步在 `src/lib/content.ts` 的 `allGuides` 中添加入口，若需要结构化内容则在 `src/lib/guides.ts` 的 `guides` 数组中添加 `Guide` 对象。
2. **工具页**：在 `src/app/(tools)/[slug]/` 下新建 `page.tsx`，同步在 `src/lib/content.ts` 的 `allTools` 中添加入口，将交互组件放在 `src/components/` 或 `src/components/tools/`。
3. **样式**：优先使用 `globals.css` 中已定义的工具类（`.page-shell`, `.soft-card`, `.glass-panel` 等）和品牌色 CSS 变量；避免内联颜色硬编码。
4. **SEO**：每个页面必须 `export const metadata`，title 应简洁含关键词（中文），描述需说明目标受众。

---

## 13. 免责声明惯例

所有内容页面底部需包含免责声明，标准措辞为：

> 本文为经验整理与填表说明，不构成 CPA / EA 或专业税务建议。请根据个人情况判断，如有疑问请咨询专业人士。
