<script setup lang="ts">
  import BlogIndex from '~/components/BlogIndex.vue'

</script>

<template>
  <FadeInContainer>
    <SectionTitle
      title="myworks"
      style="padding-inline: var(--sp-larger);"
    />
    <SectionContainer :class="$style.works_container">
      <blogIndex :class="$style.works_contents"/>
    </SectionContainer>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.works_container {
  padding-inline     : var(--sp-larger);
  padding-block-start: var(--sp-larger);
  padding-block-end  : calc(var(--sp-larger) * 4);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

.works_contents {
  inline-size: 100%;
  padding        : var(--sp-medium);
  margin-inline  : auto;

  @include mediaScreen('tablet') {
    /* inline-size    : 100%; */
  }
}
</style>