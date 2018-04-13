import Vue from 'vue'
import Router from 'vue-router'

import { MINE } from './my';
import { onLine } from './onLineDoc';
import { checkHealth } from './checkHealth';

// 首页
const index = r => require.ensure([], () => r(require('../pages/index')), 'index');
const home = r => require.ensure([], () => r(require('../pages/home/home'), 'home'));

// 我的
const my = r => require.ensure([], () => r(require('../pages/my/my'), 'my'));

// 登陆注册
const login = r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login');
const forgotPassword = r => require.ensure([], () =>r(require('../pages/login/forgotPassword'), 'forgotPassword'));
const register = r => require.ensure([], () =>r(require('../pages/login/register'), 'register'));

// 急速问诊
const quickIssue = r => require.ensure([], () =>r(require('../pages/home/quickIssue/quickIssue'), 'quickIssue'));


Vue.use(Router)

const routes =  [{
    path: '/',
    component: index,
    redirect:'/home',
    children:[{
        path:'home',
        component:home
    },{
        path:'my',
        component:my
    }]
},{
    path:'/login',
    component: login
},{
    path:'/register',
    component: register
},{
    path:'/forgotPassword',
    component: forgotPassword
},{
    path:'/quickIssue',
    component: quickIssue
}, ...MINE, ...onLine, ...checkHealth ];


export default new Router({ routes })
