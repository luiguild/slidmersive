import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import mirrorX from './modules/socket/plugin'

const $mirrorX = mirrorX({
  host: 'ws://localhost:8081',
  tx: [
    {
      event: 'presenter',
      mutation: 'socket/socketSend'
    }
  ],
  rx: [
    {
      event: 'spectator',
      mutation: 'socket/socketReceive'
    }
  ]
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    $mirrorX
  ]
})
