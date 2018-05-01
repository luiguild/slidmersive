// import Vue from 'vue'
// import axios from '@/axios'

const actions = {
  setCameraPosition: ({ commit }, position) =>
    commit('cameraInfo', position),
  setCameraRotation: ({ commit }, rotation) =>
    commit('cameraInfo', rotation)
}

export default actions
