import React from 'react';
import { connect } from 'react-redux'
import { deleteMovie } from '../redux/actions'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom';
import './SearchResults.css'





class SavedMovies extends React.Component {
constructor(props) {
    super(props)
}

    render() {
    return (
        <div className="Container">
            <div style={{borderBottom: '1px solid red'}}>
            <h1 style={{color: '#b6b7db'}}>Scene It</h1>
                    <Link style={{color: '#b6b7db'}} to="/">Home</Link>
            </div>
        {this.props.movies.map(movie => {
            return <SearchResults movie={movie} />
        })}
        </div>
    )

}
}


const mapStateToProps = (state) => {
    return {movies: state.movies}
}

const mapDispatchToProps = {
    deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedMovies) 
