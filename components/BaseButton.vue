<script setup lang="ts">
const props = withDefaults(defineProps<{
  bgColor: string
  title?: string
}>(), {
  title: 'もっとみる' 
})
</script>

<template>
  <button :class="$style.button">
    <div :class="$style.background" :style="{ backgroundColor: bgColor }" />
    <span>{{ title }}</span>
  </button>
</template>

<style lang="scss" module>
.button {
  inline-size     : 280px;
  block-size      : 50px;
  border          : 2px solid var(--black);
  display         : flex;
  justify-content : center;
  align-items     : center;
  background-color: var(--white);
  position        : relative;

  > span {
    font-weight   : 500;
    letter-spacing: var(--letter-spacing-wide);
    font-size     : var(--fs-small);
    position      : absolute;
    pointer-events: none;
  }

  &::before {
    position           : absolute;
    top                : 0;
    left               : 0;
    content            : "";
    display            : block;
    width              : 100%;
    height             : 100%;
    background         : var(--black);
    transform          : scaleX(0);
    transform-origin   : left;
    transition         : all 0.5s ease;
    transition-property: transform;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}

.background {
  /* background-color  : var(--green);        */
  mask-image        : url('/assets/images/button_background.svg');
  -webkit-mask-image: url('/assets/images/button_background.svg');  /* Safari対応 */
  inline-size       : 280px;
  block-size        : 50px;
  position          : absolute;
  top               : 0;
  left              : 0;

  &::before {
    position           : absolute;
    top                : 0;
    left               : 0;
    content            : "";
    display            : block;
    width              : 100%;
    height             : 100%;
    background         : var(--black);
    transform          : scaleX(0);
    transform-origin   : left;
    transition         : all 0.5s ease;
    transition-property: transform;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}
</style>

