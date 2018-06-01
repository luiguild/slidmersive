<template lang="pug">
a-circle(
  :color="borderColor",
  :position="position",
  :radius="(radius + 0.02)"
)
  a-animation(
    :attribute="animationAttribute",
    :dur="animationDuration",
    :delay="animationDelay",
    fill="forwards",
    easing="ease-in-out-sine",
    :from="animationFrom",
    :to="(animationTo * 1.03)",
    direction="alternate",
    :repeat="animationRepeat"
  )
  a-circle(
    :src="asset",
    position="0 0 0.1",
    :radius="radius"
  )
    a-animation(
      :attribute="animationAttribute",
      :dur="animationDuration",
      :delay="animationDelay",
      fill="forwards",
      easing="ease-in-out-sine",
      :from="animationFrom",
      :to="animationTo",
      direction="alternate",
      :repeat="animationRepeat"
    )
</template>

<script>
export default {
  props: [
    'borderColor',
    'asset',
    'position',
    'radius',
    'animationAttribute',
    'animationDuration',
    'animationDelay',
    'animationFrom',
    'animationTo',
    'animationRepeat'
  ]
}
</script>
