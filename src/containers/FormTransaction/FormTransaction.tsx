import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './formTransaction.css'
import { TransactionType } from '../../store/transaction/transactionSlice';
import { addTransaction, getTransaction } from '../../store/transaction/transactionThunks';
import Spinner from '../../UI/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';


const FormTransaction = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {loading} = useAppSelector(state => state.transaction)
    const [transaction, setTransaction] = useState<TransactionType>({
        type: '',
        category: '',
        amount: '',
        data: ''
    })

    const addTransactionFunction = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setTransaction(prevState => ({...prevState, [name]: name === 'amount' ? +value : value}))
    }

    const addTransactionButton = () => {
        const date = new Date()
        const transactionData = {...transaction, data: date.toISOString()}
        dispatch(addTransaction(transactionData))
        dispatch(getTransaction())
        setTransaction({type: '', category: '', amount: '', data: ''})
        navigate('/')
    }

    return (
        <>
            {loading ? <Spinner/> : (
                <div className='main-form'>
                    <h2>Add expense / Income</h2>
                    <hr />
                    <label htmlFor="type">type</label>
                    <select name="type" id="type" value={transaction.type} onChange={addTransactionFunction}>
                        <option value="income">доход</option>
                        <option value="expense">расход</option>
                    </select>
                    <label htmlFor="category">category</label>
                    <input name='category' type="text" id="category" placeholder="категория" value={transaction.category} onChange={addTransactionFunction}/>
                    <label htmlFor="amount">amount</label>
                    <input name='amount' type="number" id='amount' placeholder="kgs" value={transaction.amount} onChange={addTransactionFunction}/>
                    <button type="button" className="btn btn-success add" onClick={() => addTransactionButton()}>add</button>
                </div>
            )}
        </>
    )
}

export default FormTransaction;