import { Routes, Route } from 'react-router-dom';
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
    return (
        <>
            <div>App</div>
            {/* <Routes> */}
            {/*    <Route path="/" element={<SignUp />} /> */}
            {/*    <Route path="/sign-in" element={<SignIn />} /> */}
            {/*    <Route path="/sign-up" element={<SignUp />} /> */}
            {/* </Routes> */}

            {/* <Trans i18nKey="description"> */}
            {/*    Edit <code>src/App.tsx</code> and save to reload. */}
            {/* </Trans> */}
        </>
    );
}

export default App;
