import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import MovieList from "../movielist/MovieList";

const Description = ({ movieList, match }) => {
  const movie = movieList.find((el) => el.id == match.params.id);

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="photo d-block  "
            src={movie.posterUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h3 className="titre">{movie.title}</h3>
            <p className="descrip" wordBreak="break-word">{movie.description}</p>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Carousel.Caption>
          <iframe
            width="853"
            height="480"
            src={movie.trailer}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            alt="second slide"
          ></iframe>  
        </Carousel.Caption>
        <Link to="/">
        <button className="goback" variant="info">Go Back</button>
      </Link>
      </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Description;
