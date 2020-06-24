import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom';

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

        render() {
            return (
                <div>
                    <h1>Scene It</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.inputValue} />
                        <button type="submit">Search</button>
                    </form>
                    <Link style={{marginRight: '20px'}} to="/saved">Saved Movies</Link><Link to="/">Home</Link>
                    <div>
                        {this.state.movies.map(movie => {
                            return <SearchResults movie={movie} />
                        })}
                    </div>

                </div>
            )
        }
    }