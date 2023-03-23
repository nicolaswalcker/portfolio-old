<template>
  <section class="section">
    <pre>{{ postHighlight }}</pre>
    <pre v-for="{ id, attributes: { title, content, cover } }, index in posts" :key="id">
        <div>
          {{ id }}
        {{ title }}
        {{ content }}
        </div>
      </pre
    >
    <h1>Blog</h1>
    <!-- <section class="posts">
      <article class="post">
        <div class="post__img"> <img class="post__img__content" src="https://cdn.pixabay.com/photo/2022/11/03/15/06/cat-7567706_960_720.jpg"/></div>
        <section class="post__content">
          <h2 class="post__content__user">Nicolas Walcker</h2>
          <h1 class="post__content__title">
            <span class="post__content__title__text"
              >A viagem de Chihiro A viagem de Chihiro</span
            >
          </h1>
          <p class="post__content__meta">
            <span class="post__content__meta__date"
              >23 de dezembro de 2023</span
            >
            <span class="post__content__meta__time">4 min read</span>
          </p>
        </section>
      </article>
      <article class="post">
        <div class="post__img"> <img class="post__img__content" src="https://cdn.pixabay.com/photo/2022/11/03/15/06/cat-7567706_960_720.jpg"/></div>
        <section class="post__content">
          <h2 class="post__content__user">Nicolas Walcker</h2>
          <h1 class="post__content__title">
            <span class="post__content__title__text"
              >A viagem de Chihiro A viagem de Chihiro</span
            >
          </h1>
          <p class="post__content__meta">
            <span class="post__content__meta__date"
              >23 de dezembro de 2023</span
            >
            <span class="post__content__meta__time">4 min read</span>
          </p>
        </section>
      </article>
      <article class="post">
        <div class="post__img"> <img class="post__img__content" src="https://cdn.pixabay.com/photo/2022/11/03/15/06/cat-7567706_960_720.jpg"/></div>
        <section class="post__content">
          <h2 class="post__content__user">Nicolas Walcker</h2>
          <h1 class="post__content__title">
            <span class="post__content__title__text"
              >A viagem de Chihiro A viagem de Chihiro</span
            >
          </h1>
          <p class="post__content__meta">
            <span class="post__content__meta__date"
              >23 de dezembro de 2023</span
            >
            <span class="post__content__meta__time">4 min read</span>
          </p>
        </section>
      </article>
      <article class="post">
        <div class="post__img"> <img class="post__img__content" src="https://cdn.pixabay.com/photo/2022/11/03/15/06/cat-7567706_960_720.jpg"/></div>
        <section class="post__content">
          <h2 class="post__content__user">Nicolas Walcker</h2>
          <h1 class="post__content__title">
            <span class="post__content__title__text"
              >A viagem de Chihiro A viagem de Chihiro</span
            >
          </h1>
          <p class="post__content__meta">
            <span class="post__content__meta__date"
              >23 de dezembro de 2023</span
            >
            <span class="post__content__meta__time">4 min read</span>
          </p>
        </section>
      </article>
      <article class="post">
        <div class="post__img"> <img class="post__img__content" src="https://cdn.pixabay.com/photo/2022/11/03/15/06/cat-7567706_960_720.jpg"/></div>
        <section class="post__content">
          <h2 class="post__content__user">Nicolas Walcker</h2>
          <h1 class="post__content__title">
            <span class="post__content__title__text"
              >A viagem de Chihiro A viagem de Chihiro</span
            >
          </h1>
          <p class="post__content__meta">
            <span class="post__content__meta__date"
              >23 de dezembro de 2023</span
            >
            <span class="post__content__meta__time">4 min read</span>
          </p>
        </section>
      </article>
      <article class="post">
        <div class="post__img"> <img class="post__img__content" src="https://cdn.pixabay.com/photo/2022/11/03/15/06/cat-7567706_960_720.jpg"/></div>
        <section class="post__content">
          <h2 class="post__content__user">Nicolas Walcker</h2>
          <h1 class="post__content__title">
            <span class="post__content__title__text"
              >A viagem de Chihiro A viagem de Chihiro</span
            >
          </h1>
          <p class="post__content__meta">
            <span class="post__content__meta__date"
              >23 de dezembro de 2023</span
            >
            <span class="post__content__meta__time">4 min read</span>
          </p>
        </section>
      </article>
    </section> -->
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
onMounted(() => {
  fetchData();
});
const posts = ref<any>([]);
const postHighlight = ref<{}>({})
const fetchData = async () => {
  try {
    const response: any = await useFetch(
      'http://localhost:1337/api/posts?sort=date:desc&populate=*'
    );
    const array = response.data;
    posts.value = array.value.data;
    postHighlight.value = posts.value.shift();
  } catch (e) {
    console.log(e);
  }
};
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
