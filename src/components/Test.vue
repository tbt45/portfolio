<template>
  <div>
    <input
      v-model="newTodo" 
      @keydown.enter="addTodo">
    <button @click="OnClick">入力</button>
    <p>[{{ newTodo }}]</p>
  </div>
</template>

<script>
export default {
  // el: '#app',
  data: function(){
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo(){
      this.$emit('add-todo',this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>

<style>
#app{
  color: red;
}
</style>