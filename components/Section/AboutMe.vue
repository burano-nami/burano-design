<script lang="ts" setup>


</script>

<template>
  <SectionContainer 
    backgroundImage="/bg/dot.background.png"
    backgroundRepeat="repeat"
    backgroundPosition="inherit"
    backgroundSize="inherit"
  >
    <ContentsContainer :class="$style.about_container">
      <div :class="$style.title_area">
        <SectionTitle title="aboutme"/>
        <div :class="$style.lead">
          Webデザイナー・フロントエンドエンジニアとして2年目。<br :class="$style.mobile"/>
          HTML / CSS / Vue.js / Reactを用いたWeb制作を中心に学習・実装を行っています。
        </div>
      </div>
      <BaseButton 
        bgColor="var(--orange)"
        to="/about"
      />
    </ContentsContainer>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.about_container {
  display         : flex;
  flex-direction  : row;
  align-items     : center;
  justify-content : space-between;
  padding-block   : calc(var(--sp-larger) * 2.5);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.lead {
  font-size: var(--fs-larger);
}

.title_area {
  display         : flex;
  flex-direction  : column;
  gap             : var(--sp-large);
  background-color: var(--white);
  padding         : var(--sp-medium);

  @include mediaScreen('mobile') {
    gap             : var(--sp-medium);
    margin-block-end: calc(var(--sp-larger) * 1.2);
  }
}

.mobile {
  display: block;

  @include mediaScreen('mobile') {
    display: none;
  }
}
</style>