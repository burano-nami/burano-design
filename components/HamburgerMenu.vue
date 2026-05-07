<script lang="ts" setup>
const navItems = [
  { name: 'My works', path: '/works' },
  { name: 'About me', path: '/about' },
  // { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

const isActive = ref(false)

</script>

<template>
  <div>
    <div :class="[$style.menu_list, isActive ? $style.active : '']">
      <div :class="$style.image">
        <img src="/assets/images/top_image.png" alt="">
      </div>
      <ul :class="$style.contents_inner">
        <li
          v-for="item in navItems.filter(item => item.name !== 'HOME')"
          :key="item.name"
          @click="isActive = false"
        >
          <NuxtLink :to="item.path">
            {{ item.name }}<span>.</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div :class="$style.hamburger_container">
      <NuxtLink  to="/">
        <div :class="$style.logo">
          BURANO<br>DESIGN
        </div>
      </NuxtLink>
      <div
        :class="$style.btn_open"
        @click="isActive = !isActive"
      >
        <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
        <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hamburger_container {
  inline-size     : 100%;
  padding         : var(--sp-small) var(--sp-large);
  background-color: var(--white);
  border-top      : 10px solid var(--black);
  position        : relative;                         // ← 基準にする
}

.logo {
  font-family: var(--title-fonts);
  font-size  : 16px;
  font-weight: 600;
  line-height: 1.2;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* シャッターになるメニュー */
.menu_list {
  display        : flex;
  inline-size    : 100%;
  block-size     : 100svh;
  color          : var(--black);
  justify-content: center;
  align-items    : center;
  justify-content: space-evenly;
  position       : absolute; // ← fixedではなくabsoluteに
  top            : 100%; // ← hamburger_containerのすぐ下からスタート
  left           : 0;
  transform      : translateY(-100%); // ← 上に隠れている
  transition     : transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  pointer-events : none;
  flex-direction : column;
  background-color   : var(--white);

  &.active {
    transform: translateY(0);
    pointer-events: all;
  }
}

.contents_inner {
  inline-size        : 100%;
  display            : flex;
  flex-direction     : column;
  align-items        : flex-start;
  padding-inline: var(--sp-larger);

  .logo {
    font-family: "ADAM.CG PRO";
    font-size  : 24px;
    color      : var(--white);
  }


  li {
  list-style : none;
  font-size  : var(--fs-semi-max);
  font-weight: bold;
  cursor     : pointer;
  display    : flex;
  align-items: baseline;
  margin-bottom: var(--sp-medium);

    span {
      color: var(--pink);
    }

    // &:nth-child(1) span {
    //   color: var(--orange);
    // }
    &:nth-child(2) span {
      color: var(--orange);
    }
    &:nth-child(3) span {
      color: var(--yellow);
    }
  }
}

.btn_open {
  position: absolute;
  top: 50%;
  right: var(--sp-large);
  transform: translateY(-50%);
  inline-size: 30px;
  block-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @include mediaScreen('mobile') {
    display: flex;
  }

  .btn_bar {
    inline-size     : 100%;
    block-size      : 1.5px;
    background-color: var(--black);
    border-radius   : 2px;

    &.active {
      transition: all 0.4s ease-in-out;

      &:nth-of-type(1) {
        transform: translateY(4px) rotate(45deg);
      }
      &:nth-of-type(2) {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }
}

.image_container {
  inline-size       : max(100%, 450px);
  block-size        : 100%;
  margin-block-start: var(--sp-larger);
  display           : flex;
  justify-content   : flex-end;
  position          : relative;

  @include mediaScreen('mobile') {
    inline-size: 100vw;
    margin: 0 calc(50% - 50vw);
    justify-content   : center;
    margin-block-start: calc(var(--sp-larger) * 2.5);
  }
}

.image {
  inline-size    : 100%;
  max-inline-size: 970px;
  transform      : rotate(-2deg);
  z-index        : -1;
  mix-blend-mode: luminosity;

  
  > img {
    inline-size: 100%;
    border     : 2px solid var(--black);
  }
}
</style>