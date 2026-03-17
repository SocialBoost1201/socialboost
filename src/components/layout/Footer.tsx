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
              <Image
                src="/web-app-manifest-512x512.png"
                alt=""
                width={56}
                height={56}
                className="h-10 w-10 md:h-14 md:w-14 object-contain"
              />
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
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} SocialBoost. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>デジタル戦略パートナー</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
