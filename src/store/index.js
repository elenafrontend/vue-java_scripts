import Vue from 'vue'
import Vuex from 'vuex'
import reactions from './modules/reactions'
import user from './modules/user'
import films from './modules/films'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { 
    reactions,
    user,
    films
  }
})