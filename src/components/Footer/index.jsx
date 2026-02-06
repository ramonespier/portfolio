import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = ({
  className,
}) => {
  return (
    <section className={cn("py-4 md:py-6 bg-background/80 backdrop-blur-sm border-t", className)}>
      <div className="container mx-auto px-4">
        <footer className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs md:text-sm">

          <div className="text-center lg:text-left">
            <p className="font-bold text-lg md:text-xl">Ramon Coelho Melo</p>
            <p className="text-muted-foreground mt-1">
              Técnico em Desenvolvimento de Sistemas
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">

            <div className="flex font-semibold text-base cursor-pointer items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Link className="flex gap-2" href="https://www.linkedin.com/in/coelhoramon/"> 
                <Linkedin />
                LinkedIn
              </Link>
            </div>

            <div className="flex text-base font-semibold cursor-pointer items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Link className="flex gap-2" href="https://github.com/ramonespier">
                <Github />
                GitHub
              </Link>
            </div>

            <span className="text-muted-foreground text-base hidden cursor-default sm:inline">
              Next.js • Tailwind • Shadcn
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground font-semibold text-xs md:text-sm text-center lg:text-right">
            © 2026 Ramon Coelho Melo. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </section>
  );
};


export { Footer };
