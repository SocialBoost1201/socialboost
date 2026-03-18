"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Plus, Minus } from "lucide-react";

// PC用シンプルナビ
const navLinks = [
  { name: "サービス", href: "/services" },
  { name: "料金", href: "/pricing" },
  { name: "実績", href: "/works" },
  { name: "選ばれる理由", href: "/why" },
];

// スマホ用リッチナビ（メガメニュー）
const MOBILE_MENU_ITEMS = [
  {
    name: "提供サービス",
    href: "/services",
    subItems: [
      { name: "Web戦略設計", href: "/services/web-design" },
      { name: "コーポレートサイト制作", href: "/services/web-design" },
      { name: "LP制作", href: "/services/lp" },
      { name: "Webシステム開発", href: "/services/system" },
      { name: "アプリ開発", href: "/services/app" },
      { name: "AI導入支援", href: "/services/ai" },
    ]
  },
  { name: "選ばれる理由", href: "/why" },
  { name: "制作・開発実績", href: "/works" },
  { name: "料金のご案内", href: "/pricing" },
  { name: "よくあるご質問 (FAQ)", href: "/faq" },
  { name: "会社概要", href: "/company" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ページ遷移時にモバイルメニューを閉じる
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null); // メニューを閉じたらアコーディオンもリセット
  }, [pathname]);

  // モバイルメニュー展開時は背景スクロールをロック
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // アコーディオンの開閉切り替え
  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <>
      <header
        // モバイル展開時とスクロール時でヘッダー背景を白に保つ
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 shadow-sm backdrop-blur-md py-3"
            : "bg-white py-5"
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="inline-flex items-center space-x-3 transition-opacity hover:opacity-80" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative h-8 w-8 md:h-10 md:w-10 shrink-0">
              <Image
                src="/web-app-manifest-512x512.png"
                alt="SocialBoost Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold tracking-tight text-lg md:text-xl text-text-primary uppercase">
              Social<span className="text-brand-primary">Boost</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold tracking-wide transition-colors hover:text-brand-primary",
                      pathname.startsWith(link.href)
                        ? "text-brand-primary"
                        : "text-text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              <Link href="/contact" tabIndex={-1}>
                お問い合わせ
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-text-primary md:hidden z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">メニューを開く</span>
            {isMobileMenuOpen ? (
              <X className="h-7 w-7 transition-transform duration-300 rotate-90" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7 transition-transform duration-300" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile Mega Menu Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out md:hidden flex flex-col pt-[84px]", // ヘッダー分（約80px強）を開ける
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex-1 overflow-y-auto px-6 pb-32">
          {/* Menu Items List */}
          <ul className="flex flex-col border-t border-gray-100 mt-2">
            {MOBILE_MENU_ITEMS.map((item) => (
              <li key={item.name} className="border-b border-gray-100">
                {item.subItems ? (
                  <div>
                    {/* アコーディオンヘッダー */}
                    <button
                      onClick={() => toggleAccordion(item.name)}
                      className="flex w-full items-center justify-between py-5 text-left text-[1.05rem] font-bold text-text-primary"
                    >
                      {item.name}
                      <span className="text-gray-400">
                        {openAccordion === item.name ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </span>
                    </button>
                    {/* アコーディオン中身 */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        openAccordion === item.name ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <ul className="flex flex-col gap-1 pl-4 border-l-2 border-brand-primary/20 ml-2">
                        {item.subItems.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              href={sub.href}
                              className="block text-[0.95rem] font-medium text-text-secondary hover:text-brand-primary py-2.5 px-2 rounded-md hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // 通常リンク
                  <Link
                    href={item.href}
                    className="flex w-full items-center justify-between py-5 text-[1.05rem] font-bold text-text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Action Buttons in Menu */}
          <div className="mt-10 space-y-4">
            <Button asChild size="lg" className="w-full shadow-lg shadow-brand-primary/20 justify-center py-6 text-[1.05rem]">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                無料で相談・お見積り
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full justify-center py-6 text-[1.05rem] border-gray-200 text-text-primary bg-white hover:bg-gray-50">
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                料金表シミュレーターを見る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
