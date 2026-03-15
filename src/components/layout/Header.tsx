"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "サービス", href: "/services" },
  { name: "料金", href: "/pricing" },
  { name: "実績", href: "/works" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/socialboost.logo.png"
            alt="SocialBoost"
            width={160}
            height={40}
            className="h-8 w-auto md:h-9"
            priority
          />
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
          <Link href="/contact" tabIndex={-1}>
            <Button size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              お問い合わせ
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">メニューを開く</span>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-background-alt bg-white px-5 pb-6 pt-4 shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "block text-base font-semibold transition-colors hover:text-brand-primary py-2 border-b border-gray-50",
                    pathname.startsWith(link.href) ? "text-brand-primary" : "text-text-primary"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/contact" className="block w-full" tabIndex={-1}>
                <Button className="w-full justify-center h-12 text-base">無料で相談してみる</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
