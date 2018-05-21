<template lang="pug">
  a-entity(
    :text-geometry="textGeometry",
    :position="position",
    :material="material"
  )
</template>

<script>
export default {
  props: [
    'value',
    'font',
    'height',
    'size',
    'position',
    'material',
    'bevelEnabled',
    'bevelSize',
    'bevelThickness',
    'curveSegments'
  ],
  computed: {
    textGeometry () {
      const value = `value: ${this.value};`
      const font = `font: ${this.font};`
      const height = `height: ${this.height};`
      const size = `size: ${this.size};`
      const bevelEnabled = `bevelEnabled: ${this.bevelEnabled};`
      const bevelSize = `bevelSize: ${this.bevelSize};`
      const bevelThickness = `bevelThickness: ${this.bevelThickness};`
      const curveSegments = `curveSegments: ${this.curveSegments};`

      return `${value} ${font} ${height} ${size} ${bevelEnabled} ${bevelSize} ${bevelThickness} ${curveSegments}`
    }
  }
}
</script>

<style lang="css">
</style>
