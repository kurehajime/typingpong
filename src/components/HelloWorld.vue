<script setup lang="ts">
import { useQuartz } from '../hooks/useQuartz'
const { time, start } = useQuartz(100);
start()
</script>

<template>
  <div>{{ time() }}</div>
</template>

<style scoped>

</style>
