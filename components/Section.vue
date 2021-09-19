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
</style>
