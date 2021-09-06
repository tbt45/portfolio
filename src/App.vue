<template>
  <div>
    <!-- <router-link to="/" class="link" active-class="link2" exact>home</router-link> -->
    <!-- <router-link to="/testsecond" class="link" active-class="link2" exact>test</router-link> -->
    <!-- <router-link to="/todo" class="link" active-class="link2" exact>todo</router-link> -->
    <router-link to="/Reversi" class="link" active-class="link2" exact>Reversi</router-link>    
    <router-view></router-view>
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
    /* margin: 10px;
    color: #000; */
    /* opacity: 0; */
    display: none;
    /* display: block; */
  }
  /* .link2{
    font-size: 25px;
    color: crimson;
  } */
</style>