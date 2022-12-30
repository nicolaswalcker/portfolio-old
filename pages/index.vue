<script setup lang="ts">
useHead({
  title: 'Bem vindo(a) 👨‍💻',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Me chamo Nicolas e sou desenvolvedor frontend.',
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
      <NuxtLink to="/about" class="button">
        <span class="button-text">Sobre mim</span>
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
  }
}
</style>
