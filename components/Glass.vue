<template>
  <b-container>
    <b-row>
      <b-col cols="5">{{ glass.name }}</b-col>
      <b-col cols="2">{{ glass.value.toFixed(2) }} ₽</b-col>
      <b-col><b-button @click="create_modal('plus')" variant="outline-success">+</b-button></b-col>
      <b-col><b-button @click="create_modal('minus')" variant="outline-danger">-</b-button></b-col>
      <b-col><b-button @click="create_modal('set')" variant="outline-primary">✎</b-button></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['glass_name'],
  computed: {
    glass () {
      return this.$store.state.glasses[this.glass_name]
    }
  },
  methods: {
    create_modal (operation) {
      if (operation === 'set') {
        this.$store.commit('modal/set_value', this.$store.state.glasses[this.glass_name].value)
      } else {
        this.$store.commit('modal/set_value', '')
      }
      this.$store.commit('modal/set_operation', operation)
      this.$store.commit('modal/set_current_glass', this.glass_name)
      this.toggle_modal()
    },
    ...mapMutations({
      toggle_modal: 'modal/toggle_modal',
    })
  },
}
</script>

<style>
b-button {
  font-size: 18px;
  margin-left: 7px;
}

.row {
  padding: 3px;
}
</style>