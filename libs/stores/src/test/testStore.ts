import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useMemberInfo = defineStore('memberInfo', () => {
  const account = ref('TestAccount');

  return {
    account,
  };
});
