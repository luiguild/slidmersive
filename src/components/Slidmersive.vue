<template lang="pug">
router-view(name="content")
</template>

<script>
import {
  // mapGetters,
  mapActions
} from 'vuex'

export default {
  props: {
    // prop: {
    //   type: String,
    //   required: false,
    //   validator: function (value) {
    //     return value
    //   },
    //   default: function () {
    //     return ''
    //   }
    // }
  },
  data: () => ({}),
  created () {
    document.addEventListener('keyup', event => this.keyControls(event))
  },
  mounted () {},
  updated () {},
  beforeDestroy () {
    document.removeEventListener('keyup', event => this.keyControls(event))
  },
  destroyed () {},
  components: {},
  computed: {
    //   ...mapGetters([])
  },
  methods: {
    ...mapActions('slides', [
      'setNextSlides',
      'setPreviousSlides',
      'setToggleLockSlides'
    ]),
    keyControls (event) {
      if (event.keyCode === 190) {
        return this.setNextSlides()
      } else if (event.keyCode === 188) {
        return this.setPreviousSlides()
      } else if (event.keyCode === 76) {
        return this.setToggleLockSlides()
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
@import ../assets/sass/Slidemersive
</style>
