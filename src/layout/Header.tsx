import Area from "./Area";
import logo from "/imgs/SmartConnectLogo.png"

export default function Header(){
    return(
    <Area className='flex justify-between items-center text-white'>
        <img src={logo} alt="Logo do projeto" className=' w-16 h-16 ml-3'/>
        <nav className='flex gap-5 mr-6 text-xl'>
          <span className=' cursor-pointer hover:text-blue-500 transition-colors'>FEATURES</span>
          <span className=' cursor-pointer hover:text-blue-500 transition-colors'>HOMEPAGE</span>
        </nav>
      </Area>
    )
}