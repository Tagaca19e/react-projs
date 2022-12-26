import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

function App() {
  const API_URL = 'http://www.omdbapi.com/?apikey=890cc22&';
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchMovies(searchTerm)
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {searchMovies(searchTerm)}}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) =>
            <MovieCard movie={movie} />
          )}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
