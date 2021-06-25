import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { moviedata } from "./data";
import AddMovie from "./components/addmovie/AddMovie";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movielist/MovieList";
import { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MovieCard from "./components/moviecard/MovieCard"
import Details from "./components/details/Details";

function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    <div className="App" style={{backgroundColor:"black"}}>
       <Router>  
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged}/>
      <Route path="/" exact render ={() => 
      <MovieList
        movielist={movielist.filter((movie) =>
          movie.title.trim().toLowerCase()
          .includes(title.trim()
          .toLowerCase()) && movie.rate>=rate
        )}
        />}
      />
      <Route path="/:id" exact render={(props) => <Details {...props} movieList={movielist}/>}/>
      </Router>
      <AddMovie handleAdd = {handleAdd}/>
     </div>
  );
}

export default App;