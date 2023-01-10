import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

type Props = OwnProps;

const SignIn: FC<Props> = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1>{t('sighIn')}</h1>
        </div>
    );
};

export default SignIn;
