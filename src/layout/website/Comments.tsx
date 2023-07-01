import Reviews from "./Reviews";

export default function Comments(){
    return(
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <Reviews carreira="Empresária" name="Sarah Johnson">"Uau, o SmartConnect realmente mudou o jogo para o meu negócio! Eu costumava perder um tempo precioso tentando conectar todos os meus dispositivos, mas agora, com o SmartConnect, é tão fácil e rápido. Minha produtividade disparou desde que comecei a usar. Não consigo imaginar minha vida profissional sem ele!"</Reviews>
            <Reviews carreira="Entusiasta da tecnologia" name="John Smith">"Cara, o SmartConnect é alucinante! Sério, nunca vi algo tão fácil de usar. Posso conectar meu smartphone, tablet, laptop... tudo ao mesmo tempo! É como uma festa de dispositivos! E a qualidade da conexão? Impecável! Posso assistir aos meus filmes e jogar online sem nenhuma interrupção. Estou impressionado com o SmartConnect!"</Reviews>
            <Reviews carreira="Estudante universitária" name="Maria Silva">"Gente, vocês não fazem ideia do quanto o SmartConnect tem facilitado minha vida de estudante! Posso conectar todos os meus dispositivos com apenas um toque e estudar em qualquer lugar da minha casa. Sem falar na velocidade de transferência de dados, é incrível! Agora, meus trabalhos acadêmicos e pesquisas fluem tranquilamente. Super recomendo!"</Reviews>
        </section>
    )
}