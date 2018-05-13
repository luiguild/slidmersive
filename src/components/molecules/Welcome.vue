<template lang="pug">
  a-entity
    SimpleText(
      value="VR com Vue!",
      font="#permanentMarkerRegularFont",
      height="0.1",
      size="1.4",
      position="-5.8 -0.8 1",
      material="color: white;"
    )

    SimpleText(
      value="Realidade Virtual já é realidade",
      font="#RobotoRegularFont",
      height="0.05",
      size="0.6",
      position="-5.8 -1.7 1",
      material="color: white;"
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
      'getActualSlide'
    ])
  }
}
</script>

<style lang="css">
</style>
