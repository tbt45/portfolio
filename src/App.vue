<template>
  <div>
  <p class="title">vue.js試験運用</p>
  <test></test>
  <b></b>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Test from "./components/Test.vue";

export default {
  components: {
    Todo,
    Test,
  },
}
</script>

<style>
  .title{
    font-size: 50px;
    background-color: aqua;
  }
  
</style>