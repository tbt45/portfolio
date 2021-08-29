import Vue from 'vue'
import App from './App.vue';
// import Test from './components/views/Test.vue';
// import TestSecond from './components/views/TestSecond';
// import Todo from './components/views/Todo';
import router from "./router"

Vue.config.productionTip = false;
// Vue.component("Test",Test);
// Vue.component("TestSecond",TestSecond);
// Vue.component("Todo.vue",Todo);
// testをグローバル登録

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
