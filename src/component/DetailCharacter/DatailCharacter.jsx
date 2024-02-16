
import React, {useEffect, useState} from 'react';
import Character from '../Character/Character';

const DetailCharacter = ()=> {


    let {id} = useParams()

    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data))
        .catch((err) => console.error(err));
       
    }, [])
}