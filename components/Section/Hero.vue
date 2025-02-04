<script setup lang="ts">

</script>

<template>
  <div :class="$style.top_container">
    <div :class="$style.image_container">
      <div :class="$style.image">
        <img src="/assets/images/top_image.png" alt="">
      </div>
    </div>
    <div :class="$style.title">
      <h1>
        <img src="/assets/images/section_title/main_title.svg" alt="burano design" />
      </h1>
      <P>小さな一歩を形にした、<br :class="$style.mobile">わたしのポートフォリオサイト</P>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.top_container {
  padding-inline    : var(--sp-larger);

  @include mediaScreen('mobile') {
    padding-inline    :0;
  }
}

.image_container {
  inline-size       : max(100%, 450px);
  block-size        : 100%;
  margin-block-start: var(--sp-larger);
  display           : flex;
  justify-content   : flex-end;
  position          : relative;

  @include mediaScreen('mobile') {
    justify-content   : center;
    margin-block-start: calc(var(--sp-larger) * 2.5);
  }
}

.image {
  inline-size    : 100%;
  max-inline-size: 970px;
  transform      : rotate(-2deg);
  z-index        : -1;

  > img {
    inline-size: 100%;
    border     : 2px solid var(--black);
  }
}

.title {
  inline-size       : 550px;
  margin-block-start: calc(var(--sp-larger) * -2);
  z-index           : 1;

  @include mediaScreen('mobile') {
    inline-size: 225px;
    margin-block-start: calc(var(--sp-larger) * 1);
  }

  > img {
    inline-size: 100%;
  }

  > p {
    margin-block-start : var(--sp-medium);
    margin-inline-start: var(--sp-medium);

    @include mediaScreen('mobile') {
      margin-inline-start: 0;
    }
  }
}

.mobile {
  display: none;

  @include mediaScreen('mobile') {
    display: inline;
  }
} 
</style>