<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useQuartz } from '../hooks/useQuartz'
const [getTime, start] = useQuartz(1000);
const time = ref(0);
start()

watchEffect(() => {
  time.value = getTime()
})

</script>

<template>
  <div>{{ time }}</div>
</template>

<style scoped>

</style>
