<template>
  <section>
    Section
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
