import { FC } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

interface ILanguages {
    [key: string]: {
        nativeName: string;
    };
}

const lngs: ILanguages = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukrainian' },
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

type Props = OwnProps;

const Main: FC<Props> = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Button variant="contained">{t('general.hello')}</Button>
            <SignIn />
            <SignUp />
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        type="submit"
                        key={lng}
                        disabled={i18n.resolvedLanguage === lng}
                        onClick={() => i18n.changeLanguage(lng)}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Main;
