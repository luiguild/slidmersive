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
  a-camera(watcher-position)
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

import { Scenario } from '@/components/molecules'
import { Slide } from '@/components/atoms'

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
