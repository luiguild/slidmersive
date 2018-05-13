// import Vue from 'vue'
import axios from '@/axios'

const actions = {
  getSlides: ({ commit }, value) =>
    axios.slides.getAll()
      .then(data => commit('allSlides', data.slides)),
  setNextSlides: ({ commit }) =>
    commit('nextSlide'),
  setPreviousSlides: ({ commit }) =>
    commit('previousSlide'),
  setActual: ({ commit }, value) =>
    commit('goToSlide', value)
}

export default actions
