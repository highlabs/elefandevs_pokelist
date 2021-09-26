<template>
  <main class="container">
    <div class="rows">
      <Sidebar
        :types="types"
        :selected-type="selectedType"
        @load-type="loadPokemonType"
      />
      <Section
        :list="pokeList"
        :loaded-all="loadedAll"
        @carregar-mais="carregarMais"
      />
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
      pokeListFull: [],
      pokeList: [],
      types: [],
      numOfPages: 0,
      loadedAll: false,
      selectedType: '',
    }
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
        .then((res) => {
          this.pokeListFull = res.pokemon
          this.numOfPages = 0
          this.loadedAll = false
          this.selectedType = type
          this.carregarMais()
        })
    },
    loadTypes() {
      fetch('https://pokeapi.co/api/v2/type')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          this.types = res.results
          // carrega o primeiro tipo da lista
          this.loadPokemonType(this.types[0].name)
        })
        .catch((error) => console.error(error))
    },
    // Paginação (estilo "load more")
    carregarMais() {
      this.numOfPages++
      if (this.numOfPages * 5 > this.pokeListFull.length) {
        this.pokeList = this.pokeListFull.slice(0, this.pokeListFull.length)
        this.loadedAll = true
      } else if (this.numOfPages > 0) {
        this.pokeList = this.pokeListFull.slice(0, this.numOfPages * 5)
      } else {
        this.pokeList = this.pokeListFull.slice(0, 5)
      }
    },
  },
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
  @apply flex flex-row justify-between w-full;
}
</style>
