<template>
  <section>
    <ul>
      <li v-for="pokebola in list" :key="pokebola.pokemon.name">
        <Card :name="pokebola.pokemon.name" />
      </li>
    </ul>
    <button v-show="!loadedAll" @click="$emit('carregar-mais')">
      Carregar mais
    </button>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'Section',
  components: {
    Card,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    loadedAll: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
section {
  @apply w-full px-4 mb-32;
}
button {
  @apply w-full py-4 bg-gray-500 rounded-lg;
}
</style>
