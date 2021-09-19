<template>
  <aside>
    <h1>Pokelist</h1>
    <div>
      <ul>
        <li
          v-for="type in types"
          :key="type.name"
        >
          <button @click="$emit('load-type', type.name)">
            {{type.name}}
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    types: {
      type: Array,
      default: () => []
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
