import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index';
import LoginRegister from '@/views/Login';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/Login',
            name: 'LoginRegister',
            component: LoginRegister
        }
    ]
})