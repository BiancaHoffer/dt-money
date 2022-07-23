import styled from "styled-components";

export const Container = styled.main`
    margin-top: 4rem;
    
    h1 {
        display: none;
        font-size: 1.4rem;
        font-weight: 400;

        @media (max-width: 720px) {
            display: flex;
        }
    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem; //espaçamento vertical dos itens
        
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

            @media (max-width: 720px) {
                display: none; 
            }
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            
            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }

        tr {
            @media (max-width: 720px) {
               display: flex; 
               flex-direction: column;
               margin-top: 8px;
              
                
               
            }
            
        }
    }
`;