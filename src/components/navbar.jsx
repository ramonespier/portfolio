import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ModeToggle } from "@/Themes/theme-button";

const Navbar = () => {
  return (
    <div className="p-6">
      <nav
        className="fixed z-50 top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Link href={'https://github.com/ramonespier'} target="_blank">
            <Button className="flex gap-3 text-lg rounded-3xl cursor-pointer border " variant="link">
              <Github />
              ramonespier
            </Button>
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden lg:block" />

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/curriculo_ramon.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button className={'cursor-pointer'}>Baixar Currículo</Button>
              </a>
              <ModeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;