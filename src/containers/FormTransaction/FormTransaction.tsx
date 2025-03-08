import './formTransaction.css'
const FormTransaction = () => {
    return (
        <div className='main-form'>
            <h2>Add expense / Income</h2>
            <hr />
            <label htmlFor="type">type</label>
            <select name="type" id="type">
                <option value="income">доход</option>
                <option value="expense">расход</option>
            </select>
            <label htmlFor="category">category</label>
            <input type="text" id="category" placeholder="категория"/>
            <label htmlFor="amount">amount</label>
            <input type="number" id='amount' placeholder="kgs"/>
            <button type="button" className="btn btn-success add">add</button>
        </div>
    )
}

export default FormTransaction;