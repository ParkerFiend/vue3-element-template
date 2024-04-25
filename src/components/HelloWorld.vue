<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="msg">{{ msg }}</h1>
</template>

<style lang="scss" scoped>
.msg {
  height: 100px;
  color: #888;

  @include mixin.setBorder;
}
</style>
