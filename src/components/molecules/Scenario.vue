<template lang="pug">
a-entity(
  position="0 0 0"
  rotation="0 0 0"
)
  a-entity#environment(
    :environment="getEnvironment"
  )

  a-entity#sky(
    geometry=`
      primitive: sphere;
      radius: 130;
    `,
    :material="getSky"
  )
  //- a-entity(ground)
  a-entity(
    light=`
      type: point;
      color: #f4f4f4;
      intensity: 0.5;
      distance: 0
    `,
    position='0 10 18'
  )
  a-entity(
    light=`
      type: ambient;
      color: #fff;
      intensity: 0.15;
      distance: 0
    `,
    position='0 0 -11'
  )
  a-entity(
    light=`
      type: ambient;
      color: #fff;
      intensity: 0.15;
      distance: 0
    `,
    position='0 0 11'
  )
  a-entity(
    light=`
      type: ambient;
      color: #fff;
      intensity: 0.15;
      distance: 0
    `,
    position='11 0 0'
  )

  slot
</template>

<script>
import {
  mapGetters
  // mapActions
} from 'vuex'

// import ground from '@/components/quarks/scenario/ground'
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
    // ground,
    skyGradient
  },
  computed: {
    ...mapGetters('slides', [
      'getActualSlide'
    ]),
    getEnvironment () {
      if (this.getActualSlide) {
        const preset = this.getActualSlide.scenario.preset || 'default'
        const grid = this.getActualSlide.scenario.grid || 'none'
        const skyColor = this.getActualSlide.scenario.skyColor || 'none'
        const horizonColor = this.getActualSlide.scenario.horizonColor || 'none'

        const environment = `preset: ${preset}; grid: ${grid}; fog: 0; skyType: gradient; skyColor: ${skyColor}; horizonColor: ${horizonColor};`
        return environment
      }
    },
    getSky () {
      if (this.getActualSlide) {
        const skyColor = this.getActualSlide.scenario.skyColor || 'none'
        const horizonColor = this.getActualSlide.scenario.horizonColor || 'none'

        const sky = `shader: skyGradient; colorTop: ${skyColor}; colorBottom: ${horizonColor}; side: back`
        return sky
      }
    }
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
