// import Vue from 'vue'
import router from '@/router'

const mutations = {
  allSlides: (state, value) => {
    state.slides.all = value
    return state
  },
  toggleLockSlides: state => {
    state.slides.lock = !state.slides.lock

    return state
  },
  goToSlide: (state, value) => {
    if (state.slides.all.length >= value) {
      state.slides.actualIndex = value
      state.slides.actual = state.slides.all[state.slides.actualIndex]

      return state
    }
  },
  nextSlide: state => {
    if (state.slides.all.length > state.slides.actualIndex + 1) {
      state.slides.actualIndex++

      router.push({
        name: 'Presentation',
        params: {
          id: state.slides.actualIndex
        }
      })

      return state
    }
  },
  previousSlide: state => {
    if (state.slides.actualIndex - 1 >= 0) {
      --state.slides.actualIndex

      router.push({
        name: 'Presentation',
        params: {
          id: state.slides.actualIndex
        }
      })

      return state
    }
  }
}

export default mutations
