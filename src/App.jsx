import { useState } from "react";
import { useEffect } from "react";

function App() {
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const [selectedGenre, setSelectedGenre] = useState("Tutti");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // filtro dinamico
  useEffect(() => {
    if (selectedGenre === "Tutti") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre === selectedGenre);
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista Film</h1>

      {/* FILTRO */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="Tutti">Tutti</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      {/* LISTA FILM */}
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
