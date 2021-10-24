import { useContext } from "react";
import { expenseCategories, incomeCategories, resetCategories } from "./constants/categories"
import { ExpenseTrackerContext } from "./context/context";


const useTransactions = (title: string) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t: any) => t.type === title);
    const total = transactionsPerType.reduce((acc: number, currVal: any) => acc+=currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ transactionsPerType, total, categories });

    transactionsPerType.forEach((t: any) => {
        const category = categories.find((c) => c.type === t.category)
        if(category) category.amount += t.amount; 
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);
    const chartDate = {
        datasets : [{
            data : filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map(c => c.color)
        }],
        labels: filteredCategories.map(c => c.type)
    }

    return { filteredCategories, total, chartDate};
}

export default useTransactions;