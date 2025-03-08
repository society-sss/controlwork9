import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../../UI/Spinner/Spinner';
import Total from '../Total/Total';
import './transactionList.css'
import { getTransaction } from '../../store/transaction/transactionThunks';

const TransactionList = () => {
    const {loading, transactions} = useAppSelector(state => state.transaction)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getTransaction())
    }, [dispatch])
    return (
        <div>
            <Total/>
            {loading ? <Spinner/> : (
                transactions.map(tr => (
                    <div className="main-transaction">
                        <div className="transaction-info">
                            <p>{tr.data} <b>{tr.category}</b></p>
                        </div>
                        <div className="transaction-delete-or-rename">
                            <p>{tr.category === 'income' ? `+${tr.amount}` : `-${tr.amount}`} kgs</p>
                            <button type="button" className="btn btn-warning">rename</button>
                            <button type="button" className="btn btn-danger">delete</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default TransactionList;