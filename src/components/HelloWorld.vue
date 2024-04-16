<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="msg">{{ msg }}</h1>
</template>

<style scoped>
.msg {
  color: #888;
}
</style>
