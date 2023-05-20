interface buttonProps{
    text:string
    handleClick?:()=>void
    className?:string
}
export default function Button(prop:buttonProps){
    return (
        <button onClick={()=>prop.handleClick?.()} className={`
        ${prop.className}
        btn
        `}>
            {prop.text}
        </button>
    )
}