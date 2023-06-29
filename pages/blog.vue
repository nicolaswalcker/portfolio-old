<template>
  <section class="section">
    <InBuild />
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - Em breve 🚧',
  meta: [
    {
      name: 'description',
      content: 'Blog',
    },
  ],
});
</script>

<style scoped lang="scss">
pre {
  max-width: 45%;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
