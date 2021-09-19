<template>
  <main class="container">
    <Sidebar />
    <Section />
  </main>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Section from '~/components/Section'

export default {
  components: {
    Sidebar,
    Section,
  }
}
</script>

<style lang="postcss">
.container {
  @apply mx-auto;
}
</style>
