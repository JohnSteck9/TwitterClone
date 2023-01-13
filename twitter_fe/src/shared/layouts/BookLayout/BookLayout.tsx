import { FC } from 'react';
import { Link } from 'react-router-dom';

const BookLayout: FC = () => {
    return (
        <>
            <Link to="/book/1">Book 1</Link>
            <br />
            <Link to="/book/2">Book 2</Link>
            <br />
            <Link to="/book/new">New Book</Link>
            {/* <Outlet /> */}
        </>
    );
};

export default BookLayout;
