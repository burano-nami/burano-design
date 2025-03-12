<template>
  <div :class="$style.section_container">
    <slot />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_container {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  padding-inline : var(--sp-larger);

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-large);
  }
}
</style>