import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./movies.css";


export const SingleMovieDetails = ({data}) => {
  const [singleMovie , setsingleMovie] = useState([]);

 
  const  fetchData2 =  () => {
  
    axios.get(`https://movie-fake-server.herokuapp.com/data/${id}`)
  .then(res => {
   console.log(res.data)
    setsingleMovie(res.data);
  
  });
  }

  useEffect(() => {
    fetchData2();
    console.log(singleMovie);
  }, []);

  const {id} = useParams();
  console.log(id)
  return(
    <div>
    <div>
     <img src={singleMovie.image_url} alt="" />
    </div>
   <p>Movie_Name : {singleMovie.movie_name}</p>
   <p>Genre : {singleMovie.genre}</p>
   <p>Rating : {singleMovie.rating}</p>
   <p>Release Date : {singleMovie.release_date}</p>
  </div>
 
)

    
}