<template>
  <div class="container">
    <div class="mx-auto title-panel">
      <h1 class="title">
        7 стаканов v2.0.3
      </h1>
    </div>
    <Modal v-if="show_modal" />
    <div v-else>
      <Total />
      <div v-for="glass in glasses_names"><Glass :glass_name=glass /></div>
      <Bills />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    show_modal () {
      return this.$store.state.modal.show_modal
    },
  },
  mounted() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('https://agoryachev89.github.io/7glasses/dist/service-worker.js')
      .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope)
      })
      .catch(function(error) {
          console.log('Service worker registration failed, error:', error)
      })
    }
  },
  data() {
    return {
      glasses_names: this.$store.state.glasses_names
    }
  },
}
</script>

<style>
.title-panel {
  font-weight: bold;
  font-size: 14pt;
}

.title {
  width: 350px;
}
</style>