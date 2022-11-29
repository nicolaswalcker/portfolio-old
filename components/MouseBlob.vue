<!--
 Copyright 2022 nicolaswalcker
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

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
