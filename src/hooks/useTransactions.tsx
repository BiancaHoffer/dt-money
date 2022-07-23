import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode; //aceita qualquer tipo de conteúdo válido para o node. 
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([]); 

    useEffect(() => {
        api.get('transactions')
            .then((response => setTransaction(response.data.transactions)))
    }, [])
   
    async function createTransactions(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),    
        });

        const { transaction } = response.data;

        setTransaction([
            ...transactions,
            transaction,
        ])
    }

    console.log(transactions)

    return (
        <TransactionsContext.Provider value={{ transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    
    return context; 
}