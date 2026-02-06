"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Certificados({id}) {
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
      <h3 id={id} className="mt-45 animate-pulse text-center font-semibold font-[jost] text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-5xl" >
        Certificados
      </h3>

      <div className="pt-12">
        <div className="w-full max-w-xs mx-auto lg:max-w-md xl:max-w-lg flex flex-col lg:flex-row lg:items-end lg:gap-2">
          <div className="w-full max-w-xs mx-auto lg:max-w-md xl:max-w-lg pt-12">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {certificados.map((certificado) => (
                  <CarouselItem key={certificado.id} className="basis-full">
                    <div className="h-[520px] lg:h-[580px] flex flex-col">
                      <div className="flex-1 min-h-[120px] lg:min-h-[140px] flex items-end p-5">
                        <p className="font-[jost] text-xl lg:text-2xl font-semibold text-center w-full line-clamp-3 lg:line-clamp-2 px-2">
                          {certificado.nome}
                        </p>
                      </div>
                      <div className="h-[60%] lg:h-[55%] relative">
                        <Card className="p-0 rounded-xl h-full">
                          <CardContent className="p-6 pb-0 relative h-full">
                            <Image
                              src={certificado.foto}
                              alt={certificado.nome}
                              fill
                              className="object-cover rounded-xl border-3 border-secondary"
                              sizes="(max-width: 1024px) 100vw, 500px"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-ml-2 lg:-ml-4 h-12 w-12" />
              <CarouselNext className="-mr-2 lg:-mr-4 h-12 w-12" />
            </Carousel>
          </div>
        </div>
      </div>

    </>

  );
}
