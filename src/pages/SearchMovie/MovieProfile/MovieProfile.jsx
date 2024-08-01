import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

const MovieProfile = () => {
  const { id } = useParams();
  
  const {data: movie, load, error} = useFetch(`http://localhost:3002/movies/${id}`)

  const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map(mg => mg.genre.name)
    : []; 

  if(load) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Movie Profile</h1>
      <p>Movie ID: {id}</p>

      <p>{movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreNames.length > 0 ? genreNames.join(', ') : 'No genres available'}</p>
      <img src={movie.image} alt={movie.title} style={{ width: '100px' }} />
      
      
      {movie.review.map((item, index) => (
       <div key={index}>
        <h2>Review {item.id}</h2>
        <p>User: {item.user.username}</p>
        <p>Title: {item.title}</p>
        <p>Description: {item.description}</p>
        <p>Calification: {item.rate}</p>
        
        {console.log(item.comments_user)}
        {/*<Link to={''}>
        <button>View Comments</button>
        </Link>*/}
        <p>Comments of this Review:{(item.comments_user) ? (
           item.comments_user).map((value, index) =>
             <div key={index}>
               <div>Comment from User: {value.user}</div>
               {value.comment}
             </div> ) : 
             <div>There are no comments for the moment...
              <button>Would you like to add a new comment?</button>
             </div>
              
        }</p>
      
       </div>
       )
      )}
      <div>Look at you..profile movie page...</div>
    </div>
  );
};

export default MovieProfile;