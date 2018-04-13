
const inquiry = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/inquiry'), 'inquiry'));
const doc = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/doc'), 'doc'));
const chat = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/chat'), 'chat'));
const rate = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/rate'), 'rate'));
const chatover = r => require.ensure([], () =>r(require('../pages/home/onlineDoc/chatover'), 'chatover'));


export const onLine = [{
    path:'/inquiry',
    component: inquiry
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