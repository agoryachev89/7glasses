export const state = () => ({
  list: [],
  glasses: {
    common: { name: "Обязательные", value: parseFloat(localStorage.getItem('common')) || 0 },
    invest: { name: "Инвестиции", value: parseFloat(localStorage.getItem('invest')) || 0 },
    enjoy: { name: "Развлечения", value: parseFloat(localStorage.getItem('enjoy')) || 0 },
    learn: { name: "Образование", value: parseFloat(localStorage.getItem('learn')) || 0 },
    buy: { name: "Резерв", value: parseFloat(localStorage.getItem('buy')) || 0 },
    gift: { name: "Подарки", value: parseFloat(localStorage.getItem('gift')) || 0 },
    save: { name: "Подушка", value: parseFloat(localStorage.getItem('save')) || 0 },
  },
  glasses_names: ['common', 'invest', 'enjoy', 'learn', 'buy', 'gift', 'save'],
})

export const mutations = {
  plus(state, data) {
    state.glasses[data.glass].value = parseFloat(state.glasses[data.glass].value) + parseFloat(data.value)
    localStorage.setItem(data.glass, state.glasses[data.glass].value)
  },
  minus(state, data) {
    state.glasses[data.glass].value = parseFloat(state.glasses[data.glass].value) - parseFloat(data.value)
    localStorage.setItem(data.glass, state.glasses[data.glass].value)
  },
  set(state, data) {
    state.glasses[data.glass].value = parseFloat(data.value)
    localStorage.setItem(data.glass, state.glasses[data.glass].value)
  },
}
