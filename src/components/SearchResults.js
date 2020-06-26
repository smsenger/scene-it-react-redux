import React from 'react';
import { connect } from 'react-redux'
import { saveMovie } from '../redux/actions'
import { deleteMovie } from '../redux/actions'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './SearchResults.css'





class SearchResults extends React.Component {
constructor(props) {
    super(props)
}
    render() {
        const { Poster, Title, Year, imdbID } = this.props.movie
    return (
    <Container>
        <Row>
            <Col md="auto" id="row">
                <Card className="card" style={{border: '1px solid red'}}>
                <Card.Img className="image" variant="top" id="poster" alt="movie poster" src={Poster}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '25px', color: 'red' }}>{Title}: {Year}</Card.Title>
                    <div className="flex-buttons">
                    <Button style={{fontSize: '15px', backgroundColor: '#b6b7db', border: '1px solid red'}}className="button" variant="primary" id={imdbID} onClick={() => this.props.saveMovie(this.props.movie)}>Add Movie</Button>
                    <Button style={{fontSize: '15px', backgroundColor: '#b6b7db', border: '1px solid red'}} className="button2" variant="primary" id={imdbID} onClick={() => this.props.deleteMovie(this.props.movie)}>Remove Movie</Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container> 
    )

}
}

const mapDispatchToProps = {
    saveMovie,
    deleteMovie
}

export default connect(null, mapDispatchToProps)(SearchResults) 
