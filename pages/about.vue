<script setup lang="ts">

</script>

<template>
  <FadeInContainer>
    <SectionTitle
      title="aboutme"
      style="padding-inline: var(--sp-larger);"
    />
    <SectionContainer 
      :class="$style.about_container"
      backgroundImage="/bg/dot.background.png"
      backgroundRepeat="repeat"
      backgroundPosition="inherit"
      backgroundSize="inherit"
    >
      <div :class="$style.about_contents">
        <SelfIntroduction />
      </div>
    </SectionContainer>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.about_container {
  padding-inline     : var(--sp-larger);
  padding-block-start: var(--sp-larger);
  padding-block-end  : calc(var(--sp-larger) * 4);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

.about_contents {
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