import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestComp from '../views/TestCompView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children: [
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/MeView.vue')
      },
      {
        path: '/simpleCode',
        name: 'simpleCode',
        component: () => import('../views/SimpleCode.vue')
      },
      {
        path: '/grade',
        name: 'grade',
        component: () => import('../views/gradeView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/testComp',
    name: 'testComp',
    component: TestComp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
