<template lang="pug">
a-entity
  a-entity
    a-animation(
      attribute="position",
      from="0 30 0"
      to="0 0 0",
      delay="0",
      dur="1500",
      easing="ease-in-out-bounce",
      direction="alternate",
      repeat="0"
    )
    a-entity#vuejs(
      svg-path-extruder="url: ../static/img/vuejs.svg; scale: 2.7; extrude: 1;",
      position="-3.5 -2 0",
      rotation="0 20 0"
    )
      a-animation(
        attribute="rotation",
        from="0 20 0"
        to="0 70 0",
        delay="2000",
        dur="1000",
        easing="ease-out",
        direction="alternate",
        repeat="indefinite"
      )

  a-entity#heart
    a-entity(
      text-geometry=`
        value: ;
        font: #fontAwesomeSolid;
        height: 0.4;
        size: 1.5;
      `,
      position="-0.3 -2 0",
      rotation="0 0 0",
      material="color: #FFFFFF; opacity: 1"
    )
    a-animation(
      attribute="position",
      dur="500",
      delay="0",
      fill="forwards",
      easing="ease-in-out-sine",
      from="0 0 0",
      to="0 0 -0.5",
      direction="alternate",
      repeat="indefinite"
    )

  a-entity#aframe(
    position="4 0 0"
  )
    a-animation(
      attribute="rotation",
      from="0 0 0"
      to="0 -30 0",
      delay="2000",
      dur="1000",
      easing="ease-out",
      direction="alternate",
      repeat="indefinite"
    )

    a-entity(
      rotation="6.267 50.932 6.297",
      scale="0.2 0.2 0.2",
      position="0 -4 0"
    )
      a-entity(
        rotation="-20 0 0",
        position="0 0 10.75",
        scale="1 0 1"
      )
        a-animation(
          attribute="scale",
          to="1 1 1",
          delay="200",
          dur="1000",
          easing="ease-out"
        )
        a-box(
          width="12.5",
          depth="1",
          height="30",
          color="#EF2D5E",
          position="0 15 0"
        )
          a-entity(
            rotation="-140 0 0",
            position="0 15 0",
            scale="1 0 1"
          )
            a-animation(
              attribute="scale",
              to="1 1 1",
              delay="800",
              dur="800",
              easing="ease-out"
            )
            a-box(
              width="12.49",
              depth=".1",
              height="30",
              color="#24CAFF",
              position="0 15 -.52",
              shader="flat"
            )
            a-box(
              width="12.5",
              depth="1",
              height="30",
              color="#EF2D5E",
              position="0 15 0"
            )

      a-entity(
        rotation="-90 0 0",
        position="0 8 7.5",
        scale="1 0 1"
      )
        a-animation(
          attribute="scale",
          to="1 1 1",
          delay="800",
          dur="600",
          easing="ease-out"
        )
        a-box(
          width="12.45",
          depth=".1",
          height="14",
          color="#F2E646",
          position="0 7 .52",
          shader="flat"
        )
        a-box(
          width="12.5",
          depth="1",
          height="14",
          color="#EF2D5E",
          position="0 7 0"
        )

      a-entity
        a-plane(
          width="30",
          height="30",
          color="#249889",
          rotation="-90 0 0",
          shader="flat"
        )
          a-animation(
            attribute="position",
            from="0 -40 0",
            to="0 0 0",
            dur="1600",
            easing="ease-out"
          )

      a-entity(
        position="-10 0.2 -10"
      )
        a-collada-model(
          src="#tree",
          scale="2.5 2.5 2.5",
          visible="false"
        )
          a-animation(
            attribute="position",
            from="0 10 0",
            to="0 0 0",
            delay="650",
            dur="800",
            easing="ease-out",
            fill="backwards"
          )
          a-animation(
            attribute="visible",
            to="true",
            delay="800",
            dur="1"
          )

      a-entity(
        position="-10 0.2 6"
      )
        a-collada-model(
          src="#tree",
          scale="2.5 2.5 2.5",
          visible="false"
        )
          a-animation(
            attribute="position",
            from="0 10 0",
            to="0 0 0",
            delay="400",
            dur="800",
            easing="ease-out",
            fill="backwards"
          )
          a-animation(
            attribute="visible",
            to="true",
            delay="400",
            dur="1"
          )

      a-entity(
        position="10 0.2 10"
      )
        a-collada-model(
          src="#tree",
          scale="2.5 2.5 2.5",
          visible="false"
        )
          a-animation(
            attribute="position",
            from="0 10 0",
            to="0 0 0",
            delay="600",
            dur="800",
            easing="ease-out",
            fill="backwards"
          )
          a-animation(
            attribute="visible",
            to="true",
            delay="600",
            dur="1"
          )
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
