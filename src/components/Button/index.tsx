import React from 'react'

import Shuffle from '../../assets/shuffle.svg';

import { Container } from './styles';
interface MyButtonProps {
    onClick: () => void;
}
const Button: React.FC<MyButtonProps> = ({
    children,
    onClick
}) => {
    return (
        <Container onClick={onClick}>
            <img src={Shuffle} alt="Shuffle Icon" />

            <span>{children}</span>
        </Container>
    )
}

export default Button;