import Vue from 'vue'
import App from './App.vue';
import test from './test.vue';

Vue.config.productionTip = false;
Vue.component("test",test);
// testをグローバル登録

new Vue({
    render: h => h(App),
}).$mount('#app')
