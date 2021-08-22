import Vue from 'vue'
import App from './App.vue';
import Test from './components/Test.vue';
import Todo from './components/Todo.vue';

Vue.config.productionTip = false;
Vue.component("test",Test);
Vue.component("todo",Todo);
// testをグローバル登録

new Vue({
    render: h => h(App),
}).$mount('#app')
