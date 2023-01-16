<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '../models/Input';
import { Setting } from '../models/Setting';
import { Word } from '../models/Word';

type Props = {
    setting: Setting,
    word: Word,
    input: Input,
}
const props = defineProps<Props>()

const keyword = (): string[] => {
    return props.word.word
}

const cellWidth = (): number => {
    return props.setting.width / props.setting.col
}
const cellHeight = (): number => {
    return props.setting.height / props.setting.row
}
const getX = (index: number) => {
    return (props.word.x + index) * cellWidth()
}
const getY = () => {
    return (props.word.y + props.setting.baseRow) * cellHeight()
}

</script>

<template>
    <g v-for="i in keyword().length" :key="i">
        <rect :x="getX(i - 1)" :y="getY()" :width="cellWidth()" :height="cellHeight()" fill="gray" />
        <text :x="getX(i - 1) + (cellWidth() / 2)" :y="getY() + cellHeight() / 2" :width="cellWidth()"
            :height="cellHeight()" fill="white" text-anchor="middle" dominant-baseline="central">{{
    keyword()[i - 1]
            }}</text>
    </g>
</template>

<style scoped>

</style>
