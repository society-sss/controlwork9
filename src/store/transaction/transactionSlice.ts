import { createSlice } from "@reduxjs/toolkit";
import { addTransaction, getTransaction } from "./transactionThunks";


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
    }
})

export const transactionReducer = transactionSlice.reducer;
