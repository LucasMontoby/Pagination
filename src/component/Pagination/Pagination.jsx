
const Pagination = ({index, avance, retroceso}) =>{

    return(
        <div>
            <button disable={index <= 1 ? true : false} onClick={avance}>Avance</button>
            <button disable={index >= 40 ? true : false} onClick={retroceso}>Retroceso</button>
        </div>
    )
}

export default Pagination;