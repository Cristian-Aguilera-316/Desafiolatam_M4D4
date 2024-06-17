import { useEffect, useState } from "react";

function MiApi({ searchTerm }) {
    const [data, setData] = useState([]);
    const Url = "https://rickandmortyapi.com/api/character";
   
    useEffect(() => {
        ConsultaDeApi();
    }, []);
   
    const ConsultaDeApi = async () => {
        const response = await fetch(Url);
        const data = await response.json();
        setData(data.results);
    };

    
    const filteredData = data.filter(character => 
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id="main">
            <h2>Lista de personajes</h2>
            <div className="cards" >
                {filteredData.map(character => (
                    <div key={character.id} className="card" id="tarjeta">
                        <div id="contenido">
                            <div id="imagen">
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div>
                                <div id="nombre">                                
                                    <h3>{character.name}</h3>
                                </div>
                                <div id="informacion">
                                    <p><span>Genero: </span>{character.gender}</p>
                                    <p><span>Estado: </span>{character.status} </p>
                                    <p><span>Origen: </span>{character.origin.name}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MiApi;