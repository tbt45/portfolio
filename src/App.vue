<template>
  <p>いいね{{ number }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  date(){
    return{
      number: 5
    };
  }
};
</script>

<style>
</style>
