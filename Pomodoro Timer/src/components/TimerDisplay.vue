<template>
  <div class="timer-display">
    <h1>{{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}</h1>
    <ControlButtons :isRunning="isRunning" @pause="stopTimer" @reset="startTimer" />
  </div>
</template>

<script lang="ts">
import ControlButtons from './ControlButtons.vue'
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      intervalId: 0,
      isRunning: true,
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
        if (this.isRunning) {
          this.seconds++
          if (this.seconds === 60) {
            this.minutes++
            this.seconds = 0
          }
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.intervalId)
    },
    pauseTimer() {
      this.isRunning = !this.isRunning
    },
    resetTimer() {
      this.isRunning = false
      this.minutes = 0
      this.seconds = 0
    },
  },
  components: {
    ControlButtons,
  },
}
</script>

<style scoped>
.timer-display {
  display: flex;
  padding: 50px;
  border-radius: 20px;
  justify-content: center;
  border: 5px solid aqua;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
  color: aqua;
  background-color: #262626;
}
</style>
