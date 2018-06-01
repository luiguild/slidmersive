<template lang="pug">
a-entity
  a-entity#superuber(
    svg-path-extruder="url: ../static/img/superuber.svg; scale: 2; extrude: 0.3;",
    position="0 0.9 0.7"
  )
    a-animation(
      attribute="position",
      dur="2000",
      delay="800",
      fill="forwards",
      easing="ease-in-out-sine",
      from="0 0.9 0.7",
      to="0 0.9 15",
      direction="alternate",
      repeat="1"
    )

  a-entity#superviz(
    svg-path-extruder="url: ../static/img/superviz.svg; scale: 2; extrude: 1;",
    position="0 -1 0.7"
  )
    a-animation(
      attribute="position",
      dur="3000",
      delay="1000",
      fill="forwards",
      easing="ease-in-out-sine",
      from="0 -1 0.7",
      to="0 -1 13",
      direction="alternate",
      repeat="1"
    )

  mixin animatePic(asset, position, duration, delay, finalSize)
    ImageRounded(
      borderColor="#FFFFFF",
      asset= asset,
      position= position,
      radius="0.001",
      animationAttribute="radius",
      animationDuration= duration,
      animationDelay= delay,
      animationFrom="0.001",
      animationTo= finalSize,
      animationRepeat="indefinite"
    )

  +animatePic("#su1", "-1 -7 7", "500", "2500", "4")
  +animatePic("#su2", "14 -2 6", "300", "2900", "4")
  +animatePic("#su3", "9 8 5", "800", "2900", "3")
  +animatePic("#su4", "18 4 7", "200", "3400", "3")
  +animatePic("#su5", "-21 4 3", "800", "3400", "3")
  +animatePic("#su6", "-12 4 5", "200", "5000", "2")
  +animatePic("#su7", "2 15 1", "1200", "2400", "5")
  +animatePic("#su8", "-32 -3 3", "500", "4400", "7")
  +animatePic("#su9", "4 6 4", "600", "5000", "3")
  +animatePic("#su10", "-8 9 6", "200", "2400", "4")
  +animatePic("#su11", "-20 -4 3", "200", "4400", "3")
  +animatePic("#su12", "24 8 6", "900", "2400", "6")
</template>

<script>
import {
  ImageRounded
} from '@/components/atoms'

export default {
  components: {
    ImageRounded
  }
}
</script>

<style lang="css">
</style>
