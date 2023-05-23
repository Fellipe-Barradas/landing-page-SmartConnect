interface areaProps{
    children:any
    className:string
}

export default function Area(prop:areaProps){
    return (
        <div className={`
        ${prop.className}
         w-[1200px]
        `}>
            {prop.children}
        </div>)
}