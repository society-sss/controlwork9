import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='main-header'>
            <h3>finance tracker</h3>
            <nav className='main-navigation'>
                <button type="button" className="btn btn-primary">categories</button>
                <button type="button" className="btn btn-primary" onClick={() => navigate('add-transaction')}>add</button>
            </nav>
        </div>
    )
}

export default Header;