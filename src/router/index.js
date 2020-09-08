import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: () => import(/* webpackChunkName: "forecast" */ '../views/forecast/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
