import { useForm } from "react-hook-form";
import usePrice from "../../../data/hooks/usePrice";
interface formValues{
    firstName:string
    LastName:string
    telefone:string
    email:string
}
export default function Form() {
  const { register, handleSubmit, formState } = useForm<formValues>();
  const {errors} = formState

  const product = usePrice((set) => set.state.product);
  const closeModal = usePrice((set) => set.actions.setShowForm);

  const submitForm = (data:formValues)=>{
    console.log(data)
  }
  return (
    <form className=" border-2 border-blue-400 flex flex-col gap-4 mb-20 p-3 max-w-md mt-20 m-auto rounded-sm  shadow-lg shadow-emerald-400"
    onSubmit={handleSubmit(submitForm)} noValidate
    >
      <h1 className=" text-2xl">
        Adicione seus dados para comprar{" "}
        <span className=" text-blue-500 text-3xl">{product}</span>
      </h1>
      <label htmlFor="firstName" className="text-xl">
        Nome <span className="error">{errors.firstName?.message}</span>
      </label>
      <input
        type="text"
        id="firstName"
        className={`btn focus:outline-none ${errors.firstName && "bg-red-500"}`}
        {...register("firstName",{
            required:"O nome é obrigatório"
        })}
      />
      <label htmlFor="LastName" className="text-xl">
        Sobrenome <span className="error">{errors.LastName?.message}</span>
      </label>
      <input
        type="text"
        id="LastName"
        {...register("LastName",{
            required:"O sobrenome é obrigatório"
        })}
        className={`btn focus:outline-none ${errors.LastName && "bg-red-500"}`}
      />
      <label htmlFor="telefone" className="text-xl">
        Telefone <span className="error">{errors.telefone?.message}</span>
      </label>
      <input
        type="tel"
        id="telefone"
        className={`btn focus:outline-none ${errors.telefone && "bg-red-500"}`}
        {...register("telefone",{
            required:"O telefone é obrigatório",
            pattern:{
                value:/(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})/,
                message:"Digite um telefone válido"
            }
        })}
      />
      <label htmlFor="email" className="text-xl">
        Email <span className="error">{errors.email?.message}</span>
      </label>
      <input
        type="email"
        id="email"
        {...register("email",{
            pattern:{
                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message:"Adicione um email válido"
            },
            required:"O email é obrigatório"
        })}
        className={`btn focus:outline-none ${errors.email && "bg-red-500"}`}
      />
      <div className="flex justify-between mt-10">
        <input type="submit" value="Enviar" className="btn " />
        <input
          type="button"
          value="Cancelar"
          className="btn bg-red-600 hover:bg-red-400"
          onClick={closeModal}
        />
      </div>
    </form>
  );
}
