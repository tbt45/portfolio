<template>
  <div>
    <router-link to="/" class="link" active-class="link2">空</router-link>
    <router-link to="/testsecond" class="link" active-class="link2">試験運用</router-link>
    <router-link to="/todo" class="link" active-class="link2">todo</router-link>
  </div>
</template>

<script>
// import Test from "./components/views/Test.vue";
// import TestSecond from './components//views/TestSecond.vue';
// import Todo from './components/views/Todo.vue'

// export default {
  // data (){
  // },
  // components: {
  //   // Test,
  //   TestSecond,
  //   Todo,
  // },
// }
</script>

<style>
  .link{
    margin: 100px;
    color: #000;
  }
  .link2{
    font-size: 50px;
  }
</style>