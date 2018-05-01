<template lang="pug">
a-entity(position='0 0 0')
  // Environment
  a-entity#sky(
    geometry=`
      primitive: sphere;
      radius: 65;
    `,
    material=`
      shader: skyGradient;
      colorTop: #35495e;
      colorBottom: #41b883;
      side: back
    `
  )
  a-entity(ground)

  a-entity(
    light=`
      type: point;
      color: #f4f4f4;
      intensity: 0.5;
      distance: 0
    `,
    position='8 10 18'
  )
  a-entity(
    light=`
      type: point;
      color: #41b883;
      intensity: 1;
      distance: 0
    `,
    position='-8 10 -18'
  )
  a-entity(
    light=`
      type: ambient;
      color: #f4f4f4;
      intensity: 0.5;
    `,
    position='-8 10 -18'
  )

  slot
</template>

<script>
// import {
//   mapGetters,
//   mapActions
// } from 'vuex'

import ground from '@/components/quarks/scenario/ground'
import skyGradient from '@/components/quarks/scenario/skyGradient'

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
    ground,
    skyGradient
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
