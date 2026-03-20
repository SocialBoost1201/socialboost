# UI/UX Global Rules Violation Report

- Project: socialboost
- Generated: 2026-03-20T00:13:16.368Z
- Scope: UI files (84 files)
- Method: static analysis (regex-based heuristic)

## Critical

1. Fixed要素に対するmain余白不足の疑い
- 判定理由: fixed系記述はあるが、main領域の bottom padding 調整を示す記述が未検出。本文被りの重大リスク。
- 根拠:
- socialboost/src/components/layout/Header.tsx:82 `"fixed inset-x-0 top-0 z-50 transition-all duration-300",`
- socialboost/src/components/layout/Header.tsx:150 `"fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out md:hidden flex flex-col pt-[84px]", // ヘッダー分（約80px強）を開ける`
- socialboost/src/components/sections/WorkGallery.tsx:89 `className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"`
- socialboost/src/components/ui/StickyCtaBar.tsx:36 `className="fixed bottom-0 left-0 right-0 z-50 md:hidden"`

## High

1. absolute指定の過多
- 判定理由: absolute系記述が 141 件。重なり/改行崩れ/保守性低下の高リスク。
- 根拠:
- socialboost/src/app/works/page.tsx:71 `<div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />`
- socialboost/src/app/works/page.tsx:72 `<div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-brand-primary/10 to-transparent pointer-events-none" />`
- socialboost/src/components/sections/CTASection.tsx:14 `className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"`
- socialboost/src/components/sections/CTASection.tsx:19 `<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '3`
- socialboost/src/components/sections/CTASection.tsx:29 `className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none z-0"`
- socialboost/src/components/sections/CTASection.tsx:39 `className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0"`
- socialboost/src/components/sections/FlowSection.tsx:23 `<div className="absolute left-[28px] top-6 bottom-6 w-px bg-brand-primary/20 hidden md:block" />`
- socialboost/src/components/sections/FlowSection.tsx:37 `<div className="absolute top-7 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45 hidden md:block" />`

## Medium

1. 行間不足の疑い
- 判定理由: line-height が詰まる指定を 2 件検出。可読性低下の可能性。
- 根拠:
- socialboost/src/components/sections/service-detail/ServiceHeroSection.tsx:76 `className="text-[2.2rem] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-navy tracking-tighter mb-8 md:mb-12 text-balance lg:max-w-5xl"`
- socialboost/src/components/sections/services/ServiceHeroSection.tsx:55 `<h1 className="text-[2.6rem] leading-[0.9] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-brand-navy tracking-tighter mb-10 md:mb-12">`

## Low

- なし

## Notes

- このレポートは静的解析ベースのため、最終判断は実機表示（1920/1440/1024/768/430/390/375）で確認すること。
- Fixed要素・重なり・改行崩れは、実際のDOM/表示幅で再検証すること。
