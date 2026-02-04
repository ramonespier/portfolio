import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ModeToggle } from "@/Themes/theme-button";

const Navbar = () => {
  return (
    <nav
      className="fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border z-100 bg-background">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Link href={'https://github.com/ramonespier'} target="_blank">
          <Button className="flex gap-3 text-lg rounded-3xl cursor-pointer border " variant="link">
            <Github />
            ramonespier
          </Button>
        </Link>
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">

          <ModeToggle />

          <Button className="rounded-full">Baixar curriculo</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;