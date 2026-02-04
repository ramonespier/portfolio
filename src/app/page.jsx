import CardsTechs from "@/components/CardsTechs";
import Hero from "@/components/MyBlocks/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero id="#hero"/>
      <CardsTechs id="#tecnologias" />
    </>
  );
}
