<template>
  <div :class="$style.contents_container">
    <slot />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.contents_container {
  max-inline-size: var(--desktop-max-width);
  inline-size    : 100%;
  margin-inline  : auto;
}
</style>