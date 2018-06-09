// import Vue from 'vue'

const actions = {
  setSocketData: ({ commit, rootGetters }, data) => {
    if (rootGetters['slides/getSocketType'] === 'presenter') {
      return commit('socketSend', data)
    }
  },

  getSocketData: ({ commit, rootGetters }, data) => {
    if (rootGetters['slides/getSocketType'] === 'spectator') {
      return commit('socketReceive', data)
    }
  }
}

export default actions
