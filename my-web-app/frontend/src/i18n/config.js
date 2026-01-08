import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';

i18n
    .use(LanguageDetector) // Automatically detects user language
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            de: de
        },
        fallbackLng: 'en', // Use English if the user language is missing
        interpolation: {
            escapeValue: false // React already safes from XSS
        }
    });

export default i18n;