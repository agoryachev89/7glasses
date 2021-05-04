<template>
  <b-container>
    <b-row><b-col><b>Счета</b></b-col></b-row>
    <b-row><b-col>Сбер сбер</b-col><b-col>{{ sb_sb.toFixed(2) }} ₽</b-col></b-row>
    <b-row><b-col>Сбер осн</b-col><b-col>{{ sb_main.toFixed(2) }} ₽</b-col></b-row>
    <b-row><b-col>Тиньков</b-col><b-col>{{ tinkoff.toFixed(2) }} ₽</b-col></b-row>
  </b-container>
</template>

<style>

</style>

<script>
export default {
  computed: {
    sb_sb () {
      let sb_sb_glasses = ['enjoy', 'learn', 'buy', 'gift', 'save']
      let sb_sb_ = 0
      sb_sb_glasses.forEach(element => sb_sb_ += this.$store.state.glasses[element].value)
      return sb_sb_
    },
    sb_main () {
      return this.$store.state.glasses['common'].value
    },
    tinkoff () {
      return this.$store.state.glasses['invest'].value
    },
  },
}
</script>