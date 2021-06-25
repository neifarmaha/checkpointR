import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className=" container1 col-md-3 , mt-5">
      <Card style={{ width: "18rem"   }} className="bg-dark">
        
          <Card.Img
          variant="top"
          src={movie.posterUrl}
          alt={movie.title}
          style={{ height: "20rem" }}
        />
        <Card.Body className="image">
          <Card.Title style={{ color: "white" }}>{movie.title}</Card.Title>
          <Card.Text>
            <ReactStars
              count={5}
              isHalf={true}
              edit={false}
              value={movie.rate}
              size={24}
              activeColor="#ffd700"
            />
          </Card.Text>
          <Link to={`/${movie.id}`}> 
          <Button className="bouton"
            // style={{ backgroundColor: "#9E9D24", borderColor: " #9E9D24" }}
            variant="primary"
          >
            See Details
          </Button>
          </Link>
          <div className="overlay">
            <div className="text">
              {/* <h3>{movie.title}</h3> */}
              {/* <p style ={{width:"100px" , height:"300px"}}>{movie.description}</p>  */}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
