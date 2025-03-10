import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostTransactionType, TransactionType } from "./transactionSlice";

const BASE_URL = 'https://elzar-js-27-default-rtdb.europe-west1.firebasedatabase.app/';

export const addTransaction = createAsyncThunk<TransactionType, TransactionType>(
    "transaction/addTransaction",
    async (transaction) => {
        const responce = await axios.post(`${BASE_URL}/transaction.json`, transaction)
        return {...transaction, id: responce.data.id}
    }
)

export const getTransaction = createAsyncThunk<TransactionType[]>(
    "transaction/getTransaction",
    async () => {
        const responce = await axios(`${BASE_URL}/transaction.json`)
        const transactionsArray: TransactionType[] = Object.entries(responce.data).map(([id, transaction]: [string, any]) => ({
            id,
            type: transaction.type,
            category: transaction.category,
            amount: transaction.amount,
            data: transaction.data,
        }));
        return transactionsArray
    }
)

export const deleteTransaction = createAsyncThunk<void, string>(
    "transaction/deleteTransaction",
    async (id) => {
        await axios.delete(`${BASE_URL}/transaction/${id}.json`)
    }
)

export const renameTransaction = createAsyncThunk<void, PostTransactionType>(
    "transaction/renameTransaction",
    async ({id, transaction}) => {
        await axios.put(`${BASE_URL}/transaction/${id}.json`, transaction)
    }
)