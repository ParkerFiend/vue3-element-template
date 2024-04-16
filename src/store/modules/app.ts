import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('appStore', () => {
  const user = ref<{ name: string | null }>({ name: null });
  const userName = computed(() => user.value.name);

  function setUser(name?: string) {
    user.value.name = name || 'admin';
  }

  return { user, userName, setUser };
});
