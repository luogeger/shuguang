const health = r => require.ensure([], () =>r(require('../pages/home/checkHealth/health'), 'health'));
const checkReport = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkReport'), 'checkReport'));
const checkout = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkout'), 'checkout'));
const checkoutDetail = r => require.ensure([], () =>r(require('../pages/home/checkHealth/checkoutDetail'), 'checkoutDetail'));
const drugList = r => require.ensure([], () =>r(require('../pages/home/checkHealth/drugList'), 'drugList'));


export const checkHealth = [{
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
}]