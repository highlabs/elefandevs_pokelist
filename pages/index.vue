<template>
  <main class="container">
    <div class="rows">
      <Sidebar @load-type="loadPokemonType"/>
      <Section />
    </div>
  </main>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Section from '~/components/Section'

export default {
  components: {
    Sidebar,
    Section,
  },
  data() {
    return {
      pokeList: []
    };
  },
  methods: {
    loadPokemonType(type) {
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.json())
      .then((res)=>{
        this.pokeList = res.pokemon;
      })
    }
  }
}
</script>

<style lang="postcss">
body {
  @apply bg-gray-900 text-white pt-4;
}
.container {
  @apply mx-auto;
}
.rows {
  @apply flex flex-row justify-between w-full
}
</style>
