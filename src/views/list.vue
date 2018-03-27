<template>

    <div class="hello">

      <h1>vue</h1>

      <h2>{{msg}}</h2>

      <router-link to="/detail">跳转到detail页</router-link>

    </div>

</template>

<script>

  /*首次进来 hook 的触发顺序 created-> mounted-> activated，退出时触发 deactivated：
   *
   * // 控制台打印结果
    the hook of created is done!
    the hook of mounted is done!
    the hook of activated is done!
    the hook of deactivated is done!
    * */

    export default {
        name: "list",
        data() {
            return {
              msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {},
        methods: {
          initData(){
            console.info("initData")
          }
        },
        created: function() {
          console.log("the hook of created is done!");
        },
        mounted: function() {
          console.log("the hook of mounted is done!");
        },
        activated: function() {
          console.log("the hook of activated is done!");
        },
        deactivated: function() {
          console.log("the hook of deactivated is done!");
        }
    }

</script>

<style scoped>


</style>
