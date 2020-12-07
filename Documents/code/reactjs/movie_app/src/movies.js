import React from "react";
import PropTypes from "prop-types";

function Movie({id,year,title,summary,poster, genres}) {
    return (
        <div className="movies_movie">
            <img src ={poster} className="movie_poster" alt={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title} <span class="movie_year">({year})</span></h3>     
                <div className="movie_genres">{genres.map( (genre,index) => genre == genres[genres.length-1] ? genre: genre + ', ')}</div>
                <p className="movie_summary">{summary.slice(0,200)}...</p>
                
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;