import { useState } from 'react';
import './App.css';
import MiApi from './components/MiApi';
import Buscador from './components/buscador';
import Footer from './components/Footer';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="container">
            <header>
                <h1>Lista de Personajes de Rick and Morty</h1>
            </header>
            <Buscador setSearchTerm={setSearchTerm} />
            <MiApi searchTerm={searchTerm} />
            <Footer />
        </div>
    );
}

export default App;