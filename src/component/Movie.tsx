import React, { useState, useEffect, useRef, FC } from "react";
import Flim from "./flim";

interface flim1 {
  movie1: string;
}
interface finalflim {
  name: string;
  movie: string;
}
interface movieDescription {
  title: string;
  year: string;
  imdb: string;
  movie: string;
  trailer: string;
  poster: string;
  description: string;
  language: string;
  rating: string;
  genre: string[];
  directed_by: string;
}

export default function Movie() {
  const [movie, setmovie] = useState<movieDescription[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/api/movie/get/ggg")
      .then((respon) => respon.json())
      .then((data) => {
        setmovie(data);
      });
  }, []);

  console.log(movie);

  return (
    <div>
      <Flim movie1="Et0TaD8cnzh0MI8GKUWIA" />

      {movie.map((movie1, index) => (
        <div key={index}>
          {/* <h2>{movie1.title}</h2> 
          <p>Year: {movie1.year}</p>
          <p>IMDb: {movie1.imdb}</p>
            <p>Language: {movie1.language}</p>
            <p>Description: {movie1.description}</p>
           <iframe width="560" height="315" src={movie1.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         */}
          {/* <iframe src={movie1.movie} loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen></iframe> */}
          {/* <img src={movie1.poster} alt={movie1.title} /> */}
        </div>
      ))}
    </div>
  );
}
