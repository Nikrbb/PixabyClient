<template>
<CatsList />
</template>

<script>
import CatsList from './components/CatsList.vue'

export default {
  name: 'App',
  components: {
    CatsList
  },
  computed: {
    cards() {
      return this.$store.getters.getJson
    }
  },
   created() {
    this.$store.dispatch(`loadJson`)
  },
}
</script>

