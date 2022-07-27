import React,{useState,useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {Api_Url} from './contex'

const SingleMovies = () => {
    const {id}=useParams()
    const [movies,setMovies]=useState(" ");
const [isLoading,SetIsLoading]=useState(true)


  //get movies function
const getMovies=async (url)=>{
  SetIsLoading(true)

  try{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    if(data.Response=== "True"){
      SetIsLoading(false)
      setMovies(data)
    }

  }catch(error){
   console.log(error);
  }

}

  useEffect(()=>{
  //setTimeout and clearTimeOut for debouncing
  let time=  setTimeout(()=>{
    //  getMovies(Api_Url)     before search bar
    getMovies(`${Api_Url}&i=${id}`)
},500)


return()=> clearTimeout(time)
 

  },[id])

  if(isLoading){
    return(
      <div className='single_movie'>
        <div className='loading'>
<h4><i> Loading..</i></h4>
        </div>
      </div>
    )
  }

  return (
  <>
    <section className='single_movie'>
      <div className='movie_card'>
      <figure>
        <img src={movies.Poster} alt="" />
      </figure>

      <div className='card_container'>
      <p className='title' >{movies.Title} </p>
      <p className='card_text' >{movies.Genre} </p>
      <p className='card_text' >{movies.Country} </p>
      <p className='card_text' >{movies.Language} </p>
      <p className='card_text' >{movies.Actors} </p>
      <p className='card_text' >{movies.Released} </p>
      <p className='card_text' >{movies.Runtime} </p>
      <p className='card_text' >{movies.imdbRating}/10 </p>
       <NavLink to='/' className='back_btn'>
        <b>Go Back</b> 
       </NavLink>

      </div>

      </div>
    </section>
  </>
  )
}

export default SingleMovies