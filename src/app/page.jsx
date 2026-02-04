import CardsTechs from "@/components/CardsTechs";
import Entregas from "@/components/Entregas";
import Hero from "@/components/MyBlocks/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsTechs />
      <Entregas />
    </>
  );
}
