<template>
  <div class="timer-display">
    <h1>{{ minutes }}:{{ seconds }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      intervalId: 0,
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeunmount() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        this.seconds++
        if (this.seconds === 60) {
          this.minutes++
          this.seconds = 0
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.intervalId)
    },
  },
}
</script>

<style scoped>
.timer-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: aqua;
}
</style>
