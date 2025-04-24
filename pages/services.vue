<script setup lang="ts">

</script>

<template>
  <FadeInContainer :class="$style.services_container">
    <SectionTitle
      title="services"
    />
    <div :class="$style.services_bg">
      <div :class="$style.services_contents">
        コンテンツ部分です。
      </div>
    </div>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.services_container {
  padding-inline: var(--sp-larger);
  margin-top    : calc(var(--sp-large) * 8);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

.services_bg {
  inline-size     : calc(100% + var(--sp-larger) * 2);  // paddingの分だけ拡張
  background-color: var(--light-gray);
  margin-inline   : calc(var(--sp-larger) * -1);        // 左右のpadding分だけマイナス
  padding-block   : calc(var(--sp-larger) * 1) ;
}

.services_contents {
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