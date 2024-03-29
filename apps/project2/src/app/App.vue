<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
const { locale } = useI18n();
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home', params: { locale } }">Home</RouterLink>
      <RouterLink :to="{ name: 'about', params: { locale } }">About</RouterLink>
    </nav>
    <LangSelect />
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
