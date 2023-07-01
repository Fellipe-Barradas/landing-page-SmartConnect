import Button from "../../components/button"
import usePrice from "../../data/hooks/usePrice"

interface PricesProp{
    title:string
    price?:string
    desc:string
    isVIP?:boolean
    className?:string

}
export default function Prices(prop:PricesProp){
    const addProduct = usePrice((set)=>set.actions.setProduct)
    
    
    
    return (
        <div className={`border   ${prop.isVIP ? "border-blue-500" : "border-zinc-600 "} p-2 rounded-lg shadow-lg relative flex flex-col w-1/2 m-auto`}  >
            <div className=" flex justify-between  items-center  mb-5 ">
                <h1 className={` text-2xl  self-start `}>{prop.title}</h1>
                <h2 className={`font-extralight text-xl ${prop.isVIP && "text-green-400"} mt-1 `}>{prop.price}</h2>
            </div>
            
            <p className=" leading-6 font-extralight text-sm flex-1 mb-3">{prop.desc}</p>
            <Button text="Tenho interesse" handleClick={()=>addProduct(prop.title)}/>
        </div>
    )
}