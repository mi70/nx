<template>
  <div>
    <select v-model="locale" @change="changeLocale">
      <option v-for="item in locales" :key="item.key" :label="item.name" :value="item">
        <div class="menu-lang">
          <span>{{ item.name }}</span>
        </div>
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { usePreferencesStore } from '@nx/stores';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { locales, locale } = storeToRefs(usePreferencesStore());

const changeLocale = () => {
  router.push({
    name: route.name!,
    params: { locale: locale.value.value },
  });
};
</script>
<style scoped>
select {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
}
</style>
