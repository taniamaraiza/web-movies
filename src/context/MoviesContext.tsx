import React, { createContext, useState, useCallback, useContext } from 'react';
import { getMovies, getMoviesByName } from '../api/movies-api/search/movies-search.request'
import { Movie } from '../api/movies-api/interfaces/movie.interface';

interface IMovies {
  movies: Movie[];
  movieSelected: Movie
  handleSetMovieSelected(item: Movie): void;
  handleSetChangeSearch(value: string): void;
  handleGetMovies(): void;
}

const MoviesContext = createContext<IMovies>({} as IMovies);

const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMoviesSelected] = useState<Movie>({} as Movie);

  const handleSetMovieSelected = useCallback((item: Movie) => {
    setMoviesSelected(item)
  }, []);

  const handleSetChangeSearch = useCallback(async (value: string) => {
    if (value) {
      const data = await getMoviesByName(value)
      setMovies(data)
    } else {
      handleGetMovies()
    }
  }, []);

  const handleGetMovies = useCallback(async () => {
    const data = await getMovies()
    setMovies(data)
  }, []);

 
  return (
    <MoviesContext.Provider
      value={{
        movies,
        movieSelected,
        handleSetMovieSelected,
        handleSetChangeSearch,
        handleGetMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

function useMovies(): IMovies {
  const context = useContext(MoviesContext);

  return context;
}

export { MoviesProvider, useMovies };
