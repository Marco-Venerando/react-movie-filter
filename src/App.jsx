import { useState } from "react";
import { useEffect } from "react";

function App() {
  const initialMovies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState("Tutti");

  const [selectedtitle, setSelectedtitle] = useState("");

  // stati del form
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  // filtro dinamico
  useEffect(() => {
    let result = movies;

    if (selectedGenre !== "Tutti") {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }

    if (selectedtitle.trim() !== "") {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(selectedtitle.toLowerCase()),
      );
    }

    setFilteredMovies(result);
  }, [selectedGenre, selectedtitle, movies]);
  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // evita inserimenti vuoti
    if (!newTitle.trim() || !newGenre.trim()) return;

    const newMovie = {
      title: newTitle,
      genre: newGenre,
    };

    setMovies([...movies, newMovie]);

    // reset campi
    setNewTitle("");
    setNewGenre("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista Film</h1>

      {/* FORM AGGIUNTA FILM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo film"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <select value={newGenre} onChange={(e) => setNewGenre(e.target.value)}>
          <option value="Tutti">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <button type="submit">Aggiungi Film</button>
      </form>

      <hr />

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

      <input
        type="text"
        placeholder="Titolo film"
        value={selectedtitle}
        onChange={(e) => setSelectedtitle(e.target.value)}
      />

      {/* LISTA */}
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
