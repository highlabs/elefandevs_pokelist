<template>
  <aside>
    <h1>Pokelist</h1>
    <div>
      <ul>
        <li
          v-for="ability in abilities"
          :key="ability.name"
        >
          <button>
            {{ability.name}}
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      abilities: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadTypes()
    })
  },
  methods: {
    loadTypes() {
      fetch('https://pokeapi.co/api/v2/ability')
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.abilities = res.results
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="postcss" scoped>
aside {
  @apply hidden md:w-1/4 md:block
}
h1 {
  @apply text-4xl font-bold mb-8;
}
button {
  @apply rounded-lg px-4 py-2 bg-white text-black mb-4 text-center w-full
}
</style>
