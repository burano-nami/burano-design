<script setup lang="ts">

</script>

<template>
  <FadeInContainer :class="$style.about_container">
    <SectionTitle
      title="aboutme"
    />
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.about_container {
  padding-inline: var(--sp-larger);
  margin-top: calc(var(--sp-large) * 8);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

</style>