<template lang="pug">
a-entity
  a-entity#SFC(
    svg-path-extruder="url: ../static/img/file.svg; scale: 1.8; extrude: 0.4; overrideColor: #41B883",
    position="-2.5 0 0",
    rotation="0 0 10"
  )
    a-animation(
      attribute="rotation",
      to="0 0 7",
      delay="0",
      dur="2000",
      easing="ease-in-out-sine",
      direction="alternate",
      repeat="indefinite"
    )
    SimpleText(
      value=".vue",
      font="#bungeeRegularFont",
      height="0.2",
      size="1.1",
      position="-3 -0.7 0",
      material="color: #FFFFFF;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )
    SimpleText(
      value="single file component",
      font="#pacificoRegularFont",
      height="0.2",
      size="0.4",
      position="-3.4 -1.4 0",
      material="color: #FFFFFF;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )

  a-entity#plus
    SimpleText(
      value="",
      font="#fontAwesomeSolid",
      height="0.3",
      size="1.5",
      position="-1.0 -0.6 1",
      material="color: #FFFFFF;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )
    a-animation(
      attribute="position",
      dur="500",
      delay="0",
      fill="forwards",
      easing="ease-in-out-sine",
      from="0 0 0",
      to="0 0 -0.4",
      direction="alternate",
      repeat="indefinite"
    )

  a-entity#WC(
    svg-path-extruder="url: ../static/img/file.svg; scale: 1.8; extrude: 0.4; overrideColor: #EF2D5E",
    position="4.4 -1 0.4",
    rotation="0 0 -10"
  )
    a-animation(
      attribute="rotation",
      to="0 0 -7",
      delay="0",
      dur="2000",
      easing="ease-in-out-sine",
      direction="alternate",
      repeat="indefinite"
    )
    SimpleText(
      value="<a-entity>",
      font="#bungeeRegularFont",
      height="0.2",
      size="0.65",
      position="-4.1 -0.6 0",
      material="color: #FFFFFF;",
      bevelEnabled="false",
      bevelSize="0",
      bevelThickness="0",
      curveSegments="0"
    )
    SimpleText(
      value="web component",
      font="#pacificoRegularFont",
      height="0.2",
      size="0.4",
      position="-2.8 -1.2 0",
      material="color: #FFFFFF;",
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
