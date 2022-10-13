<template>
  <div class="schulte-grid-wrap">
    <schulte-grid :grid="3" @errorTap="errorTap" @finishFun="showResult"></schulte-grid>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showResult(timer) {
      console.log('result time ', timer, ' ms')
    },
    errorTap(e) {
      console.log('should be ', e)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.schulte-grid-wrap{
  width:200px;
  margin:0 auto;
}
</style>
