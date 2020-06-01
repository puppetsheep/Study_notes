import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/view/HelloWorld'
// import copy from '@/view/copy'
import layout from '@/layout'

Vue.use(Router)


export default new Router({
  routes: [

    {
      path:'/',
      component:layout,
      // redirect:'home',
      children:[
        {
          path: '/',
          name: 'HelloWorld',
          component: () => import('@/view/modern/HelloWorld'),
        },
        {
          path: 'copy',
          name: 'copy',
          component: () => import('@/view/copy'),
          children:[
            {
              path: ':userId',
              name: 'list',
              component: () => import('@/view/list'),
            }
          ]
        },
      ]
    }
  ],
  mode:'history'
})
