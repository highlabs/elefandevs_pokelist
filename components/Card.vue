<template>
  <nuxt-link :to="name">
    <div class="card">
      <div class="profile">
        <div v-if="pokemon" class="card-header">
          <h2>{{ name }}</h2>
          <h4># {{ pokemon.id }}</h4>
        </div>
        <div class="card-main" v-if="pokemon">
          <img :src="pokemon.sprites.front_default" alt="" />
          <div class="info">
            <h3>Size:</h3>
            <p>height: {{ pokemon.height / 10 }} m</p>
            <p>weight: {{ pokemon.weight / 10 }} kg</p>
          </div>
          <div class="info">
            <h3>Types:</h3>
            <ul>
              <li v-for="e in pokemon.types" :key="e.type.name">
                {{ e.type.name }}
              </li>
            </ul>
          </div>
          <div class="info">
            <h3>Abilities:</h3>
            <ul>
              <li v-for="e in pokemon.abilities" :key="e.ability.name">
                {{ e.ability.name }}
              </li>
            </ul>
          </div>
          <div class="info">
            <h3>Moves:</h3>
            <ul>
              <li v-for="e in pokemon.moves" :key="e.move.name">
                {{ e.move.name }}
              </li>
            </ul>
          </div>
        </div>

        <div v-else>
          <span>Loading...</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      default: 'Sem some',
    },
  },
  computed: {
    movelist() {
      const moves = this.pokemon.moves
      return moves.slice(0, 4)
    },
    pokemon() {
      const pokemon = this.$store.state.pokebola.pokelist
      return pokemon.find(poke => poke.name === this.name)
    }
  },
  mounted() {
    if(this.pokemon === undefined) {
      this.$store.dispatch('pokebola/getPokemon', this.name)
    }
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply bg-white text-black mb-4 py-4 px-8 rounded-lg;
}

.card-header {
  @apply flex flex-row justify-start items-baseline;
}

.card-main {
  @apply flex flex-row justify-between;
}

.info > ul {
  @apply max-h-24 overflow-y-auto
}

img {
  @apply w-28 h-28
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply uppercase font-medium;
}

h4 {
  @apply pl-2;
}
</style>
