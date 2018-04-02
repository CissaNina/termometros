import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chamada from '@/components/Chamada'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Chamada',
      name: 'Chamada',
      component: Chamada
    }
  ]
})
