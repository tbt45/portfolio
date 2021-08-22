<template>
  <div id="app">
    <button @click="increment">ボタン</button>
    <p>いいね({{ number }})</p>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      number: 0
    }
  },
  methods: {
    increment(){
      this.number += 1;
    },
  }
}
</script>

<style>
#app{
  color: red;
}
</style>