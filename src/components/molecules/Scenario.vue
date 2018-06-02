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
        const environment = [
          'fog: 0',
          'skyType: gradient',
          this.getActualSlide.scenario.preset ? `preset: ${this.getActualSlide.scenario.preset}` : 'preset: default',
          this.getActualSlide.scenario.grid ? `grid: ${this.getActualSlide.scenario.grid}` : 'grid: none',
          this.getActualSlide.scenario.seed ? `seed: ${this.getActualSlide.scenario.seed}` : 'seed: 1',
          this.getActualSlide.scenario.playArea ? `playArea: ${this.getActualSlide.scenario.playArea}` : 'playArea: 1',
          this.getActualSlide.scenario.gridColor ? `gridColor: ${this.getActualSlide.scenario.gridColor}` : null,
          this.getActualSlide.scenario.skyColor ? `skyColor: ${this.getActualSlide.scenario.skyColor}` : null,
          this.getActualSlide.scenario.horizonColor ? `horizonColor: ${this.getActualSlide.scenario.horizonColor}` : null,
          this.getActualSlide.scenario.groundColor ? `groundColor: ${this.getActualSlide.scenario.groundColor}` : 'groundColor: #553e35',
          this.getActualSlide.scenario.groundColor2 ? `groundColor2: ${this.getActualSlide.scenario.groundColor2}` : 'groundColor2: #694439',
          this.getActualSlide.scenario.groundTexture ? `groundTexture: ${this.getActualSlide.scenario.groundTexture}` : 'groundTexture: none',
          this.getActualSlide.scenario.ground ? `ground: ${this.getActualSlide.scenario.ground}` : 'ground: hills',
          this.getActualSlide.scenario.groundYScale ? `groundYScale: ${this.getActualSlide.scenario.groundYScale}` : 'groundYScale: 3',
          this.getActualSlide.scenario.dressing ? `dressing: ${this.getActualSlide.scenario.dressing}` : 'dressing: none',
          this.getActualSlide.scenario.dressingColor ? `dressingColor: ${this.getActualSlide.scenario.dressingColor}` : null,
          this.getActualSlide.scenario.dressingAmount ? `dressingAmount: ${this.getActualSlide.scenario.dressingAmount}` : 'dressingAmount: 10',
          this.getActualSlide.scenario.dressingScale ? `dressingScale: ${this.getActualSlide.scenario.dressingScale}` : 'dressingScale: 5',
          this.getActualSlide.scenario.dressingVariance ? `dressingVariance: ${this.getActualSlide.scenario.dressingVariance}` : "dressingVariance: '1 1 1'",
          this.getActualSlide.scenario.dressingUniformScale ? `dressingUniformScale: ${this.getActualSlide.scenario.dressingUniformScale}` : "dressingUniformScale: ''",
          this.getActualSlide.scenario.dressingOnPlayArea ? `dressingOnPlayArea: ${this.getActualSlide.scenario.dressingOnPlayArea}` : 'dressingOnPlayArea: 0'
        ].join('; ')
        console.log(environment)
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
