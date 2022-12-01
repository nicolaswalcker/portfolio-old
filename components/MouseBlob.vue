<template>
  <article ref="element" class="blob blob-1"></article>
</template>

<script setup lang="ts">
const { x, y } = useMouse();
const element = ref(null);
onMounted(() => {
  const el: any = element.value;
  watch([x, y], ([x, y]) => {
    el.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
  });
});
</script>

<style lang="scss" scoped>
.blob {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  width: 18.75rem;
  height: 18.75rem;
  background: var(--color-gradient);
  display: flex;
  justify-content: center;
  filter: blur(64px);
  opacity: 0.3;
}
</style>
