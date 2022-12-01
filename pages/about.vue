<template>
  <section class="section">
    <div class="section__content">
      <article class="head">
        <h1 class="head__title">Nicolas Walcker</h1>
        <p class="head__subtitle">Desenvolvedor Front-end</p>
      </article>
      <article class="content">
        <img
          class="content__image"
          src="../assets/img/imagem-perfil.jpeg"
          alt="Imagem de perfil"
        />

        <article class="content__bio">
          <div class="content__bio__item">
            <h2 class="content__bio__item-title">Bio</h2>
            <p class="content__bio__item-text">
              Tenho 23 anos, atualmente cursando Ciência da Computação pela
              Universidade Federal do Espírito Santo. Sou Desenvolvedor
              Front-end e também gosto muito de estudar sobre a área de UX/UI
              Design. Atualmente atuo na
              <a
                class="content__bio__external"
                href="https://upcities.app/"
                ref="noopener noreferrer"
                target="_blank"
                >UpCities</a
              >
              onde desenvolvo soluções voltadas para a sociedade em geral. Meus
              hobbies são jogar futebol, jogar League of Legends (infelizmente)
              e aprender coisas novas.
            </p>
          </div>

          <div class="content__bio__item">
            <h2 class="content__bio__item-title">Tecnologias</h2>
            <p class="content__bio__item-icons">
              <VuedotjsIcon class="content__bio__item-icon" />
              <NuxtdotjsIcon class="content__bio__item-icon" />
              <TypescriptIcon class="content__bio__item-icon" />
              <SassIcon class="content__bio__item-icon" />
              <JestIcon class="content__bio__item-icon" />
              <CypressIcon class="content__bio__item-icon" />
            </p>
          </div>
          <div class="content__bio__item">
            <h2 class="content__bio__item-title">Contato</h2>
            <p class="content__bio__item-icons">
              <a
                class="content__bio__item-link"
                ref="noopener noreferrer"
                href="https://www.linkedin.com/in/nicolas-walcker/"
                ><LinkedinIcon class="content__bio__item-icon"
              /></a>
              <a
                class="content__bio__item-link"
                target="_blank"
                href="https://twitter.com/home"
                ><TwitterIcon class="content__bio__item-icon"
              /></a>
              <a
                class="content__bio__item-link"
                href="mailto:walcker_@outlook.com"
                ><MicrosoftoutlookIcon class="content__bio__item-icon"
              /></a>
            </p>
          </div>
        </article>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  VuedotjsIcon,
  NuxtdotjsIcon,
  TypescriptIcon,
  SassIcon,
  JestIcon,
  CypressIcon,
  LinkedinIcon,
  TwitterIcon,
  MicrosoftoutlookIcon,
} from 'vue3-simple-icons';

useHead({
  title: 'Sobre mim 🔍',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Tenho 23 anos, atualmente cursando Ciência da Computação pela Universidade Federal do Espírito Santo.',
    },
  ],
});
</script>

<style scoped lang="scss">
.head {
  display: flex;
  flex-direction: column;
  align-items: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5rem;

  &__title {
    font-weight: 600;
    font-size: 36px;
    background: var(--color-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  &__subtitle {
    font-weight: 300;
    font-size: 20px;
    color: var(--color-secondary);
  }
}

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.875rem;
  height: 100%;
  @include breakpoint(medium-up) {
    flex-wrap: nowrap;
    height: 18.75rem;
  }

  .content__image {
    width: 100%;
    height: auto;
    border-radius: 0.9375rem;

    @include breakpoint(medium-up) {
      width: 18.75rem;
      height: 18.75rem;
    }
  }

  &__bio {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;

    @include breakpoint(medium-up) {
      height: 100%;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0.5rem;

      &-title {
        font-weight: 700;
        font-size: 1.25rem;
        background: var(--color-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      &-text {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--color-secondary);
        line-height: 1.125rem;
      }
      &-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        width: 100%;
        flex-wrap: wrap;
      }
      &-icon {
        fill: var(--color-secondary);

        &:hover {
          fill: var(--color-tertiary);
        }
      }
      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__external {
      color: var(--color-tertiary);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
