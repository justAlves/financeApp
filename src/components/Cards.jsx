

function Icon (){
    switch (props.icon) {
        case 'Up':
            return <BsArrowUpCircle className='text-xl'/>
        case 'Down':
            return <BsArrowDownCircle/>
        default:
            return <BsCurrencyDollar/>
    }
}

export default props => {
    return(
        <div className="flex flex-col h-80 w-80 bg-white rounded-3xl items-center py-4 justify-between drop-shadow-2xl">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <h1 className={`text-4xl font-bold ${props.color}`}>{props.value}</h1>
            <div>
                {props.icon} 
            </div>
        </div>
    )
}