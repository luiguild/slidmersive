<template lang="pug">
  a-entity
    a-circle(
      src="#luigui",
      position="0 3.5 2",
      radius="2"
    )

    a-entity#title(
      text-geometry=`
        value: Luigui Delyer;
        font: #permanentMarkerRegularFont;
        height: 0.1;
        size: 1.4;
      `,
      position="-5.8 -0.8 1",
      material="color: white;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: VUUEEEEE POOORRAAAA;
        font: #RobotoRegularFont;
        height: 0.05;
        size: 0.6;
      `,
      position="-5.8 -1.7 1",
      material="color: white;"
    )
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
