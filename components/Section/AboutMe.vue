<script lang="ts" setup>


</script>

<template>
  <SectionContainer backgroundImage="/bg/dot.background.png">
    <ContentsContainer :class="$style.about_container">
      <div :class="$style.title_area">
        <SectionTitle title="aboutme"/>
        <div :class="$style.lead">
          WEBデザイナーとしてのキャリアをスタートして2年目。<br :class="$style.mobile"/>
          毎日新しいことに挑戦しながら、心を込めたデザインを追求しています。
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
  /* background-image: url('~/assets/images/dot.background.png');
  background-size : cover; */
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