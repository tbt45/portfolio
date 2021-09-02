<template>
    <div> 
        <button @click="Home">ホーム</button>
        <!-- <div class="bg-color">
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
            <p>いいね({{ number }})</p>
            <p>入力↓</p>
            <input v-model="message" placeholder="入力してください">
            <p>コメント: {{ message }}</p>
            <input type="checkbox" id="jack" value="first" v-model="check">
            <label for="1">1</label>
            <input type="checkbox" id="john" value="second" v-model="check">
            <label for="2">2</label>
            <input type="checkbox" id="mike" value="third" v-model="check"> 
            <label for="3">3</label>
            <br>
            <span>チェック {{ check }}</span>
        </div>
        <p class="end">テスト終わり</p> -->
        <h2>テスト掲示板</h2>
        <label for="name" class="name">名前</label>
        <input type="text" id="name" v-model="name">
        <label for="comment" class="name">コメント</label>
        <textarea name="comment" id="comment" class="name" v-model="comment"></textarea>
        <button @click="createComment" class="name">送信</button>
        <h2>掲示板</h2>
        <div v-for="post in posts" :key="post.name" class="comment">
            <div>名前 :{{post.fields.name.stringValue}}</div>
            <div>コメント :{{post.fields.comment.stringValue}}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: function() {
        return {
            // message: [],
            // check: [],
            // number: 0,
            name: "",
            comment: "",
            posts: []
        };
    },
    created() {
        axios.get(
            'https://firestore.googleapis.com/v1/projects/test-74b65/databases/(default)/documents/comments'
        ).then(response => {
            this.posts = response.data.documents;
        });
    },
    methods: {
        // increment(){
        //     this.number += 1;
        // },
        // decrement(){
        //     this.number -= 1;
        // },
        Home() {
            this.$router.push("/");
        },
        createComment(){
            axios.post('https://firestore.googleapis.com/v1/projects/test-74b65/databases/(default)/documents/comments',
            {
                fields: {
                    name: {
                        stringValue: this.name
                    },
                    comment: {
                        stringValue: this.comment
                    }
                }
            }
            )
        this.name = "";
        this.comment = "";
        }
    }
};
</script>

<style>
    .bg-color{
        background-color: burlywood;
    }
    .end{
        background-color: rgb(175, 175, 241);
        margin-bottom: 100px;
    }
    .name{
        display: block;
    }
    .comment{
        color: crimson;
        
    }
</style>