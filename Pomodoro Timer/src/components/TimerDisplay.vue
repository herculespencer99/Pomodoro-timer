<template>
  <div class="timer-display">
    <h1>{{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}</h1>
    <div v-if="currentTab === 'pomodoro'" class="pomodoro-info">
      <h2>Pomodoro Timer</h2>
      <p>Repetitions: {{ repetitions }}</p>
      <p>Interval: {{ interval }} minutes</p>
    </div>
    <div v-else-if="currentTab === 'shortBreak'" class="short-break-info">
      <h2>Short Break</h2>
      <p>Duration: {{ shortBreakDuration }} minutes</p>
    </div>
    <div v-else-if="currentTab === 'longBreak'" class="long-break-info">
      <h2>Long Break</h2>
      <p>Duration: {{ longBreakDuration }} minutes</p>
    </div>
    <div class="control-buttons">
      <button @click="startTimer">Start</button>
      <button @click="pauseTimer">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      intervalId: 0,
      isRunning: false,
      repetitions: 4,
      interval: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      currentTab: 'pomodoro',
      currentRepetition: 1,
    }
  },
  methods: {
    startTimer() {
      this.isRunning = true
      this.intervalId = setInterval(() => {
        if (this.isRunning) {
          if (this.seconds > 0) {
            this.seconds--
          } else if (this.minutes > 0) {
            this.minutes--
            this.seconds = 59
          } else {
            this.handleTimerComplete()
          }
        }
      }, 1000)
    },
    pauseTimer() {
      this.isRunning = false
      clearInterval(this.intervalId)
    },
    resetTimer() {
      this.isRunning = false
      clearInterval(this.intervalId)
      this.minutes = this.interval
      this.seconds = 0
      this.currentTab = 'pomodoro'
      this.currentRepetition = 1
    },
    handleTimerComplete() {
      if (this.currentTab === 'pomodoro') {
        this.playSound('alarm.mp3')
        this.currentTab = 'shortBreak'
        this.minutes = this.shortBreakDuration
        this.seconds = 0
      } else if (this.currentTab === 'shortBreak' || this.currentTab === 'longBreak') {
        this.currentRepetition++
        if (this.currentRepetition <= this.repetitions) {
          this.currentTab = 'pomodoro'
          this.minutes = this.interval
          this.seconds = 0
        } else {
          this.currentTab = 'longBreak'
          this.minutes = this.longBreakDuration
          this.seconds = 0
        }
      } else if (this.currentTab === 'longBreak') {
        this.resetTimer()
      }
    },
    playSound(file: string) {
      const audio = new Audio(file)
      audio.play()
    },
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

button {
  padding: 20px 50px;
  min-width: 3rem;
  border-radius: 5px;
  border: 4px solid aqua;
  font-size: 20px;
  background-color: #181818;
  color: aqua;
  cursor: pointer;
}

.pomodoro-info,
.short-break-info,
.long-break-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.pomodoro-info h2,
.short-break-info h2,
.long-break-info h2 {
  font-size: 2.5rem;
  font-weight: 600;
}

.pomodoro-info p,
.short-break-info p,
.long-break-info p {
  font-size: 1.5rem;
  font-weight: 400;
}

.control-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  gap: 20px;
}
</style>
