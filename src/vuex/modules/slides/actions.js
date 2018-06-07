// import Vue from 'vue'
import axios from '@/axios'

const actions = {
  getSlides: ({ commit }, value) =>
    axios.slides.getAll()
      .then(data => commit('allSlides', data.slides)),

  setNextSlides: ({ commit, getters }) => {
    if (!getters.getLockSlides) {
      return commit('nextSlide')
    }
  },

  setPreviousSlides: ({ commit, getters }) => {
    if (!getters.getLockSlides) {
      return commit('previousSlide')
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
