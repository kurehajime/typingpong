<script setup lang="ts">
type Props = {
    x: number,
    y: number,
}
const props = defineProps<Props>()

</script>

<template>
    <rect :x="props.x - 3" :y="props.y - 3" width="7" height="7" fill="black" stroke="white" stroke-width="3" />
</template>

<style scoped>

</style>
