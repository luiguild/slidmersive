// import Vue from 'vue'
// import axios from '@/axios'

const actions = {
  getSlides: ({ commit }, value) =>
    commit('allSlides', value),
  setNextSlides: ({ commit }) =>
    commit('nextSlide'),
  setPreviousSlides: ({ commit }) =>
    commit('previousSlide')
}

export default actions
