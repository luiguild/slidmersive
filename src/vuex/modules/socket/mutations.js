// import Vue from 'vue'

const mutations = {
  socketSend: (state, data) => {
    state.socket.tx = {
      ...state.socket.tx,
      ...data
    }
    return state
  },

  socketReceive: (state, data) => {
    state.socket.rx = {
      ...state.socket.rx,
      ...data
    }
    return state
  }
}

export default mutations
