import styled from "styled-components";

export const Container = styled.header`
   background: var(--blue);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

        img {
           @media (max-width: 500px) {
            width: 150px;
           }
        }

        button {
        font-size: 1rem;
        color: var(--shape);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem; //14px
        border-radius: 0.25rem; //4px
        height: 3rem; //48px

        transition: filter 0.2s;

        &:hover {
        filter:brightness(0.9);
        }
    }
`;