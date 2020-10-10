import { Col, Row, Container } from 'react-bootstrap';
import React from 'react';
import { arrayOf, shape } from 'prop-types';
import Movie from './Movie';
import TypeMovie from './TypeMovie';

const Results = ({ movies }) => (
    //create a column by result
    <Container>
        <Row>
            {movies.map((movie) => (
                <Col key={movie.Title}>
                    <Movie movie={movie} />
                </Col>
            ))}
        </Row>
    </Container>
);

Results.propTypes = {
    movies: arrayOf(shape(TypeMovie)),
};

export default Results;