import { FormEvent, useState } from "react";
import closeImg  from '../../assets/close.png'
import incomeImg from '../../assets/Entradas.png';
import outcomeImg from '../../assets/Saidas.png';
import Modal  from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";


interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen,  onRequestClose}: newTransactionModalProps)  {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const { createTransactions } = useTransactions();

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        if (title === '' && amount === 0 && category === '') return;

        createTransactions({
            title,
            amount,
            category,
            type,
        })

        setType('deposit');
        setTitle('');
        setAmount(0);
        setCategory('');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction} >
                <button
                    type='button'
                    onClick={onRequestClose}
                    className='react-modal-close'
                >
                    <img src={closeImg} alt="fechar modal" />
                </button>

                <h1>Register transaction</h1>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    placeholder="Title"
                />

                 <input
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    type='number'
                    placeholder="Value"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Expenditure" />
                        <span>Expenditure</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}