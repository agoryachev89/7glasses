<template>
  <b-container>
    <b-row>
      <b-col class="text slim">{{ glass.name }}</b-col>
      <b-col class="text slim">{{ glass.value.toFixed(2) }} ₽</b-col>
      <b-col class="slim">
        <b-button class="bwidth" size="sm" @click="create_modal('plus')" variant="outline-success">+</b-button>
        <b-button class="bwidth" size="sm" @click="create_modal('minus')" variant="outline-danger">-</b-button>
        <b-button class="bwidth" size="sm" @click="create_modal('set')" variant="outline-primary">✎</b-button>
      </b-col>
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
  font-size: 14px;
  margin-left: 3px;
}

.bwidth {
  width: 30px;
}

.row {
  padding: 3px;
}

.slim {
  padding: 0;
}

.text {
  font-size: 0.9rem;
}
</style>