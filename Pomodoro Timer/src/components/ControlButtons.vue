<template>
  <div class="control-buttons">
    <button class="play-button" @click="$emit('pause')">{{ isRunning ? 'Pause' : 'Play' }}</button>
    <button class="reset-button" @click="$emit('reset')">Reset</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isRunning: Boolean,
  },
}
</script>

<style>
.control-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  gap: 20px;
}

button {
  padding: 20px 50px;
  border-radius: 5px;
  border: 4px solid aqua;
  font-size: 20px;
  font-weight: bold;
  color: aqua;
  cursor: pointer;
  background-color: #262626;
}

.reset-button {
  border: 4px solid #d89c9e;
  color: #d89c9e;
}

.play-button {
  border: 4px solid rgb(19, 216, 216);
  color: rgb(19, 216, 216);
}
.reset-button:hover {
  background-color: #181818;
  border: 4px solid #e44c51;
  color: #e44c51;
  scale: 1.05;
}

.play-button:hover {
  background-color: #181818;
  border: 4px solid aqua;
  color: aqua;
  scale: 1.05;
}
</style>
