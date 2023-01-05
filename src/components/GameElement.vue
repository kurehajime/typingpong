<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import BallElement from './BallElement.vue';
import { useQuartz } from '../hooks/useQuartz'
import { Pong } from '../models/Pong';
import { Setting } from '../models/Setting';
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
} as Setting
const pong = ref<Pong>(new Pong(setting, setting.startPoint, setting.startVec));
start()

watchEffect(() => {
  time.value = getTime()
  pong.value = Pong.tick(pong.value)
})

</script>

<template>
  <svg>
    <rect x="0" y="0" width="500" height="600" fill="black" stroke="gray" stroke-width="10" />
    <BallElement :x="pong.ball.x" :y="pong.ball.y" />
  </svg>
</template>

<style scoped>
svg {
  width: 500px;
  height: 600px;
}
</style>
