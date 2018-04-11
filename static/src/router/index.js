import Vue from 'vue'
import Router from 'vue-router'


const index = r => require.ensure([], () => r(require('../pages/index')), 'index');
const home = r => require.ensure([], () => r(require('../pages/home/home'), 'home'));
const my = r => require.ensure([], () => r(require('../pages/my/my'), 'my'));
const login = r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login');

const register = r => require.ensure([], () =>r(require('../pages/login/register'), 'register'));
const self = r => require.ensure([], () =>r(require('../pages/my/self'), 'self'));
const inquiry = r => require.ensure([], () =>r(require('../pages/home/inquiry'), 'inquiry'));
const forgotPassworld = r => require.ensure([], () =>r(require('../pages/login/forgotPassworld'), 'forgotPassworld'));
const health = r => require.ensure([], () =>r(require('../pages/home/health'), 'health'));
const jiancha = r => require.ensure([], () =>r(require('../pages/home/jiancha'), 'jiancha'));
const jianyan = r => require.ensure([], () =>r(require('../pages/home/jianyan'), 'jianyan'));
const baogao = r => require.ensure([], () =>r(require('../pages/home/baogao'), 'baogao'));
const qingdan = r => require.ensure([], () =>r(require('../pages/home/qingdan'), 'qingdan'));
const wenzhen = r => require.ensure([], () =>r(require('../pages/home/wenzhen'), 'wenzhen'));
const jilu = r => require.ensure([], () =>r(require('../pages/my/jilu'), 'jilu'));
const yuyue = r => require.ensure([], () =>r(require('../pages/my/yuyue'), 'yuyue'));
const xinxi = r => require.ensure([], () =>r(require('../pages/my/xinxi'), 'xinxi'));
const doc = r => require.ensure([], () =>r(require('../pages/home/doc'), 'doc'));
const chat = r => require.ensure([], () =>r(require('../pages/home/chat'), 'chat'));
const chatover = r => require.ensure([], () =>r(require('../pages/home/chatover'), 'chatover'));
const rate = r => require.ensure([], () =>r(require('../pages/home/rate'), 'rate'));

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
    path:'/forgotPassworld',
    component: forgotPassworld
},{
    path:'/health',
    component: health
},{
    path:'/jiancha',
    component: jiancha
},{
    path:'/jianyan',
    component: jianyan
},{
    path:'/baogao',
    component: baogao
},{
    path:'/qingdan',
    component: qingdan
},{
    path:'/wenzhen',
    component: wenzhen
},{
    path:'/jilu',
    component: jilu
},{
    path:'/yuyue',
    component: yuyue
},{
    path:'/xinxi',
    component: xinxi
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
