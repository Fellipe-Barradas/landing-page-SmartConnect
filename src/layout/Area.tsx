interface areaProps{
    children:any
    className:string
}

export default function Area(prop:areaProps){
    return (
        <div className={`
        ${prop.className}
          max-w-[1200px]  m-auto w-full
        `}>
            {prop.children}
        </div>)
}