import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    const [personajes, setPersonajes] = useState();
    const [index, setIndex] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${index}`)
            .then((response) => response.json())
            .then((data) => setPersonajes(data.results))
            .catch((err) => console.error(err));
    }, [index])

    const retroceso = () => {
        setIndex(prevValue => prevValue - 1);
    }

    const avance = () => {
        setIndex(prevValue => prevValue + 1);
    }
    
    return (
        <>
            <main>
                {personajes ? (
                    personajes.map((personaje) => <Character key={personaje.id} {...personaje} />)
                ) : (
                    <p>Cargando...</p>
                )}
            </main>
            <Pagination index={index} retroceso={retroceso} avance={avance}/>
        </>
    );
}

export default Home;
