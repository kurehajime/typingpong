<script setup lang="ts">import { Setting } from '../models/Setting';

type Props = {
    setting: Setting,
}
const props = defineProps<Props>()
const yoko: number[] = []
const tate: number[] = []
for (let i = 0; i < props.setting.width; i += 50) {
    yoko.push(i)
}
for (let i = 0; i < props.setting.height; i += 50) {
    tate.push(i)
}

</script>

<template>
    <g>
        <g v-for="x in yoko" :key="x">
            <line :x1="x" y1="0" :x2="x" :y2="setting.height" stroke="#111111" />
        </g>
        <g v-for="y in tate" :key="y">
            <line x1="0" :y1="y" :x2="setting.width" :y2="y" stroke="#111111" />
        </g>
    </g>
</template>

<style scoped>

</style>
