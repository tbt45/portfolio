import Vue from 'vue'
import App from './App.vue';
import Test from './components/Test.vue';
import TestSecond from './components/TestSecond.vue';

Vue.config.productionTip = false;
Vue.component("Test",Test);
Vue.component("TestSecond",TestSecond);
// testをグローバル登録

new Vue({
    render: h => h(App),
}).$mount('#app')
