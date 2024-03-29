import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { usePreferencesStore } from '@nx/stores';
import { i18n } from '@nx/utils';
import type { VueI18n, Composer } from 'vue-i18n';
const nowLang =
  i18n.mode === 'legacy'
    ? (i18n.global as unknown as VueI18n).locale
    : (i18n.global as unknown as Composer).locale.value;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:locale/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    { path: '/:pathMatch(.*)*', name: '404', redirect: () => `/${nowLang}` }, //必須放最下面
  ],
});

router.beforeEach(async (to) => {
  const paramsLocale = to.params.locale as string;
  const { locales, locale } = storeToRefs(usePreferencesStore());
  const langMap = locales.value.map((el) => el.value);
  console.log(paramsLocale, langMap, locale, locales);
  if (!langMap.includes(paramsLocale)) {
    return `/${nowLang}`;
  }
  if (nowLang !== paramsLocale) {
    // 設定語言
    locales.value.find((item) => {
      if (item.value === paramsLocale) {
        locale.value = item;
      }
    });
  }
});
export default router;
