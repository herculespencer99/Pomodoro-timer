<template>
  <div class="control-buttons">
    <button @click="$emit('pause')">Pause</button>
    <button @click="$emit('reset')">Reset</button>
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
  background-color: #181818;
  color: aqua;
  cursor: pointer;
}
</style>
