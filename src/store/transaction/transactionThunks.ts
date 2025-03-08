import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TransactionType } from "./transactionSlice";

const BASE_URL = 'https://elzar-js-27-default-rtdb.europe-west1.firebasedatabase.app/';

export const addTransaction = createAsyncThunk<void, TransactionType>(
    "transaction/addTransaction",
    async (transaction) => {
        await axios.post(`${BASE_URL}/transaction.json`, transaction)
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