import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr); //1fr 1fr 1fr:  3 colunas com tamanho flexível 
    gap: 2rem; //espaçamento entre cada item
    margin-top: -7rem;

    @media (max-width: 720px) {
        grid-template-columns: 3fr;
    }

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title)
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        display: block;
        margin-top: 0.6rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    /*&.highlight-background {
        background: var(--green);
        color: var(--shape);
    }
    */
`;