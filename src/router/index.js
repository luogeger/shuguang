import Vue from 'vue'
import Router from 'vue-router'


const index = r => require.ensure([], () => r(require('../pages/index')), 'index');
const home = r => require.ensure([], () => r(require('../pages/home/home'), 'home'));

// 我的
const my = r => require.ensure([], () => r(require('../pages/my/my'), 'my'));
const self = r => require.ensure([], () =>r(require('../pages/my/self'), 'self'));
const myDoc = r => require.ensure([], () =>r(require('../pages/my/myDoc'), 'myDoc'));
const loginDocInfo = r => require.ensure([], () =>r(require('../pages/my/loginDocInfo'), 'loginDocInfo'));
const writeInfo = r => require.ensure([], () =>r(require('../pages/my/writeInfo'), 'writeInfo'));
const trustDoc = r => require.ensure([], () =>r(require('../pages/my/trustDoc'), 'trustDoc'));

// 登陆注册
const login = r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login');
const forgotPassword = r => require.ensure([], () =>r(require('../pages/login/forgotPassword'), 'forgotPassword'));
const register = r => require.ensure([], () =>r(require('../pages/login/register'), 'register'));


// 健康调阅
const health = r => require.ensure([], () =>r(require('../pages/home/checkHealth/health'), 'health'));
const checkReport = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkReport'), 'checkReport'));
const checkout = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkout'), 'checkout'));
const checkoutDetail = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkoutDetail'), 'checkoutDetail'));
const drugList = r => require.ensure([], () =>r(require('../pages/home/checkHealth/drugList'), 'drugList'));

// 急速问诊
const quickIssue = r => require.ensure([], () =>r(require('../pages/home/quickIssue/quickIssue'), 'quickIssue'));

// 在线医生
const inquiry = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/inquiry'), 'inquiry'));
const doc = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/doc'), 'doc'));
const chat = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/chat'), 'chat'));
const rate = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/rate'), 'rate'));
const chatover = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/chatover'), 'chatover'));


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
    path:'/forgotPassword',
    component: forgotPassword
},{
    path:'/self',
    component: self
},{
    path:'/myDoc',
    component: myDoc
},{
    path:'/loginDocInfo',
    component: loginDocInfo
},{
    path:'/writeInfo',
    component: writeInfo
},{
    path:'/trustDoc',
    component: trustDoc
},{
    path:'/inquiry',
    component: inquiry
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
