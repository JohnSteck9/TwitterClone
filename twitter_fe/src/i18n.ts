import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import translationEN from './assets/i18n/en.json';
import translationUA from './assets/i18n/ua.json';

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    ua: {
        translation: translationUA,
    },
};

i18next
    .use(detector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources,
        lng: 'en',
        fallbackLng: 'en', // use en if detected lng is not available
        // keySeparator: false, // we do not use keys in form 'messages.welcome'
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })
    .catch((err) => console.error(err));
