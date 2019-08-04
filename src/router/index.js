import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import YouBike from '@/components/pages/YouBike'
import News from '@/components/pages/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/youbike',
      name: 'YouBike',
      component: YouBike
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
