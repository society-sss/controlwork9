import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import './total.css'

const Total = () => {
    const {transactions} = useAppSelector(state => state.transaction)
    const [allTotal, setAllTotal] = useState(0)

    useEffect(() => {
        const total = transactions.reduce((acc, tr) => {
            if(tr.type === 'income') {
                return acc + +tr.amount;
            } else if(tr.type === 'expense') {
                return acc - +tr.amount;
            }
            return acc
        }, 0);
        setAllTotal(total)
    })

    return (
        <div className="main-total">
            <h3>Total: <span>{allTotal < 0 ? 0 : allTotal} KGS</span></h3>
        </div>
    )
}

export default Total;