export interface DocumentData {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string[];
  pages: number;
  category: string;
  thumbnail: string;
  pdfUrl: string; // 本来はここに実在のPDFリンクをセット
}

export const DOCUMENTS_DATA: DocumentData[] = [
  {
    slug: "b2b-site-renewal-guide",
    title: "BtoB企業のためのWebサイトリニューアル完全ガイド",
    shortDesc: "要件定義の進め方から、ベンダー選定のポイント、失敗しない進行管理までを網羅した全40ページの解説書。",
    fullDesc: "「Webサイトのリニューアルを任されたが、何から手をつければいいか分からない」「見積もりが高すぎるのか妥当なのか判断できない」そんなBtoB企業のWeb担当者様・経営者様向けに、絶対に失敗しないためのプロジェクト進行ノウハウを1冊にまとめました。",
    targetAudience: ["Web担当者に任命された方", "制作会社選びで迷っている方", "過去のリニューアルで失敗経験がある方"],
    pages: 40,
    category: "Web戦略",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "https://example.com/dummy.pdf",
  },
  {
    slug: "ai-implementation-roadmap",
    title: "中小企業向け AI導入・活用ロードマップ",
    shortDesc: "ChatGPTをはじめとした生成AIを自社業務にどう組み込むか？実証実験から社内定着までのステップを解説。",
    fullDesc: "AIの波に乗り遅れたくないが、具体的な活用イメージが湧かない企業様へ。一部の社員だけでなく組織全体で生成AIを活用し、業務効率を劇的に向上させるためのロードマップと具体的なプロンプト事例を公開します。",
    targetAudience: ["AI導入を検討中の経営者・DX推進担当者", "ChatGPTを契約したが使われていない企業", "業務効率化のアイデアを探している方"],
    pages: 25,
    category: "AI導入",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "https://example.com/dummy.pdf",
  },
  {
    slug: "system-development-cost-guide",
    title: "システム開発の費用相場と見積もり削減のコツ",
    shortDesc: "開発手法（スクラッチ、パッケージ、ノーコード等）による費用の違いと、無駄なコストを抑える要件定義のコツをご紹介。",
    fullDesc: "「なぜシステム開発はこんなに高いのか？」そのブラックボックスを解き明かします。見積もりの内訳の読み方から、自社に最適な開発手法の選び方、そして無駄な開発を防いでコストを最適化するための必須知識を解説。",
    targetAudience: ["新規事業でシステム開発を検討中の方", "開発会社の相見積もりを取っている方", "社内システムの刷新を任された方"],
    pages: 32,
    category: "システム開発",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "https://example.com/dummy.pdf",
  },
];

export function getDocumentData(slug: string): DocumentData | undefined {
  return DOCUMENTS_DATA.find((doc) => doc.slug === slug);
}
