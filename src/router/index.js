import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import News from '@/components/News'
// import About from '@/components/About'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Play/:uid',
      name: 'Play',
      component: Play,

    }
    // {
    //   path: '/About',
    //   name: 'About',
    //   component: About
    // },
    // {
    //   path: '/News',
    //   name: 'News',
    //   component: News
    // }
  ]
})
