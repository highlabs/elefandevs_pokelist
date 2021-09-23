<template>
  <div class="pokePage">
    <h1>{{ name }}</h1>
    <div :v-if="imgSrc">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
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
      name: pokemon.name,
      imgSrc: pokemon.sprites.front_default,
    }
  },
}
</script>

<style lang="postcss" scoped>
</style>