// import Vue from 'vue'
import axios from '@/axios'

const actions = {
  setSocketType: ({ commit }, value) =>
    commit('socketType', value),

  getSlides: ({ commit }, value) =>
    axios.slides.getAll()
      .then(data => commit('allSlides', data.slides)),

  setNextSlides: ({ commit, dispatch, getters }) => {
    if (!getters.getLockSlides) {
      return Promise.all([
        commit('nextSlide'),
        dispatch(
          'socket/setSocketData',
          {
            slideIndex: parseInt(getters.getActualSlideIndex)
          },
          {
            root: true
          })
      ])
    }
  },

  setPreviousSlides: ({ commit, dispatch, getters }) => {
    if (!getters.getLockSlides) {
      return Promise.all([
        commit('previousSlide'),
        dispatch(
          'socket/setSocketData',
          {
            slideIndex: parseInt(getters.getActualSlideIndex)
          },
          {
            root: true
          })
      ])
    }
  },

  setActual: ({ commit, getters }, value) => {
    if (!getters.getLockSlides) {
      return commit('goToSlide', value)
    }
  },

  setToggleLockSlides: ({ commit }) =>
    commit('toggleLockSlides')
}

export default actions
