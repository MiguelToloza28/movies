//this is a function that receives a state and action

import axios from 'axios';

const INITIAL_STATE = {
    movies: null,
    loading: false,
    error: '',
};

const type = 'LOAD_MOVS';

const Reducer = (state = INITIAL_STATE, action) => {

    console.log('action.type', action);

    switch (action.type) {
        case `${type}_PENDING`:
            return { loading: true };

        case `${type}_FULFILLED`:
            return { loading: false, movies: action.payload.data.Search };
        default:
            return state;
    }
};

const url = 'http://www.omdbapi.com'; /* http://www.omdbapi.com/?apikey=f4bf05e8=star%20wars  */

const apikey = 'f4bf05e8';

const loadMovies = (s) => {

    const params = { apikey, s };
    const payload = axios.get(url, { params });
    return { type, payload };
};

export { loadMovies };
export default Reducer;