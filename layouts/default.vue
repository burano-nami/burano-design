<script lang="ts" setup>

</script>

<template>
  <main>
    <!-- <HeaderMenu :class="$style.header"/> -->
    <!-- <HamburgerMenu :class="$style.hamburger_menu"/> -->
    <SectionContainer :class="$style.main_contents">
      <slot />
    </SectionContainer>
    <div :class="$style.footer" />
  </main>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
main {
  min-block-size: 100vh;
  display       : flex;    /* コンテナ全体をフレックスに */
  flex-direction: column;
}

.header {
  position   : fixed;
  top        : 0;
  inline-size: 100%;
  z-index    : var(--z-index-header);
}

.main_contents {
  flex           : 1;
  display        : flex;
  flex-direction : column;
  /* justify-content: center; */
}

.footer {
  inline-size: 100%;
  block-size : 200px;
  background : var(--logo-green);

  @include mediaScreen('mobile') {
    block-size: 100px;
  }
}
</style>