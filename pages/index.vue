<template>
  <main class="container">
    <div class="rows">
      <Sidebar :types="types" @load-type="loadPokemonType"/>
      <Section :list="pokeList"/>
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
      pokeList: [],
      types: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loadTypes()
    })
  },
  methods: {
    loadPokemonType(type) {
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.json())
      .then((res)=>{
        this.pokeList = res.pokemon;
      })
    },
    loadTypes() {
      fetch('https://pokeapi.co/api/v2/type')
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.types = res.results
        })
        .catch(error => console.error(error))
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
