<script lang="ts" setup>
import BlogIndex from '~/components/BlogIndex.vue'

</script>

<template>
  <SectionContainer>
    <ContentsContainer :class="$style.works_container">
      <SectionTitle
        title="myworks"
      />
      <blogIndex :class="$style.works_contents"/>
      <BaseButton 
        bgColor="var(--pink)"
        to="/works"
      />
    </ContentsContainer>
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