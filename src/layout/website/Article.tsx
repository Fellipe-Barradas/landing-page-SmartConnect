interface ArticleProps{
    children:any
    className?:string
    classNameDesc?:string
    title:string
   
}

export default function Article(prop:ArticleProps){
    return (        
            <div className={`flex flex-col gap-10 ${prop.classNameDesc} w-[40rem] `} > 
                <h1 className='text-3xl text-blue-400 font-semibold'>
                    {prop.title}
                </h1>
                <p className='leading-6  w-4/5 text-zinc-400 font-light'>
                    {prop.children}
                </p>
            </div>
    )
}