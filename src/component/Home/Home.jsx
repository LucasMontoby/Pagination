import  {useEffect, useState} from 'react';


const Home = () => {

    const [personajes, setPersonajes] = useState();
    const [index, setIndex] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${index}`)
        .then((response) => response.json())
        .then((data) => setPersonajes(data.results))
        .catch((err) => console.error(err));
       
    }, [index])

    const avance = () =>{
        setIndex(prevValue => prevValue - 1)
    }

    const retroceso = () =>{
        setIndex(prevValue => prevValue + 1)
    }

    return(
        <>
        <main>
        {personajes.length > 0 ? (
        personajes.map((personaje) => (
       {...personaje} />
    ))
    ) : (
    <p>Cargando...</p>
    )}
        </main>
        <Pagination index={index}  avance={ avance}  retroceso={retroceso}/>
        </>
    )

}

export default Home;