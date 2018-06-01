<template lang="pug">
  a-entity
    a-entity#vuejs(
      svg-path-extruder="url: ../static/img/vuejs.svg; scale: 2.7; extrude: 1;",
      position="0 2.5 0.7"
    )
      a-animation(
        attribute="rotation",
        dur="5000",
        delay="0",
        fill="forwards",
        easing="ease-in-out-sine",
        from="-5 -30 0",
        to="-5 30 0",
        direction="alternate",
        repeat="indefinite"
      )

    SimpleText(
      value="virtual reality",
      font="#pacificoRegularFont",
      height="0.1",
      size="1",
      position="-4.1 -0.7 2.1",
      material="color: #35495e;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )

    SimpleText(
      value="com Vue!",
      font="#bungeeRegularFont",
      height="0.3",
      size="1.6",
      position="-5.5 -2.6 1",
      material="color: #41b883;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )

    SimpleText(
      value="Realidade Virtual já é realidade!",
      font="#RobotoRegularFont",
      height="0",
      size="0.5",
      position="-4.7 -3.4 1",
      material="color: #35495e;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )
</template>

<script>
import {
  mapGetters
} from 'vuex'

import {
  SimpleText
} from '@/components/atoms'

export default {
  components: {
    SimpleText
  },
  computed: {
    ...mapGetters('slides', [
      'getActualSlide'
    ])
  }
}
</script>

<style lang="css">
</style>
