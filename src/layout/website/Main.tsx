import Area from "../Area";
import Article from "./Article";
import imagem1 from "../../imgs/adi-goldstein-EUsVwEOsblE-unsplash.jpg"
import imagem2 from "../../imgs/alina-grubnyak-ZiQkhI7417A-unsplash.jpg"
import imagem3 from "../../imgs/benjamin-dada-EDZTb2SQ6j0-unsplash.jpg"
import imagem4 from "../../imgs/nasa-Q1p7bh3SHj8-unsplash.jpg"
import imagem5 from "../../imgs/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg"
export default function Main(){
    return (
      <Area className='flex-1 text-white mt-10 flex flex-col gap-40'>
        <article className={`
        flex p-5 items-center justify-around gap-[10rem]
        `} >
            <Article  title="O que é Smart Connect?">    
                O SmartConnect é um produto tecnológico revolucionário projetado para simplificar a conectividade e aprimorar a comunicação no mundo acelerado de hoje. Com seus recursos de ponta e interface intuitiva, o SmartConnect permite que indivíduos e empresas permaneçam conectados sem esforço, não importa onde estejam.
            </Article>
            <img src={imagem1} alt="imagem representativa" className="img" />
        </article>

        <article className={`
        flex p-5 items-center justify-around gap-[10rem] flex-row-reverse
        `} >
            <Article 
                classNameDesc="items-end text-right text-lg"
                title="Ligação instantânia">    
                Com sua avançada tecnologia Bluetooth, o SmartConnect permite o emparelhamento instantâneo entre o dispositivo e os dispositivos compatíveis. Você pode facilmente estabelecer uma conexão sem a necessidade de configurações manuais ou longos procedimentos de emparelhamento.
            </Article>
            <img src={imagem2} alt="imagem representativa" className="img" />
        </article>
       
        <article className={`
        flex p-5 items-center justify-around gap-[10rem]
        `} >
             <Article 
             title="Conexão compartilhada">    
           O SmartConnect suporta a conexão de vários dispositivos simultaneamente, tornando-o ideal para profissionais e multitarefas. Você pode alternar sem esforço entre dispositivos com um único toque, permitindo a transição perfeita de um dispositivo para outro sem interrupções.
        </Article>
        <img src={imagem3} alt="imagem representativa" className="img" />
        </article>
       
        <article className={`
        flex p-5 items-center justify-around gap-[10rem] flex-row-reverse
        `} >
            <Article 
        classNameDesc="items-end text-right text-lg"
        title="Alta velocidade de transferência de dados">    
           Experimente velocidades de transferência de dados extremamente rápidas com o SmartConnect. Se você precisa compartilhar arquivos, transmitir mídia ou navegar na Internet, o SmartConnect garante uma transmissão de dados rápida e eficiente, economizando tempo e aumentando a produtividade.
        </Article>
        <img src={imagem4} alt="imagem representativa" className="img" />
        </article>
       
        <article className={`
        flex p-5 items-center justify-around gap-[10rem]
        `} >
             <Article 
        title="Conexões seguras e privadas">    
           Sua privacidade e segurança de dados são de extrema importância. O SmartConnect incorpora protocolos de criptografia integrados para garantir a transmissão de dados segura e privada. Você pode conectar seus dispositivos com confiança e transmitir informações confidenciais sem se preocupar com acesso não autorizado.
        </Article>
        <img src={imagem5} alt="imagem representativa" className="img" />
        </article>
        
      </Area>
    )
}