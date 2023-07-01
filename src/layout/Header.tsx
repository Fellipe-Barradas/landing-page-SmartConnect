import Area from "./Area";
import logo from "/SmartConnectLogo.png"

export default function Header(){
    return(
    <Area className='flex justify-between items-center text-white'>
        <img src={logo} alt="Logo do projeto" className='w-12 h-12 xl:w-12 xl:h-12'/>
        <nav className='flex gap-5 mr-6 text-lg'>
          <span className=' cursor-pointer hover:text-blue-500 transition-colors'>FEATURES</span>
          <span className=' cursor-pointer hover:text-blue-500 transition-colors'>HOMEPAGE</span>
        </nav>
      </Area>
    )
}