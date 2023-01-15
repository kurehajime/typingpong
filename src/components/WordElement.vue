<script setup lang="ts">
import { Input } from '../models/Input';
import { Setting } from '../models/Setting';
import { Word } from '../models/Word';

type Props = {
    setting: Setting,
    word: Word,
    input: Input,
}
const props = defineProps<Props>()

const cellWidth = (): number => {
    return props.setting.width / props.setting.col
}
const cellHeight = (): number => {
    return props.setting.height / props.setting.row
}
const getX = () => {
    return props.word.x * cellWidth()
}
const getY = () => {
    return (props.word.y + props.setting.baseRow) * cellHeight()
}

</script>

<template>
    <rect :x="getX()" :y="getY()" :width="cellWidth()" :height="cellHeight()" fill="gray" />
</template>

<style scoped>

</style>
