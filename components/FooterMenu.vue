<script setup lang="ts">

</script>

<template>
  <div :class="$style.footer_container">
    © Burano Design
  </div>
</template>

<style lang="scss" module>

.footer_container {
  inline-size     : 100%;
  block-size      : 150px;
  /* background-color: aqua; */
  display         : flex;
  justify-content : center;
  align-items     : center;
  margin-bottom: var(--sp-large);
}

</style>