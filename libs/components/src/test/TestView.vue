<template>
  <div class="center">
    This is public title {{ title }}
  </div>
</template>


<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>


<style scoped>
.center{
  text-align:center;
}
</style>
