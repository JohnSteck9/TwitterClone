import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
    return (
        <>
            <div>Error Page 404</div>
            <Link to="/">APP</Link>
            <Link to="/sign-in">SIGN-IN</Link>
            <Link to="/sign-up">SIGN-UP</Link>
        </>
    );
};

export default ErrorPage;
