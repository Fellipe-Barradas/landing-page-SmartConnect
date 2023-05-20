interface PricesProp{
    title:string
    price?:string
    desc:string
    isVIP?:boolean
    className?:string

}
export default function Prices(prop:PricesProp){
    return (
        <div className={`border border-zinc-600   ${prop.isVIP && " border-blue-500"} p-2 rounded-lg shadow-lg`}  >
            <div className=" flex justify-between  items-center  mb-5">
                <h1 className={` text-2xl  self-start `}>{prop.title}</h1>
                <h2 className={`font-extralight text-xl ${prop.isVIP && "text-green-400"} mt-1 `}>{prop.price}</h2>
            </div>
            
            <p className=" leading-6 font-extralight text-sm    ">{prop.desc}</p>
        </div>
    )
}