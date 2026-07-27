import Link from 'next/link';

export default function SidebarCompliance() {
    return (
        <div className="rounded-2xl border border-brand-pink/30 bg-brand-pink/5 p-6 shadow-[0_4px_20px_rgba(244,185,200,0.15)]">
            <h3 className="font-bold text-brand-ink mb-4 text-lg border-b border-brand-pink/20 pb-2">
                身份合规专区 / 相关阅读
            </h3>
            <ul className="space-y-4">
                <li>
                    <Link
                        href="/compliance"
                        className="block text-center bg-brand-pink hover:bg-brand-pinkdeep/90 text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-[0_4px_15px_rgba(224,64,106,0.2)] hover:shadow-[0_6px_20px_rgba(224,64,106,0.3)] hover:-translate-y-0.5 active:scale-[0.98] text-sm leading-snug"
                    >
                        查看完整《留学生身份合规指南》→
                    </Link>
                </li>
                <li>
                    <Link href="/compliance/can-f1-open-company" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            🏢 F1 / OPT 能不能开公司？身份风险自测
                        </p>
                    </Link>
                </li>
                <li>
                    <span className="block cursor-not-allowed text-sm font-medium text-brand-ink/40 leading-relaxed">
                        📝 W8BEN 填写解析（即将上线）
                    </span>
                </li>
                <li>
                    <span className="block cursor-not-allowed text-sm font-medium text-brand-ink/40 leading-relaxed">
                        ⚖️ 开公司法律注意事项（即将上线）
                    </span>
                </li>
                <li className="pt-2 border-t border-brand-pink/20">
                    <Link href="/opt-turbotax" className="block group">
                        <p className="text-sm font-medium text-brand-ink/90 group-hover:text-brand-pinkdeep transition-colors leading-relaxed">
                            ⚠️ 开公司之后，报税身份会不会变？
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
