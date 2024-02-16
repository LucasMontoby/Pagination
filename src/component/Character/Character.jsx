 

const Character = ({image, name, species, type, gender, status, id}) =>{
    return(
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>Name:{name}</h3>
                <h3>Species:{species}</h3>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
                <h4>Type: {type}</h4>
            </div>
        </div>
    )
}

export default Character;