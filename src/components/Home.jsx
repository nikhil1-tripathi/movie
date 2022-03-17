import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { SingleMovieDetails } from "./SingleMovieDetails";
import "./movies.css";
import { MovieDetailsPage } from "./MovieDetailsPage";
import { Link } from "react-router-dom";


const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const Home = () => {
  const [movies , setMovies] = useState([]);

 
  const  fetchData1 =  () => {
  
    axios.get('https://movie-fake-server.herokuapp.com/data')
  .then(res => {
   console.log(res.data)
    setMovies(res.data);
    console.log(movies);
  });
  }

  useEffect(() => {
    fetchData1();
    console.log(movies);
  }, []);



//    filter by genre 
const handleFilter = (e)=>{
  console.log(e.target.value)
  // fetchData1()
  switch (e.target.value) {
    case "comedy":
      // fetchData1()
      var filteredData = movies.filter((ele) =>{
    return (ele.genre == "Comedy")

      } )
     setMovies(filteredData);
     return

     case "Thriller":
      // fetchData1()
      var filteredData = movies.filter((ele) =>{
    return (ele.genre == "Thriller")

      } )
      setMovies(filteredData);
     return

     case "drama":
      // fetchData1()
      var filteredData = movies.filter((ele) =>{
    return (ele.genre == "Drama")

      } )
     setMovies(filteredData);
     return

     case "documentary":
      // fetchData1()
      var filteredData = movies.filter((ele) =>{
    return (ele.genre == "Documentary")

      } )
     setMovies(filteredData);
     return

     case "adventure":
      var filteredData = movies.filter((ele) =>{
    return (ele.genre == "Adventure")

      } )
     setMovies(filteredData);
     return
  
    default:
      return movies
    
  }
  
}
  return (
    <>
    <Navbar/>
    
      <h1><h1>HOME</h1></h1>
      <select className="select" onChange={handleFilter}>
        <option>DEFAULT</option>
       <option value="comedy">COMEDY</option>
       <option value ="Thriller">THRILLER</option>
       <option value = "drama">DRAMA</option>
       <option value = "adventure">ADVENTURE</option>
       <option value = "documentary">DOCUMENTARY</option>
      </select>
      <div className = "movies-list">
       {
         movies.map((mov) => (
           <Link to=  {`/SingleMovieDetails/${mov.id}`}    >
           <MovieDetailsPage key={mov.id} data = {mov}/>
            </Link>
        
          ) )
       }
      </div>
    </>
  );
};
