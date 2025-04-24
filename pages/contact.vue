<script setup lang="ts">

</script>

<template>
  <FadeInContainer :class="$style.contact_container">
    <SectionTitle
      title="contact"
    />
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.contact_container {
  padding-inline: var(--sp-larger);
  margin-top: calc(var(--sp-large) * 8);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

</style>