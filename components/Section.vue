<template>
  <section>
    <ul>
      <li
        v-for="pokebola in list"
        :key="pokebola.pokemon.name"
      >
        <Card
          :name="pokebola.pokemon.name"
        />
      </li>
    </ul>
    <button @click="$emit('carregar-mais')">Carregar mais</button>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'Section',
  components: {
    Card
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="postcss" scoped>
section {
  @apply w-full px-4;
}
button {
  @apply w-full py-4 bg-gray-500 mb-32 rounded-lg;
}
</style>
