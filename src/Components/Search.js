import React, { useContext } from 'react'
import { Context } from './contex'

const Search = () => {
  const {userFilm,setUserFilm,isError}=useContext(Context);
  return (
    
    <>
      <section className='search_bar'>
      <h1><b>Search Your Favourite Movies</b> </h1>
   <form action='#' onSubmit={(e)=>e.preventDefault()} >
    <div>
      <input type="text" placeholder='Search Here' value={userFilm} onChange={(e)=>setUserFilm(e.target.value)} />
    </div>
   </form>
   <div className='error_card' >
    <b>{isError.show && isError.message}</b>
   </div>

      </section>
    </>
  )
}

export default Search