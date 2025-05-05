<script setup lang="ts">

</script>

<template>
  <FadeInContainer>
    <SectionContainer :class="$style.thanks_container">
      <div :class="$style.thanks_contents">
        お問い合わせありがとうございます。<br />
        ご入力いただきました内容を確認の上、<br />
        追ってご連絡させていただきます。<br />
        しばらくお待ちください。<br />
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

.thanks_contents {
  inline-size    : 100%;
  max-inline-size: var( --contents-max-width);
  border-radius  : 10px;
  border         : 2px solid var(--black, #212121);
  background     : var(--white, #FFF);
  padding        : var(--sp-medium);
  margin-inline  : auto;
}
</style>