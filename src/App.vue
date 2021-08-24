<template>
  <!-- <div>
    <p class="title">vue.js試験運用</p>
    <Test-second></Test-second>
    <Test></Test>
  </div> -->
    <div id="app">
    <h1>Todo</h1>
    <div>
      <input type="text" v-model="title" placeholder="タイトル">
    </div>
    <div>

      <textarea v-model="body" placeholder="内容"></textarea>
    </div>
    <div>
      <input type="submit" value="追加" @click="addList">
    </div>
    <ul v-for="(list, i) in lists" v-bind:key="i">
      <li>id: {{i}}, title: {{ list.title }} <button @click="deleteList(i)">削除</button></li>
    </ul>
    <pre>
      {{$data}}
    </pre>
  </div>
</template>

<script>
// import Test from "./components/Test.vue";
// import TestSecond from './components/TestSecond.vue';

export default {
    data: () => ({
    lists: [
      {title: 'mytodo', body: 'contentcontent'},
      {title: 'hogehoge', body: 'yuuyuuyuyuyu'}
    ],
    title: '',
    body: ''
  }),
  methods: {
    // リストの追加
    addList: function(){
      if(this.title === '' || this.body === '') return
      this.lists.push({title: this.title, body: this.body})
      this.title = ''
      this.body = ''
    },
    // リストの削除
    deleteList: function(i){
      this.lists.splice(i,1)
    }
  }
};
//   data (){
//   },
//   components: {
//     Test,
//     TestSecond,
//   },
// }
</script>

<style>
  /* .title{
    font-size: 50px;
    background-color: aqua;
  }
   */
</style>