import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index'
import Home from '@/page/home'
import Cart from '@/page/cart'
import Member from '@/page/member'
import Classify from '@/page/classify'
import Login from '@/page/login'
import Register from '@/page/register'
import Datum from '@/page/datum'
import updateName from '@/page/updateName'
import Integral from '@/page/integral'
import Address from '@/page/address'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
     {
      path: '/Home',
      name: 'Home',
      component: Home
    },
     {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
     {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
     {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Datum',
      name: 'Datum',
      component: Datum
    },
    {
      path: '/updateName',
      name: 'updateName',
      component: updateName
    },
    {
      path: '/Integral',
      name: 'Integral',
      component: Integral
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    }
  ]
})
