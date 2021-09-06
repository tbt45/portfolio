<template>
    <div>
        <button @click="Home">ホーム</button> 
        <header class="title">REVERSI</header>
        <div id="text">
            <p id="message">
                <table border="1" cellspacing="0">
                <tr v-for="cell in cells" :key="cell">{{cell}}
                <td v-for="i in cell" :key="i" class="cell" @click="clicked()">
                    {{i}}
                <span v-if="i===1">&#x26AB;</span>
                <span v-if="i===-1">&#x26AA;</span>
                <span v-if="i===0"></span>
                </td>
                </tr>
                </table>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        pass:"",  
        i: 1,      
        cells: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0,-1, 1, 0, 0],
        [0, 0, 1,-1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],]
        };
    },
    
    methods: {
        Home() {
            this.$router.push("/");
        },
    },
    created() {
        
        },
        // clicked(ev){
            // ev = || window.event;
            // elem = ev.target;
            // let list_tr = document.getElementsByTagName("tr");
            // let list_td = elem.parentNode.childNodes;
            // list_tr = [].slice.call(list_tr);
            // list_td = [].slice.call(list_td);
            // tr_num = list_tr.indexOf(elem.parentNode);
            // td_num = list_td.indexOf(elem);
        // }
}
</script>

<style>
    .title {
        font-size: 50px;
    }
</style>