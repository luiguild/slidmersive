<template lang="pug">
a-entity(scale="1.7 1.7 1.7")
  a-entity#Vuex(
    svg-path-extruder="url: ../static/img/vuex.svg; scale: 1.8; extrude: 0.4; overrideColor: #FFFFFFF;",
    position="0 -3 0",
    rotation="0 0 0"
  )
    a-plane(
      width="6",
      height="6",
      material="opacity: 0"
      rotation="0 0 0",
      position="0 2.9 0"
    )
      a-entity#VuexBall(
        svg-path-extruder="url: ../static/img/vuex-ball.svg; scale: 1.4; extrude: 0.4; overrideColor: #41b883;",
        position="-2.9 0.1 0.05",
        rotation="0 0 0"
      )
      a-animation(
        attribute="rotation",
        to="0 0 -360",
        delay="0",
        dur="2000",
        easing="ease-in-out-sine",
        direction="normal",
        repeat="indefinite"
      )

    a-circle#vue(
      color="#FFFFFF",
      position="-2.8 3.5 0.3",
      radius="0.8"
    )
      a-entity#logo(
        svg-path-extruder="url: ../static/img/vuejs.svg; scale: 0.4; extrude: 0.3;",
        position="0 -0.1 0",
        rotation="0 0 0"
      )

    a-circle#action(
      color="#FFFFFF",
      position="0 5.8 0.3",
      radius="0.8"
    )
      SimpleText(
        value="",
        font="#fontAwesomeSolid",
        height="0.1",
        size="0.45",
        position="-0.35 -0.1 0",
        material="color: #41b883;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )
      SimpleText(
        value="ACTION",
        font="#bungeeRegularFont",
        height="0.01",
        size="0.15",
        position="-0.44 -0.45 0",
        material="color: #35495e;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )

    a-circle#mutation(
      color="#FFFFFF",
      position="2.8 3.5 0.3",
      radius="0.8"
    )
      SimpleText(
        value="",
        font="#fontAwesomeSolid",
        height="0.1",
        size="0.4",
        position="-0.35 -0.1 0",
        material="color: #41b883;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )
      SimpleText(
        value="MUTATION",
        font="#bungeeRegularFont",
        height="0.01",
        size="0.13",
        position="-0.52 -0.45 0",
        material="color: #35495e;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )

    a-circle#store(
      color="#FFFFFF",
      position="1.7 0.6 0.3",
      radius="0.8"
    )
      SimpleText(
        value="",
        font="#fontAwesomeSolid",
        height="0.1",
        size="0.4",
        position="-0.23 -0.1 0",
        material="color: #41b883;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )
      SimpleText(
        value="STORE",
        font="#bungeeRegularFont",
        height="0.01",
        size="0.15",
        position="-0.36 -0.45 0",
        material="color: #35495e;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )

    a-circle#getters(
      color="#FFFFFF",
      position="-1.7 0.6 0.3",
      radius="0.8"
    )
      a-entity#getter(
        svg-path-extruder="url: ../static/img/getter.svg; scale: 0.37; extrude: 0.3; overrideColor: #41b883;",
        position="-0.13 0.13 0",
        rotation="0 0 0"
      )
      SimpleText(
        value="GETTER",
        font="#bungeeRegularFont",
        height="0.01",
        size="0.15",
        position="-0.44 -0.45 0",
        material="color: #35495e;",
        bevelEnabled="false",
        bevelSize="0",
        bevelThickness="0",
        curveSegments="0"
      )

    a-entity(
      :text="getTextValues",
      position="0 3 0"
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
      'getSocketType'
    ]),
    ...mapGetters('aframe', [
      'getCameraInfo'
    ]),
    ...mapGetters('socket', [
      'getSocketDataReceived'
    ]),
    getCameraRotation () {
      if (this.getSocketType === 'presenter' &&
          this.getCameraInfo.position &&
          this.getCameraInfo.rotation) {
        const rotation = this.getCameraInfo.rotation
        const position = this.getCameraInfo.position
        if (rotation.x !== undefined &&
            rotation.y !== undefined &&
            rotation.z !== undefined &&
            position.x !== undefined &&
            position.y !== undefined &&
            position.z !== undefined) {

            return `
              rotation:
              x: ${rotation.x.toFixed(2)}
              y: ${rotation.y.toFixed(2)}
              z: ${rotation.z.toFixed(2)}

              position:
              x: ${position.x.toFixed(2)}
              y: ${position.y.toFixed(2)}
              z: ${position.z.toFixed(2)}
            `
        }
        return 'aguardando camera...'
      }

      if (this.getSocketType === 'spectator' &&
          this.getSocketDataReceived.position &&
          this.getSocketDataReceived.rotation) {
        const rotation = this.getSocketDataReceived.rotation
        const position = this.getSocketDataReceived.position
        if (rotation.x !== undefined &&
            rotation.y !== undefined &&
            rotation.z !== undefined &&
            position.x !== undefined &&
            position.y !== undefined &&
            position.z !== undefined) {

            return `
              rotation:
              x: ${rotation.x.toFixed(2)}
              y: ${rotation.y.toFixed(2)}
              z: ${rotation.z.toFixed(2)}

              position:
              x: ${position.x.toFixed(2)}
              y: ${position.y.toFixed(2)}
              z: ${position.z.toFixed(2)}
            `
        }
        return 'aguardando camera...'
      }
    },
    getTextValues () {
      return `anchor: center; color: white; align: center; value: ${this.getCameraRotation}; width: 9;`
    }
  }
}
</script>

<style lang="sass">
</style>
