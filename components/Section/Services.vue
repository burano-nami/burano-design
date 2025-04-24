<script lang="ts" setup>

</script>

<template>
  <SectionContainer :backgroundColor="'var(--light-gray)'">
    <ContentsContainer :class="$style.services_container">
      <div :class="$style.title_area">
        <SectionTitle title="services" :class="$style.title"/>
        <div :class="$style.lead">
          ご依頼から完成までの流れや料金プランをご紹介します。<br :class="$style.mobile"/>
          わかりやすく、安心してご依頼いただけるように努めています。
        </div>
      </div>
      <BaseButton
        bgColor="var(--green)"
        to="/services"
      />
    </ContentsContainer>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.services_container {
  padding-block   : calc(var(--sp-larger) * 2.5);
  display         : flex;
  flex-direction  : row;
  align-items     : center;
  justify-content : space-between;

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.lead {
  font-size: var(--fs-larger);
}

.title_area {
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-large);
  padding       : var(--sp-medium);

  @include mediaScreen('mobile') {
    gap           : var(--sp-medium);
    margin-block-end: calc(var(--sp-larger) * 1.2);
  }
}

.title {
  @include mediaScreen('mobile') {
    margin-inline: auto;
  }
}

.mobile {
  display: block;

  @include mediaScreen('mobile') {
    display: none;
  }
}
</style>