<script lang="ts" setup>

</script>

<template>
  <SectionContainer :class="$style.contact_container">
    <div :class="$style.title_area">
      <SectionTitle title="contact"/>
      <div :class="$style.lead">
        ご質問やお仕事のご依頼、お気軽にお問い合わせください。
      </div>
    </div>
    <BaseButton bgColor="var(--yellow)"/>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.contact_container {
  inline-size        : 100%;
  background-image   : url('~/assets/images/contact_image.png');
  background-size    : cover;
  background-position: center;
  background-repeat  : no-repeat;
  display            : flex;
  flex-direction     : row;
  align-items        : center;
  justify-content    : space-between;
  padding-block      : calc(var(--sp-larger) * 2.5);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
} 

.lead {
  font-size: var(--fs-larger);
  color    : var(--white);
}

.title_area {
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-large);

  @include mediaScreen('mobile') {
    gap             : var(--sp-medium);
    margin-block-end: calc(var(--sp-larger) * 1.2);
  }
}
</style>