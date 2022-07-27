import React, { useContext } from 'react'
import { Context } from './contex'
import {NavLink} from 'react-router-dom'

const Movies = () => {
  const {movies,isLoading}=useContext(Context);
  if(isLoading){
    return(
      <div >
        <div className='loading'>
<h3>Loading...</h3>
        </div>
      </div>
    )
  }
  return (
    <>
    <section className='movie_list' >
    <div className='container grid grid-4-col' >
 
    {movies.map((currentMovie)=>{
      const {imdbID,Title,Poster}=currentMovie;
      const filmName=Title.substring(0,20)   //title name length maitain
     return(
     <NavLink to={`movie/${imdbID}`} key={imdbID}>
      <div className='film' >
        <div className='film-info' >
          <h2>{filmName.length >=20?`${filmName}...`:filmName} </h2>
          <img src={Poster} alt={imdbID} />
        </div>
      </div>
     </NavLink>
     )
   }) }

    </div>

    </section>


  
    </>
  )
}

export default Movies