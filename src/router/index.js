import Vue from 'vue'
import VueRouter from 'vue-router'

import Resume from '@/components/Resume/Resume'
import Projects from '@/components/Projects/Projects'
import AboutMe from '@/components/AboutMe/AboutMe'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/aboutme',
    name: 'About Me',
    component: AboutMe
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
