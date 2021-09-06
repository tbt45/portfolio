<template>
    <div> 
        <!-- <div :style="{ backgroundImage: 'url(' + image_src.url + ')' }"> -->
            <button @click="Home">ホーム</button>
            <h2>テスト掲示板</h2>
            <label for="name" class="name">名前</label>
            <input type="text" id="name" v-model="name">
            <label for="comment" class="name">コメント</label>
            <textarea name="comment" id="comment" class="name" v-model="comment"></textarea>
            <button @click="createComment" class="name">送信</button>
            <button @click="remove">削除</button>
            <h2>掲示板</h2>
            <div v-for="post in posts" :key="post.name" class="comment">
            <div>名前 :{{post.fields.name.stringValue}}</div>
            <div>コメント :{{post.fields.comment.stringValue}}</div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: function() {
        return {
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
        Home() {
            this.$router.push("/");
        },
        createComment(){
            axios.post('https://firestore.googleapis.com/v1/projects/test-74b65/databases/(default)/documents/comments',
            {
                return(){
                    alert(alert);
                },
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
        },
        remove(){
            this.post.shift()
        }
    },
    computed: {
        image_src(){return this.$store.state.image.url}
    },
};
</script>

<style>
    .name{
        display: block;
    }
    .comment{
        color: crimson;
        border: solid red;
    }
    .main{
        background-image: url("/src/images/mac.jpeg");
        height: 500px;
        width: 500px;
    }
</style>