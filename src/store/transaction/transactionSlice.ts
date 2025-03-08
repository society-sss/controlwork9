import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "./transactionThunks";


export interface TransactionType {
    type: string;
    category: string;
    amount: number | string;
    data: string;
    loading?: boolean;
}

const initialState: TransactionType = {
    type: '',
    category: '',
    amount: 0,
    data: '',
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
            .addCase(addTransaction.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addTransaction.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const transactionReducer = transactionSlice.reducer;
