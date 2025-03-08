import Total from '../Total/Total';
import './transactionList.css'

const TransactionList = () => {
    return (
        <div>
            <Total/>
            <div className="main-transaction">
                <div className="transaction-info">
                    <p>05.01.2023 21:00:00 <b>food</b></p>
                </div>
                <div className="transaction-delete-or-rename">
                    <p>-200 kgs</p>
                    <button type="button" className="btn btn-warning">rename</button>
                    <button type="button" className="btn btn-danger">delete</button>
                </div>
            </div>
        </div>
    )
}

export default TransactionList;