import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCtaBar } from "@/components/ui/StickyCtaBar";

export function PageLayout({
  children,
  showStickyCtaBar = true,
}: {
  children: React.ReactNode;
  showStickyCtaBar?: boolean;
}) {
  return (
    <div className={`flex min-h-screen flex-col font-sans text-text-primary bg-background-light ${showStickyCtaBar ? "pb-[66px] md:pb-0" : ""}`}>
      <Header />
      <main className="flex-1 pt-[72px] md:pt-[88px]">
        {children}
      </main>
      <Footer />
      {showStickyCtaBar && (
        <>
          {/* モバイル専用スティッキーCTAバー */}
          <StickyCtaBar />
        </>
      )}
    </div>
  );
}
