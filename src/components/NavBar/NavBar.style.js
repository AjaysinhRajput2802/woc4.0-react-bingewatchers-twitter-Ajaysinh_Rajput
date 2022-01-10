import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: black;
    color: white;
`;

export const Content = styled.div`
    position: absolute;
    width: 100%;
    max-width: 1280px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px){
            font-size: var(--fontSmall);
        }
    }
`;
