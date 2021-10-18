import Vue from 'vue'
import VueRouter from 'vue-router'
import Author from '../views/Author.vue'
import Homepage from '../views/Homepage.vue'
import Notfound from '../views/Notfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import(/* webpackChunkName: "about" */ '../views/Subject.vue')
  },
  {
    path: '/404',
    name: '404',
    component: Notfound
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
