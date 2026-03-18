export type KpiStat = {
  value: string; // "2.5x" "60h" "+40%"
  label: string; // "エントリー数増加" "月間工数削減"
};

export type Testimonial = {
  comment: string;
  name: string;    // 例: "山田様"
  role: string;    // 例: "代表取締役"
};

export type WorkDetail = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  shortDesc: string;
  thumbnail: string;
  overview: string;
  challenges: string[];
  scope: string[];
  implementations: string[];
  results: string[];
  images: string[];
  pdfs: { title: string; url: string }[];
  // --- 追加フィールド ---
  kpis?: KpiStat[];           // 数値ハイライト
  testimonial?: Testimonial;  // お客様の声
  techStack?: string[];       // 使用技術スタック
  duration?: string;          // 制作期間 ("約2ヶ月")
  teamSize?: string;          // 規模 ("2名")
  site_url?: string;          // 公開URL
};

export const WORKS_DATA: WorkDetail[] = [
  {
    slug: "corporate-site-renewal",
    title: "株式会社〇〇様 コーポレートサイト刷新プロジェクト",
    category: "Webサイト制作",
    industry: "製造業・BtoB",
    shortDesc: "創業50周年のタイミングで、採用強化と新規リード獲得を目的としたフルリニューアルを実施。",
    thumbnail: "/images/works-corporate-site.png",
    overview: "採用強化および新規取引先の開拓を目的として、10年以上運用されてきた既存コーポレートサイトのフルリニューアルを行いました。会社の強みである「技術力」と「安定感」をモダンなデザインで表現しています。",
    challenges: [
      "サイトが古く、採用候補者に魅力が伝わっていない",
      "自社の技術的な強みが分かりにくい構造になっている",
      "スマホ対応が不十分で、BtoBでも増加中のスマホ流入を取りこぼしている"
    ],
    scope: [
      "Web戦略設計・KPI策定",
      "UI/UX・情報設計",
      "サイトデザイン・コーディング",
      "CMS導入（お知らせ・実績更新機能）"
    ],
    implementations: [
      "技術の裏側を見せるためのオリジナル写真撮影のディレクション",
      "複雑だった事業内容を3つのドメインに整理し直す情報設計",
      "スムーズなスクロールとフェードを組み合わせた、クリーンなモーションデザイン"
    ],
    results: [
      "リニューアル後、月間の新卒・中途エントリー数が約2.5倍に増加",
      "BtoBの新規問い合わせからの商談化率が15%向上",
      "運用担当者でも実績の追加が容易になり、社内の情報発信が活性化"
    ],
    images: [
      "/images/works-corporate-site.png",
      "/images/hero-visual.png",
    ],
    pdfs: [],
    kpis: [
      { value: "2.5x", label: "エントリー数増加" },
      { value: "+15%", label: "商談化率向上" },
      { value: "1.5ヶ月", label: "公開までの期間" },
    ],
    testimonial: {
      comment: "ただ「きれいなサイト」を作るだけでなく、採用や営業にどう繋げるかを一緒に設計してくれたことが、他の会社との大きな違いでした。リニューアル後の反響は想定以上で、依頼して本当に良かったです。",
      name: "山田 様",
      role: "代表取締役"
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "microCMS"],
    duration: "約1.5ヶ月",
    teamSize: "2名（ディレクター + エンジニア）",
  },
  {
    slug: "booking-system",
    title: "〇〇業界向け カスタム予約管理システム開発",
    category: "Webシステム開発",
    industry: "サービス業",
    shortDesc: "既存のSaaSでは対応できなかった独自の運用フローに合わせた予約管理システムをスクラッチ開発。",
    thumbnail: "/images/works-booking-system.png",
    overview: "店舗展開を行うサービス業のお客様向けに、既存の複数SaaSの組み合わせで発生していた「二重入力」や「予約管理の漏れ」を防ぐための、独自仕様の予約・顧客管理システムを開発しました。",
    challenges: [
      "予約管理用のSaaSと社内の顧客管理DBが分断されている",
      "スタッフのシフト管理が手動（Excel）でミスが発生しやすい",
      "お客様へのリマインドメール送信がオペレーションの負担になっている"
    ],
    scope: [
      "現行業務フローの分析・要件定義",
      "データベース設計",
      "フロントエンド/バックエンド開発",
      "AWSインフラ構築"
    ],
    implementations: [
      "予約受付からシフト紐付けまでの完全自動化",
      "LINE Messaging APIを活用したお客様への自動リマインド通知機能",
      "PC操作に不慣れなスタッフでも直感的に操作できる管理画面UIの設計"
    ],
    results: [
      "予約管理・シフト調整にかかる事務作業時間を月間約60時間削減",
      "顧客の無断キャンセル（ノーショウ）率が半減",
      "データ一元化により、リピーター分析などのマーケティング施策が可能になった"
    ],
    images: [
      "/images/works-booking-system.png"
    ],
    pdfs: [
      { title: "システム導入による業務改善レポート(PDF表示サンプル)", url: "/sample-report.pdf" }
    ],
    kpis: [
      { value: "60h", label: "月間工数削減" },
      { value: "▲50%", label: "キャンセル率削減" },
      { value: "3ヶ月", label: "開発〜導入期間" },
    ],
    testimonial: {
      comment: "SaaSの組み合わせで乗り切ろうとしていましたが、限界を感じていました。スクラッチ開発は怖かったですが、要件定義から丁寧に伴走していただき、スタッフ全員が使いこなせるシステムができました。",
      name: "鈴木 様",
      role: "店舗統括マネージャー"
    },
    techStack: ["Next.js", "Supabase", "PostgreSQL", "LINE Messaging API", "Vercel"],
    duration: "約3ヶ月",
    teamSize: "3名（PM + フロント + バックエンド）",
  },
  {
    slug: "ai-knowledge-base",
    title: "社内マニュアルAI検索（RAG）システム導入支援",
    category: "AI導入支援",
    industry: "IT・通信",
    shortDesc: "膨大な社内ドキュメントを学習させたセキュアなAIチャットボットを構築し、社内ヘルプデスク運用を効率化。",
    thumbnail: "/images/works-ai-system.png",
    overview: "数百以上の社内規程、マニュアル、業務手順書が散在しており、「どこに情報があるか分からない」という課題を解決するため、セキュアな環境で動作するRAG（検索拡張生成）技術を用いた社内AIチャットボットを導入しました。",
    challenges: [
      "新入社員からバックオフィス部門への同じ問い合わせが1日に何十件も発生",
      "情報がNotionやGoogleドライブなどに分散している",
      "パブリックなAIに機密情報を入力するセキュリティリスク"
    ],
    scope: [
      "導入コンサルティング・PoC検証",
      "セキュアなクラウド環境の構築（Azure OpenAI等）",
      "RAGシステムの開発・ベクトルDB構築",
      "プロンプトのチューニング"
    ],
    implementations: [
      "分散していたドキュメントをバッチ処理で自動的にベクトル化・インデックス化する仕組みを構築",
      "回答時に「どのマニュアルを参考にしたか」ソースへのリンクを必ず提示するハルシネーション（嘘）対策",
      "社員が普段使っているSlackと連携し、シームレスにAIへ質問できるUI"
    ],
    results: [
      "社内ヘルプデスク部門の対応工数を約40%削減",
      "新入社員のオンボーディング（業務立ち上がり）期間の短縮",
      "安心・安全な社内AI基盤ができたことで、さらなる業務へのAI適用策が自発的に生まれる組織へと変化"
    ],
    images: [
      "/images/works-ai-system.png"
    ],
    pdfs: [],
    kpis: [
      { value: "▲40%", label: "ヘルプデスク工数削減" },
      { value: "300+", label: "学習ドキュメント数" },
      { value: "2ヶ月", label: "PoC〜本番稼働" },
    ],
    testimonial: {
      comment: "「AIを入れれば便利になる」という漠然としたイメージを、実際に価値の出る形に具体化してくれました。社員がAIを積極的に使うようになった文化変容が、一番大きな成果だと感じています。",
      name: "佐藤 様",
      role: "情報システム部 部長"
    },
    techStack: ["Azure OpenAI", "Langchain", "Pinecone", "Slack API", "Python", "Next.js"],
    duration: "約2ヶ月",
    teamSize: "2名（AIエンジニア + PMディレクター）",
  }
];

export function getWorkBySlug(slug: string) {
  return WORKS_DATA.find((w) => w.slug === slug);
}
