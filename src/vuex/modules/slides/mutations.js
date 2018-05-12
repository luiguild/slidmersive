// import Vue from 'vue'

const mutations = {
  allSlides: (state, value) => {
    state.slides = value
    return state
  },
  nextSlide: state => {
    if (state.slides.all.length >= state.slides.actual + 1) {
      state.slides.actual++
      return state
    }
  },
  previousSlide: state => {
    if (state.slides.actual - 1 >= 0) {
      --state.slides.actual
      return state
    }
  }
}

export default mutations
