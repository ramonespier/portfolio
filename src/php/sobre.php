<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Ramon</title>
    <link rel="stylesheet" href="../css/home.css">
    <link rel="stylesheet" href="../css/skills.css">
    <link rel="stylesheet" href="../output.css">
    <link rel="shortcut icon" href="../img/rabbit.png" type="image/x-icon">
</head>

<body class="font-josefin bg-slate-950 text-white flex flex-col justify-between">

    <header>
        <nav
            class="navbar w-full md:h-24 h-36 bg-slate-900
        grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 border-b-2 border-b-white border-opacity-30 md:justify-items-stretch justify-items-center">

            <span class="md:col-start-1 row-start-1 flex items-center m-5 text-2xl justify-center 
            bg-slate-800 w-60 p-5 border border-white border-opacity-60 rounded-xl
            font-semibold transition hover:scale-105 cursor-default">Ramon {Coelho};</span>

            <ul class="md:col-start-2 md:row-start-1 row-start-2 flex md:justify-end items-center">
                <li><a class="m-16" href="../index.html">HOME</a></li>
            </ul>

        </nav>
    </header>

    <main>

        <section class="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 justify-items-center m-7 p-5 border-b-2">

            <div class="md:col-start-1 md:row-start-1 md:h-full row-start-2 col-start-1 flex flex-col justify-evenly">
                <p class="text-justify text-xl m-3 font-light">Em julho de 2024 finalizei um curso profissionalizante de front-end, criado pela Ford em parceria com o SENAI. Estudei no SENAI Conde José Vicente de Azevedo e aprendi detalhadamente desde o básico até frameworks.</p>

                <p class="text-justify text-xl m-3 font-light"> Atualmente estou cursando Técnico em Desenvolvimento de Sistemas no SENAI Armando de Arruda Pereira, e estudando cada vez mais para ter a capacitação necessária para me tornar um desenvolvedor full-stack.</p>

                <p class="text-justify text-2xl m-3 font-bold italic">Aqui você pode ver minhas habilidades e alguns projetos!</p>
            </div>

            <div class="md:col-start-2 row-start-1 flex md:min-h-80 items-center justify-center">
                <img class="rounded-full border-2 border-neutral-200" width="320px" src="../img/1729618845467.jfif"
                    alt="Ramon Coelho">
            </div>
        </section>

        <section>
            <div class="flex flex-col items-center gap-10 border-b-2 m-7">
                <span class="text-3xl font-bold italic">SKILLS:</span>

                <div class="flex flex-wrap justify-center gap-5 icons m-16">

                    <div class="flex flex-col items-center gap-2 text-xl p-2 card c-js">
                        <span>JavaScript</span>
                        <div class="js128 w-32 h-32 p-5 flex items-center justify-center"></div>
                    </div>

                    <div class="flex flex-col items-center gap-2 text-xl p-2 card c-php">
                        <span>PHP</span>
                        <div class="php128 w-32 h-32 p-5 flex items-center justify-center"></div>
                    </div>

                    <div class="flex flex-col items-center gap-2 text-xl p-2 card c-tw">
                        <span>TailwindCSS</span>
                        <div class="tw128 w-32 h-32 p-5 flex items-center justify-center"></div>
                    </div>

                    <div class="flex flex-col items-center gap-2 text-xl p-2 card c-node">
                        <span>Node.js</span>
                        <div class="node128 w-32 h-32 p-5 flex items-center justify-center"></div>
                    </div>

                    <div class="flex flex-col items-center gap-2 text-xl p-2 card c-react">
                        <span>React Native</span>
                        <div class="react128 w-32 h-32 p-5 flex items-center justify-center"></div>
                    </div>

                    <div class="flex flex-col items-center gap-2 text-xl p-2 card c-git">
                        <span>Git</span>
                        <div class="git128 w-32 h-32 p-5 flex items-center justify-center"></div>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <span class="font-bold p-5 text-3xl italic flex justify-center row-start-1 col-start-2">PROJETOS:</span>
            <div class="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 h-96 justify-items-center gap-3 p-5 border-b-2">

                <div class="row-start-1 col-start-1 w-full">

                    <a target="_blank" href="https://xgh-projeto-final.vercel.app/">
                        <div class="mustang w-full h-full grid grid-rows-10 border-2 rounded-lg transition hover:scale-105">
                            <span class="text-lg bg-black bg-opacity-70 row-start-1 row-span-2
                        flex justify-center items-center">Ford | Mustang</span>
                        </div>
                    </a>
                </div>

                <div class="md:row-start-1 md:col-start-2 row-start-2 w-full">

                    <a target="_blank" href="https://ramonespier.github.io/listenxd/">
                        <div class="listen w-full h-full grid grid-rows-10 border-2 rounded-lg transition hover:scale-105">
                            <span class="text-lg bg-black bg-opacity-70 row-start-1 row-span-2
                        flex justify-center items-center">Listenxd</span>
                        </div>
                    </a>
                </div>

                <div class="md:row-start-1 md:col-start-3 row-start-3 w-full">

                    <a target="_blank" href="https://github.com/ramonespier/venda-de-cursos">
                        <div class="focus w-full h-full grid grid-rows-10 border-2 rounded-lg transition hover:scale-105">
                            <span class="text-lg bg-black bg-opacity-70 row-start-1 row-span-2
                        flex justify-center items-center">FocusHub</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    </main>

    <section class="p-5">
        <span class="text-2xl flex justify-center">Entre em contato!</span>

        <div class=" w-full p-5 flex justify-center text-lg">
            <form action="./contato.php" class="w-96" method="post">
                <div class="grid md:grid-cols-2 md:grid-rows-4 grid-rows-5 gap-5 text-black md:justify-items-stretch justify-items-center">
                    <input type="text" class="md:p-5 p-5 w-80 md:w-auto row-start-1 md:col-start-1 md:col-span-2" required placeholder="Nome" name="nome">
                    <input type="email" class="md:p-5 p-5 w-80 md:w-auto row-start-2 md:row-start-2 md:col-start-1 md:col-span-2" required placeholder="E-mail" name="email">
                    <textarea class="md:p-5 p-5 w-80 md:w-auto overflow-auto row-start-3 md:row-start-3 md:col-start-1 md:col-span-2" required placeholder="O que você gostaria de dizer?" name="descricao"></textarea>
                    <input type="submit" class="md:p-5 p-5 w-80 md:w-auto row-start-4 md:row-start-4 md:col-start-1 bg-blue-700 border hover:bg-blue-950">
                    <input type="reset" class="md:p-5 p-5 w-80 md:w-auto row-start-5 md:row-start-4 md:col-start-2 bg-amber-600 border hover:bg-amber-800">

                </div>
            </form>
        </div>
    </section>



    <footer>
        <div class="lg:h-72 bg-slate-900 border-t-2 border-t-white border-opacity-30
        grid lg:grid-cols-3 lg:grid-rows-2 ">

            <div class="lg:col-start-1 lg:row-start-1 flex flex-col justify-center items-center gap-3">
                <span class="text-2xl font-bold">Site desenvolvido com:</span>

                <div class="flex gap-10">
                    <div class="tailwind w-16 h-16 flex items-center justify-center rounded-full"></div>
                    <div class="js w-16 h-16 flex items-center justify-center rounded-full"></div>
                    <div class="php w-16 h-16 flex items-center justify-center rounded-full"></div>
                </div>
            </div>

            <div
                class="lg:col-start-2 lg:col-span-2 lg:row-start-1 text-lg font-light text-justify flex items-center justify-center m-7">
                <p>Este site foi desenvolvido com o objetivo de facilitar o contato, além de servir como uma
                    plataforma para demonstrar meus conhecimentos e habilidades. Aqui, você
                    encontrará meus projetos, tecnologias com as quais tenho experiência e uma visão geral
                    do meu trabalho como desenvolvedor.</p>
            </div>

            <div class="lg:col-start-3 lg:row-start-2 flex flex-col justify-center items-center gap-3">
                <span class="text-2xl font-bold">ENVIE UM EMAIL:</span>

                <div class="flex justify-center w-full">
                    <a class="email w-16 h-16 flex items-center justify-center rounded-full"
                        href="mailto:coelhomeloramon@outlook.com"></a>
                </div>
            </div>

            <div class="lg:col-start-1 lg:row-start-2 flex flex-col justify-center items-center gap-3">

                <span class="text-2xl font-bold">CONEXÕES:</span>

                <div class="flex justify-evenly w-full">
                    <a class="linkedin w-16 h-16 flex items-center justify-center rounded-full" target="_blank"
                        href="https://www.linkedin.com/in/coelhoramon/"></a>
                    <a class="github w-16 h-16 flex items-center justify-center rounded-full" target="_blank"
                        href="https://github.com/ramonespier"></a>
                    <a class="insta w-16 h-16 flex items-center justify-center rounded-full" target="_blank"
                        href="https://www.instagram.com/c.ooelho/"></a>
                    <a class="zap w-16 h-16 flex items-center justify-center rounded-full" target="_blank"
                        href="tel:+55 11 99999-9999"></a>
                </div>
            </div>

            <p class="lg:col-start-2 lg:row-start-2 flex flex-col justify-end items-center font-light m-2">&copy; 2025
                Ramon Coelho Melo,
                todos os direitos reservados.</p>

        </div>

    </footer>


</body>

</html>