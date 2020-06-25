const initialState = { movies: [] }


export default function saveReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            let watchlistMovie = state.movies.find(currentMovie => currentMovie.imdbID === action.payload.imdbID)
            if(watchlistMovie) {
                return state;
            }
            let newMovies = [...state.movies, action.payload];
            return { ...state, movies: newMovies }

        case 'DELETE_MOVIE':
            let watchlistMovies = state.movies.filter(currentMovie => currentMovie.imdbID !== action.payload.imdbID)
            return { ...state, movies: watchlistMovies }

        case 'GET_LOCAL_STORAGE':
            return {...state, movies: action.payload}    
        default:
            return state
    }
}