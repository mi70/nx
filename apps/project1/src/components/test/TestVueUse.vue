<template>
  <div class="center">
    Now model {{ isDark?'Dark':'Light' }}.
  </div>
</template>

<script setup lang="ts">
const isDark = useDark()
</script>
<style scoped lang="scss">
.center{
  text-align:center;
  color:blue;
}
</style>
