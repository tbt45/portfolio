<template>
    <div>
    <button @click="Home">ホーム</button> 
    <header class="title">REVERSI</header>
    <main class="main">
        <table class="field">
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr>
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr> 
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr> 
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr> <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr> 
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr> 
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr> 
            <tr class="column">
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
                <th class="squares"></th>
            </tr>
        </table>
    </main>
    
</div>
</template>

<script>
export default {
    methods: {
        Home() {
            this.$router.push("/");
        },
    }
}
</script>

<style>
    .title {
        font-size: 50px;
    }

    .field {
        background-color: green;
    }

    .squares {
        width: 60px;
        height: 60px;
        border: solid;
        border-color: black;
    }
</style>