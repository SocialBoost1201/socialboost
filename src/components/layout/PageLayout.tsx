import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-sans text-text-primary bg-background-light">
      <Header />
      <main className="flex-1 pt-[72px] md:pt-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
