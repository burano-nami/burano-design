<script setup lang="ts">

</script>

<template>
  <FadeInContainer>
    <SectionTitle
      title="contact"
      style="padding-inline: var(--sp-larger);"
    />
    <SectionContainer 
      :class="$style.contact_container"
      backgroundImage="/bg/contact_image.png"
    >
      <div :class="$style.contact_contents">
        コンテンツ部分です。
      </div>
    </SectionContainer>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.contact_container {
  padding-inline     : var(--sp-larger);
  padding-block-start: var(--sp-larger);
  padding-block-end  : calc(var(--sp-larger) * 4);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

.contact_contents {
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