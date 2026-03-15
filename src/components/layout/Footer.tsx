import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-16 md:py-20 mt-auto">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block bg-white p-3 rounded-md mb-6 transition-transform hover:scale-105">
              <Image
                src="/socialboost.logo.png"
                alt="SocialBoost"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed md:pr-8">
              事業成長のための伴走型デジタル戦略パートナー。要件定義からWebデザイン、LP制作、システム開発、AI導入まで一気通貫で支援します。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wider">SERVICE</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/services/web-design" className="hover:text-white transition-colors">Web戦略・サイト制作</Link></li>
              <li><Link href="/services/lp" className="hover:text-white transition-colors">LP制作</Link></li>
              <li><Link href="/services/system" className="hover:text-white transition-colors">Webシステム開発</Link></li>
              <li><Link href="/services/app" className="hover:text-white transition-colors">アプリ開発</Link></li>
              <li><Link href="/services/ai" className="hover:text-white transition-colors">AI導入・運用支援</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wider">CONTENTS</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">サービス一覧</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">料金案内</Link></li>
              <li><Link href="/works" className="hover:text-white transition-colors">制作実績</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wider">COMPANY</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>代表　眞如 匠馬</li>
              <li>〒244-0003<br />神奈川県横浜市戸塚区戸塚町4170<br />高橋ビル1F</li>
              <li><a href="tel:070-9175-3590" className="hover:text-white transition-colors">TEL: 070-9175-3590</a></li>
              <li><a href="mailto:info@socialboost.jp" className="hover:text-white transition-colors">info@socialboost.jp</a></li>
              <li className="pt-2"><Link href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-navy-light/50 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} SocialBoost. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="opacity-60">デジタル戦略パートナー</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
