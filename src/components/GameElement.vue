<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue';
import BallElement from './BallElement.vue';
import GridElement from './GridElement.vue';
import WordElement from './WordElement.vue';
import { useQuartz } from '../hooks/useQuartz'
import { Pong } from '../models/Pong';
import { Setting } from '../models/Setting';
import { Word } from '../models/Word';
import { WordBuilder } from '../models/WordBuilder';
import { Input } from '../models/Input';
const [getTime, start] = useQuartz(1000);
const time = ref(0);
const setting = {
  width: 500,
  height: 600,
  startPoint: { x: 50, y: 60 },
  startVec: { x: 3, y: 3 },
  bounceVec: 4,
  minVec: 2,
  friction: 0.005,
  col: 10,
  row: 12,
  baseRow: 7,
} as Setting
const pong = ref<Pong>(new Pong(setting, setting.startPoint, setting.startVec));
const words = reactive<Word[]>([]);
const inputs = reactive<Input[]>([]);
start()

watchEffect(() => {
  time.value = getTime()
  pong.value = Pong.tick(pong.value)
})

const _words = WordBuilder.buildWord(setting.col, 5, 5555555)
_words.forEach(w => {
  words.push(w)
  inputs.push({ word: [], completed: false })
})

</script>

<template>
  <span class="bg">
    <svg :width="setting.width" :height="setting.height">
      <rect x="0" y="0" :width="setting.width" :height="setting.height" fill="black" />
      <GridElement :setting="setting" />
      <rect x="0" y="0" width="550" height="600" fill="transparent" stroke="gray" stroke-width="2" />
      <g v-for="index in 5" :key="index">
        <WordElement :setting="setting" :word="words[index - 1]" :input="inputs[index - 1]" />
      </g>
      <BallElement :x="pong.ball.x" :y="pong.ball.y" />
    </svg>
  </span>
</template>

<style scoped>

</style>
