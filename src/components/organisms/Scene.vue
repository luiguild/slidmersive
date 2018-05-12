<template lang="pug">
a-scene(fog='color: #41b883; near: 0; far: 65;')
  a-assets
    a-asset-item#fontAwesomeRegularFont(
      src='../static/fonts/Font_Awesome_Regular.json'
    )
    a-asset-item#fontAwesomeBrandsFont(
      src='../static/fonts/Font_Awesome_Brands.json'
    )
    a-asset-item#fontAwesomeSolid(
      src='../static/fonts/Font_Awesome_Solid.json'
    )
    a-asset-item#permanentMarkerRegularFont(
      src='../static/fonts/Permanent_Marker_Regular.json'
    )
    a-asset-item#RobotoBlackRegularFont(
      src='../static/fonts/Roboto_Black_Regular.json'
    )
    a-asset-item#RobotoRegularFont(
      src='../static/fonts/Roboto_Regular.json'
    )

  Scenario
    Slide

  a-entity(hand-controls="left")
  a-entity(hand-controls="right")

  a-camera(watcher="type: transmitter; id: 12345;")
    a-cursor
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

import { Scenario, Slide } from '@/components/molecules'

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
  created: function () {},
  mounted: function () {},
  updated: function () {},
  destroyed: function () {},
  components: {
    Scenario,
    Slide
  },
  computed: {
  //   ...mapGetters([])
  },
  methods: {
  //   ...mapActions([])
  },
  filters: {},
  watch: {}
}
</script>

<style lang="sass">
  // @import ../../static/sass/imports/_extend
</style>
