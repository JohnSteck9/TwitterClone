import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BookPage from './pages/BookPage/BookPage';
import BookListPage from './pages/BookListPage/BookListPage';
import { appConfig } from './config/appConfig';
import NewBookPage from './pages/NewBookPage/NewBookPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Header from './shared/components/Header/Header';

interface ILanguages {
    [key: string]: {
        nativeName: string;
    };
}

const lngs: ILanguages = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukrainian' },
};

function App(): JSX.Element {
    return (
        <>
            <h1>App</h1>
            {/*<h2></h2>*/}
            <BrowserRouter basename={appConfig.GITHUB_REPOSITORY_NAME}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="books">
                        <Route index element={<BookListPage />} />
                        <Route path=":id" element={<BookPage />} />
                        <Route path="new">
                            <Route index element={<NewBookPage />} />
                            <Route path="contact" element={<ContactPage />} />
                        </Route>
                    </Route>
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
