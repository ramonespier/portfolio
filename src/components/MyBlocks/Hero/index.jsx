
import { ArrowUpRight, PhoneForwarded } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "@/components/background-pattern";

export default function Hero() {
    return (
        <div className="flex min-h-screen items-center justify-center px-6" id="#hero">
            <BackgroundPattern />
            <div className="relative z-10 max-w-3xl text-center">
                <Badge asChild className="rounded-full border-border text-lg text-primary" variant="ghost">
                    <div className="py-1 px-4  border border-primary/20">
                        Desenvolvedor de Software <ArrowUpRight className="ml-1 size-4" />
                    </div>
                </Badge>
                <h1
                    className="mt-6 font-semibold font-[jost] text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
                    Ramon Coelho
                </h1>
                <p className="text-3xl">
                    Desenvolvedor <span className="text-primary font-bold">Full Stack</span> com foco em{" "}
                    <span className="text-primary font-bold">back-end escalável</span> e{" "}
                    <span className="text-primary font-bold">integração com aplicações web</span>
                </p>
                <div className="mt-12 flex items-center justify-center gap-4">
                    <Button className="rounded-full text-lg" size="lg">
                        Ver projetos <ArrowUpRight className="h-5! w-5!" />
                    </Button>
                    <Button
                        className="rounded-full text-lg shadow-none"
                        size="lg"
                        variant="outline">
                        <PhoneForwarded className="h-5! w-5!" /> Contato
                    </Button>
                </div>
            </div>
        </div>
    );
}
