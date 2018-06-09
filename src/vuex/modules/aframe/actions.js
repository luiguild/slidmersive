// import Vue from 'vue'
// import axios from '@/axios'

const actions = {
  setCameraPosition: ({ dispatch, commit }, position) =>
    Promise.all([
      commit('cameraInfo', position),
      dispatch(
        'socket/setSocketData',
        position,
        {
          root: true
        })
    ]),

  setCameraRotation: ({ dispatch, commit }, rotation) =>
    Promise.all([
      commit('cameraInfo', rotation),
      dispatch(
        'socket/setSocketData',
        rotation,
        {
          root: true
        })
    ])
}

export default actions
