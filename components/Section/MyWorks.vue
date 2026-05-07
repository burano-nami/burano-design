<script lang="ts" setup>
import BlogIndex from '~/components/BlogIndex.vue'

const maxItems = ref(3) // デフォルトはPC用

onMounted(() => {
  const mq = window.matchMedia('(max-width: 739px)') // ← スマホ判定
  const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
    maxItems.value = e.matches ? 3 : 3
  }

  handleChange(mq) // 初期化時にも一度実行
  mq.addEventListener('change', handleChange)
  onUnmounted(() => mq.removeEventListener('change', handleChange))
})
</script>

<template>
  <SectionContainer>
    <ContentsContainer :class="$style.works_container">
      <SectionTitle
        title="myworks"
      />
      <blogIndex 
        :class="$style.works_contents"
        :max="maxItems"
      />
      <BaseButton 
        bgColor="var(--pink)"
        to="/works"
      />
    </ContentsContainer>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.works_container {
  display       : flex;
  flex-direction: column;
  align-items   : center;
  margin-block-start  : calc(var(--sp-larger) * 2.5);
  margin-block-end  : calc(var(--sp-larger) * 1.5);
}

.works_contents {
  max-inline-size: var(--contents-max-width);
  inline-size     : 100%;
  margin-block    : var(--sp-larger);
}
</style>