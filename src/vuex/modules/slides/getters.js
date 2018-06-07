// import Vue from 'vue'

const getters = {
  getActualSlide: state => state.slides.actual,
  getLockSlides: state => state.slides.lock,
  getActualSlideIndex: state => state.slides.actualIndex,
  getActualSituation: state => {
    const actualIndex = parseInt(state.slides.actualIndex)
    if (actualIndex + 1 === state.slides.all.length) {
      return 'last'
    } else if (actualIndex === 0) {
      return 'first'
    } else {
      return 'presenting'
    }
  },
  getAllSlides: state => state.slides.all
}

export default getters
