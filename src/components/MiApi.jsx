import { useEffect, useState } from "react";

function MiApi({ searchTerm = "" }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json.results || []);
        setInfo(json.info || {});
      })
      .catch(console.error);
  }, [page]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="cards">
        {filteredCharacters.map((character) => (
          <div className="card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <div style={{ padding: "1rem" }}>
              <h3>{character.name}</h3>
              <p><strong>Status:</strong> {character.status}</p>
              <p><strong>Species:</strong> {character.species}</p>
              <p><strong>Origin:</strong> {character.origin.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={!info.prev}
        >
          ⬅ Anterior
        </button>

        <span>Página {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={!info.next}
        >
          Siguiente ➡
        </button>
      </div>
    </>
  );
}

export default MiApi;
