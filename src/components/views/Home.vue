<template>
  <div class="main">
    <div class="home">ホーム</div>
    <button @click="Test">TEST</button>
    <button @click="Todo">TODO</button>    
    <button @click="Reversi">REVERSI</button>  
  </div>
</template>

<script>
export default {
  methods: {
    Test() {
      this.$router.push("test");
    },
    Todo() {
      this.$router.push("todo");
    },
    Reversi() {
      this.$router.push("reversi");
    },
  }
}
</script>

<style>
  .home{
    display: block;

  }
</style>