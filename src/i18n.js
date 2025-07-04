import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      width: 'Width (cm):',
      height: 'Height (cm):',
      length: 'Length (cm):',
      mass: 'Mass (kg):',
      sort: 'Sort Package',
      stack: 'Stack: {{result}}',
      language: 'Language',
      english: 'English',
      spanish: 'Spanish',
      REJECTED: 'REJECTED',
      SPECIAL: 'SPECIAL',
      STANDARD: 'STANDARD',
    },
  },
  es: {
    translation: {
      width: 'Ancho (cm):',
      height: 'Alto (cm):',
      length: 'Largo (cm):',
      mass: 'Masa (kg):',
      sort: 'Clasificar Paquete',
      stack: 'Pila: {{result}}',
      language: 'Idioma',
      english: 'Inglés',
      spanish: 'Español',
      REJECTED: 'RECHAZADO',
      SPECIAL: 'ESPECIAL',
      STANDARD: 'ESTÁNDAR',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
