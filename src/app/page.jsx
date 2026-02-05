import CardsTechs from "@/components/CardsTechs";
import Certificados from "@/components/Certificados";
import Entregas from "@/components/Entregas";
import Hero from "@/components/MyBlocks/Hero";
import Navbar from "@/components/navbar";
import Projetos from "@/components/Projetos";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsTechs />
      <Entregas />
      <Projetos />
      <Certificados />
    </>
  );
}
