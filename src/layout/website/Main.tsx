import Area from "../Area";
import Article from "./Article";
import Comments from "./Comments";
import Pricing from "./Pricing";

export default function Main(){

    return (
      <Area className='flex-1 text-white mt-10 flex flex-col gap-40'>
        <article className={`
        flex flex-col xl:flex-row  items-center justify-center   gap-[10rem]
        `} >
            <Article  title="O que é Smart Connect?">    
                O SmartConnect é um produto tecnológico revolucionário projetado para simplificar a conectividade e aprimorar a comunicação no mundo acelerado de hoje. Com seus recursos de ponta e interface intuitiva, o SmartConnect permite que indivíduos e empresas permaneçam conectados sem esforço, não importa onde estejam.
            </Article>
            <div  aria-label="imagem representativa" className="img bg-[url('./imgs/adi-goldstein-EUsVwEOsblE-unsplash.jpg')]" />
        </article>

        <article className={`
        flex flex-col  items-center justify-center p-5   gap-[10rem] xl:flex-row-reverse
        `} >
            <Article 
                classNameDesc="items-end text-right text-lg"
                title="Ligação instantânia">    
                Com sua avançada tecnologia Bluetooth, o SmartConnect permite o emparelhamento instantâneo entre o dispositivo e os dispositivos compatíveis. Você pode facilmente estabelecer uma conexão sem a necessidade de configurações manuais ou longos procedimentos de emparelhamento.
            </Article>
            <div  aria-label="imagem representativa" className="img bg-[url('./imgs/alina-grubnyak-ZiQkhI7417A-unsplash.jpg')]" />
        </article>
       
        <article className={`
        flex flex-col xl:flex-row  items-center justify-center p-5   gap-[10rem]
        `} >
             <Article 
             title="Conexão compartilhada">    
           O SmartConnect suporta a conexão de vários dispositivos simultaneamente, tornando-o ideal para profissionais e multitarefas. Você pode alternar sem esforço entre dispositivos com um único toque, permitindo a transição perfeita de um dispositivo para outro sem interrupções.
        </Article>
        <div  aria-label="imagem representativa" className="img bg-[url('./imgs/benjamin-dada-EDZTb2SQ6j0-unsplash.jpg')]" />
        </article>
       
        <article className={`
        flex flex-col xl:flex-row-reverse items-center justify-center p-5   gap-[10rem]
        `} >
            <Article 
        classNameDesc="items-end text-right text-lg"
        title="Alta velocidade de transferência de dados">    
           Experimente velocidades de transferência de dados extremamente rápidas com o SmartConnect. Se você precisa compartilhar arquivos, transmitir mídia ou navegar na Internet, o SmartConnect garante uma transmissão de dados rápida e eficiente, economizando tempo e aumentando a produtividade.
        </Article>
        <div  aria-label="imagem representativa" className="img bg-[url('./imgs/nasa-Q1p7bh3SHj8-unsplash.jpg')]" />
        </article>
       
        <article className={`
        flex flex-col xl:flex-row  items-center justify-center p-5   gap-[10rem]
        `} >
        <Article 
        title="Conexões seguras e privadas">    
           Sua privacidade e segurança de dados são de extrema importância. O SmartConnect incorpora protocolos de criptografia integrados para garantir a transmissão de dados segura e privada. Você pode conectar seus dispositivos com confiança e transmitir informações confidenciais sem se preocupar com acesso não autorizado.
        </Article>
        <div  aria-label="imagem representativa" className="img bg-[url('./imgs/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg')]" />
        </article>
        <h1 className="text-center text-2xl mt-20 ">Veja o que nossos usuários pensam sobre o <span className=" bg-clip-text   text-transparent  bg-gradient-to-r to-blue-700 via-emerald-500 from-blue-300">SmartConnect</span></h1>
        <Comments/>
        <Pricing/>
      </Area>
    )
}