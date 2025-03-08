import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './formTransaction.css'
import { TransactionType } from '../../store/transaction/transactionSlice';
import { addTransaction, getTransaction, renameTransaction } from '../../store/transaction/transactionThunks';
import Spinner from '../../UI/Spinner/Spinner';
import { useNavigate, useParams } from 'react-router-dom';


const FormTransaction = () => {
    const { id } = useParams(); 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {loading, transactions} = useAppSelector(state => state.transaction)
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
        if(id) {
            dispatch(renameTransaction({id, transaction}))
            setTransaction({type: '', category: '', amount: '', data: ''})
            navigate('/')
        } else if(!id && transaction.type) {
            const date = new Date()
            const transactionData = {...transaction, data: date.toISOString()}
            dispatch(addTransaction(transactionData))
            setTransaction({type: '', category: '', amount: '', data: ''})
            navigate('/')
        } else {
            alert('выберите тип транзакции')
        }
    }

    useEffect(() => {
        if(id) {
            const idTransaction = transactions.find(tr => tr.id === id)
            idTransaction && setTransaction(idTransaction)
        }
    }, [transactions, id])
    return (
        <>
            {loading ? <Spinner/> : (
                <div className='main-form'>
                    <h2>{id ? 'rename' : 'Add expense / Income'}</h2>
                    <hr />
                    <label htmlFor="type">type</label>
                    <select name="type" id="type" value={transaction.type} onChange={addTransactionFunction}>
                        <option value=""></option>
                        <option value="income">доход</option>
                        <option value="expense">расход</option>
                    </select>
                    <label htmlFor="category">category</label>
                    <input name='category' type="text" id="category" placeholder="категория" value={transaction.category} onChange={addTransactionFunction}/>
                    <label htmlFor="amount">amount</label>
                    <input name='amount' type="number" id='amount' placeholder="kgs" value={transaction.amount} onChange={addTransactionFunction}/>
                    <button type="button" className="btn btn-success add" onClick={addTransactionButton}>add</button>
                </div>
            )}
            
        </>
    )
}

export default FormTransaction;