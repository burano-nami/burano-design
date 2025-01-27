<template>
  <div :class="$style.section_container">
    <slot />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_container {
  padding-inline: var(--sp-larger);
  /* padding-block: calc(var(--sp-larger) * 2); */

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-large);
  }
}
</style>