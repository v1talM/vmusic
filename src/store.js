import Vue from 'vue'
import Vuex from 'vuex'
import musicStore from './components/music/musicStore'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
      musicStore
    },
    strict: debug
})
