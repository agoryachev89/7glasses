<template>
  <b-container>
    <b-row>
      <b-col><b>Итого</b></b-col>
      <b-col>{{ total.toFixed(2) }} ₽</b-col>
      <b-col><b-button @click="create_modal()" variant="outline-success">+</b-button></b-col>
    </b-row>
  </b-container>
</template>

<style>

</style>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    total () {
      let total_ = 0
      this.$store.state.glasses_names.forEach(element => total_ += this.$store.state.glasses[element].value)
      return total_
    }
  },
  methods: {
    create_modal () {
      this.$store.commit('modal/set_value', '')
      this.$store.commit('modal/set_operation', 'income')
      this.toggle_modal()
    },
    ...mapMutations({
      toggle_modal: 'modal/toggle_modal',
    })
  },
}
</script>