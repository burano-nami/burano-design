<script lang="ts" setup>
const navItems = [
  { name: 'My works', path: '/works' },
  { name: 'About me', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

const isActive = ref(false)
</script>

<template>
  <div :class="[$style.menu_list, isActive ? $style.active : '']">
    <div :class="$style.contents_inner">
      <NuxtLink
        to="/"
        :class="$style.logo"
        @click="isActive = false"
      >
      BURANODESIGN
      </NuxtLink>
      <span></span>
      <ul>
        <li
          v-for="item in navItems.filter(item => item.name !== 'HOME')"
          :key="item.name"
          @click="isActive = false"
        >
          <NuxtLink :to="item.path">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
    <div
      :class="$style.btn_open"
      @click="isActive = !isActive"
    >
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
    </div>
    <!-- <div
      :class="$style.btn_close"
      @click="isActive = !isActive"
    >
      <span :class="[$style.btn_bar, isActive ? '' : $style.active]"></span>
      <span :class="[$style.btn_bar, isActive ? '' : $style.active]"></span>
    </div> -->
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.menu_list {
  display        : flex;
  inline-size    : 100%;
  block-size     : 100svh;
  color          : var(--black);
  justify-content: center;
  align-items    : center;
  opacity        : 0;
  transition     : opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  position       : fixed;
  top            : 0;
  z-index        : var(--z-index-overlay);
  pointer-events : none;
  padding-block  : calc(var(--sp-large) * 2);

  &.active {
    opacity       : 1;
    pointer-events: all;
  }
}

.contents_inner {
  inline-size        : 100%;
  block-size         : 100%;
  margin-inline      : var(--sp-large);
  background-color   : var(--dark-gray);
  border-radius      : 10px;
  display            : flex;
  flex-direction     : column;
  align-items        : center;
  padding-block-start: calc(var(--sp-larger) * 2.5);

  .logo {
    font-family: "ADAM.CG PRO";
    font-size  : 24px;
    color      : var(--white);
  }

  span {
    width             : 260px;
    height            : 10px;
    background-color  : var(--black);
    margin-block-start: var(--sp-min);
    margin-block-end  : var(--sp-large);
  }

  li {
  list-style : none;
  font-size  : 36px;
  color      : var(--white);
  font-weight: bold;
  cursor     : pointer;
  display    : flex;
  align-items: baseline;
  margin-bottom: var(--sp-medium);

    &::before {
      content          : "";
      display          : inline-block;
      inline-size      : 5px;
      block-size       : 28px;
      background-color : var(--pink);
      margin-inline-end: 10px;
    }

    &:nth-child(1)::before {
      background-color: var(--orange);
    }

    &:nth-child(2)::before {
      background-color: var(--green);
    }

    &:nth-child(3)::before {
      background-color: var(--yellow);
    }
  }
}

.btn_open {
  position       : fixed;
  top            : calc(var(--sp-medium)* 4);
  right           : var(--sp-medium);
  inline-size    : 40px;
  block-size     : 10px;
  display        : none;
  flex-direction : column;
  justify-content: space-between;
  cursor         : pointer;
  z-index        : var(--z-index-overlay);
  display        : none;

  @include mediaScreen('mobile') {
    display: flex;
    z-index: var(--z-index-max);
  }

  .btn_bar {
    inline-size     : 100%;
    block-size      : 1.5px;
    background-color: var(--black);
    border-radius   : 2px;

    &.active {
      transition: all 0.4s ease-in-out;
      /* opacity: 0; */

      &:nth-of-type(1) {
        transform: translateY(4px) rotate(45deg);
      }
      &:nth-of-type(2) {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }
}

/* .btn_close {
  position       : fixed;
  top            : calc(var(--sp-medium)* 4);
  right           : var(--sp-medium);
  inline-size    : 40px;
  block-size     : 10px;
  display        : none;
  flex-direction : column;
  justify-content: space-between;
  cursor         : pointer;
  z-index        : var(--z-index-overlay);
  display        : none;

  .btn_bar {
    inline-size     : 100%;
    block-size      : 1.5px;
    background-color: var(--pink);
    border-radius   : 2px;

    &:nth-of-type(1) {
      transform: translateY(4px) rotate(45deg);
    }
    &:nth-of-type(2) {
      transform: translateY(-4px) rotate(-45deg);
    }

    &.active {
      transition: all 0.4s ease-in-out;

    }
  }
} */
</style>