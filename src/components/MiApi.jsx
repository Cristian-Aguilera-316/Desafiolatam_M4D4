import { useEffect, useState } from "react";

function MiApi() {
    const [data, setData] = useState ([]);
    const Url = "https://rickandmortyapi.com/api/character";
   
    useEffect(() => {
        ConsultaDeApi();
    }, [])
    const ConsultaDeApi = async () => {
        const response = await fetch(Url);
        const data = await response.json();
    setData(data.results);
    };
    console.log(data);

    return (
        <div>
            <h2>lista de personajes</h2>
            <ul>
                {data.map((CharacterData) => (
                    <li key={CharacterData.name}> {CharacterData.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MiApi;