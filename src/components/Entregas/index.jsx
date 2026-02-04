import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "../ui/badge";

export default function Entregas() {
    const servicos = [
        {
            id: 1,
            nome: "Otimização de Desempenho",
            descricao: "Aplico técnicas de Next.js e TailwindCSS para turbinar velocidade e SEO técnico.",
            entregas: ["Auditoria Core Web Vitals", "Refatoração otimizada", "Monitoramento contínuo"]
        },
        {
            id: 2,
            nome: "Code Review & Boas Práticas",
            descricao: "Reviso código com padrões Node.js, React Hooks e APIs RESTful para máxima qualidade.",
            entregas: ["Relatório detalhado", "Refatorações práticas", "Padrões full stack"]
        },
        {
            id: 3,
            nome: "Acessibilidade & SEO",
            descricao: "Implemento acessibilidade WCAG + SEO técnico usando Next.js e TailwindCSS.",
            entregas: ["Testes automatizados", "Relatório completo", "Correções inclusivas"]
        },
    ];

    return (
        <>
            <h3 className="m-10 mt-45 animate-pulse text-center font-semibold font-[jost] text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-5xl" id="#servicos">
                Serviços
            </h3>

            <div className="container mx-auto w-4/5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {servicos.map((servico) => (
                        <Card key={servico.id} className="py-8 px-6 hover:scale-105 duration-500 flex flex-col justify-between h-full">
                            <div>
                                <CardTitle className="text-center font-[jost] text-2xl mb-4">
                                    {servico.nome}
                                </CardTitle>
                                <CardDescription className="text-lg mb-6 text-muted-foreground">
                                    {servico.descricao}
                                </CardDescription>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center">
                                {servico.entregas.map((entrega, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="px-3 py-1.5 text-sm min-w-fit whitespace-nowrap"
                                    >
                                        {entrega}
                                    </Badge>
                                ))}
                            </div>

                        </Card>
                    ))}
                </div>
            </div>

        </>
    )
}