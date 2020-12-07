import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React from "react";
import axios from "axios";
import Movie from "./movies.js"

function Food(props) {
  console.log(props)
return (<div><h3>foooood {props.name}<br /></h3><h3>flaaavor {props.fla}<br /></h3><span>and rating {props.rating} </span></div>);
}

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
    
  }

  getMovies = async () => { 
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies:movies, isLoading:false})
  }

  componentDidMount(){
    this.getMovies();
    
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <section className='container'>
          {isLoading ? 
            <div className="loader">
              <span className="loater_text">Loading...</span>
            </div>: (
            <div className="movies">
              {movies.map(movie => (
              <Movie key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres} />
              ))}
            </div>)}
        </section>
        
      </header>
    </div>
  );}
}

export default App;
