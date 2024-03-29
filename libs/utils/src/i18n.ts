import { createI18n } from 'vue-i18n';

import { en } from '@nx/locales';
import { tw } from '@nx/locales';
const numberFormats = {
  tw: {
    percent: {
      style: 'percent',
      maximumFractionDigits: 2,
    },
    decimal: {
      style: 'decimal',
      maximumFractionDigits: 1,
      minimumFractionDigits: 0,
    },
  },
  en: {
    percent: {
      style: 'percent',
      maximumFractionDigits: 2,
    },
    decimal: {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    },
  },
};
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'tw',
  fallbackLocale: 'tw',
  allowComposition: true,
  globalInjection: true,
  silentTranslationWarn: true,
  messages: {
    en,
    tw,
  },
  numberFormats,
});

export default i18n;
