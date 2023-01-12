import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
    return (
        <>
            <div>Error Page 404</div>
            <Link to="/">APP</Link>
        </>
    );
};

export default ErrorPage;
