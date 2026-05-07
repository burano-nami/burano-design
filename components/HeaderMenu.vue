<script lang="ts" setup>
const navItems = [
  { name: 'My works', path: '/works' },
  { name: 'About me', path: '/about' },
  // { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <div  :class="$style.header_container">
    <NuxtLink to="/">
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
  background-color: var(--white);
  border-top      : 10px solid var(--black);
  padding         : var(--sp-small) var(--sp-larger);
}

.logo {
  font-family: var(--title-fonts);
  font-size  : 24px;
  font-weight: 600;
  line-height: 1.2;
  transition: opacity 0.4s ease, transform 0.4s ease;

  @include mediaScreen('tablet') {
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
  gap    : calc(var(--sp-medium) * 2);

  @include mediaScreen('tablet') {
    display: none;
  }

  li {
    color      : var(--black);
    display    : flex;
    gap        : var(--sp-large);
    transform: scale(1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.08);
    }
  }
}
</style>