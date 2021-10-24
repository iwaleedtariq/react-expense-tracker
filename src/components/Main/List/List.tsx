import React, { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from './styles';
import { ExpenseTrackerContext, transactionType } from '../../../context/context';


const List: React.FC = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

    // const transactions: transactionType[] = [
    //     { id: 1, type: "Income", category: "Business", amount: 2000, date: "Thu Oct 21 2021"},
    //     { id: 2, type: "Expense", category: "Entertainment", amount: 300, date: "Thu Oct 21 2021"},
    //     { id: 3, type: "Expense", category: "Entertainment", amount: 300, date: "Thu Oct 21 2021"},
    //     { id: 4, type: "Expense", category: "Entertainment", amount: 300, date: "Thu Oct 21 2021"},
    //     { id: 5, type: "Expense", category: "Entertainment", amount: 300, date: "Thu Oct 21 2021"},
    // ];
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction: any) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => {deleteTransaction(transaction.id)}}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>    
            ))}
        </MUIList>
    )
}

export default List
