import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <h1>Rick and Morty</h1>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </header>
    );
}

export default NavBar;
