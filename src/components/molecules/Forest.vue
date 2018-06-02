<template lang="pug">
  a-entity
    a-entity#title(
      text-geometry=`
        value: Quando eu cheguei aqui...;
        font: #pacificoRegularFont;
        height: 0.1;
        size: 0.9;
      `,
      position="-6.5 1.9 0.4",
      material="color: #8c6a48;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: ERA TUDO;
        font: #bungeeRegularFont;
        height: 0.3;
        size: 1.8;
      `,
      position="-6.7 -0.1 0",
      material="color: #624330;"
    )

    a-entity#subTitle(
      text-geometry=`
        value: MATO!;
        font: #bungeeRegularFont;
        height: 0.3;
        size: 2.8;
      `,
      position="-6.7 -3.1 0",
      material="color: #8c6a48;"
    )
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
