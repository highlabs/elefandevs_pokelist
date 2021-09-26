<template>
  <main class="container">
    <header>
      <nuxt-link to="/">
        <h2>⇦ Voltar</h2>
      </nuxt-link>
    </header>
    <Card :name="pokemon.name"/>
  </main>
</template>

<script>
export default {
   async asyncData(context) {
    const pokeList = context.store.state.pokebola.pokelist
    const pokemon = pokeList.find(poke => poke.name === context.params.pokemon)

    if (pokemon) {
      return {
        pokemon
      }
    }

    await context.store.dispatch('pokebola/getPokemon', context.params.pokemon)

    const pokelistFromFetch = context.store.state.pokebola.pokelist
    const pokemonFromFetch = pokelistFromFetch.find(poke => poke.name === context.params.pokemon)

    return {
      pokemon: pokemonFromFetch,
    }
  },
}
</script>

<style lang="postcss" scoped>
  header {
    @apply p-4
  }
</style>
