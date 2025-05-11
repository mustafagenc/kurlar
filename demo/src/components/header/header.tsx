import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "./menu";
import { IconCoffee, IconBrandGithub } from "@tabler/icons-react";

export const Header = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 m-auto items-center w-3xl">
        <div className=" flex h-14 items-center gap-2 md:gap-4 w-full">
          <div className="mr-4 flex">
            <Link className="mr-4 flex items-center gap-2 lg:mr-12" href="/">
              <Image
                className="rounded-full w-8 h-8"
                src={"/apple-touch-icon.png"}
                alt="alt"
                width={180}
                height={180}
              />
              <h1 className="hidden font-bold lg:inline-block">Kurlar</h1>
            </Link>
            <Menu />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <nav className="flex items-center gap-0.5">
              <Link
                href="https://github.com/sponsors/mustafagenc"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0"
                aria-label="BuyMeCoffee"
              >
                <IconCoffee className="size-5 inline" />
              </Link>
              <Link
                href="https://github.com/mustafagenc/kurlar"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0"
                aria-label="GitHub"
              >
                <IconBrandGithub />
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
