<template lang="pug">
  a-entity
    a-entity#warning(
      svg-path-extruder="url: ../static/img/warning.svg; scale: 4; extrude: 2;",
      position="5 0 -12",
      rotation="0 20 -20"
    )
      a-animation(
        attribute="rotation",
        dur="3000",
        delay="0",
        fill="forwards",
        easing="ease-in-out-sine",
        from="0 0 -20",
        to="0 20 20",
        direction="alternate",
        repeat="indefinite"
      )

    a-entity#title(
      text-geometry=`
        value: UNDER;
        font: #bungeeRegularFont;
        height: 0.7;
        size: 2.4;
      `,
      position="-6.5 -2 0",
      rotation="0 20 0",
      material="color: #FFFFFF;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: cONSTRUCTION;
        font: #bungeeRegularFont;
        height: 0.7;
        size: 1.8;
      `,
      position="-6.5 -4 0",
      rotation="0 20 0",
      material="color: #FFFFFF;"
    )
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
