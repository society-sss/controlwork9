import './header.css'

const Header = () => {
    return (
        <div className='main-header'>
            <h3>finance tracker</h3>
            <nav className='main-navigation'>
                <button type="button" className="btn btn-primary">categories</button>
                <button type="button" className="btn btn-primary">add</button>
            </nav>
        </div>
    )
}

export default Header;