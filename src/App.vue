<template>
  <div>
  <p class="title">vue.js試験運用</p>
  <Test-second></Test-second>
  <Test @add-todo="addTodo"></Test>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import TestSecond from './components/TestSecond.vue';

export default {
  components: {
    Test,
    TestSecond,
  },
  methods:{
    addTodo(Test) {
      const newTodo = Test && Test.trim();
      if (!newTodo){
        return;
      }
      this.todo.title = newTodo;
    }
  }
}
</script>

<style>
  .title{
    font-size: 50px;
    background-color: aqua;
  }
  
</style>