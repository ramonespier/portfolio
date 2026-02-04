import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProjectCard() {
  const projetos = [
    {
      id: 1,
      nome: 'Zelos',
      foto: '/penitente.webp',
      descricao: 'Sistema de chamados técnicos desenvolvido em grupo para o SENAI Armando Arruda Pereira, estruturado para gerenciar todo o fluxo de atendimento: abertura, triagem e acompanhamento de chamados, atribuição e administração de técnicos responsáveis, e controle de patrimônios/ativos relacionados aos atendimentos, facilitando a gestão do suporte e melhorando a eficiência do processo.',
      link: 'https://github.com/davithekid/zelos',
      tecnologias: ['Next.js', 'Express', 'Sequelize', 'Docker', 'Active Directory']
    },
    {
      id: 2,
      nome: 'Atheos',
      foto: '/penitente.webp',
      descricao: 'Atheos é um sistema de controle financeiro pessoal desenvolvido no âmbito da disciplina de Projeto Integrador do SENAI São Caetano do Sul. Trata-se de uma plataforma multiplataforma e intuitiva para gerenciamento completo das finanças, incluindo cadastro e análise de transações, definição de metas financeiras e visualização de gráficos para um controle eficaz dos gastos.',
      link: 'https://github.com/ramonespier/Atheos',
      tecnologias: ['Next.js', 'Express']
    },
    {
      id: 3,
      nome: 'LogPack',
      foto: '/penitente.webp',
      descricao: 'O LogPack é um sistema de controle de estoque dinâmico projetado para otimizar a gestão de Insumos, combinando monitoramento IoT em tempo real e um fluxo de aprovação estruturado para solicitações, compras e armazenamento. (TCC SENAI São Caetano do Sul)',
      link: 'https://github.com/logpack-3md/logpack',
      tecnologias: ['Next.js', 'ShadCn', 'Express', 'Sequelize', 'IoT', 'MQTT + Bridge']
    }
  ]

  return (
    <>
      <div className="container mx-auto w-4/5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {projetos.map((projeto) => (
            <Card key={projeto.id} className="h-full">
              <CardHeader className="pt-4 font-semibold text-center text-4xl font-[jost]">
                {projeto.nome}
              </CardHeader>
              <CardContent className="px-5 pb-6 text-[15px] text-muted-foreground">
                <div className="mt-5 aspect-video w-full rounded-xl border-2 bg-muted relative overflow-hidden">
                  <img
                    src={projeto.foto}
                    alt={projeto.nome}
                    className="object-cover"
                  />
                </div>
                <p className="py-5 text-[16px]">{projeto.descricao}</p>
              </CardContent>
              <CardFooter className="px-5 pb-5 flex flex-col h-full justify-end gap-10">
                <div className="flex flex-wrap gap-3 justify-center">
                  {projeto.tecnologias.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm min-w-fit whitespace-nowrap cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Link href={projeto.link} target="_blank" className="w-full">
                  <Button className={'w-full cursor-pointer'}>
                    Ver Projeto <ArrowRight />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>


    </>

  );
};
