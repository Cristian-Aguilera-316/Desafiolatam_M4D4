import { useState } from 'react';

function Buscador({ setSearchTerm }) {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setSearchTerm(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar personaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
}

export default Buscador;