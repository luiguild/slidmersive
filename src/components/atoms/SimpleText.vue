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
    'material'
  ],
  computed: {
    textGeometry () {
      const value = `value: ${this.value};`
      const font = `font: ${this.font};`
      const height = `height: ${this.height};`
      const size = `size: ${this.size};`

      return `${value} ${font} ${height} ${size}`
    }
  }
}
</script>

<style lang="css">
</style>
