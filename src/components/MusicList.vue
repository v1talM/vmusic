<template lang="html">
    <div class="col-md-8 col-sm-8 col-xs-12" id="music-list">
      <div class="music-poster" v-bind:style="getMusicPoster">

      </div>

      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>歌 曲</th>
            <th class="hidden-sm hidden-xs">歌 手</th>
            <th class="hidden-sm hidden-xs">专 辑</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(music, index) in MusicList" v-on:dblclick.prevent="play(index)" v-bind:class="{'text-success': setActiveMusic(music.id)}">
           <td><p>{{ music.title }}</p></td>
           <td class="hidden-sm hidden-xs"><p>{{ music.artist }}</p></td>
           <td class="hidden-sm hidden-xs"><p>{{ music.album }}</p></td>
         </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import {musicList, musicSrc} from './../music'
import {mapState} from 'vuex'
export default {
    computed: {
      ...mapState({
        musicStore: state => state.musicStore
      }),
      getMusicPoster () {
        let isPlaying = this.musicStore.playingMusic
        if(! isPlaying){
          return {
            'background-image': 'url(logo.png)',
            'background-size': 'contain'
          }

        }else{
          return {
            'background-image': 'url(' + this.musicStore.playingMusicPoster + ')',
            'background-size': 'cover'
          }
        }
      },
    },
    data () {
      return {
        MusicList: musicList,
        MusicSrc: '',
        isPlay: false,
        current: null,
        duration: null
      }
    },
    mounted (){
      if(! this.musicStore.MusicList){
        let music = musicSrc + this.MusicList[0].title + '.mp3'
        this.MusicSrc = music
        this.$store.dispatch('setPlayingMusic',this.MusicList[0])
        this.$store.dispatch('setMusicList', this.MusicList)
        this.$store.dispatch('setMusicSrc', music)
      }


      var row = document.getElementsByClassName('row')
      var top = document.getElementsByClassName('navbar')
      var control = document.getElementsByClassName('footer')
      var music_list = document.getElementById('music-list')
      row[0].style.height = window.innerHeight - top[0].scrollHeight - control[0].scrollHeight + 'px'
      music_list.style.height = window.innerHeight - top[0].scrollHeight - control[0].scrollHeight + 'px'
    },
    methods: {
      setActiveMusic (id) {
          return  (id == this.musicStore.playingMusicId)
      },
      play(index){
        let isPlaying = this.musicStore.isPlaying
        let audio = document.getElementById('myPlayer')
        this.updateTime()
        this.duration = audio.duration
        let music = this.musicStore.MusicList[index]
        let src = musicSrc + music.title + '.mp3'
        this.$store.dispatch('setMusicSrc', src)
        this.$store.dispatch('setPlayingMusic', music)
        this.$store.dispatch('setIsPlaying')
        this.startPlay()
      },
      updateTime(){
        let audio = document.getElementById('myPlayer')
        const vm = this
        audio.addEventListener('timeupdate', function () {
          vm.$store.dispatch('setMusicCurrent', audio.currentTime)
          vm.$store.dispatch('setMusicProgress')
          vm.current = vm.musicStore.playingMusicCurrent
        })
      },
      startPlay (){
        const vm = this
        setTimeout(function() {
          let audio = document.getElementById('myPlayer')
          vm.duration = audio.duration
          vm.$store.dispatch('setIsPlaying')
          vm.$store.dispatch('setMusicDuration', audio.duration)
          vm.$store.dispatch('setMusicCurrent', audio.currentTime)
          vm.updateTime()
          audio.play()
        }, 600)
      }
    }
}
</script>
<style lang="sass">
  .table
    opacity: .85
  .table>tbody>tr>td>p
    line-height: 37px
    margin-bottom: 0
    height: 37px
    overflow: hidden
  .music-poster
    height: 100%
    position: absolute
    width: 100%
    z-index: -1
    margin-left: -15px
    background-repeat: no-repeat
    background-position: center
    opacity: .25
</style>
