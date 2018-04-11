import Vue from 'vue'
import Router from 'vue-router'


const index = r => require.ensure([], () => r(require('../pages/index')), 'index');
const home = r => require.ensure([], () => r(require('../pages/home/home'), 'home'));
const my = r => require.ensure([], () => r(require('../pages/my/my'), 'my'));
const self = r => require.ensure([], () =>r(require('../pages/my/self'), 'self'));

const login = r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login');
const forgotPassword = r => require.ensure([], () =>r(require('../pages/login/forgotPassword'), 'forgotPassword'));
const register = r => require.ensure([], () =>r(require('../pages/login/register'), 'register'));


// 健康调阅
const health = r => require.ensure([], () =>r(require('../pages/home/checkHealth/health'), 'health'));
const checkReport = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkReport'), 'checkReport'));
const checkout = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkout'), 'checkout'));
const checkoutDetail = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkoutDetail'), 'checkoutDetail'));
const drugList = r => require.ensure([], () =>r(require('../pages/home/checkHealth/drugList'), 'drugList'));


const quickIssue = r => require.ensure([], () =>r(require('../pages/home/quickIssue'), 'quickIssue'));

// 在线医生
const inquiry = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/inquiry'), 'inquiry'));
const doc = r => require.ensure([], () =>r(require('../pages/home/doc'), 'doc'));
const chat = r => require.ensure([], () =>r(require('../pages/home/chat'), 'chat'));
const rate = r => require.ensure([], () =>r(require('../pages/home/rate'), 'rate'));
const chatover = r => require.ensure([], () =>r(require('../pages/home/chatover'), 'chatover'));


const record = r => require.ensure([], () =>r(require('../pages/my/record'), 'record'));
const booking = r => require.ensure([], () =>r(require('../pages/my/booking'), 'booking'));



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
    path:'/self',
    component: self
},{
    path:'/inquiry',
    component: inquiry
},{
    path:'/forgotPassword',
    component: forgotPassword
},{
    path:'/health',
    component: health
},{
    path:'/checkReport',
    component: checkReport
},{
    path:'/checkout',
    component: checkout
},{
    path:'/checkoutDetail',
    component: checkoutDetail
},{
    path:'/drugList',
    component: drugList
},{
    path:'/quickIssue',
    component: quickIssue
},{
    path:'/record',
    component: record
},{
    path:'/booking',
    component: booking
},{
    path:'/doc',
    component: doc
},{
    path:'/chat',
    component: chat
},{
    path:'/chatover',
    component: chatover
},{
    path:'/rate',
    component: rate
}];


export default new Router({ routes })
