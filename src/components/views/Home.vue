<template>
  <div class="main">
    <title>tbt</title>
    <div class="home">tbt</div>
    <ul class="menu">
      <li @click="Test">TEST</li>
      <li @click="Todo">TODO</li>    
      <li @click="Reversi">REVERSI</li>  
    </ul>
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
    text-align: center;
    margin-top: 40px;
  }
  .menu{
    display: inline;
    cursor: pointer;
  }
  li:hover{
    color: aqua;

  }
</style>