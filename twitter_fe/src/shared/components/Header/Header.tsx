import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <>
            <hr />
            <h1>-=Header=-</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                    <li>
                        <Link to="/books/1">Book 1</Link>
                    </li>
                    <li>
                        <Link to="/books/new">Book New</Link>
                    </li>
                    <li>
                        <Link to="/books/new/contact">Book Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            {/* <Outlet /> */}
        </>
    );
};

export default Header;
