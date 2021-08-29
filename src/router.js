import Vue from "vue";
import Router from "vue-router";
import Test from './components/views/Test.vue';
import Home from './components/views/Home';
import Todo from './components/views/Todo';
import Reversi from './components/views/Reversi';

Vue.use(Router);

export default new Router({
    routes: [{ path: '/', component: Home }, { path: '/test', component: Test },{ path: '/todo', component: Todo },{ path: '/reversi', component: Reversi }]
});
