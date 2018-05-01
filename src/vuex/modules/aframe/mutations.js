import Vue from 'vue'

const mutations = {
  cameraInfo: (state, value) => {
    const key = Object.keys(value)[0]

    const info = {
      ...state.camera,
      [key]: {
        x: value[key].x,
        y: value[key].y,
        z: value[key].z
      }
    }

    return Vue.set(state, 'camera', info)
  }
}

export default mutations
