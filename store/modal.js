export const state = () => ({
  show_modal: false,
  entered_value: '',
  current_glass: 'common',
  operation: 'plus',  // plus / minus / set / income
})
  
export const mutations = {
  toggle_modal(state) {
    state.show_modal = !state.show_modal
  },
  set_current_glass(state, data) {
    state.current_glass = data
  },
  set_operation(state, data) {
    state.operation = data
  },
  set_value(state, data) {
    state.entered_value = data
  },
}
