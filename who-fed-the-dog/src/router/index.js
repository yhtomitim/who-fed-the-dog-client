import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Users from '@/views/Users'
import Pets from '@/views/Pets'
import Log from '@/views/Log'
import Chart from '@/views/FeedChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/pets',
      name: "Pets",
      component: Pets
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
