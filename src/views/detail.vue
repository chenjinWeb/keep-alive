<template>
  <div class="list">
    <h1>{{msg}}</h1>
    <button @click="$router.go(-1)">返回</button>
    <router-link to="/list">跳到list页面</router-link>
  </div>
</template>

<script>

    export default {
        name: "detail",
        data() {
            return {
              msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {
          //this.ajaxRequest();
        },
        computed: {},
        methods: {

        },
        mounted() {

        }

    }

</script>

<style scoped>


</style>
