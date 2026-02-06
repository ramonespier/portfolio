import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "../ui/badge"

export default function CardsTechs({id}) {
    const stacks = [
        {
            id: 1,
            nome: "Desenvolvimento Back-End",
            conhecimento: "Criação de APIs robustas e gerenciamento de banco de dados relacional.",
            tecnologias: ["Node.js (Express)", "Sequelize"]
        },
        {
            id: 2,
            nome: "Desenvolvimento Front-End",
            conhecimento: "Interfaces modernas com foco em performance, SEO e acessibilidade.",
            tecnologias: ["Next.js / React", "TailwindCSS", "SEO", "Acessibilidade"]
        },
        {
            id: 3,
            nome: "Integração Full Stack",
            conhecimento: "Conexão fluida entre front-end e back-end com autenticação segura.",
            tecnologias: ["APIs RESTful", "JWT Authentication", "React Hooks"]
        },
        {
            id: 4,
            nome: "DevOps & Infraestrutura",
            conhecimento: "Gerenciamento de servidores, versionamento e otimização de banco de dados.",
            tecnologias: ["Linux", "Git", "MySQL"]
        }
    ]

    return (
        <>
            <h3 id={id} className="mb-10 animate-pulse text-center font-semibold font-[jost] text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-5xl" >
                Conhecimentos
            </h3>

            <div className="md:grid md:grid-rows-2 md:grid-cols-2 flex flex-col gap-8 container mx-auto w-2/3">
                {stacks.map((stack) => (
                    <Card key={stack.id} className={'p-6 hover:scale-105 duration-500'}>
                        <CardTitle className={'text-center font-[jost] text-2xl'}>{stack.nome}</CardTitle>
                        <CardDescription className={'text-lg'}>{stack.conhecimento}</CardDescription>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {stack.tecnologias.map((techs, index) => (
                                <Badge variant="secondary" key={index} className={"px-3 py-1.5 text-sm min-w-fit whitespace-nowrap"}>
                                    {techs}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}