// 我的
const self = r => require.ensure([], () =>r(require('../pages/my/self'), 'self'));
const myDoc = r => require.ensure([], () =>r(require('../pages/my/myDoc'), 'myDoc'));
const loginDocInfo = r => require.ensure([], () =>r(require('../pages/my/loginDocInfo'), 'loginDocInfo'));
const writeInfo = r => require.ensure([], () =>r(require('../pages/my/writeInfo'), 'writeInfo'));
const trustDoc = r => require.ensure([], () =>r(require('../pages/my/trustDoc'), 'trustDoc'));
const mySufferer = r => require.ensure([], () =>r(require('../pages/my/mySufferer'), 'mySufferer'));
const historyAnswer = r => require.ensure([], () =>r(require('../pages/my/historyAnswer'), 'historyAnswer'));
const myBooking = r => require.ensure([], () =>r(require('../pages/my/myBooking'), 'myBooking'));

const record = r => require.ensure([], () =>r(require('../pages/my/record'), 'record'));
const booking = r => require.ensure([], () =>r(require('../pages/my/booking'), 'booking'));

export const MINE = [{
        path:'/self',
        component:self
    },{
        path:'/myDoc',
        component:myDoc 
    },{
        path:'/loginDocInfo',
        component:loginDocInfo 
    },{
        path:'/writeInfo',
        component:writeInfo 
    },{
        path:'/trustDoc',
        component:trustDoc 
    },{
        path:'/mySufferer',
        component:mySufferer 
    },{
        path:'/historyAnswer',
        component:historyAnswer 
    },{
        path:'/myBooking',
        component:myBooking 
    },{
        path:'/record',
        component: record
    },{
        path:'/booking',
        component: booking
}]