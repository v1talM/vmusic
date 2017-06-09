/* import bootstrap */
import './assets/css/bootstrap.css'
/* import vue and vue's plugins */
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import store from './store'

import MusicList from './components/MusicList'
import Favorite from './components/Favorite'
import Xzq from './components/Xzq'
import Zjl from './components/Zjl'
import Dzq from './components/Dzq'
import Adele from './components/Adele'
import Beyond from './components/Beyond'
/* announce plugins */
Vue.use(VueAxios, Axios)
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: MusicList, name: 'music-list'},
  {path: '/favorite', component: Favorite, name: 'my-favorite'},
  {path: '/singer/Joker', component: Xzq, name: 'joker'},
  {path: '/singer/Jay-Chow', component: Zjl, name: 'jay-chow'},
  {path: '/singer/GEM', component: Dzq, name: 'G-E-M'},
  {path: '/singer/adele', component: Adele, name: 'Adele'},
  {path: '/singer/Beyond', component: Beyond, name: 'Beyond'}
]
const router = new VueRouter({
  routes
})
Vue.component('app', App)

new Vue({
  router, store
}).$mount('#app')

let row = document.getElementsByClassName('row')
let top = document.getElementsByClassName('navbar')
let control = document.getElementsByClassName('footer')
let music_list = document.getElementById('music-list')
row[0].style.height = window.innerHeight - top[0].scrollHeight - control[0].scrollHeight + 'px'
music_list.style.height = window.innerHeight - top[0].scrollHeight - control[0].scrollHeight + 'px'

window.onresize = function() {
  let row = document.getElementsByClassName('row')
  let top = document.getElementsByClassName('navbar')
  let control = document.getElementsByClassName('footer')
  let music_list = document.getElementById('music-list')
  row[0].style.height = window.innerHeight - top[0].scrollHeight - control[0].scrollHeight + 'px'
  music_list.style.height = window.innerHeight - top[0].scrollHeight - control[0].scrollHeight + 'px'
}
