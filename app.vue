<template>
  <div id="main" class="main" data-theme="light">
    <NuxtLayout>
      <MouseBlob />
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.main {
  min-height: 100vh;
  position: relative;
  background: var(--color-primary);
  overflow: hidden;
}
</style>
