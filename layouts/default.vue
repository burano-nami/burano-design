<script lang="ts" setup>
const isFixed = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
  const route = useRoute()


let observer: IntersectionObserver | null = null

const setupObserver = () => {
  if (observer) {
    observer.disconnect()
    observer = null
  }

  if (route.path !== '/') {
    isFixed.value = true
    return
  }

  isFixed.value = false

  if (!triggerRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      isFixed.value = !entry.isIntersecting
    },
    { threshold: [0] }
  )

  observer.observe(triggerRef.value)
}

onMounted(() => setupObserver())
watch(() => route.path, () => setupObserver())
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div :class="$style.layout">
    <div ref="triggerRef" style="height: 1px;"></div>
    <div  :class="[$style.header_wrapper, isFixed ? $style.fixed : '']">
      <HamburgerMenu :class="$style.hamburger_menu"/>
      <HeaderMenu :class="$style.header_menu"
      />
    </div>
    <main :class="$style.main">
      <slot />
    </main>
    <FooterMenu :class="$style.footer" />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.layout {
  display       : flex;
  flex-direction: column;
  min-height    : 100vh;
  position      : relative;
  touch-action  : none;
  border-top    : 30px solid var(--black);
}

.main {
  flex          : 1;       // 残りの高さを埋める
  display       : flex;
  flex-direction: column;
}

.footer {
  position: absolute;
  bottom  : 0;
  left    : 0;
  right   : 0;
}

.header_wrapper {
  margin-top: calc(var(--sp-larger) * -1);
  transition: opacity 0.4s ease, background-color 0.4s ease;
  z-index   : var(--z-index-nav);
  opacity   : 0;
}

.fixed {
  position: fixed;
  top     : var(--sp-larger);
  left    : 0;
  right   : 0;
  opacity : 1;
}


.hamburger_menu {
  display: none;

  @include mediaScreen('tablet') {
    display: block;
  }
}

.header_menu {
  display: flex;
  
  @include mediaScreen('tablet') {
    display: none;
  }
}
</style>