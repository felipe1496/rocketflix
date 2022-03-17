import React, { useContext } from 'react'

import Shuffle from '../../assets/shuffle.svg';
import Button from '../Button';
import MovieContent from '../MovieContent';

import { MovieContext } from '../../Contexts/MovieContexts';

import { Container, Logo, Title, Instruction, } from './styles';

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const Homepage: React.FC = () => {
    const { page, movie, setPage, setMovie } = useContext(MovieContext);

    return (
        <Container>
            <Logo>
                <img src={Shuffle} alt="Shuffle Image" />
            </Logo>

            <Title>
                <h1>Não sabe o que assistir?</h1>
            </Title>

            <MovieContent />

            <Button onClick={() => {
                setPage(getRandomInt(1, 501))
                setMovie(getRandomInt(0, 20))
            }}>Encontrar filme</Button>

            <Instruction>
                <span>
                    Clique em "Encontrar filme" que traremos informações <br />
                    de algum filme para você assistir hoje.
                </span>
            </Instruction>
        </Container>
    )
}

export default Homepage;