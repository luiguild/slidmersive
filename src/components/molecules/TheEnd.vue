<template lang="pug">
  a-entity
    a-entity#elemencast(
      svg-path-extruder="url: ../static/img/elemencast.svg; scale: 1.2; extrude: 0.4;",
      position="0 -1.3 0",
      rotation="0 0 0"
    )

    SimpleText(
      value="É isso! Obrigado!",
      font="#bungeeRegularFont",
      height="0.05",
      size="0.8",
      position="-5.6 2.5 1",
      material="color: #000000;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )

    SimpleText(
      value="elemencast.github.io",
      font="#bungeeRegularFont",
      height="0.05",
      size="0.5",
      position="-4.5 -3 1",
      material="color: #000000;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )

    SimpleText(
      value="@luiguild",
      font="#bungeeRegularFont",
      height="0.05",
      size="0.4",
      position="-1.8 -3.6 1",
      material="color: #000000;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )
</template>

<script>
import {
  SimpleText
} from '@/components/atoms'

export default {
  components: {
    SimpleText
  }
}
</script>

<style lang="sass">
</style>
