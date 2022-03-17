import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 34px;

    margin-bottom: 30px;

    > img {
        width: 171px;
        height: 243px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;

    width: 423px;

    > strong {
        font-size: 20px;
        color: var(--title);

        margin-bottom: 19px;
    }
    

    > span {
        font-size: 16px;
        font-weight: 300;
        color: var(--subtitle);

    }
    
    @media (max-width: 600px) {
        align-items: center;
        width: 70%;
    }


`