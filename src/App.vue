<template>
  <div class="wrapper">
    <top-menu></top-menu>
    <div class="main">
      <div class="row" >
        <left-menu></left-menu>
        <router-view></router-view>
        <canvase></canvase>
      </div>

    </div>
    <control></control>
  </div>
</template>

<script>
var $ = window.$ = window.jQuery = require('jquery')
require('./assets/js/bootstrap.js')
import TopMenu from './components/TopMenu'
import LeftMenu from './components/LeftMenu'
import Control from './components/Control'
import MusicList from './components/MusicList'
import Canvase from './components/canvas'
import {mapState} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState({
      musicStore: state => state.musicStore
    })
  },
  components : {
      TopMenu, LeftMenu, Control, MusicList, Canvase
    },
}
</script>
<style lang="css">
::-webkit-scrollbar-track-piece{
 -webkit-border-radius:0;
}
::-webkit-scrollbar{
 width:8px;
 height:8px;
}
::-webkit-scrollbar-thumb{
 height:50px;
 background-color:#303030;
 -webkit-border-radius:4px;
 outline-offset:-2px;
 border: 2px solid #303030;
}
::-webkit-scrollbar-thumb:hover{
 height:50px;
 background-color:#303030;
 -webkit-border-radius:4px;
 }
@media(min-width: 768px){
  .singer-container{
    min-height: 546px
  }
}
</style>
<style lang="sass">
  body
    background-color: #464545
  .wrapper
    height: 100%
  .row
    margin: 0
  .singer-container
    background-color: #fff
    height: 100%
    overflow-y: scroll
    font-family: Arial, 'MicroSoft Yahei'
    opacity: .9
</style>
