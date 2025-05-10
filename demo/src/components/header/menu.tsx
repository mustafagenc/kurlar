import Link from "next/link";

export const Menu = () => {
    return (
              <nav className="flex items-center gap-4 text-sm xl:gap-6">
              <Link
                href="/currency"
                className="transition-colors hover:text-foreground/80 text-foreground/80 hover:bg-accent rounded-sm px-2 py-1"
              >
                Döviz Kurları
              </Link>
              <Link
                href="/all"
                className="transition-colors hover:text-foreground/80 text-foreground/80 hover:bg-accent rounded-sm px-2 py-1"
              >
                Tüm Kurlar
              </Link>
            </nav>
    );
};