import React, { useContext } from 'react'
import { MovieContext } from '../../Contexts/MovieContexts';

import { Container, Description } from './styles';

const API_KEY = 'api_key=b5ece9c2ec01de956dd42e64df4e88b8';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';
const pageNumber = 'page='

let result: any;

async function getMovies(page: number | undefined) {

    try {
        const response = await fetch(BASE_URL + '?' + API_KEY + '&' + language + '&' + pageNumber + page)
        const data = await response.json()
        result = data.results;
    } catch (error) {
        console.error(error)
    }
}

const MovieContent: React.FC = () => {
    const { page, movie } = useContext(MovieContext);
    let currentMovie
    getMovies(page);
    if (movie !== undefined) {
        currentMovie = result[movie]
    }
    if (movie !== undefined) {
        return (
            <Container>
                <img src={`${IMG_URL}${currentMovie.poster_path}`} alt="movie poster" />
                <Description>
                    <strong>{currentMovie.title}</strong>
                    <span>{currentMovie.overview}</span>
                </Description>
            </Container>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default MovieContent;