<script setup lang="ts">
import TimerDisplay from '../components/TimerDisplay.vue'
</script>

<template>
  <div class="timer">
    <TimerDisplay />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
  }
  .timer {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
}
</style>
