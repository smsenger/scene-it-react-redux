const initialState = {movies: []}


export default function saveReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE': 
            const newMovies = [...state.movies, action.payload];
            return {...state, movies: newMovies}
        default: 
            return state
    }
}