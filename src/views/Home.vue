<script setup lang="ts">
import { getData } from '@/api/user';

import HelloWorld from '../components/HelloWorld.vue';
import { useAppStore } from '../store/modules/app';

const appStore = useAppStore();
const userName = appStore.userName;

getData().then(({ data }) => {
  console.log(data);
});
</script>

<template>
  <HelloWorld :msg="`Hello ${userName}`"></HelloWorld>
</template>

<style lang="scss" scoped></style>
