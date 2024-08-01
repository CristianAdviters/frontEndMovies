import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './movieList.css';


const MovieList = ({ movies }) => {
  return (
    <div className='div-movieList'>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
