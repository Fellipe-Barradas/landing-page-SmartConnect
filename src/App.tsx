import { TypeAnimation } from 'react-type-animation';
import Header from './layout/Header';
import Main from './layout/website/Main';

function App() {

  return (
    <div className=" bg-gradient-to-br from-slate-800  via-slate-900 to-slate-800  h-full from-10% via-40% flex  items-center justify-center flex-col gap-16 ">

      <Header/>
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
      <Main/>
    </div>
  )
}

export default App
