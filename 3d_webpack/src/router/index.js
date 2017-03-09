import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Feature from '../components/Feature'
import Service from '../components/Service'
import Discover from '../components/Discover'
import Blog from '../components/Blog'
import Me from '../components/Me'
import notFound from '../components/Notfound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path:'/service',
      name: 'service',
      component: Service
    },
    {
      path:'/discover',
      name: 'discover',
      component: Discover
    },
    {
      path:'/blog',
      name: 'blog',
      component: Blog
    },
    {
      path:'/me',
      name: 'me',
      component: Me
    },
    {
    	path:'*',
    	name: 'notFound',
    	component: notFound
    }
  ]
})
