<script lang="ts" setup>
import BlogIndex from '~/components/BlogIndex.vue'

</script>

<template>
  <SectionContainer>
    <ContentsContainer :class="$style.works_container">
      <SectionTitle
        title="myworks"
      />
      <blogIndex 
        :class="$style.works_contents"
        :max="6"
        :rotate="2"
      />
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

.works_contents {
  max-inline-size: var(--contents-max-width);
  inline-size     : 100%;
  margin-block    : var(--sp-larger);
}
</style>