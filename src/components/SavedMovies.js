import React from 'react';
import { connect } from 'react-redux'
import { saveMovie } from '../redux/actions'
import SearchResults from './SearchResults'





class SavedMovies extends React.Component {
constructor(props) {
    super(props)
}

    render() {
    return (
        <div>
        {this.props.movies.map(movie => {
            return <SearchResults movie={movie} />
        })}
        </div>
    )

}
}

// const mapDispatchToProps = {
//     saveMovie
// }

const mapStateToProps = (state) => {
    return {movies: state.movies}
}
export default connect(mapStateToProps, null)(SavedMovies) 
