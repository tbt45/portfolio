<template>
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
    export default {
        data: () => ({
            lists: [
                // {title: '', body: ''},
                // {title: '', body: ''}
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
}
</script>