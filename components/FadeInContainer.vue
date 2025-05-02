<template>
  <div :class="$style.fade_container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.fade_container {
  animation: fadeIn .5s backwards;
  opacity  : 1;
  padding-block-start    : calc(var(--sp-large) * 8);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>