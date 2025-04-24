<script lang="ts" setup>
const props = defineProps<{
  backgroundImage?: string
  backgroundColor?: string
}>()

</script>

<template>
  <div 
    :class="$style.section_container"
    :style="{
  ...(backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    : {}),
  ...(backgroundColor ? { backgroundColor } : {})
}"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_container {
  padding-inline : var(--sp-larger);

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-large);
  }
}
</style>