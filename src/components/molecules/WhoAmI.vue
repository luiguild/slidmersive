<template lang="pug">
  a-entity
    a-entity#mozilla(
      svg-path-extruder="url: ../static/img/mozilla.svg; scale: 1.4; extrude: 0.4;",
      position="-5.4 3 0.7",
      rotation="0 0 28"
    )

    a-entity#elemencast(
      svg-path-extruder="url: ../static/img/elemencast.svg; scale: 1; extrude: 0.4;",
      position="6 1.4 1",
      rotation="0 0 -20"
    )

    a-entity#riojs(
      svg-path-extruder="url: ../static/img/riojs.svg; scale: 1.6; extrude: 0.4;",
      position="0.6 -3.6 0.7",
      rotation="0 0 6"
    )

    a-entity#title(
      text-geometry=`
        value: Luigui Delyer;
        font: #permanentMarkerRegularFont;
        height: 0.4;
        size: 1.4;
      `,
      position="-6.1 -0.4 1",
      material="color: white;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: Mozilla - Elemencast - VueJS in Rio - RioJS;
        font: #RobotoRegularFont;
        height: 0.05;
        size: 0.46;
      `,
      position="-5.7 -1.2 1",
      material="color: white;"
    )
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
