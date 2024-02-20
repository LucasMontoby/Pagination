
const Pagination = ({ index, retroceso, avance }) => {
    return (
        <div>
            <button disabled={index <= 1 ? true : false} onClick={retroceso}>Retroceso</button>
            <button disabled={index >= 40 ? true : false} onClick={avance}>Avance</button>
        </div>
    )
}

export default Pagination;

