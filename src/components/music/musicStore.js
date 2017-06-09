const state = {
  MusicList : null,
  isPlaying: false,
  playingMusic: null,
  playingMusicTitle: null,
  playingMusicArtist: null,
  playingMusicAlbum: null,
  playingMusicPoster: null,
  playingMusicId: null,
  playingMusicDuration: null,
  playingMusicDurationRaw: null,
  musicSrc: null,
  playingMusicCurrent: null,
  playingMusicCurrentRaw: null,
  playingMusicProgress: '0%'
}

const mutations = {
  SET_MUSIC_LIST (state, musicList){
    state.MusicList = musicList
  },
  SET_PLAYING_MUSIC (state, musicObj) {
    state.playingMusic = musicObj
    state.playingMusicTitle = musicObj.title
    state.playingMusicArtist = musicObj.artist
    state.playingMusicAlbum = musicObj.album
    state.playingMusicId = musicObj.id
    state.playingMusicPoster = musicObj.poster
  },
  SET_IS_PLAYING(state){
    state.isPlaying = true
  },
  SET_IS_PAUSING(state){
    state.isPlaying = false
  },
  SET_MUSIC_SRC(state, src){
    state.musicSrc = src
  },
  SET_MUSIC_DURATION(state, duration){
    state.playingMusicDurationRaw = duration
    let min = parseInt(duration / 60 )
    let sec = parseInt(duration % 60)
    state.playingMusicDuration =  min + ':' + sec
  },
  SET_MUSIC_CUREENT(state, current){
    let min = parseInt(current / 60)
    let sec = parseInt(current % 60)
    state.playingMusicCurrentRaw = current
    state.playingMusicCurrent = min + ':' +sec
  },
  SET_MUSIC_PROGRESS(state){
    state.playingMusicProgress = parseInt(parseInt(state.playingMusicCurrentRaw) / parseInt(state.playingMusicDurationRaw) * 100) + '%'
  }
}

const actions = {
  setMusicList: ({commit}, musicList) => {
    commit('SET_MUSIC_LIST', musicList)
  },
  setPlayingMusic: ({commit}, musicObj) => {
    commit('SET_PLAYING_MUSIC', musicObj)
  },
  setIsPlaying: ({commit}) => {
    commit('SET_IS_PLAYING')
  },
  setIsPausing: ({commit}) => {
    commit('SET_IS_PAUSING')
  },
  setMusicSrc: ({commit}, src) => {
    commit('SET_MUSIC_SRC', src)
  },
  setMusicDuration: ({commit}, duration) => {
    commit('SET_MUSIC_DURATION', duration)
  },
  setMusicCurrent: ({commit}, current) => {
    commit('SET_MUSIC_CUREENT', current)
  },
  setMusicProgress: ({commit}) => {
    commit('SET_MUSIC_PROGRESS')
  }
}

export default {
  state, mutations, actions
}
