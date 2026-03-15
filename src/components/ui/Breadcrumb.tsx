import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="bg-background-alt py-3 border-b border-gray-100">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-xs md:text-sm text-text-secondary overflow-x-auto whitespace-nowrap hide-scrollbar">
            <li>
              <Link href="/" className="hover:text-brand-primary transition-colors">
                トップ
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={item.name} className="flex items-center space-x-2">
                <ChevronRight className="h-3 w-3 text-gray-400 shrink-0" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-brand-primary transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-text-primary font-medium" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
