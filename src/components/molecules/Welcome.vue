<template lang="pug">
  a-entity
    a-entity#svg(
      svg-geometry="url: ../static/img/vuejs.svg;",
      position="0 0 0"
    )

    SimpleText(
      value="virtual reality",
      font="#pacificoRegularFont",
      height="0.1",
      size="1",
      position="-4.1 0.5 1.3",
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
      position="-5.5 -1.2 1",
      material="color: #41b883;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )

    SimpleText(
      value="Realidade Virtual já é realidade",
      font="#RobotoRegularFont",
      height="0",
      size="0.5",
      position="-4.7 -2.1 1",
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
