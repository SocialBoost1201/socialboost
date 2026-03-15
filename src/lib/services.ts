export type ServiceDetail = {
  slug: string;
  title: string;
  shortDesc: string;
  targetCustomers: string[];
  problems: string[];
  offerings: string[];
  scopes: string[];
  flow: { step: string; title: string; desc: string }[];
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "web-design",
    title: "Web戦略設計・サイト制作",
    shortDesc: "企業の信頼感を高め、採用やBtoBの問い合わせ獲得に直結する、高品質なコーポレートサイトを制作します。",
    targetCustomers: ["BtoB企業", "採用強化を目指す企業", "ブランドイメージを刷新したい企業"],
    problems: ["サイトが古く、信頼性を損ねている", "PVはあるが、問い合わせに繋がらない", "自社の強みが言語化されていない"],
    offerings: ["Web戦略設計・KPI策定", "UI/UXデザイン", "コピーライティング・コンテンツ設計", "SEO内部対策"],
    scopes: ["要件定義", "デザイン", "フロントエンド実装", "CMS構築"],
    flow: [
      { step: "01", title: "ヒアリング・戦略立案", desc: "事業課題やターゲットを整理し、全体方針を策定します。" },
      { step: "02", title: "情報設計・ワイヤーフレーム", desc: "必要なページの構成や導線を設計します。" },
      { step: "03", title: "デザイン制作", desc: "企業のカラーやコンセプトを反映したUIを制作します。" },
      { step: "04", title: "実装・公開", desc: "SEOも考慮したセキュアなコーディングを行います。" }
    ]
  },
  {
    slug: "lp",
    title: "LP制作（ランディングページ）",
    shortDesc: "コンバージョンに特化した設計で、広告運用やSNSからの流入を確実に問い合わせ・売上へつなげます。",
    targetCustomers: ["新サービスを立ち上げる企業", "Web広告のCPAを改善したい企業"],
    problems: ["広告媒体にかかわらずCVRが低い", "競合と差別化できるLPがない"],
    offerings: ["LP設計", "セールスコピーライティング", "LPO（最適化）分析・運用サポート"],
    scopes: ["構成設計", "デザイン", "コーディング", "フォーム連携"],
    flow: [
      { step: "01", title: "目標値（KPI）設定", desc: "目的や目標CVをヒアリングします。" },
      { step: "02", title: "ワイヤーフレーム・コピー", desc: "勝てるLPの構成と刺さるコピーを作成します。" },
      { step: "03", title: "デザイン制作", desc: "コンバージョンを促す視線誘導を設計します。" },
      { step: "04", title: "公開・A/Bテスト", desc: "公開後もデータを取り、効果を継続的に改善します。" }
    ]
  },
  {
    slug: "system",
    title: "Webシステム開発",
    shortDesc: "予約システム、顧客管理、ポータルサイトなど、業務効率化や新規事業を支えるシステムをフルスクラッチで開発します。",
    targetCustomers: ["業務プロセスをIT化したい企業", "独自のWebサービス・SaaSを立ち上げたい企業"],
    problems: ["既存のSaaSでは自社のフローに合わない", "アナログな作業が多く、人為的ミスが発生している"],
    offerings: ["システム要件定義", "UI設計", "フロントエンド / バックエンド開発", "インフラ構築"],
    scopes: ["要件定義", "DB設計", "API設計", "フロントエンド開発", "バックエンド開発"],
    flow: [
      { step: "01", title: "要件定義", desc: "業務フローを整理し、必要な機能を明確化します。" },
      { step: "02", title: "基本設計・UI設計", desc: "技術選定から画面仕様までを固めます。" },
      { step: "03", title: "開発・テスト", desc: "アジャイルを取り入れ、こまめに確認しながら開発します。" },
      { step: "04", title: "リリース・保守", desc: "公開後の運用や機能追加もスムーズに行います。" }
    ]
  },
  {
    slug: "app",
    title: "アプリ開発",
    shortDesc: "iOS/Android対応のネイティブアプリから、PWA・クロスプラットフォームまで最適な手法をご支援します。",
    targetCustomers: ["顧客ロイヤリティを高めたい店舗", "スマホユーザー向けのサービスを展開したいスタートアップ"],
    problems: ["Webだけではプッシュ通知などの体験が提供できない", "ネイティブアプリ開発のコストが高すぎる"],
    offerings: ["クロスプラットフォーム開発 (React Native / Flutter 等)", "UI/UXデザイン", "App Store / Google Play 申請サポート"],
    scopes: ["プロトタイピング", "UI設計", "アプリ開発", "ストア審査支援"],
    flow: [
      { step: "01", title: "企画・プロトタイピング", desc: "どのようなアプリ体験が必要か、モックアップを基に検討します。" },
      { step: "02", title: "UI/UXデザイン", desc: "指の動きに最適化されたデザインを作ります。" },
      { step: "03", title: "開発・QA", desc: "実機での挙動を含めた精緻なテストを行います。" },
      { step: "04", title: "ストア公開", desc: "煩雑なストア申請手続きも全面サポートします。" }
    ]
  },
  {
    slug: "ai",
    title: "AI導入支援",
    shortDesc: "ChatGPTなどのLLMを活用した業務効率化、社内ナレッジ検索など、実務で使えるAIの組み込みを支援します。",
    targetCustomers: ["定型業務を削減したい企業", "独自データに基づいた社内AIチャットボットが欲しい企業"],
    problems: ["AIの使い道が分からない", "セキュリティが心配でパブリックなAIに業務データを入れられない"],
    offerings: ["AI戦略ワークショップ", "社内データ自動検索 (RAG) システム構築", "プロンプトエンジニアリング支援"],
    scopes: ["実証実験(PoC)", "セキュアなAI基盤構築", "既存システムとの連携API開発"],
    flow: [
      { step: "01", title: "課題の洗い出し・PoC", desc: "社内業務の中でAI化が有効な箇所を特定します。" },
      { step: "02", title: "アーキテクチャ設計", desc: "セキュアで高精度な回答を生成する設計を行います。" },
      { step: "03", title: "開発・組み込み", desc: "RAG等の技術を用いてAIシステムを構築します。" },
      { step: "04", title: "チューニング・運用", desc: "精度を高めるための継続的なプロンプト・データ調整を行います。" }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
