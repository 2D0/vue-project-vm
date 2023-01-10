import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e9dcbb3 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _38d27d23 = () => interopDefault(import('../pages/home_back.vue' /* webpackChunkName: "pages/home_back" */))
const _0064effe = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _58c4e671 = () => interopDefault(import('../pages/auction/detail.vue' /* webpackChunkName: "pages/auction/detail" */))
const _4809f23e = () => interopDefault(import('../pages/auction/list.vue' /* webpackChunkName: "pages/auction/list" */))
const _4f809510 = () => interopDefault(import('../pages/auction/list_back.vue' /* webpackChunkName: "pages/auction/list_back" */))
const _2518d444 = () => interopDefault(import('../pages/auction/order.vue' /* webpackChunkName: "pages/auction/order" */))
const _1562efda = () => interopDefault(import('../pages/join/complete.vue' /* webpackChunkName: "pages/join/complete" */))
const _1ebfc600 = () => interopDefault(import('../pages/join/home.vue' /* webpackChunkName: "pages/join/home" */))
const _a56872ce = () => interopDefault(import('../pages/login/home.vue' /* webpackChunkName: "pages/login/home" */))
const _49d16b89 = () => interopDefault(import('../pages/marketPlace/detail.vue' /* webpackChunkName: "pages/marketPlace/detail" */))
const _57b64554 = () => interopDefault(import('../pages/marketPlace/list.vue' /* webpackChunkName: "pages/marketPlace/list" */))
const _3693e474 = () => interopDefault(import('../pages/marketPlace/order.vue' /* webpackChunkName: "pages/marketPlace/order" */))
const _11541f02 = () => interopDefault(import('../pages/marketPlace/sale.vue' /* webpackChunkName: "pages/marketPlace/sale" */))
const _4739748a = () => interopDefault(import('../pages/service/privacy.vue' /* webpackChunkName: "pages/service/privacy" */))
const _1c3788d7 = () => interopDefault(import('../pages/service/provision.vue' /* webpackChunkName: "pages/service/provision" */))
const _510906ea = () => interopDefault(import('../pages/support/sideMenu.vue' /* webpackChunkName: "pages/support/sideMenu" */))
const _c9d64544 = () => interopDefault(import('../pages/system/accountSuspension.vue' /* webpackChunkName: "pages/system/accountSuspension" */))
const _a1522de6 = () => interopDefault(import('../pages/system/systemCheck.vue' /* webpackChunkName: "pages/system/systemCheck" */))
const _20ebca3a = () => interopDefault(import('../pages/login/password/complete.vue' /* webpackChunkName: "pages/login/password/complete" */))
const _21e60e15 = () => interopDefault(import('../pages/login/password/reset.vue' /* webpackChunkName: "pages/login/password/reset" */))
const _2089ac09 = () => interopDefault(import('../pages/login/password/sendMail.vue' /* webpackChunkName: "pages/login/password/sendMail" */))
const _e7096980 = () => interopDefault(import('../pages/myPage/profile/edit.vue' /* webpackChunkName: "pages/myPage/profile/edit" */))
const _10035f95 = () => interopDefault(import('../pages/myPage/profile/home.vue' /* webpackChunkName: "pages/myPage/profile/home" */))
const _1ba29585 = () => interopDefault(import('../pages/myPage/table/calculate.vue' /* webpackChunkName: "pages/myPage/table/calculate" */))
const _0a668d0f = () => interopDefault(import('../pages/myPage/table/myNft.vue' /* webpackChunkName: "pages/myPage/table/myNft" */))
const _410154e4 = () => interopDefault(import('../pages/myPage/table/usageHistory.vue' /* webpackChunkName: "pages/myPage/table/usageHistory" */))
const _74031b26 = () => interopDefault(import('../pages/myPage/table/withdrawal.vue' /* webpackChunkName: "pages/myPage/table/withdrawal" */))
const _9fed1320 = () => interopDefault(import('../pages/myPage/userItem/home.vue' /* webpackChunkName: "pages/myPage/userItem/home" */))
const _1d393aaf = () => interopDefault(import('../pages/myPage/userItem/list.vue' /* webpackChunkName: "pages/myPage/userItem/list" */))
const _13bb9f2e = () => interopDefault(import('../pages/support/board/detail.vue' /* webpackChunkName: "pages/support/board/detail" */))
const _1cd06df0 = () => interopDefault(import('../pages/support/board/news.vue' /* webpackChunkName: "pages/support/board/news" */))
const _05d88235 = () => interopDefault(import('../pages/support/board/notice.vue' /* webpackChunkName: "pages/support/board/notice" */))
const _629fa052 = () => interopDefault(import('../pages/support/board/qna.vue' /* webpackChunkName: "pages/support/board/qna" */))
const _4c621eb4 = () => interopDefault(import('../pages/support/search/detail.vue' /* webpackChunkName: "pages/support/search/detail" */))
const _7dde9b02 = () => interopDefault(import('../pages/support/search/home.vue' /* webpackChunkName: "pages/support/search/home" */))
const _76dc7b82 = () => interopDefault(import('../pages/support/search/menu.vue' /* webpackChunkName: "pages/support/search/menu" */))
const _68110880 = () => interopDefault(import('../pages/support/search/result.vue' /* webpackChunkName: "pages/support/search/result" */))
const _0958ee2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/vue-project/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _1e9dcbb3,
    name: "home"
  }, {
    path: "/home_back",
    component: _38d27d23,
    name: "home_back"
  }, {
    path: "/sample",
    component: _0064effe,
    name: "sample"
  }, {
    path: "/auction/detail",
    component: _58c4e671,
    name: "auction-detail"
  }, {
    path: "/auction/list",
    component: _4809f23e,
    name: "auction-list"
  }, {
    path: "/auction/list_back",
    component: _4f809510,
    name: "auction-list_back"
  }, {
    path: "/auction/order",
    component: _2518d444,
    name: "auction-order"
  }, {
    path: "/join/complete",
    component: _1562efda,
    name: "join-complete"
  }, {
    path: "/join/home",
    component: _1ebfc600,
    name: "join-home"
  }, {
    path: "/login/home",
    component: _a56872ce,
    name: "login-home"
  }, {
    path: "/marketPlace/detail",
    component: _49d16b89,
    name: "marketPlace-detail"
  }, {
    path: "/marketPlace/list",
    component: _57b64554,
    name: "marketPlace-list"
  }, {
    path: "/marketPlace/order",
    component: _3693e474,
    name: "marketPlace-order"
  }, {
    path: "/marketPlace/sale",
    component: _11541f02,
    name: "marketPlace-sale"
  }, {
    path: "/service/privacy",
    component: _4739748a,
    name: "service-privacy"
  }, {
    path: "/service/provision",
    component: _1c3788d7,
    name: "service-provision"
  }, {
    path: "/support/sideMenu",
    component: _510906ea,
    name: "support-sideMenu"
  }, {
    path: "/system/accountSuspension",
    component: _c9d64544,
    name: "system-accountSuspension"
  }, {
    path: "/system/systemCheck",
    component: _a1522de6,
    name: "system-systemCheck"
  }, {
    path: "/login/password/complete",
    component: _20ebca3a,
    name: "login-password-complete"
  }, {
    path: "/login/password/reset",
    component: _21e60e15,
    name: "login-password-reset"
  }, {
    path: "/login/password/sendMail",
    component: _2089ac09,
    name: "login-password-sendMail"
  }, {
    path: "/myPage/profile/edit",
    component: _e7096980,
    name: "myPage-profile-edit"
  }, {
    path: "/myPage/profile/home",
    component: _10035f95,
    name: "myPage-profile-home"
  }, {
    path: "/myPage/table/calculate",
    component: _1ba29585,
    name: "myPage-table-calculate"
  }, {
    path: "/myPage/table/myNft",
    component: _0a668d0f,
    name: "myPage-table-myNft"
  }, {
    path: "/myPage/table/usageHistory",
    component: _410154e4,
    name: "myPage-table-usageHistory"
  }, {
    path: "/myPage/table/withdrawal",
    component: _74031b26,
    name: "myPage-table-withdrawal"
  }, {
    path: "/myPage/userItem/home",
    component: _9fed1320,
    name: "myPage-userItem-home"
  }, {
    path: "/myPage/userItem/list",
    component: _1d393aaf,
    name: "myPage-userItem-list"
  }, {
    path: "/support/board/detail",
    component: _13bb9f2e,
    name: "support-board-detail"
  }, {
    path: "/support/board/news",
    component: _1cd06df0,
    name: "support-board-news"
  }, {
    path: "/support/board/notice",
    component: _05d88235,
    name: "support-board-notice"
  }, {
    path: "/support/board/qna",
    component: _629fa052,
    name: "support-board-qna"
  }, {
    path: "/support/search/detail",
    component: _4c621eb4,
    name: "support-search-detail"
  }, {
    path: "/support/search/home",
    component: _7dde9b02,
    name: "support-search-home"
  }, {
    path: "/support/search/menu",
    component: _76dc7b82,
    name: "support-search-menu"
  }, {
    path: "/support/search/result",
    component: _68110880,
    name: "support-search-result"
  }, {
    path: "/",
    component: _0958ee2e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
