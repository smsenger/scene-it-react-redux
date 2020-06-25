import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults'
import './SearchResults.css'

export default class SearchRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            inputValue: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://www.omdbapi.com/?apikey=b43843a0&s=${this.state.inputValue}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data.Search,
                    inputValue: ''
                }, () => { console.log(this.state.movies) })
            }).catch(error => {
                console.log(error)
            })
        }
        handleChange = (e) => {
            this.setState({
                inputValue: e.target.value
            })
        }

        saveMovie = (movie) => {

        }

        render() {
            return (
                <div>
                <div style={{borderBottom: '1px solid #b6b7db'}}>
                    <h1 style={{color: '#b6b7db'}}>Scene It</h1>
                    <Link style={{marginRight: '20px', color: '#b6b7db'}} to="/saved">Saved Movies</Link>
                    <form onSubmit={this.handleSubmit}>
                        <input className="input" onChange={this.handleChange} value={this.state.inputValue} />
                        <button className="input-button" type="submit">Search</button>
                    </form>
                </div>
                        {this.state.movies.map(movie => {
                            return <SearchResults movie={movie} />
                        })}
                </div>
            )
        }
    }