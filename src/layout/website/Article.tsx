interface ArticleProps{
    children:any
    className?:string
    classNameDesc?:string
    title:string
    imgUrl:any
}

export default function Article(prop:ArticleProps){
    return (
        <article className={`
        ${prop.className}
        flex p-5 items-center justify-around gap-[10rem]
        `}>
            <div className={`flex flex-col gap-10 ${prop.classNameDesc} w-[40rem] `}>
                <h1 className='text-3xl text-blue-400 font-semibold'>
                    {prop.title}
                </h1>
                <p className='leading-6  w-4/5 text-zinc-400 font-light'>
                    {prop.children}
                </p>
            </div>
            <img src={prop.imgUrl} alt="Imagem representativa do produto" className='w-[28rem] h-[16rem] rounded-xl border border-zinc-700  flex-1'/>
        </article>
    )
}