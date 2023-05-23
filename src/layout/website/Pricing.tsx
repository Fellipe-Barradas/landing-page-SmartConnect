import logo from "../..//./imgs/SmartConnectLogo.png"
import usePrice from "../../data/hooks/usePrice"
import Prices from "./Prices"
import Form from "./form/Form"

export default function Pricing(){

    const showForm = usePrice((set)=>set.state.show)
    

    return (
        <section>
            <img src={logo} alt="Logo do projeto" className=' w-28 h-28 m-auto mt-20'/>
            <h1 className="text-center text-3xl  ">Compre já seu pacote de <span className=" bg-clip-text   text-transparent  bg-gradient-to-r to-green-500 via-emerald-400 from-green-300">SmartConnect</span></h1>
            
            {showForm ? <Form ></Form> : (
                <div>
                   <article className="grid grid-cols-3 mt-10 mb-20 w-[800px] m-auto gap-5">
                <Prices title="Pacote básico" desc="Inclui o dispositivo SmartConnect e recursos essenciais para uso pessoal." price="$49.99" />
                <Prices title="Pacote Premium" desc="Oferece recursos avançados adicionais e conectividade de vários dispositivos para profissionais e usuários avançados." price="$79.99" isVIP />
                <Prices title="Pacote empresarial" desc="Entre em contato conosco para obter uma cotação personalizada: Soluções personalizadas para empresas com opções aprimoradas de segurança e escalabilidade."  />
                 
            </article> 
                </div>
                )}
            
            
        </section>
    )
}