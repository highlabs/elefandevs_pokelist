<template>
  <div class="card">
    <h2>{{name}}</h2>

    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" alt="">
    </div>

    <div v-else>
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      default: 'Sem some'
    }
  },
  data() {
    return {
      pokemon: null
    }
  },
  mounted() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.pokemon = res
      })
      .catch(error => console.error(error))
  }
}
</script>

<style lang="postcss" scoped>
.card {
  @apply bg-white text-black mb-4 p-4 rounded-lg
}
h2 {
  @apply text-2xl
}
</style>
