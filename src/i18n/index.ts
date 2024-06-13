import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import languageEs from './translations/es.json';

const localize = getLocales()[0].languageCode;

const resources: Resource = {
  es: languageEs,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: localize,
  fallbackLng: 'es',
  resources,
});

export default i18n;
