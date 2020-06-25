export function saveMovie(movie) {
    return {type:'ADD_MOVIE', payload: movie}
}

export function deleteMovie(movie) {
    return {type:'DELETE_MOVIE', payload: movie}
}

export function getLocalStorage(movies) {
    return {type: 'GET_LOCAL_STORAGE', payload: movies}
}
