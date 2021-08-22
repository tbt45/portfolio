<template>
    <div>
        <input type="text" v-model="newItem">
        <button @click="addItem">表示</button>
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>


export default {
    el:'#app',
        data:function() {
        return {
        newItem:""
        };
    },
    methods:{
        addItem:function(){
        alert();
        },
    }
} 


</script>