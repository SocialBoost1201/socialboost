import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-white text-text-primary py-16 md:py-20 mt-auto border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 mb-8 transition-opacity hover:opacity-80">
              <div className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm overflow-hidden p-1.5">
                <Image
                  src="/web-app-manifest-512x512.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
              <span className="font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary uppercase">
                Social<span className="text-brand-primary">Boost</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed md:pr-8">
              事業成長のための伴走型デジタル戦略パートナー。要件定義からWebデザイン、LP制作、システム開発、AI導入まで一気通貫で支援します。
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-bold mb-6 text-text-primary tracking-wider">SERVICE</h3>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="/services/web-design" className="hover:text-brand-primary transition-colors">Web戦略・サイト制作</Link></li>
              <li><Link href="/services/lp" className="hover:text-brand-primary transition-colors">LP制作</Link></li>
              <li><Link href="/services/system" className="hover:text-brand-primary transition-colors">Webシステム開発</Link></li>
              <li><Link href="/services/app" className="hover:text-brand-primary transition-colors">アプリ開発</Link></li>
              <li><Link href="/services/ai" className="hover:text-brand-primary transition-colors">AI導入・運用支援</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6 text-text-primary tracking-wider">CONTENTS</h3>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">サービス一覧</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-primary transition-colors">料金案内</Link></li>
              <li><Link href="/works" className="hover:text-brand-primary transition-colors">制作実績</Link></li>
              <li><Link href="/why" className="hover:text-brand-primary transition-colors">選ばれる理由</Link></li>
              <li><Link href="/faq" className="hover:text-brand-primary transition-colors">よくあるご質問 (FAQ)</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6 text-text-primary tracking-wider">COMPANY</h3>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>代表　眞如 匠馬</li>
              <li>〒244-0003<br />神奈川県横浜市戸塚区戸塚町4170<br />高橋ビル1F</li>
              <li><a href="tel:070-9175-3590" className="hover:text-brand-primary transition-colors">TEL: 070-9175-3590</a></li>
              <li><a href="mailto:info@socialboost.jp" className="hover:text-brand-primary transition-colors">info@socialboost.jp</a></li>
              <li className="pt-2"><Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/legal/terms" className="hover:text-brand-primary transition-colors">利用規約</Link></li>
              <li><Link href="/legal/tokushoho" className="hover:text-brand-primary transition-colors">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-text-secondary gap-4">
          <p>&copy; {new Date().getFullYear()} SocialBoost. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>デジタル戦略パートナー</span>
            <a
              href="https://g.page/r/socialboost/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-brand-primary transition-colors border border-gray-200 px-3 py-1.5 rounded-full hover:border-brand-primary/30"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Googleでクチコミを書く
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
