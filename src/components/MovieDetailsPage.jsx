export const MovieDetailsPage = ({data}) => {
    return <>
  {/* <h1>SINGLE MOVIE</h1> */}
  <div>
    <div>
     <img src={data.image_url} alt="" />
    </div>
   <p>Movie_Name : {data.movie_name}</p>
   <p>Genre : {data.genre}</p>
   <p>Rating : {data.rating}</p>
   <p>Release Date : {data.release_date}</p>
  </div>

  </>;
};

