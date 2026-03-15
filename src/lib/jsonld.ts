const BASE_URL = "https://socialboost.jp";

/** ---------- 共通定数 ---------- */
export const COMPANY_INFO = {
  name: "SocialBoost",
  url: BASE_URL,
  logo: `${BASE_URL}/socialboost.logo.png`,
  description:
    "Web戦略設計からLP・サイト制作、システム開発、アプリ開発、AI導入まで一気通貫で支援するデジタル戦略パートナー。",
  founder: "眞如 匠馬",
  telephone: "+81-70-9175-3590",
  email: "info@socialboost.jp",
  address: {
    streetAddress: "戸塚町4170 高橋ビル1F",
    addressLocality: "横浜市戸塚区",
    addressRegion: "神奈川県",
    postalCode: "244-0003",
    addressCountry: "JP",
  },
};

/** ---------- FAQデータ（一元管理） ---------- */
export const FAQ_DATA = [
  // --- 相談・進め方 ---
  {
    question: "まだ具体的な要件が固まっていませんが、相談可能ですか？",
    answer:
      "はい、大歓迎です。事業上の課題や「こうなりたい」という目標だけお持ちいただければ、私たちが整理し、必要なロードマップやシステム要件をご提案します。お客様側で要件書を用意する必要はありません。",
  },
  {
    question: "初回相談は無料ですか？",
    answer:
      "はい、初回オンライン相談（30〜60分）は無料です。Zoomなどを使い、課題やご要望をお伺いした上で、最適なアプローチをご提案します。",
  },
  {
    question: "相談から制作開始まで、どのくらいの期間がかかりますか？",
    answer:
      "初回相談からお見積もり・ご提案まで通常1週間以内を目安としています。案件の規模によって異なりますが、スモールスタートの場合は2〜3週間で開発着手が可能なケースもあります。",
  },
  {
    question: "遠方でも対応可能ですか？",
    answer:
      "はい。全国対応しています。初回相談から仕様確認・デザイン確認・納品まで、すべてオンライン（Zoom/Google Meet）で対応可能です。拠点は神奈川県横浜市ですが、東京・大阪・名古屋・福岡など全国の企業様とお取引があります。",
  },
  // --- 料金 ---
  {
    question: "小規模な予算からのスタートも可能ですか？",
    answer:
      "可能です。初期はMVP（最小限のプロダクト）としてコアとなる機能だけを小さく作り、反応を見ながら徐々に育てていくアジャイル的なアプローチを得意としています。LP制作は30万円〜、コーポレートサイトは50万円〜ご相談いただけます。",
  },
  {
    question: "予算の目安を教えてください。",
    answer:
      "ご参考として：LP制作が30万円〜、コーポレートサイトが50万円〜、中規模サイトが150万円〜、Webシステム・アプリ開発が100〜300万円〜となっています。要件定義の段階でご予算に合わせた最適なご提案をいたします。",
  },
  {
    question: "一括払いしか対応していませんか？",
    answer:
      "分割でのお支払いにも対応しています。通常は着手金50%・納品時50%の2回払いが基本ですが、大型案件の場合は複数回払いについてもご相談ください。",
  },
  // --- サービス ---
  {
    question: "制作後の保守運用やマーケティング支援もお願いできますか？",
    answer:
      "はい。サイトやシステムは公開してからがスタートです。アクセス解析に基づく改善、機能追加、AI連携など、事業成長に向けた継続的な伴走支援をいたします。",
  },
  {
    question: "コーポレートサイトとランディングページ（LP）の違いは何ですか？",
    answer:
      "コーポレートサイトは企業全体の信頼性・ブランドを伝える複数ページ構成のサイトです。LPは特定のサービスや商品に絞り、1ページでコンバージョン（問い合わせ・購入）に特化した設計をします。使い分けとして、広告からの流入はLP、指名検索・採用・BtoB商談前の確認はコーポレートサイトが適しています。",
  },
  {
    question: "既存サイトのリニューアルも対応していますか？",
    answer:
      "はい、リニューアル案件を多数お受けしています。現状のサイトの課題を分析した上で、デザイン・情報設計・システムのどこに問題があるかを明確化してから制作に着手します。",
  },
  {
    question: "WordPressでの制作は可能ですか？",
    answer:
      "はい、WordPress（またはHeadless CMS）でのサイト構築も対応しています。一方で、Next.js等のモダンなフレームワークを使ったJamstack構成（高速・セキュア）もご提案できます。更新頻度・コスト・拡張性を踏まえ、最適な手法をご提案します。",
  },
  {
    question: "自社でコンテンツ（テキスト・画像）を用意する必要がありますか？",
    answer:
      "原則としてコンテンツのご提供をお願いしています。ただし、コピーライティング・コンテンツ設計も別途オプションでご対応可能です。写真撮影のディレクションや素材調達についてもご相談ください。",
  },
  // --- システム開発 ---
  {
    question: "Webシステム開発の事例を教えてください。",
    answer:
      "予約管理システム、在庫管理・受発注システム、会員制ポータルサイト、社内ナレッジ検索AIなど幅広く対応しています。業種・規模を問わず、既存SaaSでは対応できない独自業務フローに最適化したシステムを構築します。",
  },
  {
    question: "スマートフォンアプリ（iOS/Android）の開発は可能ですか？",
    answer:
      "はい。React Native等を使ったクロスプラットフォーム開発（iOS/Android両対応）が可能です。ネイティブ開発と比べてコストを抑えつつ、高品質なアプリを実現します。App Store・Google Playへの申請サポートも行います。",
  },
  {
    question: "開発言語・フレームワークは何を使いますか？",
    answer:
      "フロントエンドはNext.js / React、バックエンドはNode.js / PHP / Python等、インフラはAWS / Vercel / GCPを案件に応じて選定します。特定の技術スタックに縛られず、保守性と拡張性を重視した選定をします。",
  },
  // --- AI導入 ---
  {
    question: "AIに詳しくない企業でも導入支援を受けられますか？",
    answer:
      "はい、むしろAI初期導入フェーズの企業様が多いです。「どこから始めればいいか分からない」という状態から、業務の洗い出し・PoC（実証実験）・導入・社内定着まで一貫してサポートします。",
  },
  {
    question: "ChatGPT（OpenAI）を社内情報に連携させることはできますか？",
    answer:
      "はい。RAG（Retrieval-Augmented Generation）技術を使い、社内マニュアル・規程・ナレッジなどを学習させた社内専用AIチャットを構築できます。外部に情報を漏らさないセキュアな環境（Azure OpenAI等）での構築も可能です。",
  },
  // --- 地域・実績 ---
  {
    question: "横浜・神奈川のWeb制作会社を探しています。SocialBoostに依頼できますか？",
    answer:
      "はい。SocialBoostは神奈川県横浜市戸塚区に拠点を置いています。神奈川・横浜エリアの企業様からのご相談を多数いただいており、訪問対応も可能です。もちろん全国対応もしています。",
  },
  {
    question: "制作実績を開示していますか？",
    answer:
      "お客様の許可をいただいた案件の一部を実績ページに掲載しています。非公開案件も多数ありますが、ヒアリングの際に守秘義務の範囲内で詳細をご紹介します。",
  },
  {
    question: "一人で相談しても大丈夫ですか？専門知識は必要ですか？",
    answer:
      "もちろん大丈夫です。専門知識は不要で、「困っていること・実現したいこと」さえ言語化できれば十分です。技術的な話は私たちが翻訳してご提案します。現場の担当者の方、経営者の方、どちらのご相談もお受けしています。",
  },
  {
    question: "制作期間はどのくらいですか？",
    answer:
      "LP制作で2〜4週間、コーポレートサイトで1〜2ヶ月、Webシステムは規模によって3〜6ヶ月が目安です。急ぎのご要望にも可能な範囲でお応えしますので、まずご相談ください。",
  },
  {
    question: "競合他社と比較した場合のSocialBoostの強みは何ですか？",
    answer:
      "制作会社としての「作るだけ」ではなく、事業目標から逆算した戦略設計を起点に動く点が最大の特徴です。また、Web制作・システム開発・AI導入を一社で対応できるため、窓口の一本化と情報連携のスムーズさが強みです。",
  },
];

