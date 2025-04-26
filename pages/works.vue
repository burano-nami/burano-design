<script setup lang="ts">

</script>

<template>
  <FadeInContainer>
    <SectionTitle
      title="myworks"
      style="padding-inline: var(--sp-larger);"
    />
    <SectionContainer :class="$style.works_container">
      <div :class="$style.works_contents">
        コンテンツ部分です。
      </div>
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
  inline-size    : 100%;
  max-inline-size: var( --contents-max-width);
  border-radius  : 10px;
  border         : 2px solid var(--black, #212121);
  background     : var(--white, #FFF);
  padding        : var(--sp-medium);
  margin-inline  : auto;

  @include mediaScreen('tablet') {
    /* inline-size    : 100%; */
  }
}
</style>