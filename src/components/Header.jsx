import { FiArrowDownCircle, FiArrowUpCircle} from 'react-icons/fi'
import { BiDollarCircle } from 'react-icons/bi'

import Cards from "./Cards"

export default props => {
    return(
        <div className="flex flex-col w-screen h-1/5 rounded-b-xl bg-[#c9184a] drop-shadow-2xl">
            <div className="p-7">
                <h1 className="text-4xl text-white font-bold">Olá, {props.name}</h1>
            </div>
            <div className="mt-2 flex w-screen justify-center gap-52">
                    <Cards title="Entradas" value="R$1500" color="text-[#38b000]" icon={<FiArrowUpCircle className={`text-4xl font-bold text-[#38b000]`}/>}/>
                    <Cards title="Saídas" value="R$1500" color="text-[#9a031e]" icon={<FiArrowDownCircle className={`text-4xl font-bold text-[#9a031e]`}/>}/>
                    <Cards title="Total" value="R$1500" icon={<BiDollarCircle className={`text-4xl`}/>}/>
            </div>
        </div>
    )
}