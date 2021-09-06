<template>
            <div class="bg-color">
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
            <p class="end">テスト終わり</p>
        </div>
</template> 

<script>
export default {
    data: function() {
    return {
        message: [],
        check: [],
        number: 0,
    }
    },
    methods: {
        increment(){
            this.number += 1;
        },
        decrement(){
            this.number -= 1;
        },
    }
}
</script>