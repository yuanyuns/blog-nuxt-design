import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c8f2e37 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _1b0d913c = () => interopDefault(import('..\\pages\\archive\\index.vue' /* webpackChunkName: "pages/archive/index" */))
const _0825ee8b = () => interopDefault(import('..\\pages\\links\\index.vue' /* webpackChunkName: "pages/links/index" */))
const _43796769 = () => interopDefault(import('..\\pages\\page\\_id.vue' /* webpackChunkName: "pages/page/_id" */))
const _05ab52b0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1c8f2e37,
    name: "about"
  }, {
    path: "/archive",
    component: _1b0d913c,
    name: "archive"
  }, {
    path: "/links",
    component: _0825ee8b,
    name: "links"
  }, {
    path: "/page/:id?",
    component: _43796769,
    name: "page-id"
  }, {
    path: "/",
    component: _05ab52b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
