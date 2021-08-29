import Vue from "vue";
import Router from "vue-router";
import Test from './components/views/Test.vue';
import TestSecond from './components/views/TestSecond';
import Todo from './components/views/Todo';

Vue.use(Router);

export default new Router({
    routes: [{ path: '/', component: Test }, { path: '/TestSecond', component: TestSecond },{ path: '/todo', component: Todo }]
});
