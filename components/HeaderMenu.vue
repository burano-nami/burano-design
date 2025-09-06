<script lang="ts" setup>
const navItems = [
  { name: 'My works', path: '/works' },
  { name: 'About me', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <div
    :class="$style.header_container"
  >
    <NuxtLink
      to="/"
      :class="$style.logo"
      >
      <div :class="$style.logo">
        BURANO<br>DESIGN
      </div>
    </NuxtLink>
    <div :class="$style.menu_wrapper">
      <ul :class="$style.list">
        <li
          v-for="item in navItems"
          :key="item.name"
        >
          <NuxtLink
            :to="item.path"
            :class="$style.menu"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.header_container {
  inline-size     : 100%;
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  padding         : var(--sp-small) var(--sp-large);
  z-index         : var(--z-index-header);
  background-color: rgba(255, 255, 255, 0.5);
}

.logo {
  font-family: var(--title-fonts);
  font-size  : 24px;
  font-weight: 600;
  line-height: 1.2;

  @include mediaScreen('tablet') {
    opacity: 0;
    pointer-events: none;
  }
}

.menu_wrapper {
  display    : flex;
  gap        : var(--sp-large);
  align-items: center;
}

.list {
  display: flex;
  gap    : calc(var(--sp-medium) * 1.5);

  @include mediaScreen('tablet') {
    display: none;
  }

  li {
    color      : var(--black);
    display    : flex;
    gap        : var(--sp-large);

    &:hover {
      color: var(--yellow);
    }
  }
}

.menu {
  position   : relative;
  inline-size: 100%;

  &:hover::before {
    content                  : '';
    inline-size              : 100%;
    height                   : 1px;
    background-color         : var(--black);
    position                 : absolute;
    bottom                   : -5px;
    animation-name           : hoverAnime;
    animation-duration       : 0.2s;
    animation-timing-function: ease;
    animation-fill-mode      : forwards;
  }
}

@keyframes hoverAnime {
  0% {
    inline-size: 0;
  }
  100% {
    inline-size: 100%;
  }
}
</style>