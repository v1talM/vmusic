<template lang="html">
  <div class="footer control-panel">
      <div class="control-button col-md-2 col-sm-4 col-xs-6 text-center">
          <a href="#" class="btn btn-default btn-control" @click.prevent="previous()">
            <span class="glyphicon glyphicon-step-backward"></span>
          </a>
          <a href="#" class="btn btn-default btn-control btn-play" @click.prevent="play()">
            <span class="glyphicon glyphicon-play" v-show="! musicStore.isPlaying" ></span>
            <span class="glyphicon glyphicon-pause" v-show="musicStore.isPlaying"></span>
          </a>
          <a href="#" class="btn btn-default btn-control" @click.prevent="next()">
            <span class="glyphicon glyphicon-step-forward"></span>
          </a>
      </div>
      <player :music-src="musicStore.MusicList"></player>
      <div class="music-panel col-md-6 col-sm-8  col-xs-6">
        <div class="col-md-2 col-sm-3 col-xs-12  text-center">
          <div class="music-poster">
            <img :src="setMusicThumb()" class="music-picture" v-bind:class="{active: musicStore.isPlaying}" alt="">
          </div>
        </div>

        <div class="music-detail col-md-10 col-sm-9 hidden-xs">
          <div class="detail-container">
            <span class="music-title">{{ musicStore.playingMusicTitle }}</span>
            <span class="music-singer">{{ musicStore.playingMusicArtist }}</span>
            <span class="music-timer">{{ musicStore.playingMusicCurrent || '0:0' }} / {{ musicStore.playingMusicDuration || '0:0'}}</span>
          </div>


          <div class="progress progress-striped active">
            <div class="progress-bar progress-bar-success" v-bind:style="{width: musicStore.playingMusicProgress}"></div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Player from './Player'
import {musicList, musicSrc} from './../music'
export default {
  computed: {
    ...mapState({
      musicStore: state => state.musicStore
    }),
  },
  data () {
    return {
      duration: null,
      current: null
    }
  },
  components: {
    Player
  },
  methods: {
    play(){
      let isPlaying = this.musicStore.isPlaying
      let audio = document.getElementById('myPlayer')
      this.updateTime()
      this.duration = audio.duration
      if(!isPlaying){
        this.$store.dispatch('setMusicDuration', audio.duration)
        this.$store.dispatch('setIsPlaying')
        audio.play()
      }else{
        this.$store.dispatch('setIsPausing')
        audio.pause()
      }
    },
    next(){
      let playing = this.musicStore.playingMusic
      let index = this.musicStore.MusicList.indexOf(playing)
      let music = this.musicStore.MusicList[++index]
      let src = musicSrc + music.title + '.mp3'
      this.$store.dispatch('setMusicSrc', src)
      this.$store.dispatch('setPlayingMusic', music)
      this.$store.dispatch('setIsPlaying')
      this.startPlay()
    },
    previous() {
      let playing = this.musicStore.playingMusic
      let index = this.musicStore.MusicList.indexOf(playing)
      let music = this.musicStore.MusicList[--index]
      let src = musicSrc + music.title + '.mp3'
      this.$store.dispatch('setMusicSrc', src)
      this.$store.dispatch('setPlayingMusic', music)
      this.$store.dispatch('setIsPlaying')
      this.startPlay()
    },
    startPlay(){
      const vm = this
      setTimeout(function() {
        let audio = document.getElementById('myPlayer')
        vm.duration = audio.duration
        vm.$store.dispatch('setIsPlaying')
        vm.$store.dispatch('setMusicDuration', audio.duration)
        vm.updateTime()
        audio.play()
      }, 100)
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
    setMusicThumb () {
      if(this.musicStore.playingMusicPoster){
        return this.musicStore.playingMusicPoster
      }else{
        return 'logo.png'
      }
    }
  }
}
</script>
<style lang="css">
  @keyframes rotationPic{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<style lang="sass">
  .footer.control-panel
    position: absolute
    width: 100%
    bottom: 0
    height: 80px
    background-color: #222222
  .control-button
    padding-top: 20.5px
    padding-bottom: 20.5px
  .btn-control
    border-radius: 50%
    height: 2.75em
    width: 2.75em
    padding: 7.5px
    background-color: transparent
    line-height: 1.5em
    margin: 0 2px
  .btn-control:focus
    border-color: #fff
  .btn-control.btn-play
    width: 3.25em
    height: 3.25em
    line-height: 2em
  .btn-control:hover
    background-color: transparent
    border-color: #fff
  .music-panel
    padding: 12.5px 30px
    z-index: 10
  .music-detail
    padding: 5px 0
  .music-poster .music-picture
    max-height: 55px
    border-radius: 50%
  .detail-container
    width: 80%
    overflow: hidden
    display: inline
  .music-title, .music-singer, .music-timer
    font-size: 12px
    color: #ccc
    margin: 0
  .music-singer, .music-timer
    font-weight: 500
    color: #666
  .music-timer
    float: right
    line-height: 2em
  .progress
    margin: 9px 0
    height: 5px
  .music-picture.active
    animation: rotationPic 10s linear 0s infinite

</style>
