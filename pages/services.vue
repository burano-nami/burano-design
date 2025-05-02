<script setup lang="ts">

</script>

<template>
  <FadeInContainer>
    <SectionTitle
      title="services"
      style="padding-inline: var(--sp-larger);"
    />
    <SectionContainer 
      :class="$style.services_container"
      :backgroundColor="'var(--light-gray)'"
    >
      <div :class="$style.services_contents">
        準備中です
      </div>
    </SectionContainer>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.services_container {
  block-size: 100%;
  padding-inline: var(--sp-larger);
  padding-block-start: var(--sp-larger);
  padding-block-end: calc(var(--sp-larger) * 4);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

.services_contents {
  /* min-block-size: 500px; */
  inline-size    : 100%;
  max-inline-size: var( --contents-max-width);
  border-radius  : 10px;
  border         : 2px solid var(--black, #212121);
  background     : var(--white, #FFF);
  padding        : var(--sp-medium);
  margin-inline  : auto;
}
</style>