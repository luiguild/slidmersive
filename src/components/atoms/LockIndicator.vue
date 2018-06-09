<template lang="pug">
img.lock(
  v-if="getLockSlides"
  src="../../../static/img/lock.svg"
)
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters('slides', [
      'getLockSlides'
    ])
  },
  watch: {}
}
</script>

<style lang="sass">
  .lock
    position: absolute
    top: 0
    right: 0
    height: 40px
    width: 40px
    margin: 20px
    z-index: 9
</style>
