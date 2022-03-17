import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    

    padding: 11px 13px;
    gap: 17px;
    margin-bottom: 26px;

    background-color: var(--bg-button);
    border-radius: 5px;
    border: 2px solid var(--button-border);

    font-size: 12px;
    font-weight: 700;

    cursor: pointer;

    transition: .6s;
   

    img {
        width: 35.56px;
        height: 25.29px;
    }

    span {
        font-size: 14px;
    }

    &:hover{
        background-color: #fff;
    }
`