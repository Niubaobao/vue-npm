<template>
  <div id="app">
    <vpay
      ref="pays"
      v-model="show"
      @close="close"
      @forget="forget"
      @input-end="inputEnd"
    ></vpay>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: () => ({
    show: true
  }),
  methods: {
    close() {
      console.log('close')
    },
    forget() {
      console.log('forget')
    },
    inputEnd() {
      console.log('inputEnd')
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
