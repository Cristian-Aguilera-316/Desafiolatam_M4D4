import { useState } from "react";
import MiApi from "./components/MiApi";
import "./App.css";
import logo from "./assets/logo.png";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <main id="main">
        <div className="hero-logo">
          <img src={logo} alt="rick and morty" />
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar personaje..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <MiApi searchTerm={searchTerm} />
      </main>
    </>
  );
}

export default App;
