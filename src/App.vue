<template>
  <div id="app">
  </div>
</template>

<script>
import { demo_ } from '@/api/demo.js'
export default {
  name: 'App',
  created() {
    this.ajax('32141')
  },
  methods: {
    ajax(param) {
      demo_(param)
    }
  }
}
</script>

<style scoped>
</style>
