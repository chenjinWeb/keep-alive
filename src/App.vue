<template>
  <div id="app">

    <keep-alive>

      <router-view class="a" v-if="!$route.meta.keep_alive"></router-view>

    </keep-alive>

    <router-view class="b" v-if="$route.meta.keep_alive"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.info(this.$route.meta)
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
