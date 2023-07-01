interface viewsProp{
    name:string
    carreira:string
    children:any
    className?:string
}
export default function Reviews(prop:viewsProp){
    return (
        <article className={`
        ${prop.className}
        flex flex-col items-center border border-zinc-700 shadow-md
        p-5 gap-3 rounded-xl relative w-1/2 m-auto xl:w-full my-2
        `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 absolute -top-7  right-[40%]   bg-slate-900 border-2 border-zinc-600 text-blue-100 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <h1 className="text-4xl text-blue-500 mt-5  text-center">{prop.name}</h1>
            <h2 className="text-xl  text-zinc-200">{prop.carreira}</h2>
            <p className="text-sm  font-light  text-gray-300  leading-6">{prop.children}</p>
        </article>
    )
}