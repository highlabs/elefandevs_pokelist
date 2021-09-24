<template>
  <main class="container">
    <header>
      <nuxt-link to="/">
        <h2>⇦ Voltar</h2>
      </nuxt-link>
    </header>
    <Card :name="pokemon.name"/>
    <div v-if="pokemon">
      
    </div>

  </main>
</template>

<script>
export default {
  async asyncData(context) {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`
    ).then((res) => {
      return res.json()
    })
    return {
      pokemon,
    }
  },
}
</script>

<style lang="postcss" scoped>
  header {
    @apply p-4
  }
</style>