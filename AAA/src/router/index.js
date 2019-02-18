import Vue from 'vue'
import Login from '@/containers/Login'
import MusicLibrary from '@/containers/MusicLibrary'
import Singer from '@/containers/Singer'
import Personal from '@/containers/Personal'
import Playing from '@/containers/Playing'
import Radiostation from '@/containers/Radiostation'
import Radioplay from '@/containers/Radioplay'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes:[
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/music-library',
      name: 'MusicLibrary',
      component:MusicLibrary
    },
    {
      path: '/singer',
      name: 'Singer',
      component:Singer
    },
    {
      path: '/personal',
      name: 'Personal',
      component:Personal
    },
    {
      path: '/radiostation',
      name: 'Radiostation',
      component:Radiostation
    },
    {
      path: '/playing',
      name: 'Playing',
      component:Playing
    },
    {
      path: '/radioplay',
      name: 'Radioplay',
      component:Radioplay
    },
     
  ]
})


