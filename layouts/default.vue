<script lang="ts" setup>

</script>

<template>
  <div :class="$style.layout">
    <HeaderMenu :class="$style.header" />
    <HamburgerMenu :class="$style.hamburger_menu" />
    <main :class="$style.main">
      <slot />
    </main>
    <FooterMenu :class="$style.footer" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.layout {
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
  position: relative;
}

.main {
  flex: 1; // 空いてる高さを埋める
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;   /* 左端から固定 */
  right: 0;  /* 右端まで固定 */
  width: 100%;
  border-top: 30px solid var(--black);

}

.hamburger_menu {
  z-index: var(--z-index-nav);
  position        : fixed;
  inset: 0;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;  
  right: 0;
}
</style>