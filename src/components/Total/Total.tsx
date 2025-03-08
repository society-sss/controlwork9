import { useAppSelector } from '../../app/hooks';
import './total.css'

const Total = () => {
    const {transactions} = useAppSelector(state => state.transaction)
    const allTotal = transactions.map(tr => tr.type)
    console.log(allTotal)
    return (
        <div className="main-total">
            <h3>Total: <span>720 KGS</span></h3>
        </div>
    )
}

export default Total;