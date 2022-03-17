import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--background);
    background-size: cover;
    
    width: 100%;
    height: 100%;

    overflow: auto;

    h1 {
        color: white;
    }
`

export const Logo = styled.div`
    margin-top: 126px;

    img {
        width: 87.24px;
        height: 62.93px;
    }
`
export const Title = styled.div`
    text-align: center;

    margin-bottom: 30px;

    h1 {
        font-size: 2.5rem;
        color: var(--title);
    }
`
export const Instruction = styled.div`
        text-align: center;

    span {
        color: var(--subtitle);
    }
`