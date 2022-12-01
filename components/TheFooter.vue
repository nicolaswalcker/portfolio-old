<template>
  <footer class="footer">
    <p class="footer__name">© Nicolas Walcker 2022</p>
    <a
      href="https://github.com/nicolaswalcker"
      target="_blank"
      ref="noopener noreferrer"
      ><GithubIcon class="footer__icon"
    /></a>
  </footer>
</template>

<script setup lang="ts">
import { GithubIcon } from 'vue3-simple-icons';
</script>

<style lang="scss" scoped>
.footer {
  height: 3.125rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1;
  position: relative;

  &__name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-secondary);
  }

  &__icon {
    fill: var(--color-secondary);
  }
}
</style>
