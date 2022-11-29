<script setup lang="ts">
useHead({
  title: 'Bem vindo(a) 👨‍💻',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Home page',
    },
  ],
});
</script>
<template>
  <section class="section">
    <article class="section__content">
      <div class="section__content__presentation">
        <p class="section__content__presentation-subtitle">Olá, me chamo</p>
        <h1 class="section__content__presentation-title">Nicolas Walcker</h1>
        <p class="section__content__presentation-subtitle">
          Desenvolvedor Front-end
        </p>
      </div>
      <NuxtLink to="/about" class="section__content__button">
        <span class="section__content__button-text">Sobre mim</span>
      </NuxtLink>
    </article>
  </section>
</template>
<style lang="scss" scoped>
.section {
  &__content {
    &__presentation {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.5rem;

      &-subtitle {
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        color: var(--color-secondary);
        font-weight: 300;
      }

      &-title {
        font-size: clamp(2rem, 5vw, 4rem);
        background: var(--color-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      width: clamp(150px, 25vw, 200px);
      border-radius: 0.5rem;
      background: var(--color-gradient);
      transition: all 0.3s ease-in-out;
      text-decoration: none;

      &:hover {
        transform: scale(1.05);
      }

      &-text {
        color: var(--color-primary);
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        font-weight: 700;
      }
    }
  }
}
</style>
