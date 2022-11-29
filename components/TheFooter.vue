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
