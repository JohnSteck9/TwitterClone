import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

interface ILanguages {
    [key: string]: {
        nativeName: string;
    };
}

const lngs: ILanguages = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukrainian' },
};

function App() {
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

            {/* <Trans i18nKey="description"> */}
            {/*    Edit <code>src/App.tsx</code> and save to reload. */}
            {/* </Trans> */}
        </>
    );
}

export default App;
