import React from 'react';
import { connect } from 'react-redux'
import { saveMovie } from '../redux/actions'
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
        const { Poster, Title, Year, imdbID, Movie } = this.props.movie
    return (
    <Container>
        <Row id="row">
            <Col md="auto" id="row">
                <Card className="card">
                <Card.Img className="image" variant="top" id="poster" alt="movie poster" src={Poster}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '25px' }}>{Title}: {Year}</Card.Title>
                    <Button style={{fontSize: '15px'}}className="button" variant="primary" id={imdbID} onClick={() => this.props.saveMovie(this.props.movie)}>Add Movie</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )

}
}

const mapDispatchToProps = {
    saveMovie
}

export default connect(null, mapDispatchToProps)(SearchResults) 
