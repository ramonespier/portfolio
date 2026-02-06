"use client";;
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/Themes/theme-button";
import { Button } from "./ui/button";

export const NavMenu = (props) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#conhecimentos", label: "Conhecimentos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#projetos", label: "Projetos" },
    { href: "#certificados", label: "Certificados" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList
        className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-between">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle())}>
              <Link href={link.href}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        
        <NavigationMenuItem className="lg:hidden flex items-center gap-4 pt-6 mt-2 border-t border-border w-full data-[orientation=horizontal]:hidden">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tema</span>
              <ModeToggle />
            </div>
            <a
              href="./curriculo.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full cursor-pointer shadow-md">
                Baixar Currículo
              </Button>
            </a>
          </div>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
}

