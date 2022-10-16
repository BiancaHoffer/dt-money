import { Container } from "./styles";

import  iconmeImg from '../../assets/Entradas.png';
import outcomeImg from '../../assets/Saidas.png';
import totalImg from '../../assets/Total.png'

import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
   const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
        } , {
            deposits: 0,
            withdraw: 0,
            total: 0,
        })

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={iconmeImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-UK', {
                        style: 'currency',
                        currency: 'GBP'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Expenditure</p>
                    <img src={outcomeImg} alt="Expenditure" />
                </header>
                <strong>-
                    {new Intl.NumberFormat('en-UK', {
                        style: 'currency',
                        currency: 'GBP'
                    }).format(summary.withdraw)}
                </strong>
            </div>

            <div style={{background: 'var(--green)', color: 'var(--shape)'}}>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-UK', {
                        style: 'currency',
                        currency: 'GBP'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}