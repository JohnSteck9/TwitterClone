/* eslint-disable */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

type Props = OwnProps;

const SignIn: FC<Props> = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <Link to="/">APP</Link>
            <Link to="/sign-in">SIGN-IN</Link>
            <Link to="/sign-up">SIGN-UP</Link>
            <h1>{t('sighIn')}</h1>
        </div>
    );
};

export default SignIn;
