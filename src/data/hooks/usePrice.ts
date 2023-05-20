import { create } from "zustand";

type ActionsProps = {
    setShowForm:()=>void
    setProduct:(product:string)=>void
}

type priceState = {
    state: {
        show:boolean
        product:string
    },
    actions:ActionsProps
}

const usePrice = create<priceState>((set)=>({
    state:{
        show:false,
        product:""
    },
    actions:{
    
        setShowForm:()=>{
            set(state=>({state:{...state.state, show:!state.state.show}}))
        },
        setProduct:(product) => 
        set(()=>({state:{show:true, product:product}}))
    }
    
}))
  
export default usePrice