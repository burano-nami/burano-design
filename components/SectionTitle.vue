<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const imagePath = computed(() => new URL(`/assets/images/section_title/${props.title}.svg`, import.meta.url).href)
</script>

<template>
  <div :class="$style.section_title">
    <h2>
      <img :src="imagePath" alt="section title" />
    </h2>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_title {
  inline-size: 100%;

  > img {
    inline-size: 100%;
  }
}
</style>