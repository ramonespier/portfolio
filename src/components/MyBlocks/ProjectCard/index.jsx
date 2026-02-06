import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard() {
  const projetos = [
    {
      id: 1,
      nome: 'Zelos',
      foto: '/zelos2.png',
      descricao: 'Sistema de chamados técnicos desenvolvido em grupo para o SENAI Armando Arruda Pereira, estruturado para gerenciar todo o fluxo de atendimento: abertura, triagem e acompanhamento de chamados, atribuição e administração de técnicos responsáveis, e controle de patrimônios/ativos relacionados aos atendimentos, facilitando a gestão do suporte e melhorando a eficiência do processo.',
      link: 'https://github.com/davithekid/zelos',
      tecnologias: ['Next.js', 'Express', 'Sequelize', 'Docker', 'Active Directory']
    },
    {
      id: 2,
      nome: 'Atheos',
      foto: '/atheos.png',
      descricao: 'Atheos é um sistema de controle financeiro pessoal desenvolvido no âmbito da disciplina de Projeto Integrador do SENAI São Caetano do Sul. Trata-se de uma plataforma multiplataforma e intuitiva para gerenciamento completo das finanças, incluindo cadastro e análise de transações, definição de metas financeiras e visualização de gráficos para um controle eficaz dos gastos.',
      link: 'https://github.com/ramonespier/Atheos',
      tecnologias: ['Next.js', 'Express']
    },
    {
      id: 3,
      nome: 'LogPack',
      foto: '/logpack.png',
      descricao: 'O LogPack é um sistema de controle de estoque dinâmico projetado para otimizar a gestão de Insumos, combinando monitoramento IoT em tempo real e um fluxo de aprovação estruturado para solicitações, compras e armazenamento. (TCC SENAI São Caetano do Sul)',
      link: 'https://github.com/logpack-3md/logpack',
      tecnologias: ['Next.js', 'ShadCn', 'Express', 'Sequelize', 'IoT', 'MQTT + Bridge']
    }
  ]

  return (
    <div className="container mx-auto w-4/5 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-7">
        {projetos.map((projeto) => (
          <Card key={projeto.id} className="h-full flex flex-col min-h-[500px]">
            <CardHeader className="flex-none p-6 pb-4">
              <h3 className="font-semibold text-xl font-[jost] text-center">
                {projeto.nome}
              </h3>
            </CardHeader>

            <CardContent className="flex-1 p-6 pt-0 flex flex-col gap-4">

              <div className="aspect-4/3 min-h-[200px] w-full rounded-xl border-2 bg-muted relative overflow-hidden">
                <Image
                  src={projeto.foto}
                  alt={projeto.nome}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <p className="text-[15px] leading-relaxed line-clamp-4 flex-1">
                {projeto.descricao}
              </p>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex-none flex flex-col">
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {projeto.tecnologias.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs px-2.5 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>

              <AlertDialog>
                <AlertDialogTrigger className='w-full hover:scale-105 duration-250' asChild>
                  <Button className={'w-full'}>
                    Ver mais <ArrowRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Visite meu projeto!</AlertDialogTitle>
                    <h4 className="font-bold">Descrição completa</h4>
                    <AlertDialogDescription className={'text-base'}>
                      {projeto.descricao}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <Link href={projeto.link} target="_blank">
                      <Button className={'w-full'}>Ver Projeto<ArrowRight /></Button>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>

  );
}