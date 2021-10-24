const contextReducer = (state: any, action: any) => {
    let transactions: any;

    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t:any) => t.id !== action.payload);

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        default:
            return state;
    }
}

export default contextReducer
