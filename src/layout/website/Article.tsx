interface ArticleProps{
    children:any
    className?:string
    classNameDesc?:string
    title:string
   
}

export default function Article(prop:ArticleProps){
    return (        
            <div className={`flex flex-col gap-10 ${prop.classNameDesc} items-center justify-center`} > 
                <h1 className='text-xl text-blue-400 font-semibold text-center'>
                    {prop.title}
                </h1>
                <p className='leading-6  text-zinc-400 font-light text-center text-[10px]'>
                    {prop.children}
                </p>
            </div>
    )
}