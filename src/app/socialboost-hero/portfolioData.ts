export type HeroPortfolioSlot =
  | "slot-front-left"
  | "slot-front-center"
  | "slot-mid-right"
  | "slot-back-top"
  | "slot-back-bottom";

export type HeroPortfolioItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  href?: string;
  initialSlot: HeroPortfolioSlot;
};

export const HERO_PORTFOLIO_ITEMS: HeroPortfolioItem[] = [
  {
    id: "corporate-front",
    src: "/images/works-corporate-site.png",
    alt: "コーポレートサイト刷新プロジェクトの実績ビジュアル",
    title: "コーポレート刷新",
    href: "/works/corporate-site-renewal",
    initialSlot: "slot-front-left",
  },
  {
    id: "corporate-detail",
    src: "/images/hero-visual.png",
    alt: "コーポレート刷新プロジェクトの詳細画面",
    title: "ブランド設計",
    href: "/works/corporate-site-renewal",
    initialSlot: "slot-front-center",
  },
  {
    id: "booking-system",
    src: "/images/works-booking-system.png",
    alt: "予約管理システム開発の実績ビジュアル",
    title: "予約管理システム",
    href: "/works/booking-system",
    initialSlot: "slot-mid-right",
  },
  {
    id: "ai-knowledge-base",
    src: "/images/works-ai-system.png",
    alt: "AI検索システム導入の実績ビジュアル",
    title: "社内AI検索",
    href: "/works/ai-knowledge-base",
    initialSlot: "slot-back-top",
  },
  {
    id: "corporate-overview",
    src: "/images/works-corporate-site.png",
    alt: "制作実績の全体イメージ",
    title: "BtoB成長導線",
    href: "/works/corporate-site-renewal",
    initialSlot: "slot-back-bottom",
  },
];
