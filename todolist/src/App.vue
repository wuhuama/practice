<template>
  <div id="app">
      <div id="cover"></div>
      <Heade></Heade>
      <router-view/>
  </div>
</template>

<script>
import Heade from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    Heade
  }
}
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: -1
}
</style>
