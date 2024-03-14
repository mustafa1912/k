import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationAr from './ar.json'
import translationEn from './en.json'

const resources = {
    en: {
        translation: translationEn
    },
    ar: {
        translation: translationAr
    }
}
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ar', // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false,
        },
        React: {
            useSuspense: false
        },
        // supportedLngs: ['en', 'ar',],
        // detection: {
        //     order: ['cookie', 'path', 'htmlTag'],
        //     caches: ['cookie'],
        //   },
    });
export default i18n;