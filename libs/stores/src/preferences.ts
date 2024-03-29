import { ref, reactive, watch } from 'vue';
import { defineStore } from 'pinia';

import { useI18n } from 'vue-i18n';

export const usePreferencesStore = defineStore('preferences', () => {
  const localeKey = 'locale';
  const locales = reactive([
    {
      name: '繁體中文',
      key: 'tw',
      value: 'tw',
    },
    {
      name: 'English',
      key: 'en',
      value: 'en',
    },
  ]);

  const localLocale = locales.find((x) => x.key === localStorage.getItem(localeKey)) || locales[0];
  const locale = ref(localLocale);

  const { locale: nowLocale } = useI18n();

  watch(locale, (appLocale) => {
    localStorage.setItem(localeKey, appLocale.value);
    nowLocale.value = appLocale.value;
  });

  return { locales, locale };
});
