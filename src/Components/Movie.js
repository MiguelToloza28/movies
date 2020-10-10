import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { shape } from 'prop-types';
import TypeMovie from './TypeMovie';


export default function Movie({ movie: { Title, Year, Poster, imdbID } }) {

    const url = `https://www.imdb.com/title/${imdbID}`;
    return (
        <Card style={{ width: '12rem' }} className="p-1 mb-2">
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text> {`Year ${Year}`} </Card.Text>
                <a target="_blank" href={url} rel="noopener noreferrer"><Button variant="primary">Watch trailer on IMDB</Button></a>
            </Card.Body>
        </Card>
    );
}

Movie.propTypes = {
    movie: shape(TypeMovie),
};
