<template>
<div class="center">
  <h3>Public stores</h3>
  {{ account }}
  <h3>Private stores</h3>
  {{ infoAccount }}
</div>
</template>

<script setup lang="ts">
import { useMemberInfo } from '@nx/stores';
import { usePrivateInfo } from '../stores/testStore';

const member = useMemberInfo();
const info = usePrivateInfo()
const { account } = storeToRefs(member);
const {infoAccount} = storeToRefs(info)
</script>

<style scoped>
.center{
  text-align:center;
}
</style>
