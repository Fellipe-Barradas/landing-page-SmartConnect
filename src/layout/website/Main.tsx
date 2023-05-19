import Area from "../Area";
import imagem from "../.././imgs/nasa-Q1p7bh3SHj8-unsplash.jpg"
import imagem2 from "../.././imgs/alina-grubnyak-ZiQkhI7417A-unsplash.jpg"
import Article from "./Article";

export default function Main(){
    return (
      <Area className='flex-1 text-white mt-10 flex flex-col  gap-40'>
        <Article imgUrl={imagem} title="O que é Smart Connect?">    
           O SmartConnect é um produto tecnológico revolucionário projetado para simplificar a conectividade e aprimorar a comunicação no mundo acelerado de hoje. Com seus recursos de ponta e interface intuitiva, o SmartConnect permite que indivíduos e empresas permaneçam conectados sem esforço, não importa onde estejam.
        </Article>
        <Article 
        className='flex-row-reverse ' 
        imgUrl={imagem2}
        classNameDesc="items-end text-right text-lg"
        title="Ligação instantânia">    
            Com sua avançada tecnologia Bluetooth, o SmartConnect permite o emparelhamento instantâneo entre o dispositivo e os dispositivos compatíveis. Você pode facilmente estabelecer uma conexão sem a necessidade de configurações manuais ou longos procedimentos de emparelhamento.
        </Article>
      </Area>
    )
}