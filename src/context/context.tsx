import React, {useReducer, createContext } from 'react'
import contextReducer from './contextReducer';

export type transactionType = {
    id: number,
    type: string,
    category: string,
    amount: number,
    date: string
}


const storedTransaction = localStorage.getItem('transactions');
const initialState: any = storedTransaction !== null ? JSON.parse(storedTransaction) : [];

export const ExpenseTrackerContext: any = createContext<any>(initialState);

type Props = {
    children : any
}

export const Provider: React.FC<Props> = ({children}) => {
    const [transactions, dispatch]: [any, any] = useReducer<any>(contextReducer, initialState) 

    //Action Creater
    const deleteTransaction: any = (id: any) => dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction: any = (transaction: any) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
    
    const balance = transactions.reduce((acc: number, currVal: any) => {
        return(currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0)
    console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}