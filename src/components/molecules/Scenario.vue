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
        const preset = this.getActualSlide.scenario.preset ? `preset: ${this.getActualSlide.scenario.preset}` : ''
        const grid = this.getActualSlide.scenario.grid ? `grid: ${this.getActualSlide.scenario.grid}` : ''
        const gridColor = this.getActualSlide.scenario.gridColor ? `gridColor: ${this.getActualSlide.scenario.gridColor}` : ''
        const skyColor = this.getActualSlide.scenario.skyColor ? `skyColor: ${this.getActualSlide.scenario.skyColor}` : ''
        const horizonColor = this.getActualSlide.scenario.horizonColor ? `horizonColor: ${this.getActualSlide.scenario.horizonColor}` : ''
        const groundColor = this.getActualSlide.scenario.groundColor ? `groundColor: ${this.getActualSlide.scenario.groundColor}` : ''
        const groundColor2 = this.getActualSlide.scenario.groundColor2 ? `groundColor2: ${this.getActualSlide.scenario.groundColor2}` : ''
        const groundTexture = this.getActualSlide.scenario.groundTexture ? `groundTexture: ${this.getActualSlide.scenario.groundTexture}` : ''
        const dressing = this.getActualSlide.scenario.dressing ? `dressing: ${this.getActualSlide.scenario.dressing}` : ''
        const dressingColor = this.getActualSlide.scenario.dressingColor ? `dressingColor: ${this.getActualSlide.scenario.dressingColor}` : ''

        const environment = `fog: 0; skyType: gradient; ${preset}; ${grid}; ${gridColor}; ${dressing}; ${dressingColor}; ${groundTexture}; ${groundColor}; ${groundColor2}; ${skyColor}; ${horizonColor};`
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
