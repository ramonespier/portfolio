"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Certificados() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const certificados = [
    {
      id: 1,
      nome: 'CCNA V7 INTRODUCTION TO NETWORKS',
      foto: '/cisco.webp',
      local: 'Cisco',
      data: '11/10/2024'
    },
    {
      id: 2,
      nome: 'IMPLANTAÇÃO DE SERVIÇOS DE INTELIGÊNCIA ARTIFICIAL EM NUVEM - MICROSOFT AI-900',
      foto: '/microsoft.webp',
      local: 'Microsoft',
      data: '29/10/2024'
    },
    {
      id: 3,
      nome: 'POR DENTRO DA SEGURANÇA CIBERNÉTICA',
      foto: '/cyber.webp',
      local: 'SENAI Armando de Arruda Pereira',
      data: '30/05/2025'
    },
    {
      id: 4,
      nome: 'PROGRAMADOR FRONT-END',
      foto: '/fordEnter.avif',
      local: 'Ford Motors + SENAI Conde José Vicente Azevedo',
      data: '11/07/2024'
    }
  ]

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <h3 className="m-10 mt-45 animate-pulse text-center font-semibold font-[jost] text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-5xl" id="#certificados">
        Certificados
      </h3>

      <div className=" pt-12">
        <Carousel className="w-2/4 container mx-auto" setApi={setApi}>
          <CarouselContent>
            {certificados.map((certificado) => (
              <CarouselItem key={certificado.id}>
                <p className="font-[jost] text-2xl font-semibold text-center p-5">{certificado.nome}</p>
                <Card className={'p-0 rounded-xl'}>
                  <CardContent className="flex aspect-video border-none items-center justify-center p-6 pb-0 relative">
                    <Image
                      src={certificado.foto}
                      alt={certificado.nome}
                      fill
                      className="object-cover rounded-xl border-3 border-secondary"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="text-center text-muted-foreground text-xl font-semibold p-5">
            {certificados[current - 1] && (
              <>
                <p>{certificados[current - 1].local}</p>
                <p>{certificados[current - 1].data}</p>
              </>
            )}
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>

  );
}
