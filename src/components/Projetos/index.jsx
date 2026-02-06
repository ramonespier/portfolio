import ProjectCard from "../MyBlocks/ProjectCard"

export default function Projetos({id}) {
    return (
        <>
            <h3 id={id} className="m-10 mt-45 animate-pulse text-center font-semibold font-[jost] text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-5xl">
                Projetos
            </h3>

            <ProjectCard />

        </>

    )
}