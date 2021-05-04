<template>
  <div>
    <b-row>
      <b-col v-if="operation === 'plus'" >Приход в стакан {{ current_glass_name }}</b-col>
      <b-col v-if="operation === 'minus'" >Расход из стакана {{ current_glass_name }}</b-col>
      <b-col v-if="operation === 'set'" >Редактируем стакан {{ current_glass_name }}</b-col>
      <b-col v-if="operation === 'income'" >Поступление средств</b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <b-form  @submit.stop.prevent>
          <b-form-input ref="summ_data" type="number" v-model="entered_value" :state="validation" id="modal_data"></b-form-input>
          <b-form-invalid-feedback :state="validation">
            Введите число в формате 14.27
          </b-form-invalid-feedback>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col><b-button @click="toggle_modal()" variant="outline-primary">Отмена</b-button></b-col>
      <b-col><b-button @click="save()" variant="outline-success">Сохранить</b-button></b-col>
    </b-row>
    <b-row v-if="operation === 'income'"><b-col>На инвестиции: {{ to_invest.toFixed(2) }} ₽</b-col></b-row>
    <b-row v-if="operation === 'income'"><b-col>На сбер сбер: {{ to_sber_sber.toFixed(2) }} ₽</b-col></b-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      entered_value: this.value,
    }
  },
  mounted() {
    this.focusInput()
    this.entered_value = this.value
  },
  computed: {
    validation() {
      return !isNaN(parseFloat(this.entered_value))
    },
    operation() {
      return this.$store.state.modal.operation
    },
    current_glass() {
      return this.$store.state.modal.current_glass
    },
    current_glass_name() {
      return this.$store.state.glasses[this.current_glass].name
    },
    value() {
      return this.$store.state.modal.entered_value
    },
    to_invest() {
      if (!this.validation) return 0
      return this.entered_value * 0.05 * 2
    },
    to_sber_sber() {
      if (!this.validation) return 0
      return this.entered_value * 0.05 * 7
    },
  },
  methods: {
    focusInput() {
      this.$refs.summ_data.focus();
    },
    save() {
      if (!this.validation) {
        this.focusInput();
        return
      }
      this.entered_value = parseFloat(this.entered_value)
      switch(this.operation) {
        case 'plus':
          this.$store.commit('plus', { glass: this.current_glass, value: this.entered_value })
          break
        case 'minus':
          this.$store.commit('minus', { glass: this.current_glass, value: this.entered_value })
          break
        case 'set':
          this.$store.commit('set', { glass: this.current_glass, value: this.entered_value })
          break
        case 'income':
          var persent = this.entered_value * 0.05
          this.$store.commit('plus', { glass: 'common', value: persent * 11 })
          this.$store.commit('plus', { glass: 'invest', value: persent * 2 })
          this.$store.commit('plus', { glass: 'enjoy', value: persent * 2 })
          this.$store.commit('plus', { glass: 'learn', value: persent * 2 })
          this.$store.commit('plus', { glass: 'buy', value: persent * 2 })
          this.$store.commit('plus', { glass: 'gift', value: persent * 1 })
          break
      }
      this.toggle_modal()
    },
    ...mapMutations({
      toggle_modal: 'modal/toggle_modal',
    })
  }
}
</script>

<style>

</style>