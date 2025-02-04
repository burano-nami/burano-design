<script lang="ts" setup>

</script>

<template>
  <div :class="$style.hamburger_menu">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hamburger_menu {
  background-color: pink;
  margin-inline: 30px;
  margin-block: 30px;
  border-radius: 10px;
}

</style>