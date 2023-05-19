import { TypeAnimation } from 'react-type-animation';
import imagem from "../public/nasa-Q1p7bh3SHj8-unsplash.jpg"
import logo from "../public/SmartConnectLogo.png"

function App() {

  return (
    <div className=" bg-gradient-to-br from-slate-800  via-slate-900 to-slate-800 h-screen from-10% via-40% flex  items-center justify-center flex-col gap-16 ">
      <header className='flex justify-between w-full items-center text-white'>
        <img src={logo} alt="Logo do projeto" className=' w-16 h-16 ml-3'/>
        <nav className='flex gap-5 mr-6 text-xl'>
          <span className=' cursor-pointer hover:text-yellow-200'>FEATURES</span>
          <span className=' cursor-pointer hover:text-yellow-200'>HOMEPAGE</span>
        </nav>
      </header>
      <TypeAnimation  
      sequence={[
        "Bem vindo ao FUTURO",
        4000,
        "Smart Connect",
        6000,
        "Se torne um só com a Tecnologia",
        4000
      ]} 
      className=" text-5xl text-white p-3 " 
      repeat={Infinity}
      cursor={true}
      >
      </TypeAnimation>
      <main className='flex-1 text-white mt-10'>
        <article className='flex p-5 items-center justify-around'>
          
          <div className='flex flex-col gap-10 '>
          <h1 className='text-3xl'>O que é o Smart Connect?</h1>
          <p className='leading-6 w-4/5'>O SmartConnect é um produto tecnológico revolucionário projetado para simplificar a conectividade e aprimorar a comunicação no mundo acelerado de hoje. Com seus recursos de ponta e interface intuitiva, o SmartConnect permite que indivíduos e empresas permaneçam conectados sem esforço, não importa onde estejam.</p>
            
          </div>
          <img src={imagem} alt="Imagem via satelite" className='w-[28rem] h-[16rem] rounded-xl border border-zinc-700  rotate-1'/>
        </article>
      </main>
    </div>
  )
}

export default App
