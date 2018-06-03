<template lang="pug">
a-entity(scale="1.9 1.9 1.9")
  a-entity#Vuex(
    svg-path-extruder="url: ../static/img/vuex.svg; scale: 1.8; extrude: 0.4; overrideColor: #FFFFFFF",
    position="0 -3 0",
    rotation="0 0 0"
  )
    a-plane(
      width="6",
      height="6",
      material="opacity: 0"
      rotation="0 0 0",
      position="0 2.9 0",
      shader="flat"
    )
      a-entity#VuexBall(
        svg-path-extruder="url: ../static/img/vuex-ball.svg; scale: 1.4; extrude: 0.4; overrideColor: #41b883",
        position="-2.9 0.1 0.05",
        rotation="0 0 0",
        shader="flat"
      )
      a-animation(
        attribute="rotation",
        to="0 0 -360",
        delay="0",
        dur="6000",
        easing="ease-sine",
        direction="normal",
        repeat="indefinite"
      )


    a-circle#vue(
      color="#FFFFFF",
      position="-2.8 3.5 0.3",
      radius="0.8"
    )
    a-circle#acction(
      color="#FFFFFF",
      position="0 5.8 0.3",
      radius="0.8"
    )
    a-circle#mutation(
      color="#FFFFFF",
      position="2.8 3.5 0.3",
      radius="0.8"
    )
    a-circle#store(
      color="#FFFFFF",
      position="1.7 0.6 0.3",
      radius="0.8"
    )
    a-circle#getters(
      color="#FFFFFF",
      position="-1.7 0.6 0.3",
      radius="0.8"
    )
    //- a-animation(
    //-   attribute="rotation",
    //-   to="0 0 7",
    //-   delay="0",
    //-   dur="2000",
    //-   easing="ease-in-out-sine",
    //-   direction="alternate",
    //-   repeat="indefinite"
    //- )
    //-
    //- SimpleText(
    //-   value="web component",
    //-   font="#pacificoRegularFont",
    //-   height="0.2",
    //-   size="0.4",
    //-   position="-2.8 -1.2 0",
    //-   material="color: #FFFFFF;",
    //-   bevelEnabled="false",
    //-   bevelSize="0",
    //-   bevelThickness="0",
    //-   curveSegments="0"
    //- )
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
