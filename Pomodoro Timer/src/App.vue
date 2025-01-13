<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TimerView from './views/TimerView.vue'
</script>

<template>
  <!-- <header><nav></nav></header> -->
  <div class="wrapper">
    <TimerView />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
}
header {
  line-height: 1.5;
  width: 100%;
  background-color: antiquewhite;
  max-height: 10vh;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
