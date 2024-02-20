import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import { useParams } from 'react-router-dom';

const DetailCharacter = () => {
    let { id } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <>
            {character ? <Character {...character} /> : <p>Cargando</p>}
        </>
    );
}

export default DetailCharacter;
