<script setup lang="ts">
import { ref } from 'vue';

import router from '../router';
import { useAppStore } from '../store/modules/app';

const appStore = useAppStore();

const userName = ref('');

function handleLogin() {
  appStore.setUser(userName.value);

  router.push('/home');
}
</script>

<template>
  <el-input
    v-model="userName"
    class="input m-20"
    placeholder="请输入用户名"
  ></el-input>
  <el-button @click="handleLogin">登录</el-button>
</template>

<style lang="scss" scoped>
.input {
  width: 300px;
}
</style>
