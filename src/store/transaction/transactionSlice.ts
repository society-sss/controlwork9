import { createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, getTransaction, renameTransaction } from "./transactionThunks";


export interface TransactionType {
    type: string;
    category: string;
    amount: number | string;
    data: string;
    id?: string;
}

interface AllTransaction {
    transactions: TransactionType[];
    loading: boolean;
}

export interface PostTransactionType {
    id: string;
    transaction: TransactionType;
}

const initialState: AllTransaction = {
    transactions: [],
    loading: false,
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTransaction.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions.push(action.payload)
            })
            .addCase(addTransaction.rejected, (state) => {
                state.loading = false;
                
            })
            .addCase(getTransaction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(getTransaction.rejected, (state) => {
                state.loading = false;

            })
            .addCase(deleteTransaction.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = state.transactions.filter(tr => tr.id !== action.meta.arg);
            })
            .addCase(deleteTransaction.rejected, (state) => {
                state.loading = false;

            })
            .addCase(renameTransaction.pending, (state) => {
                state.loading = true;
            })
            .addCase(renameTransaction.fulfilled, (state, action) => {
                state.loading = false;
                const indexTransaction = state.transactions.findIndex(tr => tr.id === action.meta.arg.id)
                indexTransaction !== -1 ? state.transactions[indexTransaction] = {...action.meta.arg.transaction, id: action.meta.arg.id} : null
            })
            .addCase(renameTransaction.rejected, (state) => {
                state.loading = false;

            })
    }
})

export const transactionReducer = transactionSlice.reducer;
