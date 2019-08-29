import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Test.vue'),
      redirect: "/router1",
      children: [
        { path: '/router1', component: () => import('./views/Router1.vue'), meta: { keepAlive: true }, },
        { path: '/router2', component: () => import('./views/Router2.vue'), meta: { keepAlive: true }, },
        { path: '/router3', component: () => import('./views/Router3.vue'), meta: { keepAlive: true }, },
      ]
    },
  ]
})
