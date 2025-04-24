<script lang="ts" setup>

</script>

<template>
  <main>
    <HeaderMenu :class="$style.header"/>
    <HamburgerMenu :class="$style.hamburger_menu"/>
      <slot />
    <FooterMenu :class="$style.footer" />
  </main>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
main {
  min-block-size: 100vh;
  block-size    : 100%;
  position: relative;
}

.header {
  position: fixed;
  top: 0;
  left: 0;   /* 左端から固定 */
  right: 0;  /* 右端まで固定 */
  width: 100%;
  border-top: 30px solid var(--black);
  /* background-color: pink; */
}

.main_contents {
  flex           : 1;
  display        : flex;
  flex-direction : column;
  /* justify-content: center; */
}

.hamburger_menu {
  z-index: var(--z-index-nav);
  position        : fixed;
  inset: 0;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;   /* 左端から固定 */
  right: 0;  /* 右端まで固定 */
  width: 100%;
}
</style>