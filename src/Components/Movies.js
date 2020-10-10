import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, bool, func } from 'prop-types';
import { loadMovies } from '../Redux/Reducer';
import SearchBar from './SearchBar';
import Results from './Results';
import { Spinner } from 'react-bootstrap';

function Movies(props) {

    function onSearch(s) { props.loadMovs(s); } //searching realtime

    const { movies, loading } = props;

    return (
        <>
            <SearchBar onSearch={onSearch} />

            {loading && <Spinner animation="border" variant="success" />}

            <p className="text-white">Results:</p>
            {movies && <Results movies={movies} />}
        </>
    );
}

Movies.propTypes = {
    movies: arrayOf(shape({ Title: string })),
    loading: bool,
    loadMovs: func,
}

const s2p = state => {

    const { movies, loading } = state;

    return {
        movies,
        loading
    };
};

const d2p = (dispatch) => ({
    loadMovs: (s) => dispatch(loadMovies(s)),
});

export default connect(s2p, d2p)(Movies);
