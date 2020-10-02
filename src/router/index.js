import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Accounts from '../components/Accounts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