/** ---------- Organization 構造化データ ---------- */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: {
      "@type": "ImageObject",
      url: COMPANY_INFO.logo,
      width: "400",
      height: "100",
    },
    description: COMPANY_INFO.description,
    founder: {
      "@type": "Person",
      name: COMPANY_INFO.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.telephone,
        contactType: "sales",
        availableLanguage: ["Japanese"],
        areaServed: "JP",
      },
      {
        "@type": "ContactPoint",
        email: COMPANY_INFO.email,
        contactType: "customer service",
        areaServed: "JP",
      },
    ],
    sameAs: [],
  };
}

/** ---------- LocalBusiness 構造化データ（地域SEO） ---------- */
export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    image: `${BASE_URL}/og-image.png`,
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.3967",
      longitude: "139.5265",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "¥¥¥",
    currenciesAccepted: "JPY",
    paymentAccepted: "銀行振込",
    areaServed: [
      { "@type": "City", name: "横浜市" },
      { "@type": "Prefecture", name: "神奈川県" },
      { "@type": "Country", name: "Japan" },
    ],
    hasMap: `https://maps.google.com/?q=神奈川県横浜市戸塚区戸塚町4170+高橋ビル1F`,
    knowsAbout: [
      "Webサイト制作",
      "LP制作",
      "Webシステム開発",
      "スマートフォンアプリ開発",
      "AI導入支援",
      "SEO対策",
      "UI/UXデザイン",
    ],
  };
}

/** ---------- WebSite 構造化データ（GEO対策・SearchAction） ---------- */
export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: COMPANY_INFO.name,
    url: BASE_URL,
    description: COMPANY_INFO.description,
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/works?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** ---------- Service 構造化データ ---------- */
export function generateServiceJsonLd(service: {
  title: string;
  shortDesc: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    url: `${BASE_URL}/services/${service.slug}`,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "BtoB",
    },
  };
}

/** ---------- FAQ 構造化データ（GEO対策） ---------- */
export function generateFAQJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** ---------- ContactPage 構造化データ ---------- */
export function generateContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "お問い合わせ | SocialBoost",
    url: `${BASE_URL}/contact`,
    description:
      "SocialBoostへのWebサイト制作・システム開発・AI導入に関するご相談はこちらからどうぞ。無料相談受付中。",
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.telephone,
      email: COMPANY_INFO.email,
      url: BASE_URL,
    },
  };
}

/** ---------- BreadcrumbList 構造化データ ---------- */
export function generateBreadcrumbJsonLd(
  items: { name: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: BASE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
      })),
    ],
  };
}
