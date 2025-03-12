<script lang="ts" setup>

</script>

<template>
  <SectionContainer :class="$style.works_container">
    <SectionTitle
      title="myworks"
    />
    <div :class="$style.articles" />
    <BaseButton 
      bgColor="var(--pink)"
    />
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.works_container {
  display       : flex;
  flex-direction: column;
  align-items   : center;
  margin-block  : calc(var(--sp-larger) * 2.5);
}

.articles {
  max-inline-size : var(--desktop-max-width);
  inline-size     : 100%;
  block-size      : 900px;
  background-color: var(--light-gray);
  margin-block    : var(--sp-larger);
}
</style>