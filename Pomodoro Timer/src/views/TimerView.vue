<script setup lang="ts">
import TimerDisplay from '../components/TimerDisplay.vue'
</script>

<template>
  <div class="timer">
    <h1>This is the timer page</h1>
    <TimerDisplay />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
