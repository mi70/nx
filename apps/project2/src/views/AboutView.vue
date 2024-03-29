<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $t('test') }}{{ $n(100.12, 'decimal') }}</p>
  </div>
</template>
<script setup lang="ts"></script>
<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
</style>
