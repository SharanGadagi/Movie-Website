import React, { useEffect, useState } from "react";

// const Api_Url=`http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`    this before add search bar
export const Api_Url=`http://www.omdbapi.com/?apikey=727bbdc1`
//create context     
const Context=React.createContext();

//thapa:727bbdc1
//api key:f21f9537   
//provider function
const Provider=({children})=>{

//use the States
const [movies,setMovies]=useState([]);
const [isLoading,SetIsLoading]=useState(true)
const [isError,setIsError]=useState({show:"false", message:" "})
const [userFilm,setUserFilm]=useState("india");

  //get movies function
const getMovies=async (Api_Url)=>{
  SetIsLoading(true)

  try{
    const res=await fetch(Api_Url);
    const data=await res.json();
    console.log(data);
    if(data.Response=== "True"){
      SetIsLoading(false)
      setIsError({
        show:false,
        message:''
      })
      setMovies(data.Search)
    }else{
      setIsError({
        show:true,
        message:data.Error
      })
    }

  }catch(error){
   console.log(error);
  }

}

  useEffect(()=>{
  //setTimeout and clearTimeOut for debouncing
  let time=  setTimeout(()=>{
    //  getMovies(Api_Url)     before search bar
    getMovies(`${Api_Url}&s=${userFilm}`)
},1000)


return()=> clearTimeout(time)
 

  },[userFilm])
  return( <Context.Provider value={{movies,isLoading,isError,userFilm,setUserFilm}}>{children} </Context.Provider>
  )
}

export {Provider,Context}