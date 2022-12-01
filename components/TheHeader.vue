<script setup lang="ts">
import { Theme, ThemeIcon } from '~/interfaces/themeEnum';
const theme = ref<Theme>(Theme.LIGHT);

const themeIcon = computed(() => {
  return theme.value === Theme.LIGHT ? ThemeIcon.SUN : ThemeIcon.MOON;
});

const toggleTheme = () => {
  theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  const main = document.getElementById('main');

  if (main) {
    main.setAttribute(
      'data-theme',
      theme.value === Theme.LIGHT ? Theme.LIGHT : Theme.DARK
    );
  }
};
</script>
<template>
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__container">
        <li class="navigation__item">
          <NuxtLink class="navigation__item-content" to="/">Home</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink class="navigation__item-content" to="/about"
            >Sobre mim</NuxtLink
          >
        </li>
        <li class="navigation__item">
          <NuxtLink class="navigation__item-content" to="/projects"
            >Projetos</NuxtLink
          >
        </li>
        <li class="navigation__item">
          <NuxtLink class="navigation__item-content" to="/blog">Blog</NuxtLink>
        </li>
        <li class="navigation__item">
          <button @click="toggleTheme" class="navigation__item-icon">
            <span v-html="themeIcon" class="material-symbols-rounded"></span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 11;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: auto;
    height: 75px;
    padding: 1rem;

    @include breakpoint(medium-up) {
      gap: 1.5rem;
    }
  }

  &__item {
    list-style: none;

    &-icon {
      color: var(--color-secondary);
      fill: var(--color-secondary);
      transition: all ease 0.3s;

      &:hover {
        color: var(--color-tertiary);
        fill: var(--color-tertiary);
        transition: all ease 0.3s;
      }
    }

    &-icon:is(button) {
      background: none;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        font-size: 24px;
      }
    }

    &-content {
      text-decoration: none;
      color: var(--color-secondary);
      font-size: clamp(1rem, 4vw, 1.25rem);
      font-weight: 500;
      position: relative;
      transition: all 0.3s ease-in-out;

      &::before {
        position: absolute;
        content: '';
        width: 0;
        height: 0.125rem;
        background: var(--color-tertiary);
        bottom: -0.1rem;
        left: 0;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
      }

      &:hover,
      .router-link-active {
        color: var(--color-tertiary);
      }

      &:hover::before,
      &.router-link-active::before {
        width: 100%;
      }
    }
  }
}
</style>
